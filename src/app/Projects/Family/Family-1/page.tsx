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
   

      <ImageGallery images={data} />
      <div className="px-8 space-y-8">
        <h1 className="text-3xl font-bold">Address</h1>

        <HouseIcons bathCount={3} bedCount={4} carCount={1} />

        <h2 className="text-2xl font-bold text-left">Project Description</h2>
        <p className="text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
    <div className="flex justify-between mt-6">
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
    </>
  );
}
