import Button from "./Button";

export default function AboutHero() {
  return (
    <section>
      <div className="container px-5 md:px-10 lg:px-16 mt-32 mb-20 mx-auto flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="font-aileron text-header3 md:text-header2 lg:text-header1 font-black text-[#0A2540] max-w-4xl leading-tight">
          Empowering Your Business with Innovation
        </h1>
        <h2 className="text-sm lg:text-sub-title2 max-w-4xl text-gray-700">
          We empower businesses by delivering innovative, reliable, and scalable digital solutions tailored to drive growth and long-term success.
        </h2>
        <div className="pt-4">
          <a href="#teams">
            <Button>Discover Our Works</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
