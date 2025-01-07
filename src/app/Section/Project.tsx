
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// export default function Project() {
//   const Family_Home_Images = [
    
//     "/pexels-binyaminmellish-1396122.jpg",
    

//   ]

//   const single_story_Images = [
//     "/pretty-singlestory.jpg",
//     "/pretty-single-story2.jpg",
//     "/pretty-single-story-3.jpg"


//   ]
//   return (
//     <div>
//     <h1 className="text-center text-5xl italic font-bold mb-8 "> PROJECTS </h1>
//     <Tabs defaultValue="account" className="w-full">
//       <TabsList className="grid w-full grid-cols-2">
//         <TabsTrigger value="Family Home">Family Home </TabsTrigger>
//         <TabsTrigger value="Single Story"> Single Storey</TabsTrigger>
//       </TabsList>
//       <TabsContent value="Family Home">
//         <div className= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 ">
//         { Family_Home_Images.map((image, index) => (
//               <img
//               src={image}
//               alt={`Family home ${index + 1}`}
//               className="w-full h-auto rounded-md shadow-md"
//             />
//           ))}
//           </div>
//       </TabsContent>
//       <TabsContent value="Single Story">
//       <div className= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 ">
      
//             { single_story_Images.map((image, index) => (
//               <img
//               src={image}
//               alt={`Single Story ${index + 1}`}
//               className="w-full h-auto rounded-md shadow-md"
//             />
//           ))}
       
//         </div>
       
//       </TabsContent>
//     </Tabs>
//     </div>
//   )
// }


export default function Project() {
  const Family_Home_Images = [
    { src: "/pexels-binyaminmellish-1396122.jpg", link: "/family-home-1" },
  ];

  const single_story_Images = [
    { src: "/pretty-singlestory.jpg", link: "/single-story-1" },
    { src: "/pretty-single-story2.jpg", link: "/single-story-2" },
    { src: "/pretty-single-story-3.jpg", link: "/single-story-3" },
  ];

  return (
    <div>
      <h1 className="text-center text-5xl italic font-bold mb-8"> PROJECTS </h1>
      <Tabs defaultValue="account" className="w-full">
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





















// import { Button } from "@/components/ui/button";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";

// export default function Project() {
//   return (
//     <div>
//       <h1 className="text-center text-5xl italic font-bold mb-8">PROJECTS</h1>
//       <Tabs defaultValue="account" className="w-full">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="Family Home">Family Home</TabsTrigger>
//           <TabsTrigger value="Single Story">Single Storey</TabsTrigger>
//         </TabsList>
//         <TabsContent value="Family Home">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4">
//             {["Family Home 1", "Family Home2", "Family Home 3"].map(
//               (title, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center justify-center space-y-2"
//                 >
//                   <img
//                     src={`/pexels-binyaminmellish-1396122.jpg`}
//                     alt={title}
//                     className="w-full h-auto rounded-md shadow-md"
//                   />
//                   <Button asChild>
//                     <a href={`/projects/family-home-${index + 1}`}>
//                       View Details
//                     </a>
//                   </Button>
//                 </div>
//               )
//             )}
//           </div>
//         </TabsContent>
//         <TabsContent value="Single Story">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4">
//             {["Single Story 1", "Single Story 2", "Single Story 3"].map(
//               (title, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center justify-center space-y-2"
//                 >
//                   <img
//                     src={`/pretty-single-story-${index + 1}.jpg`}
//                     alt={title}
//                     className="w-full h-auto rounded-md shadow-md"
//                   />
//                   <Button asChild>
//                     <a href={`/projects/single-story-${index + 1}`}>
//                       View Details
//                     </a>
//                   </Button>
//                 </div>
//               )
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }
