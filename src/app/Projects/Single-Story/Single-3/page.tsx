
import React from "react";
import ImageGallery from "@/components/ui/image-carosual"
import HouseIcons from "@/components/ui/house-icons";
import Link from "next/link";
const data = [
  {
     imgelink:
     "https://prettyhomes.com.au/wp-content/uploads/2016/12/Straight-46-e1600937031618-847x470.jpg",
   },
   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/1200-7.jpg",
   },

   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/1200-5.jpg",
   },
   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/46St6.jpg",
   },
   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2016/12/46St5.jpg",
   },
   {
     imgelink:
     "https://prettyhomes.com.au/wp-content/uploads/2016/12/46St4.jpg"
   },
 
 ];


export default function FeaturedImageGallery() {
  return  ( 
    <>
      <div className="md:border-brand md:border-double md:border-[25px] ">
  <ImageGallery images={data} />
  <div className="px-8 space-y-8">
  <h1 className="text-3xl font-bold">Address</h1>
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
    <div className="pb-6">
    <Link href="/" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-gray-700 transition">
        Back to Home
      </button>
    </Link>
{/* 
    <Link href="/Projects/Single-Story/Single-2" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Next
      </button>
    </Link> */}
    </div>
  </div>
  </div>
  </>
  )
 
}
