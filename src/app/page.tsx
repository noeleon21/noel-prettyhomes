// import Image from "next/image";
// import About from "@/app/Components/Section/about";
// import Home1 from "@/app/Components/Section/home";
// import Project from "@/app/Components/Section/Project";
// import Contact from "@/app/Components/Section/contact";
// import ContactInfo from "@/app/Components/Section/contact-info";
// export default function Home() {
//   return (
//     <div >

//       <section className="">
//       <Home1/>
//       </section>
//       <section className="">
//       <About/>
//       </section>
//       <section className="">
//       <Project/>
//       </section>
//       <section className="">
//       <ContactInfo/>
//       </section>
//       <section className="">
//       <Contact/>
//       </section>

       
//     </div>
//   );
// }

import About from "@/app/Section/about";
import Home1 from "@/app/Section/home";
import Project from "@/app/Section/Project";
import Contact from "@/app/Section/contact";
import ContactInfo from "@/app/Section/contact-info";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <main className="h-full bg-[url('/pexels-binyaminmellish-1396122.jpg')] bg-cover bg-center bg-fixed">
       <Navbar />
      {/* Section 1 */}
      <section id="home"  className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full text-center">
          <Home1 />
        </div>
      </section>

      {/* Section 2 */}
      <section  id="about"  className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 w-full text-center">
          <About />
        </div>
      </section>

      {/* Section 3 */}
      <section id="project"  className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 w-full text-center">
          <Project />
        </div>
      </section>

      {/* Section 4 */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 w-full text-center">
          <ContactInfo />
        </div>
      </section>

      {/* Section 5 */}
      <section id="contact"  className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 w-full text-center">
          <Contact />
        </div>
      </section>
    </main>
  );
}
