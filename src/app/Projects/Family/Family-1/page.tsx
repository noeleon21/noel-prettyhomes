import React from "react";
import Link from "next/link";
import ImageGallery from "@/components/ui/image-carosual";
import HouseIcons from "@/components/ui/house-icons";

const data = [
    {
    imgelink: "/Family-1.jpg",
  },
  {
    imgelink: "/Family-1-1.JPG",
  },
  {
    imgelink: "/Family-1-1.JPG",
  },
  {
    imgelink: "/Family-1-2.JPG",
  },
  {
    imgelink: "/Family-1-3.JPG",
  },
  {
    imgelink: "/Family-1-4.JPG",
  },
  {
    imgelink: "/Family-1-5.JPG",
  },
  {
    imgelink: "/Family-1-6.JPG",
  },
  {
    imgelink: "/Family-1-7.JPG",
  },
  {
    imgelink: "/Family-1-8.JPG",
  },
  {
    imgelink: "/Family-1-9.JPG",
  },
  {
    imgelink: "/Family-1-10.JPG",
  },
  {
    imgelink: "/Family-1-11.JPG",
  },
  {
    imgelink: "/Family-1-12.JPG",
  },
  {
    imgelink: "/Family-1-13.JPG",
  },
  {
    imgelink: "/Family-1-14.JPG",
  },
  {
    imgelink: "/Family-1-15.JPG",
  },
  
  
];

export default function FeaturedImageGallery() {
  return (
    <>
   
    <div className="md:border-brand-darkblue md:border-double md:border-[25px] ">
      <ImageGallery images={data} />
      <div className="px-8 space-y-8">
       

        <HouseIcons bathCount={3} bedCount={4} carCount={1} />

        <h2 className="text-2xl font-bold text-left">Project Description</h2>
        <p className="text-left">
            A standout property of architectural design, this extraordinary new home is cleverly crafted to connect with its natural settings.
         </p>
          <ul>
           <li> – Full brick lower level construction, suspended concrete slab </li>
           <li> – Panoramic bush vistas create an inspirational atmosphere </li>
           <li> – Chefs’ gas kitchen, integrated fridge and butlers’ kitchen </li>
           <li> – Heavenly bedrooms, walk-in robes plus a custom study nook </li>
           <li> – Gorgeous bathrooms and powder room offering warm earthy tones </li>
           <li> – Automatic garage and smartphone controlled air conditioning </li>
          </ul>
        
    <div className="flex justify-between mt-6 pb-6">
      <a href="/" className="inline-block">
  <button className="px-6 py-3 bg-brand-darkblue  text-white font-bold rounded-lg hover:bg-gray-700 transition">
    Back to Home
  </button>
</a>

    <Link href="/Projects/Family/Family-2" className="inline-block">
      <button className="px-6 py-3 bg-brand-darkblue text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Next
      </button>
    </Link>
  </div>
      
    </div>
  </div>
    </>
  );
}
