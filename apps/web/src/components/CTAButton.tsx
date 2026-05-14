import React from 'react'
import PerspectiveText from './PerspectiveText'

export default function CTAButton() {
  return (
       <a
     href="https://api.whatsapp.com/send?phone=6285182322580"
     className="group fixed bottom-10 right-10 z-50 bg-[#986FB3] px-4 py-2 rounded-lg font-aileron overflow-hidden flex items-center gap-2"
   >
   
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       className="lucide lucide-message-circle-more-icon transition-all duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110 text-white"
     >
       <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
       <path d="M8 12h.01" />
       <path d="M12 12h.01" />
       <path d="M16 12h.01" />
     </svg>
      <PerspectiveText label="Consult Now!" />
   </a>
  )
}
