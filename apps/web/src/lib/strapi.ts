import type { BlogArticle, BlogListItem, Portfolio } from "@super-saturn/shared";

// ─── Config ───────────────────────────────────────────────────

const STRAPI_URL = import.meta.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN || "";

// ─── Generic Fetch ────────────────────────────────────────────

async function fetchAPI<T = unknown>(
  path: string,
  params?: Record<string, string>
): Promise<T> {
  const url = new URL(`/api${path}`, STRAPI_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }

  const res = await fetch(url.toString(), { headers });

  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// ─── Helpers: Image URL ───────────────────────────────────────

export function getStrapiMediaURL(url?: string): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// ─── Blog API ─────────────────────────────────────────────────

type StrapiListResponse<T> = {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
};

type StrapiSingleResponse<T> = {
  data: T;
  meta: {};
};

/**
 * Fetch all published blog articles (list view, tanpa sections).
 */
export async function getBlogArticles(): Promise<BlogListItem[]> {
  const response = await fetchAPI<StrapiListResponse<any>>(
    "/articles",
    {
      "populate[cover]": "true",
      "populate[category]": "true",
      "populate[author]": "true",
      "sort": "createdAt:desc",
      "pagination[pageSize]": "100",
      "filters[publishedAt][$notNull]": "true",
    }
  );

  return response.data.map((article) => ({
    id: article.id,
    documentId: article.documentId,
    slug: article.slug,
    title: article.title,
    category: article.category?.name || "Uncategorized",
    excerpt: article.description || "",
    date: article.createdAt,
    author: article.author?.name || "Admin",
    readTime: "5 min read",
    image: article.cover || null,
    publishedAt: article.publishedAt,
  }));
}

/**
 * Fetch a single blog article by slug, with sections populated.
 */
export async function getBlogBySlug(
  slug: string
): Promise<BlogArticle | null> {
  const response = await fetchAPI<StrapiListResponse<any>>(
    "/articles",
    {
      "filters[slug][$eq]": slug,
      "populate[cover]": "true",
      "populate[category]": "true",
      "populate[author]": "true",
      "populate[blocks]": "true",
    }
  );

  if (!response.data || response.data.length === 0) return null;
  const article = response.data[0];

  return {
    id: article.id,
    documentId: article.documentId,
    slug: article.slug,
    title: article.title,
    category: article.category?.name || "Uncategorized",
    excerpt: article.description || "",
    date: article.createdAt,
    author: article.author?.name || "Admin",
    readTime: "5 min read",
    image: article.cover || null,
    sections: article.blocks?.map((block: any, index: number) => {
      if (block.__component === "blog.section") {
        return {
          id: block.id,
          sectionId: block.sectionId || `section-${index}`,
          heading: block.heading,
          content: block.content,
        };
      }
      // Fallback for other block types (like shared.rich-text)
      return {
        id: block.id,
        sectionId: `block-${index}`,
        heading: block.title || `Part ${index + 1}`,
        content: block.body || "Content block",
      };
    }) || [],
    publishedAt: article.publishedAt,
  };
}

/**
 * Get all slugs for static path generation.
 */
export async function getAllArticleSlugs(): Promise<string[]> {
  const response = await fetchAPI<StrapiListResponse<{ slug: string }>>(
    "/articles",
    {
      "fields[0]": "slug",
      "pagination[pageSize]": "100",
      "filters[publishedAt][$notNull]": "true",
    }
  );

  return response.data.map((a) => a.slug);
}

// ─── Portfolio API ────────────────────────────────────────────

/**
 * Fetch featured portfolios.
 */
export async function getFeaturedPortfolios(): Promise<Portfolio[]> {
  const response = await fetchAPI<StrapiListResponse<any>>(
    "/portfolios",
    {
      "populate[image]": "true",
      "sort": "createdAt:desc",
      "pagination[pageSize]": "5",
      "filters[publishedAt][$notNull]": "true",
    }
  );

  return response.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    link: item.link || undefined,
    image: item.image || null,
    publishedAt: item.publishedAt,
  }));
}

// ─── Contact API ──────────────────────────────────────────────

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  brief: string;
};

/**
 * Submit contact form data to Strapi.
 */
export async function submitContactForm(data: ContactFormData): Promise<boolean> {
  const url = new URL("/api/contacts", STRAPI_URL);
  
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const res = await fetch(url.toString(), {
      method: "POST",
      headers,
      body: JSON.stringify({ data }),
    });

    if (!res.ok) {
      console.error(`Strapi API error: ${res.status} ${res.statusText}`);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return false;
  }
}
