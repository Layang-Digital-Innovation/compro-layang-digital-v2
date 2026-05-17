export default function HappyClient() {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto">
        <h2 className="font-aileron text-header3 font-bold text-center mb-16 text-[#0A2540]">Happy Client</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-10 justify-items-center max-w-4xl mx-auto">
          {[...Array(12)].map((_, i) => (
             <div key={i} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden border border-gray-100">
                 <img src="/assets/client_logo_1_1778747796589.png" className="w-12 sm:w-16 object-contain mix-blend-multiply" alt="Client Logo" />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
