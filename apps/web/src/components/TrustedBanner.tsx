export default function TrustedBanner() {
  return (
    <section className="bg-gradient-to-r from-[#2B1B54] to-[#553E96] text-white">
      <div className="container px-5 md:px-10 lg:px-16 py-16 mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 w-full relative">
           {/* Placeholder for illustration */}
           <div className="bg-white/10 w-full h-[300px] rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
             <span className="text-white/70 font-medium">Illustration Placeholder</span>
           </div>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="font-aileron text-header3 md:text-header2 font-bold leading-tight">
            Trusted by Client Across Industries
          </h2>
          <p className="text-sm lg:text-base text-gray-200 opacity-90 leading-relaxed max-w-lg">
             Our solutions have helped countless businesses across diverse sectors achieve their digital goals. Join our growing list of satisfied clients and experience the Layang Digital difference.
          </p>
        </div>
      </div>
    </section>
  );
}
