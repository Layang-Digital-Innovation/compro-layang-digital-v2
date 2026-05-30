import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { getStrapiMediaURL } from "@/lib/strapi";
import type { BlogArticle, BlogSection } from "@compro-layangdigital/shared";

// ─── Types ─────────────────────────────────────────────────────

type TOCItem = {
  id: string;
  label: string;
};

// ─── TOC Sidebar ───────────────────────────────────────────────

function TableOfContents({
  items,
  activeId,
  onItemClick,
}: {
  items: TOCItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}) {
  return (
    <nav className="space-y-1">
      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">
        On this page
      </h4>
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-[#068D9D]/10 text-[#068D9D] font-semibold border-l-[3px] border-[#068D9D]"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-50 border-l-[3px] border-transparent"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

// ─── Reading Progress Bar ──────────────────────────────────────

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percent);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-gray-200 z-[9999]">
      <motion.div
        className="h-full bg-gradient-to-r from-[#068D9D] to-[#6DE5F5]"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────

type BlogDetailProps = {
  blog: BlogArticle;
};

export default function BlogDetail({ blog }: BlogDetailProps) {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [blog]);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current.get(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const imageUrl = blog.image ? getStrapiMediaURL(blog.image.url) : "";

  const tocItems: TOCItem[] = (blog.sections || []).map((s) => ({
    id: s.sectionId,
    label: s.heading,
  }));

  return (
    <>
      <ReadingProgress />

      <article className="min-h-screen bg-[#FAFBFC]">
        {/* ── Hero Banner ───────────── */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative pt-24 overflow-hidden"
        >
          <div className="relative h-[320px] md:h-[420px]">
            <img
              src={imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Meta overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container px-5 md:px-10 lg:px-16 mx-auto pb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-[#068D9D] text-white text-xs font-bold uppercase tracking-wider mb-4">
                  {blog.category}
                </span>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl mb-4">
                  {blog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#068D9D] flex items-center justify-center text-white text-xs font-bold">
                      {blog.author.charAt(0)}
                    </span>
                    {blog.author}
                  </span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span>{blog.readTime}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ── Body ─────────────────── */}
        <section className="py-12">
          <div className="container px-5 md:px-10 lg:px-16 mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sticky TOC */}
              <aside className="hidden lg:block lg:w-64 shrink-0">
                <div className="sticky top-28">
                  <TableOfContents
                    items={tocItems}
                    activeId={activeSection}
                    onItemClick={scrollTo}
                  />

                  {/* Back Link */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href="/blog"
                      className="text-sm text-gray-400 hover:text-[#068D9D] transition-colors flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Back to Blog
                    </a>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <div className="flex-1 max-w-3xl">
                {/* Excerpt */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 pb-8 border-b border-gray-200 italic">
                  {blog.excerpt}
                </p>

                {/* Sections */}
                {(blog.sections || []).map((section, idx) => (
                  <motion.div
                    key={section.sectionId}
                    id={section.sectionId}
                    ref={(el) => {
                      if (el) sectionRefs.current.set(section.sectionId, el);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-12"
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-4 flex items-center gap-3">
                      <span className="text-xs font-mono text-[#068D9D] bg-[#068D9D]/10 px-2.5 py-1 rounded-md">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </h2>
                    <div className="text-gray-600 leading-[1.85] text-base whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                ))}

                {/* Mobile TOC (bottom) */}
                <div className="lg:hidden mt-8 pt-8 border-t border-gray-200">
                  <TableOfContents
                    items={tocItems}
                    activeId={activeSection}
                    onItemClick={scrollTo}
                  />
                </div>

                {/* Share & Actions */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <a
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#068D9D] font-semibold hover:underline"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back to all articles
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">Share:</span>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: blog.title,
                            url: window.location.href,
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert("Link copied to clipboard!");
                        }
                      }}
                      className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#068D9D]/10 hover:text-[#068D9D] text-gray-500 flex items-center justify-center transition-colors cursor-pointer"
                      title="Share"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
