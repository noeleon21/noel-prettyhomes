
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
    <ImageGallery images={data} />
    <div className="px-8 space-y-8">
        <h1 className="text-3xl font-bold">Address</h1>
  
        <HouseIcons bathCount={3} bedCount={4} carCount={1}/>
        
        <h2 className="text-2xl font-bold text-left ">Project Description</h2>
        <p className=" text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="flex justify-between mt-6">
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
    </>
  )
 
}
