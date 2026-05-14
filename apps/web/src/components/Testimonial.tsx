import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

export default function Testimonial() {
  return (
          <div>
        <div className="container px-5 md:px-10 lg:px-16 mx-auto py-14">      
          {/* <div className="overflow-x-auto mt-12">
            <div className="w-[2000px] grid grid-cols-3 gap-14">
              <div className="border border-slate-300 bg-white rounded-md p-8">
                <h3 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis aut odit vero hic autem ullam labore architecto quis alias!</h3>
                <div className="flex gap-4 items-center mt-20">
                  <img src="https://placehold.co/400" className="w-16 aspect-square rounded-full" alt="" />
                  <div>
                    <h3 className="text-body font-aileron font-semibold">John Doe</h3>
                    <p className="text-label1">Executive Officer</p>
                  </div>
                </div>
              </div>
              <div className="border border-slate-300 bg-white rounded-md p-8">
                <h3 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis aut odit vero hic autem ullam labore architecto quis alias!</h3>
                <div className="flex gap-4 items-center mt-20">
                  <img src="https://placehold.co/400" className="w-16 aspect-square rounded-full" alt="" />
                  <div>
                    <h3 className="text-body font-aileron font-semibold">John Doe</h3>
                    <p className="text-label1">Executive Officer</p>
                  </div>
                </div>
              </div>
              <div className="border border-slate-300 bg-white rounded-md p-8">
                <h3 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis aut odit vero hic autem ullam labore architecto quis alias!</h3>
                <div className="flex gap-4 items-center mt-20">
                  <img src="https://placehold.co/400" className="w-16 aspect-square rounded-full" alt="" />
                  <div>
                    <h3 className="text-body font-aileron font-semibold">John Doe</h3>
                    <p className="text-label1">Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
         <Carousel
      opts={{
        align: "start",
      }}
      className="w-full flex flex-col"
    >
        <div className='flex justify-between items-center'>
             <div className="">
            <h1 className="text-header3 font-aileron font-bold">Client Experiences</h1>
            <p>Real feedback from businesses we’ve helped grow through digital innovation</p>
          </div>
        <div className='flex gap-2 self-end'>
      <CarouselPrevious />
      <CarouselNext />
        </div>
        </div>
        
    
      <CarouselContent className='mt-4'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
             <div className="border border-slate-300 bg-white rounded-md p-8">
                <h3 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis aut odit vero hic autem ullam labore architecto quis alias!</h3>
                <div className="flex gap-4 items-center mt-20">
                  <img src="https://placehold.co/400" className="w-16 aspect-square rounded-full" alt="" />
                  <div>
                    <h3 className="text-body font-aileron font-semibold">John Doe</h3>
                    <p className="text-label1">Executive Officer</p>
                  </div>
                </div>
              </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
    </Carousel>
        </div>
      </div>
  )
}
