
import React from "react";
import ImageGallery from "@/components/ui/image-carosual"
import HouseIcons from "@/components/ui/house-icons";
import Link from "next/link";
const data = [
  {
     imgelink:
     "/Single-3-1.jpg",
   },
   {
     imgelink:
       "/Single-3-2.jpg",
   },

   {
     imgelink:
       "/Single-3-3.jpg",
   },
   {
     imgelink:
       "/Single-3-4.jpg",
   },
   {
     imgelink:
       "/Single-3-5.jpg",
   },
   {
     imgelink:
       "/Single-3-6.jpg"
   },
   {
     imgelink:
       "/Single-3-7.jpg"
   },
   {
     imgelink:
       "/Single-3-8.jpg"
   },
 
 ];


export default function FeaturedImageGallery() {
  return  ( 
    <>
      <div className="md:border-brand-darkblue md:border-double md:border-[25px] ">
  <ImageGallery images={data} />
  <div className="px-8 space-y-8">
  
    <HouseIcons bathCount={2} bedCount={4} carCount={1}/>
    <h2 className="text-2xl font-bold text-left ">Project Description</h2>
    <p className=" text-left">With 4 bedrooms, 2 bathrooms, double car garage, study, 3 living areas and alfresco outdoor entertaining:</p>
    <ul>
    <li>  – 4 over-sized bedrooms, with the convenience of a walk-in wardrobe and ensuite to the main and built-in wardrobes to the other rooms. </li>
    <li>  – A spacious formal lounge room, with loads of natural light. </li>
    <li>  – A large open-plan family and dining area flowing onto the kitchen, complemented by quality designer tiles throughout. </li>
    <li>  – Media room to the rear of the home, providing the perfect space to have a movie night or keep the kids occupied. </li>
    <li>  – The modern kitchen forms the heart of the home, featuring an island bench, 40mm black galaxy ceaserstone benchtops, 900mm stainless steel SMEG oven and cooktop, walk-in pantry and a dishwasher. </li>
    <li>  – Butlers kitchen, with its own cooktop, range hood and sink </li>
    <li>  – Beautiful bathroom with floor to ceiling tiles, double sink vanity and a feature bath.</li>
    <li>  – High ceilings throughout, bulkheads and decorative cornices adding to the character of the home.</li>
    <li>  – A double lock-up garage with remote control doors and internal access.</li>
    <li>  – Large tiled alfresco area, perfect for entertaining family and friends.</li>
    <li>  – Low maintenance yards, with plenty of room for the kids to run around and play.</li>
    <li>  – An internal laundry which has been fitted out.</li>
    <li>  – A separate study nook for your home office.</li>
    <li>  – The comfort of ducted reverse-cycle air-conditioning throughout.</li>
    <li>  – Powder room, providing the extra toilet for the growing family.</li>
    </ul>
    <div className="flex justify-between mt-6 pb-6">
           <Link href="/Projects/Single-Story/Single-2" className="inline-block">
      <button className="px-6 py-3 bg-brand-darkblue text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Back
      </button>
      </Link>
     <a href="/" className="inline-block">
  <button className="px-6 py-3 bg-brand-darkblue text-white font-bold rounded-lg hover:bg-gray-700 transition">
    Back to Home
  </button>
</a>
{/* 
    <Link href="/Projects/Single-Story/Single-2" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Next
      </button>
    </Link> */}
    
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
