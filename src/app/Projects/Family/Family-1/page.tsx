import React from "react";
import Link from "next/link";
import ImageGallery from "@/components/ui/image-carosual";
import HouseIcons from "@/components/ui/house-icons";

const data = [
  {
    imgelink:
      "https://prettyhomes.com.au/wp-content/uploads/2021/02/IMG_1578-847x470.jpg",
  },
  {
    imgelink:
      "https://prettyhomes.com.au/wp-content/uploads/2021/02/IMG_1588-scaled.jpg",
  },
  {
    imgelink:
      "https://prettyhomes.com.au/wp-content/uploads/2021/02/IMG_1586-scaled.jpg",
  },
  {
    imgelink:
      "https://prettyhomes.com.au/wp-content/uploads/2021/02/IMG_1594-1536x1152.jpg",
  },
  {
    imgelink:
      "https://prettyhomes.com.au/wp-content/uploads/2021/02/IMG_1595-1536x1152.jpg",
  },
  {
    imgelink:
      "https://prettyhomes.com.au/wp-content/uploads/2021/02/IMG_1596-1536x1152.jpg",
  },
];

export default function FeaturedImageGallery() {
  return (
    <>
   
    <div className="md:border-brand md:border-double md:border-[25px] ">
      <ImageGallery images={data} />
      <div className="px-8 space-y-8">
        <h1 className="text-3xl font-bold">Address</h1>

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
    <Link href="/" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-gray-700 transition">
        Back to Home
      </button>
    </Link>

    <Link href="/Projects/Family/Family-2" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Next
      </button>
    </Link>
  </div>
      
    </div>
  </div>
    </>
  );
}
