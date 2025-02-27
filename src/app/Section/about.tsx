
import React from "react";
import Horriztonal_Timeline from "@/components/ui/horizontal-timeline"
import Vertical_timeline from "@/components/ui/vertical-timeline"


export default function About() {


  return (
    <div className="flex flex-col  ">
      {/* <ContentSection /> */}
      <div className="w-full  mt-8  text-center">
      <h2 className="relative inline-block text-5xl font-brand-darkblue font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-1/3 after:bg-current ">
      ABOUT US
      </h2>
        </div>
      <div>
        {/* Show horizontal timeline on large (lg) and medium (md) screens */}
        <div className="hidden md:block">
          <Horriztonal_Timeline />
        </div>
  
        {/* Show vertical timeline only on small (sm) screens */}
        <div className="block md:hidden flex items-center mb-8 mt-8">
          <Vertical_timeline />
        </div>
      </div>
    </div>
  );
  
}
