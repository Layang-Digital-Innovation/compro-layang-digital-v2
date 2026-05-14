import React from 'react'
import Button from './Button'
const CTAImage = "/assets/Consulting-bro.svg"
export default function CallToAction() {
  return (
        <section className="bg-[#FDFDFD]">
            <div className="container px-5 md:px-10 lg:px-16 mx-auto py-14 flex flex-col md:flex-row items-center justify-between">
            
              <div className=" w-full md:w-[50%] leading-tight">
                <h1 className="text-header2 font-bold font-aileron">Have a Vision?</h1>
                <p className='text-header2 font-bold font-aileron'> Let’s Build It Together</p>
                <p className='py-4'>
                  Reach out and discover how we can turn your business goals into
                  digital success.
                </p>
                <a href="https://api.whatsapp.com/send?phone=6285182322580"><Button>Let's Talk</Button></a>
              </div>
                <img src={CTAImage} className='w-[400px] mt-8 md:mt-0' alt="" />
            </div>
          </section>
  )
}
