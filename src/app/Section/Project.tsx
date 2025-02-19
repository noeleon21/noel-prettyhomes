
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import Link from "next/link"

export default function Project() {
  const Family_Home_Images = [
    {src: "/Family-1.jpg", link: "/Projects/Family/Family-1"},
    {src: "/Family-2.jpg", link: "/Projects/Family/Family-2"},
    {src: "/Family-3.jpg", link: "/Projects/Family/Family-3"},
  ];

  const single_story_Images = [
    { src: "/pretty-singlestory.jpg", link: "/Projects/Single-Story/Single-1" },
    { src: "/pretty-single-story2.jpg", link: "/Projects/Single-Story/Single-2" },
    { src: "/pretty-single-story-3.jpg", link: "/Projects/Single-Story/Single-3" },
  ];

  return (
    <div>
      
      <h1 className="text-center text-5xl text-black font-bold mb-8"> PROJECTS </h1>
      
      <Tabs defaultValue="Family Home" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Family Home">Family Home</TabsTrigger>
          <TabsTrigger value="Single Story">Single Storey</TabsTrigger>
        </TabsList>
        <TabsContent value="Family Home">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4">
            {Family_Home_Images.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={image.src}
                  alt={`Family home ${index + 1}`}
                  className="w-full h-auto rounded-md shadow-md"
                />
                <a href={image.link}>
                  <Button className="mt-2">View More</Button>
                </a>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Single Story">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4">
            {single_story_Images.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={image.src}
                  alt={`Single Story ${index + 1}`}
                  className="w-full h-auto rounded-md shadow-md"
                />
                <a href={image.link}>
                  <Button className="mt-2">View More</Button>
                </a>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}















