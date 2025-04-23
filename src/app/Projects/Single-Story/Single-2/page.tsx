

import ImageGallery from "@/components/ui/image-carosual"
import React from "react";
import HouseIcons from "@/components/ui/house-icons";
import Link from "next/link";
const data = [
  {
     imgelink:
     "https://prettyhomes.com.au/wp-content/uploads/2016/12/46AtFront-847x470.jpg",
   },
   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/46At.jpg",
   },

   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/46Atl2.jpg",
   },
 
 ];

export default function FeaturedImageGallery() {

  return  ( 
  <>
  <div className="md:border-brand-darkblue md:border-double md:border-[25px] ">
  <ImageGallery images={data} />
  <div className="px-8 space-y-8">
      <h1 className="text-3xl font-bold">Address</h1>

      <HouseIcons bathCount={3} bedCount={4} carCount={1}/>
      
      <h2 className="text-2xl font-bold text-left ">Project Description</h2>
      <p className=" text-left">A beautiful family home with loads of quality fittings which is sure to impress. This great home boasts:</p> 
      <ul>
       <li>– Ample living space, with a formal lounge room as you enter the home and spacious open plan family and dining area off the kitchen, complemented by tiles throughout </li> 
       <li>– Separate media room flowing from the family room, providing the perfect space to watch movies with family and friends. </li> 
       <li>– 4 generous-sized bedrooms, with an ensuite and walk-in wardrobe to the main, a walk-in wardrobe to 1 room and mirrored sliding built-in wardrobes to 2 rooms. </li> 
       <li>– The modern kitchen will impress the family chef, with 40mm caesarstone benchtops, stainless steel SMEG cooking appliances, a walk-in pantry and an island bench. </li> 
       <li>– Beautiful bathroom, featuring floor to ceiling tiles and quality fixtures and fittings </li> 
       <li>– Tiled alfresco area, perfectly combining indoor and outdoor living </li> 
       <li>– Low maintenance yard </li> 
       <li>– Study nook </li> 
       <li>– The comfort of ducted air-conditioning throughout </li> 
       <li>– A double lock-up garage, with internal access and a remote control door. </li> 
       <li>– Internal laundry </li> 
      </ul>
      <div className="flex justify-between mt-6 pb-6">
    <Link href="/" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-gray-700 transition">
        Back to Home
      </button>
    </Link>

    <Link href="/Projects/Single-Story/Single-3" className="inline-block">
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
