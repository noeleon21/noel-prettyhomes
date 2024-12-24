import Image from "next/image";
import About from "@/app/Components/Section/about";
import Home1 from "@/app/Components/Section/home";
import Project from "@/app/Components/Section/Project";
export default function Home() {
  return (
    <div >

      <section className="">
      <Home1/>
      </section>
      <section className="">
      <About/>
      </section>
      <section className="">
      <Project/>
      </section>
       
    </div>
  );
}
