import { useEffect, useState } from "react";

export const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // mulai fade out
          setFadeOut(true);

          // delay sebelum hilang
          setTimeout(() => {
            onFinish();
          }, 700);

          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-background flex items-center justify-center z-[9999] overflow-hidden transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Scan line effect */}
      <div className="absolute inset-0 loader-scan"></div>

      <div className="relative flex flex-col items-center gap-6">
        
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-widest text-primary animate-pulse">
          INITIALIZING SYSTEM
        </h1>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <span className="text-sm text-muted-foreground">
          {progress}%
        </span>

        {/* Sub text */}
        <span className="text-xs text-muted-foreground tracking-widest">
          LOADING RESOURCE...
        </span>
      </div>
    </div>
  );
};