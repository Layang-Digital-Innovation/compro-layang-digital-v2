
import Button from "./Button";

function Hero() {
  return (
    <section>
      <div className="container gap-12 px-5 md:px-10 lg:px-16 mt-20 py-18 mx-auto md:flex md:justify-between">
        <div className="space-y-4 my-auto">
          <h1 className="font-aileron text-header3 text-center md:text-start md:text-header2 lg:text-header1 font-black text-[#0A2540]">
            Empowering Your Business with Innovation
          </h1>
          <h2 className="text-sm lg:text-sub-title2 text-center md:text-start">
            {" "}
            We empower businesses by delivering innovative, reliable, and
            scalable digital solutions tailored to drive growth and long-term
            success.
          </h2>
          <div className="mx-auto flex justify-center items-center md:block">
            <a href="#project">
              <Button>Discover Our Works</Button>
            </a>
            
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-10 md:my-0">
          <img src="/assets/Online world-pana.svg" className="w-full" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
