import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-32 p-10 px-20 text-white">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
