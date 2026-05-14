import React from "react";

type PerspectiveTextProps = {
  label: string;
};

export default function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className="group relative w-full h-full flex gap-4 items-center justify-center perspective text-white font-bold ">
      {/* Front Text */}
      <p className="transition-all duration-700 ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover:translate-y-[-100%] group-hover:opacity-0">
        {label}
      </p>

      {/* Back Text */}
      <p className="absolute bottom-0 left-0 transition-all duration-700 ease-[cubic-bezier(0.075,0.82,0.165,1)] opacity-0 group-hover:opacity-100 rotate-x-90 group-hover:rotate-x-0 origin-bottom">
        {label}
      </p>
      
    </div>
  );
}
