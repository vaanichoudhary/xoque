"use client";

import { useEffect, useRef, useState } from "react";

// ── Mock app screen: Feed ──────────────────────────────────────
function FeedScreen() {
  const posts = [
    { user: "maya_r", time: "just now", tag: "Live", color: "#f97316", text: "This sunset is unreal 🌇", likes: 42 },
    { user: "dev.arjun", time: "2m ago", tag: "Raw", color: "#7c3aed", text: "Skipped the filter. Posted anyway.", likes: 87 },
    { user: "sara.k", time: "4m ago", tag: "Real", color: "#0ea5e9", text: "No edits. Just this moment 📍", likes: 31 },
  ];
  return (
    <div className="w-full h-full bg-[#0d0d1a] rounded-xl overflow-hidden flex flex-col">
      {/* App bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <span className="text-white font-black text-base tracking-tight" style={{ fontFamily:"var(--font-display)"}}>
          XOQUE
        </span>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[11px]">🔔</div>
          <div className="w-6 h-6 rounded-full bg-[#f0c040] flex items-center justify-center text-[10px] font-bold text-[#0d0d1a]">M</div>
        </div>
      </div>
      {/* Posts */}
      <div className="flex flex-col gap-0 flex-1 overflow-hidden">
        {posts.map((p, i) => (
          <div key={i} className="px-4 py-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600" />
              <span className="text-[12px] font-semibold text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>@{p.user}</span>
              <span
                className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: p.color }}
              >{p.tag}</span>
            </div>
            <p className="text-[12px] text-white/65 leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.text}</p>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-[10px] text-white/30">{p.time}</span>
              <span className="text-[10px] text-white/30">♥ {p.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Mock app screen: Capture ───────────────────────────────────
function CaptureScreen() {
  return (
    <div className="w-full h-full bg-[#111127] rounded-xl overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <span className="text-white/50 text-[11px]" style={{ fontFamily: "'DM Mono', monospace" }}>CAPTURE</span>
        <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold animate-pulse">● LIVE</span>
      </div>
      {/* Camera view */}
      <div className="flex-1 relative bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] flex items-center justify-center">
        <div className="absolute inset-4 border border-white/10 rounded-lg" />
        <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-white/60 rounded-tl" />
        <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-white/60 rounded-tr" />
        <div className="absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 border-white/60 rounded-bl" />
        <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-white/60 rounded-br" />
        <div className="text-4xl opacity-40">📸</div>
      </div>
      {/* Bottom controls */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-white/10">
        <div className="w-8 h-8 rounded-full bg-white/10" />
        <div className="w-12 h-12 rounded-full border-4 border-white/60 bg-white/10 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-white/90" />
        </div>
        <div className="w-8 h-8 rounded-lg bg-white/10" />
      </div>
    </div>
  );
}

// ── Floating tag badge ─────────────────────────────────────────
function FloatingBadge({ text, style }: { text: string; style?: React.CSSProperties }) {
  return (
    <div
      className="absolute z-20 px-3 py-1.5 rounded-full bg-white shadow-lg text-[11px] font-semibold text-[#0d0d1a] whitespace-nowrap"
      style={{ fontFamily: "'DM Sans', sans-serif", ...style }}
    >
      {text}
    </div>
  );
}

export default function Vision() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden"
      style={{ backgroundColor: "#f0c040" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: Text block ── */}
        <div
          className={`flex flex-col transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span
            className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d0d1a]/50 mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Our Vision
          </span>

          <h2
            className="font-black leading-[1.0] tracking-tight text-[#0d0d1a] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Share in the moment,{" "}
            <span className="relative inline-block">
              not the
              <br />
              highlight reel.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 3 Q50 6 100 3 Q150 0 200 3"
                  stroke="#0d0d1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>

          <p
            className="text-[15px] sm:text-base text-[#0d0d1a]/65 leading-relaxed mb-8 max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            XOQUE was built on a single belief: the best social media is the
            most honest one. No curated galleries. No AI feeds. No dopamine
            loops. Just humans sharing real moments, right now, with each other.
          </p>

          <a
            href="#download"
            className="self-start inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0d0d1a] text-white text-sm font-bold hover:bg-[#1e1b4b] active:scale-95 transition-all duration-200"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
          >
            Explore XOQUE
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* ── RIGHT: Layered screenshot mockups ── */}
        <div
          className={`relative h-[480px] sm:h-[520px] transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main card — Feed screen, slightly rotated left */}
          <div
            className="absolute top-0 left-0 w-[62%] sm:w-[58%] h-[88%] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.22)] border border-black/10"
            style={{ transform: "rotate(-2.5deg)", zIndex: 1 }}
          >
            <FeedScreen />
          </div>

          {/* Secondary card — Capture screen, overlapping right */}
          <div
            className="absolute top-10 right-0 w-[55%] sm:w-[52%] h-[80%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.20)] border border-black/10"
            style={{ transform: "rotate(2deg)", zIndex: 2 }}
          >
            <CaptureScreen />
          </div>

          {/* Floating badges — like the reference image's tooltip callouts */}
          <FloatingBadge
            text="✦ No AI content"
            style={{ bottom: "10%", left: "2%", zIndex: 10, transform: "rotate(-3deg)" }}
          />
          <FloatingBadge
            text="📸 Capture only"
            style={{ top: "6%", right: "2%", zIndex: 10, transform: "rotate(2deg)" }}
          />
          <FloatingBadge
            text="⚡ Real-time feed"
            style={{ bottom: "18%", right: "4%", zIndex: 10, transform: "rotate(-1.5deg)" }}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}