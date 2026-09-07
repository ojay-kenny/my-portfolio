import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0C] text-[#F2F2F4]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-[#27272A] py-8 text-center text-xs text-[#A1A1AA]">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}