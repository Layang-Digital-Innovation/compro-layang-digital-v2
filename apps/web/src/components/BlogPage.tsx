import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getStrapiMediaURL } from "@/lib/strapi";
import type { BlogListItem } from "@compro-layangdigital/shared";

// ─── Sub-Components ────────────────────────────────────────────

const categories = ["All", "News", "Tips", "Event", "Video"];

const CategoryPill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
      active
        ? "bg-[#068D9D] text-white shadow-md shadow-[#068D9D]/25"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

const FeaturedCard = ({ post }: { post: BlogListItem }) => (
  <motion.a
    href={`/blog/${post.slug}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative col-span-1 md:col-span-2 row-span-2 rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end cursor-pointer"
  >
    {/* BG Image */}
    <div className="absolute inset-0">
      <img
        src={post.image ? getStrapiMediaURL(post.image.url) : ""}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    </div>
    {/* Content */}
    <div className="relative z-10 p-8 md:p-10">
      <span className="inline-block px-3 py-1 rounded-full bg-[#068D9D] text-white text-xs font-bold uppercase tracking-wider mb-4">
        {post.category}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-[#6DE5F5] transition-colors">
        {post.title}
      </h2>
      <p className="text-gray-300 text-sm md:text-base max-w-xl mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-3 text-xs text-gray-400">
        <span>{post.date}</span>
        <span className="w-1 h-1 bg-gray-500 rounded-full" />
        <span>{post.readTime}</span>
      </div>
    </div>
  </motion.a>
);

const BlogCard = ({ post, index }: { post: BlogListItem; index: number }) => (
  <motion.a
    href={`/blog/${post.slug}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    viewport={{ once: true }}
    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
  >
    {/* Image */}
    <div className="h-48 overflow-hidden bg-gray-50">
      <img
        src={post.image ? getStrapiMediaURL(post.image.url) : ""}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    {/* Body */}
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#068D9D] bg-[#068D9D]/10 px-3 py-1 rounded-full">
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.readTime}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#068D9D] transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
        <span className="font-medium text-gray-600">{post.author}</span>
        <span>{post.date}</span>
      </div>
    </div>
  </motion.a>
);

// ─── Main Component ────────────────────────────────────────────

type BlogPageProps = {
  posts: BlogListItem[];
};

export default function BlogPage({ posts }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      {/* ── Hero ─────────────────── */}
      <section className="pt-36 pb-16 bg-gradient-to-b from-white to-[#FAFBFC]">
        <div className="container px-5 md:px-10 lg:px-16 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#068D9D] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Blog &amp; Insights
            </span>
            <h1 className="font-aileron text-3xl md:text-5xl font-black text-[#0A2540] max-w-3xl mx-auto leading-tight mb-5">
              Layang Digital Blog
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Stay ahead with articles about tech, product development, design,
              and startup life — straight from the people who build and grow it.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {categories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Content ─────────────── */}
      <section className="pb-24">
        <div className="container px-5 md:px-10 lg:px-16 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured + Side Cards */}
              {featured && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <FeaturedCard post={featured} />
                  {rest.slice(0, 2).map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                  ))}
                </div>
              )}

              {/* More Articles */}
              {rest.length > 2 && (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-aileron text-2xl font-bold text-[#0A2540]">
                      More Articles
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.slice(2).map((post, i) => (
                      <BlogCard key={post.id} post={post} index={i} />
                    ))}
                  </div>
                </>
              )}

              {/* Empty State */}
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg">
                    No articles found in this category yet.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
