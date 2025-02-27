
import About from "@/app/Section/about";
import Home1 from "@/app/Section/home";
import Project from "@/app/Section/Project";
import Contact from "@/app/Section/contact";
import ContactInfo from "@/app/Section/contact-info";
import Navbar from "@/components/navbar";
import Footer from "@/app/Section/footer";
import Animations from "@/components/ui/animations";
// export default function Home() {
//   return (
//     <main className="h-full bg-[url('/pexels-binyaminmellish-1396122.jpg')] bg-cover bg-center bg-fixed ">
//        <Navbar />
//       {/* Section 1 */}
//       <section id="home"  className="relative min-h-screen flex items-center">
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 w-full text-center">
//           <Home1 />
//         </div>
//       </section>

//       {/* Section 2 */}
//       <Animations animationDirection="top-to-bottom">
//       <section  id="about"  className="relative min-h-[650px] flex items-center md:border-brand md:border-r-[100px] md:border-l-[100px] ">
//         <div className="absolute inset-0 bg-white "></div>
//         <div className="relative z-10 w-full text-center sm:mt-16">
//           <About />
//         </div>
//       </section>
//       </Animations>

//       {/* Section 3 */}
//       <Animations animationDirection="left-to-right">
//       <section id="project"  className="relative min-h-screen flex items-center md:border-brand md:border-double md:border-[25px] bg-white" >
//         {/* <div className="absolute inset-0 bg-white "></div> */}
//         <div className="relative z-10 w-full text-center">
//           <Project />
//         </div>
//       </section>
//       </Animations>
//       {/* Section 4 */}
//       <section id="contact" className="relative min-h-screen flex items-center">
//         <div className="absolute inset-0 bg-white "></div>
//         <div className="relative z-10 w-full text-center">
//           <ContactInfo />
//         </div>
//       </section>

      

//       {/* Section 5 */}
//       <section id="contact"  >
//         <div className="absolute inset-0 bg-white bg-opacity-95"></div>
//         <div className="relative z-10 w-full text-center">
//           <Footer />
//         </div>
//       </section>
//     </main>
//   );
// }
export default function Home() {
  return (
    <main className="h-full bg-[url('/pexels-binyaminmellish-1396122.jpg')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      {/* Section 1 */}
      <section id="home" className="relative min-h-screen flex items-center ">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full text-center">
          <Home1 />
        </div>
      </section>

      {/* Section 2 */}
      <Animations animationDirection="top-to-bottom">
        <section id="about" className="relative min-h-[600px]  flex items-center md:border-brand md:border-r-[50px] md:border-l-[50px] ">
          <div className="absolute inset-0 bg-white"></div>
          <div className="relative z-10 w-full text-center">
            <About />
          </div>
        </section>
      </Animations>

      {/* Section 3 */}
      <Animations animationDirection="left-to-right">
        <section id="project" className="relative min-h-[750px] flex items-center md:border-brand md:border-double md:border-[25px] bg-white ">
          <div className="relative z-10 w-full text-center">
            <Project />
          </div>
        </section>
      </Animations>

      {/* Section 4 */}
      <section id="contact" className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative z-10 w-full text-center">
          <ContactInfo />
        </div>
      </section>

      {/* Section 5 */}
      <section id="contact" className="">
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 w-full text-center">
          <Footer />
        </div>
      </section>
    </main>
  );
}
