import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className? : string | undefined;
};

function Button({children, className} : ButtonProps) {
  return (
             <button className={`group hover:cursor-pointer flex items-center justify-between px-4 gap-3 py-2 bg-[#068D9D] text-white hover:bg-[#0A2540] transition-all duration-150 rounded-md font-bold font-aileron text-lg/tight ${className}`}>
            {children}
            <svg className="" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="group-hover:translate-0 -translate-x-[3px] transition-all duration-150" d="M8 15L14 8.5L8 2" stroke="currentColor" stroke-width="3" />
    <line className="opacity-0 group-hover:opacity-100 transition-all duration-150" x1="13" y1="8.5" y2="8.5" stroke="currentColor" stroke-width="3" />
  </svg>
          </button>
  )
}

export default Button