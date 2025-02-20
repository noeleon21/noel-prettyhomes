
"use client";
import { useState } from "react";
import dotsInfo from "@/app/Constants/timeline-info.json";

type Dot = {
  title: string;
  description: string;
};
const dots: Dot[] = dotsInfo as Dot[];

export default function About() {
  const [selectedDot, setSelectedDot] = useState<number | null>(0); // Default to the first item

  return (
    <div className="w-full flex flex-col items-center text-center py-10">
      {/* Description Section */}
      {selectedDot !== null && (
        <div className="max-w-2xl p-6 text-center">
          <h3 className="text-3xl font-bold border-4 border-double border-brand-darkblue  ">{dots[selectedDot].title}</h3>
          <p className="text-gray-600 mt-6 mb-6">{dots[selectedDot].description}</p>
        </div>
      )}

      {/* Timeline */}
      <div className="w-full max-w-5xl relative flex items-center sm:max-w-l">
  <hr className="w-full h-2  border-t border-brand-darkblue absolute top-1/2  left-0 z-0" />


  <div className="w-full flex justify-between items-center relative z-10 ">
  {dots.map((info, index) => (
    <div key={index} className="relative flex flex-col  items-center">
     
      <button
        className={`w-6 h-6 rounded-full transition duration-200 ${
          selectedDot === index ? "bg-gray-300" : "bg-brand-darkblue"
        }`}
        onClick={() => setSelectedDot(index)}
      />
     {/* Title Below Dot */}
     
     <span className="absolute mt-8">{info.title}</span>
    
    </div>
       ))}
   </div>
    </div>
    </div>
  );
}





