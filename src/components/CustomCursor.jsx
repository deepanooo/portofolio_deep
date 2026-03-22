import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        background: "rgba(0,255,200,0.5)",
        filter: "blur(8px)",
      }}
    />
  );
};