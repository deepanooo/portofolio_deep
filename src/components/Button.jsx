export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={`group ${classes}`}
      
      // ✨ Magnetic effect
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
      }}

      {...props}
    >
      {/* ✨ Shine effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute -left-full top-0 h-full w-1/2 bg-white/20 blur-md transform skew-x-[-20deg] transition-all duration-700 group-hover:left-full" />
      </span>

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2 z-10">
        {children}
      </span>
    </button>
  );
};