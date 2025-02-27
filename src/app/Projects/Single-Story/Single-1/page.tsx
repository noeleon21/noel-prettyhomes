
import ImageGallery from "@/components/ui/image-carosual"
import React from "react";
import HouseIcons from "@/components/ui/house-icons";
import Link from "next/link";
const data = [
  {
     imgelink:
     "https://prettyhomes.com.au/wp-content/uploads/2016/12/image1-front_Mac-847x470.jpg",
   },
   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/image2-copy.jpg",
   },

   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/image3-copy.jpg",
   },

   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/image10-copy.jpg",
   },

   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/image11-copy.jpg",
   },

 
 ];


export default function FeaturedImageGallery() {
    
  return  ( 
    <>
    <div className="md:border-brand md:border-double md:border-[25px] ">
    <ImageGallery images={data} />
    <div className="px-8 space-y-8">
        <h1 className="text-3xl font-bold">Address</h1>
  
        <HouseIcons bathCount={3} bedCount={4} carCount={1}/>
        
        <h2 className="text-2xl font-bold text-left ">Project Description</h2>
        <p className=" text-left">This family home offers a practical floor plan and a fabulous list of inclusions which is sure to impress. This great home boasts:</p>
        <ul>
        <li> – Four bedrooms with floating floors and walk-in robe and ensuite bathroom to the main as well as built-in wardrobes to all other bedrooms </li> 
        <li> – Lounge room and media room to keep the whole family entertained </li> 
        <li> – Sleek modern kitchen with gas cooktop, stone benchtops, overhead cupboards, range hood, walk-in pantry, breakfast bar, double sink, microwave shelf and pot drawers </li> 
        <li> – Huge tiled dining area/family room off the open kitchen </li> 
        <li> – Study nook with built-in desk </li> 
        <li> – Beautiful modern bathroom with two sinks and a free-standing bath </li> 
        <li> – Powder room providing the third toilet </li> 
        <li> – Internal laundry with a big bench </li> 
        <li> – Double garage with remote-controlled door and internal access </li> 
        <li> – Pergola outback with sink – great for entertaining </li> 
        <li> – Private courtyard </li> 

        </ul>
        <div className="flex justify-between mt-6 pb-6">
    <Link href="/" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-gray-700 transition">
        Back to Home
      </button>
    </Link>

    <Link href="/Projects/Single-Story/Single-2" className="inline-block">
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
