import About from "@/components/About";
import Contact from "@/components/Contact";
import Contact2 from "@/components/Contact2";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className=" bg-black w-[550px] sm:min-w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Project />
      <Contact />
      <Contact2 />
    </main>
  )
}
