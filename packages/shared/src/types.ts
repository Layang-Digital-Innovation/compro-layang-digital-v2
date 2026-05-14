// ─── Strapi Response Wrappers ─────────────────────────────────

export type StrapiMedia = {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
};

// ─── Blog Types ───────────────────────────────────────────────

export type BlogSection = {
  id?: number;
  sectionId: string;
  heading: string;
  content: string;
};

export type BlogArticle = {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: StrapiMedia | null;
  sections: BlogSection[];
  publishedAt: string | null;
};

export type BlogListItem = Omit<BlogArticle, "sections">;
