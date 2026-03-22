"use client";

import { useEffect, useRef, useState } from "react";

/* ── Dot texture pattern ───────────────────────────── */
function DotPattern({ color = "#0d0d1a" }: { color?: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`dots-${color.replace("#", "")}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dots-${color.replace("#", "")})`} />
    </svg>
  );
}

/* ── Co-Create mockup: stacked post cards ──────────── */
function CoCreateMockup() {
  const cards = [
    { rotate: "-rotate-6", top: "top-8", left: "left-0", bg: "bg-white", label: "Live Now 🔴", user: "@kai.lens", text: "Streets at 3am." },
    { rotate: "rotate-2", top: "top-14", left: "left-10", bg: "bg-white", label: "Raw ✦", user: "@dev.arjun", text: "Unfiltered take." },
    { rotate: "rotate-6", top: "top-20", left: "left-20", bg: "bg-white", label: "Real 📍", user: "@sara.k", text: "This exact moment." },
  ];
  return (
    <div className="relative w-[260px] h-[220px] sm:w-[300px] sm:h-[250px]">
      <DotPattern color="#4f46e5" />
      {cards.map((c, i) => (
        <div
          key={i}
          className={`absolute ${c.top} ${c.left} ${c.rotate} ${c.bg} rounded-2xl shadow-lg border border-black/8 p-3 w-[180px]`}
          style={{ zIndex: i + 1 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-6 h-6 rounded-full flex-shrink-0"
              style={{ background: ["linear-gradient(135deg,#f97316,#ec4899)", "linear-gradient(135deg,#7c3aed,#4f46e5)", "linear-gradient(135deg,#0ea5e9,#10b981)"][i] }}
            />
            <span className="text-[11px] font-bold text-[#0d0d1a]">{c.user}</span>
            <span className="ml-auto text-[9px] font-semibold text-[#6366f1] bg-indigo-50 px-1.5 py-0.5 rounded-full">{c.label}</span>
          </div>
          <p className="text-[11px] text-[#0d0d1a]/60 leading-snug">{c.text}</p>
          <div className="mt-2 flex items-center gap-2 text-[10px] text-[#0d0d1a]/30">
            <span>♥ {[24, 58, 11][i]}</span>
            <span>· just now</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Que mockup: queue/schedule card UI ────────────── */
function QueMockup() {
  const items = [
    { emoji: "📸", label: "Snap — post now", tag: "Live", tagColor: "#f97316" },
    { emoji: "🎯", label: "Tag your location", tag: "Auto", tagColor: "#10b981" },
    { emoji: "💬", label: "Add a caption", tag: "Optional", tagColor: "#6366f1" },
    { emoji: "⚡", label: "Publish instantly", tag: "Go", tagColor: "#ec4899" },
  ];
  return (
    <div className="relative w-[260px] h-[240px] sm:w-[300px] sm:h-[270px]">
      <DotPattern color="#0f766e" />
      {/* Main chat/queue card */}
      <div className="absolute top-4 right-0 w-[220px] bg-white rounded-2xl shadow-xl border border-black/8 overflow-hidden rotate-3" style={{ zIndex: 2 }}>
        <div className="bg-[#0d0d1a] px-4 py-2.5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#f0c040]" />
          <span className="text-[11px] font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>Post Queue</span>
        </div>
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-2 border-b border-black/5 last:border-0">
            <span className="text-base">{it.emoji}</span>
            <span className="text-[11px] text-[#0d0d1a]/70 flex-1">{it.label}</span>
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white"
              style={{ backgroundColor: it.tagColor }}
            >{it.tag}</span>
          </div>
        ))}
      </div>
      {/* Hand emoji floater */}
      <div className="absolute -bottom-2 right-4 text-5xl z-10 select-none" style={{ transform: "rotate(-10deg)" }}>🤳</div>
      {/* Small secondary card */}
      <div className="absolute bottom-6 left-0 w-[130px] bg-white rounded-xl shadow-lg border border-black/8 p-2.5 -rotate-3" style={{ zIndex: 3 }}>
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500" />
          <span className="text-[10px] font-bold text-[#0d0d1a]">@maya_r</span>
        </div>
        <p className="text-[10px] text-[#0d0d1a]/55">Posting in 3… 2… 1…</p>
        <div className="mt-1.5 w-full bg-[#0d0d1a] rounded-full py-1 text-center text-[9px] text-white font-bold">
          LIVE NOW
        </div>
      </div>
    </div>
  );
}

/* ── Main section ──────────────────────────────────── */
export default function Features() {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = (setter: (v: boolean) => void) =>
      new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.15 });
    const o1 = obs(setV1); const o2 = obs(setV2);
    if (ref1.current) o1.observe(ref1.current);
    if (ref2.current) o2.observe(ref2.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 flex flex-col gap-6 sm:gap-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ══ CARD 1 — Co-Create ═══════════════════════════════ */}
      <div ref={ref1} className="relative">
        {/* Oversized word hanging above card */}
        <h2
          className={`relative z-10 font-black leading-none text-[#0d0d1a] ml-6 sm:ml-10 mb-[-12px] sm:mb-[-20px] transition-all duration-700 ${v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 14vw, 9rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Co-Create<span className="text-[#6366f1]">.</span>
        </h2>

        {/* Pastel lavender card */}
        <div
          className={`relative rounded-[28px] overflow-hidden transition-all duration-700 delay-100 ${v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ backgroundColor: "#c7d2fe" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 sm:px-12 pt-10 pb-12 sm:pb-14">

            {/* Left: stacked mockup cards */}
            <div className="flex items-center justify-center md:justify-start py-4">
              <CoCreateMockup />
            </div>

            {/* Right: copy */}
            <div className="flex flex-col gap-4">
              <h3
                className="text-[1.5rem] sm:text-[1.75rem] font-black leading-tight text-[#0d0d1a]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                Share the moment as it happens — together.
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#0d0d1a]/60 leading-relaxed max-w-sm">
                They say every picture tells a story, we thought, why not let the group tell the entire story this time. :p
                Introducing co-create, tag your friends and let them narrate the story through their lens.
                What better way to describing a moment, than letting the entire squad jump in on the fun.

              </p>
              <a
                href="#"
                className="self-start mt-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#0d0d1a] text-[#0d0d1a] text-[13px] font-bold hover:bg-[#0d0d1a] hover:text-white transition-all duration-200 active:scale-95"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══ CARD 2 — Que ════════════════════════════════════ */}
      <div ref={ref2} className="relative">
        {/* Oversized word hanging — right-aligned, overlapping card top */}
        <h2
          className={`relative z-10 font-black leading-none text-[#0d0d1a] text-right mr-6 sm:mr-10 mb-[-12px] sm:mb-[-20px] transition-all duration-700 ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 14vw, 9rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Que<span className="text-[#0d9488]">.</span>
        </h2>

        {/* Pastel mint card */}
        <div
          className={`relative rounded-[28px] overflow-hidden transition-all duration-700 delay-100 ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ backgroundColor: "#99f6e4" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 sm:px-12 pt-10 pb-12 sm:pb-14">

            {/* Left: copy */}
            <div className="flex flex-col gap-4 order-2 md:order-1">
              <h3
                className="text-[1.5rem] sm:text-[1.75rem] font-black leading-tight text-[#0d0d1a]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                Post it now. No gallery, no delays.
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#0d0d1a]/60 leading-relaxed max-w-sm">
                You don’t always need a photo to share a moment. Sometimes it’s just a though, a feeling, or something small you want to say.
                Que cards are for just that. Quick, simple, and real – just like conversations with your people.
                Share a thought, share a plan, share em all.

              </p>
              <a
                href="#"
                className="self-start mt-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#0d0d1a] text-[#0d0d1a] text-[13px] font-bold hover:bg-[#0d0d1a] hover:text-white transition-all duration-200 active:scale-95"
                style={{ fontFamily: "var(--font-display)" }}
              >
                See how it works
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right: queue mockup */}
            <div className="flex items-center justify-center md:justify-end py-4 order-1 md:order-2">
              <QueMockup />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
}