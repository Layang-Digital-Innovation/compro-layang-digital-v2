export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-aileron text-header3 font-bold text-[#0A2540]">Why Client Choose Us</h2>
        </div>
        
        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-200 rounded-3xl p-8 col-span-1 border border-gray-300 shadow-sm flex flex-col justify-end">
             <h3 className="font-bold text-xl text-[#0A2540] mb-2">Expertise</h3>
             <p className="text-gray-600 text-sm">Deep industry knowledge and technical prowess.</p>
          </div>
          {/* Card 2 */}
           <div className="bg-gray-200 rounded-3xl p-8 col-span-1 border border-gray-300 shadow-sm flex flex-col justify-end">
             <h3 className="font-bold text-xl text-[#0A2540] mb-2">Innovation</h3>
             <p className="text-gray-600 text-sm">Cutting-edge solutions for complex challenges.</p>
          </div>
          {/* Vertical Large Card */}
          <div className="bg-gray-200 rounded-3xl p-8 col-span-1 md:row-span-2 border border-gray-300 shadow-sm flex flex-col justify-end">
             <div className="flex-1 w-full flex items-center justify-center pb-8 overflow-hidden rounded-xl">
               <img src="/assets/reliability_illustration_1778747744432.png" alt="Reliability Illustration" className="w-full h-full object-cover" />
             </div>
             <h3 className="font-bold text-xl text-[#0A2540] mb-2">Reliability</h3>
             <p className="text-gray-600 text-sm">Consistent delivery and dedicated support when you need it most.</p>
          </div>
          {/* Horizontal Large Card */}
           <div className="bg-gray-200 rounded-3xl p-8 col-span-1 md:col-span-2 border border-gray-300 shadow-sm flex flex-col justify-end">
             <h3 className="font-bold text-xl text-[#0A2540] mb-2">Result-Oriented</h3>
             <p className="text-gray-600 text-sm max-w-md">We focus on delivering measurable business impact and ROI for all of our clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
