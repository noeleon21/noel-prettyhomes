
import React from "react";
import Horriztonal_Timeline from "@/components/ui/horizontal-timeline"
import Vertical_timeline from "@/components/ui/vertical-timeline"
const ContentSection = () => (
  <div>
  <div className="w-full  mt-8 text-center">
    <h2 className="underline underline-offset-8 text-6xl italic font-bold ">
      About Us
    </h2>
    {/* <p className="text-2xl text-black">
      Pretty Homes is a Sydney-based custom builder whose foundation is laid by
      a bunch of professionals in the residential and commercial building
      industry. At Pretty Homes, we value honesty, integrity, and continuous
      improvement. Pretty Homes offers an extensive range of luxury, modern
      single-story and double-story homes. The team at Pretty Homes continually
      strives for excellence with every project and is dedicated to maintaining
      a reputation as a quality custom home builder.
    </p> */}
  </div>

{/* <div className="w-full max-w-3xl p-8 text-center">
<h2 className="underline underline-offset-8 text-6xl italic font-bold mb-8">
Our Philosophy
</h2>
<p className="text-2xl text-black">
We believe that a building becomes a home when it tells the story of its occupants. We commit to understand your requirements and be open to all suggestions and feedback from you.

We will make sure that the design and building process will be an enjoyable journey. Together we can build a beautiful piece of architecture.
</p>
</div> */}
</div>
);


export default function About() {


  return (
    <div className="flex flex-col ">
      {/* <ContentSection /> */}
      <ContentSection/>
      <div>
        {/* Show horizontal timeline on large (lg) and medium (md) screens */}
        <div className="hidden md:block">
          <Horriztonal_Timeline />
        </div>
  
        {/* Show vertical timeline only on small (sm) screens */}
        <div className="block md:hidden">
          <Vertical_timeline />
        </div>
      </div>
    </div>
  );
  
}
