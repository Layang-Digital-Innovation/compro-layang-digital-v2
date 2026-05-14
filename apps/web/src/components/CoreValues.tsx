export default function CoreValues() {
  const values = [
    { title: "Innovation First Mindset", desc: "We constantly seek new and better ways to solve problems." },
    { title: "Integrity & Transparency", desc: "Honesty and clear communication in everything we do." },
    { title: "Collaboration over Ego", desc: "We believe in the power of teamwork and shared success." },
    { title: "Client-Centric Focus", desc: "Your success is the ultimate measure of our own." },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto flex flex-col md:flex-row md:items-start gap-16 lg:gap-24">
        <div className="md:w-5/12 md:sticky md:top-32">
          <h2 className="font-aileron text-header3 md:text-[40px] font-bold text-[#0A2540] leading-tight">
            The foundation that shapes how we think, work, and grow
          </h2>
        </div>
        <div className="md:w-7/12 relative mt-8 md:mt-0">
          {/* Vertical line connecting nodes */}
          <div className="absolute left-[11px] top-4 bottom-12 w-[2px] bg-gray-200"></div>
          
          <div className="space-y-16">
            {values.map((val, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                 {/* Node */}
                 <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gray-100 border-4 border-white shadow flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                 </div>
                 <h3 className="font-bold text-xl md:text-2xl text-[#0A2540] mb-3">{val.title}</h3>
                 <p className="text-gray-600 text-base md:text-lg">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
