import { useState, useEffect } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { InstagramSection } from "@/sections/Instagramsection";
import { Footer } from "./layout/Footer";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollToTop } from "@/components/ScrollToTop";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020617]">
      
      {/* 🌌 BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-10">
        
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#021c1c] to-[#020617]" />

        {/* Glow kiri */}
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[120px] rounded-full" />

        {/* Glow kanan */}
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-emerald-500 opacity-20 blur-[120px] rounded-full" />
      
      </div>

      {/* Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <main>
            <CustomCursor />
            <CursorGlow />
            <ScrollToTop />

            <CustomCursor />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <InstagramSection/>
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
