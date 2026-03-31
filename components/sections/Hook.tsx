"use client";

import { useEffect, useRef, useState } from "react";

export default function Hook() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full px-5 py-15 sm:py-15 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#f0efeb" }}
    >
      {/* Thin rule above */}
      <div className="w-12 mb-10" />

      {/* Main headline */}
      <h2
        className={`font-black leading-none tracking-tight transition-all duration-700 ease-out ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 9vw, 3.5rem)",
          letterSpacing: "-0.03em",
          backgroundImage:
            "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 35%, #7c3aed 60%, #db2777 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        2026 is the new 2016.
      </h2>

      {/* Subtext */}
      <p
        className={`mt-6 text-[15px] sm:text-[25px] text-[#4b4b6a]/70 font-medium tracking-wide transition-all duration-700 delay-200 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        A new era of real content is here.
      </p>

      {/* Thin rule below */}
      <div className="w-12  mt-10" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}