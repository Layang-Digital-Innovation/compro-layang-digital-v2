import React from "react";
import Button from "./Button";

const portfolio1 = "/assets/Portfolio 1 - Timelesstype.png"
const portfolio2 = "/assets/Portfolio 2 - LMS Univesitas BTH.png"
const portfolio3 = "/assets/Portfolio 3 - Functional Prehab.png"
const portfolio4 = "/assets/Portfolio 4 - Breaker Creative.png"
const portfolio5 = "/assets/Portfolio 5 - Aplikasi Lifeline.png"
const portfolio6 = "/assets/Portfolio 6 - Isuzu Dealer Tasikmalaya.png"

export default function Projects() {
  const project = [
    {
      title: "Timeless Type",
      img: portfolio1,
      description: "Digital branding and modern typography portfolio website.",
    },
    {
      title: "LMS Universitas BTH",
      img: portfolio2,
      description: "Learning management system for university scale.",
    },
    {
      title: "Functional Prehab",
      img: portfolio3,
      description:
        "A digital platform for physical therapy and prehabilitation.",
    },
    {
      title: "Breaker Creative",
      img: portfolio4,
      description: "Creative agency site with a focus on motion and visuals.",
    },
    {
      title: "Aplikasi Lifeline",
      img: portfolio5,
      description: "Emergency contact and life-saving information app.",
    },
    {
      title: "Isuzu Dealer Tasikmalaya",
      img: portfolio6,
      description: "Dealer showcase and booking system for Isuzu products.",
    },
  ];

  return (
    <section id="project" className="bg-[#FDFDFD]">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto py-14">
        <h1 className="text-center text-header3 font-aileron font-semibold">
          Project That Matter
        </h1>
        <p className="text-center">
          Explore how we've helped our clients solve real-world problems through
          design and technology
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
          {project.map((item, index) => (
            <div
              key={index}
              className="bg-white group relative p-2 drop-shadow-md rounded-lg"
            >
              <div className="h-[200px] bg-[#F4F8FB] overflow-hidden relative rounded-lg">
                <img
                  src={item.img}
                  className="absolute -right-12 top-12 rounded-lg shadow-2xl group-hover:-rotate-2 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:scale-[1.08] transition"
                  alt={item.title}
                />
              </div>

              <div className="py-6 px-4">
                <h1 className="py-2 text-sub-title1 font-bold font-aileron">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button>See All Portfolios</Button>
        </div>
      </div>
    </section>
  );
}
