import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
   { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
 
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <span className="text-2xl font-bold tracking-tight">
            DeepParceptron<span className="text-[#00FFCC]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-4 py-2 flex items-center gap-1 shadow-[0_0_20px_rgba(0,255,204,0.1)]">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className={`px-4 py-2 text-semibold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer
                  ${
                    activeSection === link.href
                      ? "text-foreground bg-surface"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="px-6 py-3 text-base font-medium">
            View Project
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 animate-fade-in">
          
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-muted-foreground hover:text-foreground transition"
            >
              {link.label}
            </a>
          ))}

          <Button onClick={() => setIsMobileMenuOpen(false)}>
            Contact Me
          </Button>
        </div>
      )}
    </header>
  );
};