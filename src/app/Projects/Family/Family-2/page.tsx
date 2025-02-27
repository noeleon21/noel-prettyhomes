

import React from "react";
import ImageGallery from "@/components/ui/image-carosual"
import HouseIcons from "@/components/ui/house-icons";
import Link from "next/link";
const data = [
  {
     imgelink:
     "https://prettyhomes.com.au/wp-content/uploads/2016/12/IMG-20200505-WA0009-847x470.jpg",
   },
   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2020/09/20190617_153908-1536x864.jpg",
   },

   {
     imgelink:
       "https://prettyhomes.com.au/wp-content/uploads/2020/09/20190415_122235-1024x576.jpg",
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
        <p className=" text-left">Architecturally designed family residence showcasing luxury and high-end inclusions. Built on the high side of the street this home boasts an impressive street appeal and presence whilst offering a peaceful outlook. From the moment you enter the home, you will truly appreciate the high-end fit-out and well thought out floor plan offering separation of accommodation and plentiful living spaces to ensure that everyone in the family has their needs met.</p>
        <ul>
        This magnificent home has the following list of features and inclusions to impress you:
        <li> – Expansive formal lounge and a formal dining room upon entry drawing in an abundance of natural light </li>
        <li> – Upstairs rumpus which leads to a balcony with street views </li>
        <li> – Downstairs study or versatile home office </li>
        <li> – The luxurious stylish kitchen is at the heart of the home and will delight the chef of the family. It features 60mm thick stone benches with waterfall edges and breakfast bar, stainless steel appliances with gas cooking, rangehood, oven and dishwasher plus plentiful storage options. It also features a great sized butler’s pantry </li>
        <li> – Expansive open plan family and dining room flowing from the central living areas onto the undercover alfresco area with outdoor kitchen and ceiling fan </li>
        <li> – The master suite is palatial in nature and has its very own ensuite and walk-in robe </li>
        <li> – The other three upstairs bedrooms are more than generous in proportion and are fitted with built-in robes </li>
        <li> – The glistening main bathroom services these bedrooms featuring a separate bath and shower </li>
        <li> – Internal laundry, double automatic garage with internal access, ducted air conditioning, alarm system and security cameras complete this stunning home. </li>


        </ul>
        <div className="flex justify-between mt-6 pb-6">
    <Link href="/" className="inline-block">
      <button className="px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-gray-700 transition">
        Back to Home
      </button>
    </Link>

    <Link href="/Projects/Family/Family-3" className="inline-block">
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
