import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certs from "@/components/Certs";
import Resumes from "@/components/Resumes";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#f8f6f1]" style={{ paddingTop: "68px" }}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Certs />
      <Resumes />
      <Contact />
    </main>
  );
}
