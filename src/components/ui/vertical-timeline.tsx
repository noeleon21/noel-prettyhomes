"use client"
import { useState } from "react";
import dotsInfo from "@/app/Constants/timeline-info.json";

type Dot = {
  title: string;
  description: string;
};

const dots: Dot[] = dotsInfo as Dot[];

export default function About() {
  const [selectedDot, setSelectedDot] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-center text-center py-10">
      {/* Dots and Description */}
      <div className="w-full flex flex-col items-center space-y-8 relative z-10">
        {dots.map((info, index) => (
          <div key={index} className="relative flex flex-col items-center">
                <h3 className="text-3xl font-bold border-4 border-double border-orange-500  ">{info.title}</h3>
                <p className="text-gray-600 mt-6 mb-6">{info.description}</p>
              </div>
            // )}
          // </div>
        ))}
      </div>
    </div>
  );
}
