import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function BrutalistButton({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 font-black uppercase transition-all duration-75 active:translate-x-0 active:translate-y-0";
  
  const variants = {
    primary: "bg-primary text-black border-4 border-black hover:-translate-y-1 hover:bg-white",
    secondary: "bg-white text-black border-4 border-black hover:-translate-y-1 hover:bg-primary",
    outline: "bg-transparent text-primary border-4 border-primary hover:bg-primary hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <section className="py-12 border-y-8 border-primary bg-black overflow-hidden transform rotate-1">
      <div className="marquee flex">
        <div className="marquee-content flex gap-20 items-center py-4">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span className={`text-6xl font-black px-8 ${i % 2 === 0 ? "text-white" : "text-outline italic"}`}>
                {item}
              </span>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless scroll */}
          {items.map((item, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span className={`text-6xl font-black px-8 ${i % 2 === 0 ? "text-white" : "text-outline italic"}`}>
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
