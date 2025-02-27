

import React from "react";
import ImageGallery from "@/components/ui/image-carosual"
import HouseIcons from "@/components/ui/house-icons";
import Link from "next/link";
const data = [
  {
     imgelink:
     "/pretty-single-story-3.jpg",
   },

  
 ];
export default function FeaturedImageGallery() {
  
  return  ( 
    <>
    <div className="md:border-brand md:border-double md:border-[25px] ">
    <ImageGallery images={data} />
    <div className="px-8 space-y-8">
        <h1 className="text-3xl font-bold">Address</h1>
  
        <HouseIcons bathCount={3} bedCount={4} carCount={2}/>
        
        <h2 className="text-2xl font-bold text-left ">Project Description</h2>
        <p className=" text-left">With 4 bedrooms, 3 bathrooms and a double garage with internal access, this single level residence with an attached granny flat is sure to keep your family together.</p>
        <ul>
          This home boasts quality fittings including:
          <li>- Caesarstone benchtop </li>
          <li>- 900mm stainless steel appliances </li>
          <li>- Reverse cycle ducted air conditioning </li>
          <li>- Ensuites to the master bed and bed 2 </li>
          <li>- Alfresco entertaining </li>
          <li>- Backyard area </li>
          <li> - Plantation shutters to front windows </li>
        </ul>
        <div className="flex justify-between mt-6 pb-6">
    <Link href="/" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-gray-700 transition">
        Back to Home
      </button>
    </Link>

    <Link href="/Projects/Single-Story/Single-1" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Next
      </button>
    </Link>
  </div>
   
    </div>
    </div>
    </>
  )

  
}
