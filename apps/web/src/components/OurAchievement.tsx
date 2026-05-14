export default function OurAchievement() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-aileron text-header3 font-bold text-[#0A2540]">Our Achievement</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((_, i) => (
             <div key={i} className="aspect-square bg-gray-200 rounded-3xl border border-gray-300 shadow-sm flex flex-col items-center justify-center p-8 text-center space-y-4">
                 <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Icon</span>
                 </div>
                 <h3 className="font-bold text-lg text-[#0A2540]">Achievement {i + 1}</h3>
                 <p className="text-gray-500 text-sm">Description of the milestone or award received by the company.</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
