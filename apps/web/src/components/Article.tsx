import React from "react";
import Button from "./Button";


const article1 = "/assets/Online world-cuate.svg";
const article2 = "/assets/Artificial intelligence-amico.svg";
const article3 = "/assets/teamwork high five-bro.svg";
type Article = {
  image: string;
  date: string;
  title: string;
  description: string;
  author: string;
  position: string;
};


const articles : Article[] = [
  {
    image: article1,
    date: "May 12, 2025",
    title: "Embracing Digital Transformation in Healthcare",
    description:
      "Explore how technology is revolutionizing patient care and healthcare systems.",
    author: "John Doe",
    position: "Executive Officer",
  },
  {
    image: article2,
    date: "April 28, 2025",
    title: "How AI is Redefining Business Strategies",
    description:
      "Artificial Intelligence isn't just a trend — it's reshaping industries worldwide.",
    author: "Jane Smith",
    position: "CTO",
  },
  {
    image: article3,
    date: "April 10, 2025",
    title: "Building Resilient Teams in a Hybrid World",
    description:
      "Strategies to empower and connect remote and in-office employees effectively.",
    author: "Ada Wong",
    position: "HR Director",
  },
];

const ArticleCard = ({
  image,
  title,
  description,
  date,
  author,
}: Article) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition py-4 px-6 flex flex-col">
    {/* Background image */}
   <div className="h-40 w-full mb-4 overflow-hidden flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-contain rounded-md"
      />
    </div>

    {/* Konten */}
    <div className="flex-1 flex flex-col justify-between">

      {/* Judul dan deskripsi */}
      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Info footer */}
      <div className="text-xs text-gray-500 flex justify-between">
        <span>{date}</span>
        <span>by {author}</span>
      </div>
    </div>
  </div>
);

export default function Article() {
  return (
    <section id="blog">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto py-14">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-header4">Recent Article</h1>
          <Button>See More</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
