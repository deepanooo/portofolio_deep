import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 
      w-12 h-12 rounded-full 
      flex items-center justify-center
      bg-gradient-to-r from-[#00F5D4] to-[#22D3EE]
      text-black shadow-lg
      transition-all duration-500
      hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};