"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const features = [
  {
    title: "Web Development",
    description: "We build responsive websites that scale with your business.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Mobile Apps",
    description: "Create beautiful apps with modern UI & native performance.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Product SaaS",
    description: "Design that delights your users and supports your goals.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "On Demand",
    description: "Design that delights your users and supports your goals.",
    image: "https://placehold.co/600x400",
  },
];

export default function WhatWeDo() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const sidebarTitleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [prevActiveIndex, setPrevActiveIndex] = useState<number | null>(null);
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });
  const [isLineVisible, setIsLineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Cari entry yang isIntersecting true
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);

        if (intersectingEntry) {
          const index = sectionRefs.current.findIndex(
            (sec) => sec === intersectingEntry.target
          );
          if (index !== activeIndex) {
            setPrevActiveIndex(activeIndex);
            setActiveIndex(index);
          }
        } else {
          // Jika tidak ada yang intersecting, set activeIndex ke null
          if (activeIndex !== null) {
            setPrevActiveIndex(activeIndex);
            setActiveIndex(null);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      // hilangkan garis dengan animasi height turun
      setIsLineVisible(false);
      return;
    }

    const currentTitle = sidebarTitleRefs.current[activeIndex];
    if (!currentTitle) return;

    const sidebarContainer = currentTitle.parentElement?.parentElement;
    if (!sidebarContainer) return;

    const containerRect = sidebarContainer.getBoundingClientRect();
    const titleRect = currentTitle.getBoundingClientRect();

    const top = titleRect.top - containerRect.top;
    const height = titleRect.height;

    setLineStyle({ top, height });

    // Kalau dari null ke activeIndex, tampilkan garis dengan animasi height naik
    if (prevActiveIndex === null) {
      setIsLineVisible(true);
    }
    // Kalau perpindahan antar index, garis tetap visible, hanya top berubah (di animate div)
  }, [activeIndex, prevActiveIndex]);

  return (
    <section>
      <div className="container px-5 py-10 md:px-10 lg:px-16 mx-auto">
        <div className="flex flex-wrap md:flex-auto justify-between">
          <div className="max-w-xl">
            <h1 className="text-3xl font-aileron font-semibold">
              What We Do ?
            </h1>
            <p className="text-gray-600 mt-2">
              From idea to execution — we craft digital solutions that drive
              growth and innovation.
            </p>
          </div>
          <Button className="self-center my-6 md:my-0">See More</Button>
        </div>

        <div className="grid md:grid-cols-[0.75fr_1fr] gap-[1rem] mt-10 relative">
          {/* Sidebar */}
          <div className="sticky top-24 h-fit self-start hidden md:block">
            <div className="relative h-full">
              {/* Gray line */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-200 z-0" />

              {/* Activeline dengan AnimatePresence untuk animasi mount/unmount */}
              <AnimatePresence initial={false}>
                {isLineVisible && (
                  <motion.div
                    key="active-line"
                    layout
                    initial={{
                      height: 0,
                      top: lineStyle.top + lineStyle.height / 2,
                    }}
                    animate={{
                      height: lineStyle.height,
                      top: lineStyle.top,
                    }}
                    exit={{
                      height: 0,
                      top: lineStyle.top + lineStyle.height / 2,
                    }}
                    transition={{
                      height: { duration: 0.4, ease: "easeInOut" },
                      top: { duration: 0.4, ease: "easeInOut" },
                    }}
                    style={{
                      transformOrigin: "center",
                    }}
                    className="absolute left-0 w-[2px] bg-[#068D9D] z-30"
                  />
                )}
              </AnimatePresence>

              {/* Sidebar items */}
              <div className="flex flex-col pt-[2rem] pb-[14rem] relative z-20">
                {features.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => void (sidebarTitleRefs.current[i] = el)}
                    className={`py-4 px-8 cursor-pointer transition-colors duration-300 ${
                      i === activeIndex
                        ? "text-[#068D9D] bg-[#eff3f8] font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    <h1>{item.title}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-24">
            {features.map((item, i) => (
              <section
                key={i}
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                className="scroll-mt-24 flex flex-col"
              >
                <div className="bg-white drop-shadow-md rounded-md px-2 py-2 border-t-4 border-t-[#5359AA]">
               
                  <div className="py-4 px-4">
                    <h1 className="font-aileron text-2xl font-semibold mt-4">
                      {item.title}
                    </h1>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                     <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
