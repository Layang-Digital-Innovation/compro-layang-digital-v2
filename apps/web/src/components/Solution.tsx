import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import type { Portfolio } from "@compro-layangdigital/shared";
import { getStrapiMediaURL } from "@/lib/strapi";

const solutions = [
  {
    title: "AI Customer Support",
    description: "Automate and enhance your UMKM customer interactions 24/7 with intelligent, natural language AI chatbots.",
    icon: "🤖",
  },
  {
    title: "Smart Inventory Management",
    description: "Predictive AI helps you manage stock levels efficiently, reducing waste and ensuring your top products are always available.",
    icon: "📦",
  },
  {
    title: "Data-Driven Marketing",
    description: "Utilize machine learning to pinpoint target audiences and optimize advertising spend for maximum ROI.",
    icon: "📈",
  },
];

export default function Solution({ portfolios = [] }: { portfolios?: Portfolio[] }) {
  return (
    <section id="solution" className="container mx-auto px-6 md:px-12 lg:px-20 py-16 bg-gray-50 rounded-3xl mt-12 mb-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-aileron font-bold text-gray-900 mb-4">
          Empowering UMKM with AI Tech
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We bring the latest advancements in Artificial Intelligence to small and medium enterprises, helping you scale faster, operate smarter, and dominate your local market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Showcase Portfolio */}
      {portfolios.length > 0 ? (
        <div className="space-y-8">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={portfolio.id || index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#068D9D] to-blue-600 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center"
            >
              <div className="p-10 md:w-1/2 text-white">
                <span className="uppercase tracking-wider text-sm font-semibold text-blue-200 mb-2 block">Featured Portfolio</span>
                <h2 className="text-3xl font-bold mb-4">{portfolio.title}</h2>
                <p className="text-blue-50 mb-6 leading-relaxed">
                  {portfolio.description}
                </p>
                {portfolio.link ? (
                  <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                    <Button className="text-[#068D9D] hover:bg-gray-100 border-none">
                      View Case Study
                    </Button>
                  </a>
                ) : (
                  <Button className="text-[#068D9D] hover:bg-gray-100 border-none">
                    View Case Study
                  </Button>
                )}
              </div>
              <div className="md:w-1/2 w-full min-h-[300px] flex relative object-cover bg-gray-900">
                  <img src={portfolio.image?.url ? getStrapiMediaURL(portfolio.image.url) : "/assets/layang_dashboard.png"} alt={portfolio.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#068D9D] to-blue-600 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center"
        >
          <div className="p-10 md:w-1/2 text-white">
            <span className="uppercase tracking-wider text-sm font-semibold text-blue-200 mb-2 block">Featured Portfolio</span>
            <h2 className="text-3xl font-bold mb-4">Layang Digital</h2>
            <p className="text-blue-50 mb-6 leading-relaxed">
              Discover how we transformed a traditional UMKM into a tech-forward business using our integrated AI solutions. Layang Digital serves as our prime example of operational excellence driven by machine learning.
            </p>
            <Button className="text-[#068D9D] hover:bg-gray-100 border-none">
              View Case Study
            </Button>
          </div>
          <div className="md:w-1/2 w-full min-h-[300px] flex relative object-cover bg-gray-900">
              <img src="/assets/layang_dashboard.png" alt="Layang Digital AI Dashboard Preview" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
