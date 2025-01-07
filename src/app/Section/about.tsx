import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ContentSection = () => (
  <div>
    <h2 className="text-6xl italic font-bold mb-8 text-center md:text-left">
      About Us
    </h2>

    <p className="text-2xl text-black text-left">
      Pretty Homes is a Sydney-based custom builder whose foundation is laid by
      a bunch of professionals in the residential and commercial building
      industry. At Pretty Homes, we value honesty, integrity, and continuous
      improvement. Pretty Homes offers an extensive range of luxury, modern
      single-story and double-story homes. The team at Pretty Homes continually
      strives for excellence with every project and is dedicated to maintaining
      a reputation as a quality custom home builder.
    </p>
  </div>
);

export default function About() {
  // Array of image URLs
  const images = [
    "pretty-single-story2.jpg",
    "pretty-singlestory.jpg",
  ];

  return (
    <div className="max-w-full max-h-full ">
        {/* Black transparent overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-16">
        {/* About Section */} 
        <div>
          <ContentSection />
        </div>

        {/* Carousel Section */}
        <div>
          <Carousel className="flex flex-col">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  className="flex-shrink-0 w-full lg:w-[50%] xl:w-full"
                  key={index}
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img
                          src={image}
                          alt={`Carousel item ${index + 1}`}
                          className="w-full h-full bg-cover "
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
