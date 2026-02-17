import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-[#101e23] dark:text-white font-display overflow-x-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none z-0 bg-grid-animated h-[80vh]"></div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
