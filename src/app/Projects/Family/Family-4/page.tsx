

import React from "react";
import ImageGallery from "@/components/ui/image-carosual"
import HouseIcons from "@/components/ui/house-icons";
import Link from "next/link";
const data = [
  {
     imgelink:
     "/main_picture.jpg",

   },
  {
     imgelink:
     "/Family-4.jpg",

   },
     {
     imgelink:
     "/Family-4-1.jpg",

   },
    {
     imgelink:
     "/Family-4-2.jpeg",

   },
  
 ];
export default function FeaturedImageGallery() {
  
  return  ( 
    <>
    <div className="md:border-brand-darkblue md:border-double md:border-[25px] ">
    <ImageGallery images={data} />
    <div className="px-8 space-y-8">

  
        <HouseIcons bathCount={3} bedCount={5} carCount={2}/>
        
        <h2 className="text-2xl font-bold text-left ">Project Description</h2>
        <p className=" text-left">Architecturally Designed Luxury Residence – 5 Bedrooms with Pool</p>

 {/* Intro paragraph */}
  <p>
    Welcome to this stunning architecturally designed masterpiece, offering the perfect 
    blend of modern elegance, comfort, and functionality. Set on an elevated block, 
    this residence boasts striking street appeal with clean lines, a bold façade, 
    and meticulous attention to detail.
  </p>

  {/* Feature list */}
  <ul className="list-disc pl-6 space-y-2">
    <li>
      Soaring ceilings, expansive open-plan living spaces, and seamless indoor-outdoor flow.
    </li>
    <li>
      Five generous bedrooms, including a luxurious master suite with walk-in wardrobe 
      and designer ensuite.
    </li>
    <li>
      Gourmet kitchen with premium appliances, stone benchtops, and a butler’s pantry.
    </li>
    <li>
      Resort-style swimming pool, landscaped gardens, and alfresco entertaining zones.
    </li>
    <li>
      Additional features:
      <ul className="list-disc pl-6 space-y-1">
        <li>Spacious double garage with internal access</li>
        <li>Floor-to-ceiling windows enhancing natural light</li>
        <li>Quality finishes and fixtures throughout</li>
        <li>Stylish bathrooms with modern design</li>
        <li>Smart layout maximizing space and functionality</li>
      </ul>
    </li>
  </ul>

  {/* Closing */}
  <p>
    This home is more than just a residence – it’s a lifestyle. Designed for families 
    who love entertaining and modern living, it offers an unrivalled combination of 
    luxury, practicality, and architectural flair.
  </p>

      <div className="flex justify-between mt-6 pb-6">
          <Link href="/Projects/Family/Family-3" className="inline-block">
      <button className="px-6 py-3 bg-brand-darkblue text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Back
      </button>
    </Link>
     <a href="/" className="inline-block">
  <button className="px-6 py-3 bg-brand-darkblue text-white font-bold rounded-lg hover:bg-gray-700 transition">
    Back to Home
  </button>
</a>

    <Link href="/Projects/Single-Story/Single-1" className="inline-block">
      <button className="px-6 py-3 bg-brand-darkblue text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Next
      </button>
    </Link>
  </div>
   
    </div>
    </div>
    </>
  )

  
}
