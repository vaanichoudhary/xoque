"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Doodles — exactly two parallel diagonal lines like // in the image ─── */
function DoodleSlashes({ className }: { className?: string }) {
  return (
    <svg className={className} width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8"  y1="38" x2="20" y2="2"  stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="38" x2="32" y2="2"  stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Mockup: dropdown template picker (Card A) ─── */
function DropdownMockup() {
  const items = ["Real post ✦", "📍 Live moment", "🎯 Candid shot", "📸 Right now", "🔥 Unfiltered"];
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 bg-[#1c1c2e] w-[160px]">
      {items.map((item, i) => (
        <div key={i}
          className={`flex items-center gap-2 px-3 py-2 text-[11px] border-b border-white/[0.06] last:border-0 ${i === 0 ? "bg-white/15 text-white font-semibold" : "text-white/70"}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

/* ─── Mockup: app post screen (Card A bottom right) ─── */
function PostScreenMockup() {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 bg-[#0d0d1a] w-full">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <span className="text-white font-bold text-[10px]" style={{ fontFamily: "var(--font-display)" }}>XOQUE</span>
        <span className="text-[9px] bg-red-500 text-white px-1.5 py-0.5 rounded-full font-bold">● LIVE</span>
      </div>
      <div className="px-3 py-2.5 text-[10px] text-white/40 italic border-b border-white/[0.06]"
        style={{ fontFamily: "var(--font-body)" }}>
        Write something real, pick a template...
      </div>
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="text-[9px] font-semibold text-[#6366f1] border border-[#6366f1]/40 px-2 py-0.5 rounded-full">⊞ Pick a mode</span>
      </div>
    </div>
  );
}

/* ─── Mockup: tool list (Card B) ─── */
function ToolListMockup() {
  const tools = [
    { icon: "✦",  label: "Authentic Post" },
    { icon: "H1", label: "Story Header",  sm: true },
    { icon: "H2", label: "Caption",       sm: true },
    { icon: "≡",  label: "Tag List" },
    { icon: "⊞",  label: "Location Tag" },
    { icon: "⚡", label: "Live Mode" },
    { icon: "😊", label: "Reaction" },
  ];
  const embeds = [
    { icon: "▶",  label: "YouTube",  col: "#ef4444" },
    { icon: "◎",  label: "Spotify",  col: "#22c55e" },
    { icon: "✦",  label: "Figma",    col: "#a855f7" },
  ];
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 bg-[#1c1c2e] w-full">
      {tools.map((t, i) => (
        <div key={i} className="flex items-center gap-2 px-3 py-[7px] border-b border-white/[0.06]">
          <span className={`text-white/50 font-bold leading-none w-4 text-center ${t.sm ? "text-[8px]" : "text-[11px]"}`}>{t.icon}</span>
          <span className="text-[11px] text-white/80" style={{ fontFamily: "var(--font-body)" }}>{t.label}</span>
        </div>
      ))}
      <div className="px-3 py-1.5 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="text-[8px] font-bold tracking-widest text-white/30 uppercase">Embeds</span>
      </div>
      {embeds.map((e, i) => (
        <div key={i} className="flex items-center gap-2 px-3 py-[7px] border-b border-white/[0.06] last:border-0">
          <span className="text-[11px] font-bold leading-none w-4 text-center" style={{ color: e.col }}>{e.icon}</span>
          <span className="text-[11px] text-white/80" style={{ fontFamily: "var(--font-body)" }}>{e.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Mockup: assign + tasks (Card C) ─── */
function AssignMockup() {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 bg-[#1c1c2e] w-[150px]">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06] text-[9px] text-white/40">
        <span>🔍</span> Post as
      </div>
      {[{name:"Now",c:"#f97316"},{name:"Story",c:"#a78bfa"},{name:"Live",c:"#34d399"}].map(u=>(
        <div key={u.name} className="flex items-center gap-2 px-3 py-1.5 border-b border-white/[0.05] last:border-0">
          <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: u.c }} />
          <span className="text-[11px] text-white/85" style={{ fontFamily: "var(--font-body)" }}>{u.name}</span>
        </div>
      ))}
    </div>
  );
}
function TasksMockup() {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-white/10 bg-[#0d0d1a] w-full">
      <div className="flex gap-4 px-3 pt-2.5 pb-1.5 border-b border-white/10">
        <span className="text-[10px] font-bold text-white/80" style={{ fontFamily: "var(--font-display)" }}>Live</span>
        <span className="text-[10px] text-white/30" style={{ fontFamily: "var(--font-display)" }}>Gallery</span>
      </div>
      {["Snap and post","Capture this moment"].map((task,i)=>(
        <div key={i} className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06] last:border-0">
          <div className="w-3.5 h-3.5 rounded-full border border-white/30 flex-shrink-0" />
          <span className="text-[10px] text-white/70 flex-1" style={{ fontFamily: "var(--font-body)" }}>{task}</span>
          {i===0 && <span className="text-[8px] bg-orange-400/80 text-white px-1.5 py-0.5 rounded-full font-bold">Now</span>}
        </div>
      ))}
    </div>
  );
}

/* ─── Section ─── */
export default function Pillars() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full px-4 sm:px-8 md:px-10 lg:px-14 py-12 sm:py-16"
      style={{ backgroundColor: "#f0efeb" }}
    >
      {/* ── Heading ── */}
      <div className={`mb-7 sm:mb-9 max-w-md transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <span className="text-[20px] font-bold tracking-[0.18em] uppercase text-[#6366f1] mb-2 block"
          style={{ fontFamily: "var(--font-mono)" }}>
          Why XOQUE
        </span>
        <h2
          className="font-extrabold leading-tight text-[#0d0d1a] mb-2"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "-0.025em" }}
        >
          Built on three{" "}
          <span className="relative inline-block">
            pillars
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full bg-[#6366f1]" />
          </span>
        </h2>
        <p className="text-[12px] sm:text-[20px] text-[#4b4b6a]/60 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}>
          Protecting your attention, your authenticity, and your time.
        </p>
      </div>

      {/* ── Cards grid — desktop: CSS grid with precise placement ── */}
      <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0"}`}>

        {/* ─ DESKTOP LAYOUT ─ */}
        <div className="hidden md:block relative">
          {/*
            Grid: 3 cols [~63%, gap, ~35%]
            Rows: top row = Card A height (~340px), bottom = Card C height (~240px)
            Card A: col 1, row 1
            Card C: col 1, row 2 (offset right via margin)
            Card B: col 3, row 1–2 (spans both rows, starts -24px above)
            Doodle 1: absolute, top-right between heading and Card B top
            Doodle 2: absolute, left side between Card A and Card C
          */}
          <div
            className="grid gap-x-5"
            style={{ gridTemplateColumns: "1fr 36%", gridTemplateRows: "auto auto" }}
          >
            {/* Card A — top left, large */}
            <div
              className="relative rounded-[20px] overflow-hidden m-3 p-5 sm:p-6 flex flex-col  cursor-pointer"
              style={{
                gridColumn: "1", gridRow: "1",
                background: "linear-gradient(135deg,#4f6ef7 0%,#7b6cf6 30%,#c97b4b 70%,#e8895a 100%)",
                minHeight: "340px",
              }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-25"
                style={{ background: "radial-gradient(ellipse at 30% 20%,rgba(255,255,255,0.35) 0%,transparent 55%)" }} />
              <div className="relative z-10">
                <h3 className="text-[15px] font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                  Real Content Only
                </h3>
                <p className="text-[12px] text-white/70 leading-relaxed max-w-[280px]"
                  style={{ fontFamily: "var(--font-body)" }}>
                  No AI-generated content. Every post is made by a real person in a real moment. No bots, no synthetic feeds.
                </p>
              </div>
              {/* Floating mockups inside card */}
              <div className="relative z-10 flex-1 flex items-end justify-between gap-3 mt-4">
                <DropdownMockup />
                <div className="flex-1 max-w-[200px]">
                  <PostScreenMockup />
                </div>
              </div>
            </div>

            {/* Card C — bottom left, offset right */}
            <div
              className="relative rounded-[20px] overflow-hidden m-3 p-5 sm:p-6 flex flex-col cursor-pointer mt-4"
              style={{
                gridColumn: "1", gridRow: "2",
                marginLeft: "10%", marginRight: "2%",
                background: "linear-gradient(135deg,#e8895a 0%,#c97b8a 35%,#7b6cf6 70%,#4f6ef7 100%)",
                minHeight: "240px",
              }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{ background: "radial-gradient(ellipse at 80% 80%,rgba(255,255,255,0.3) 0%,transparent 55%)" }} />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[15px] font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                    No Addictive Scrolling
                  </h3>
                  <p className="text-[12px] text-white/70 leading-relaxed max-w-[200px]"
                    style={{ fontFamily: "var(--font-body)" }}>
                    No reels, no infinite scroll. See what matters, then go live your life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-[180px] flex-shrink-0">
                  <AssignMockup />
                  <TasksMockup />
                </div>
              </div>
            </div>

            {/* Card B — right, tall, spans both rows, starts -24px above grid */}
            <div
              className="relative rounded-[20px] overflow-hidden p-5 sm:p-6 flex flex-col  cursor-pointer"
              style={{
                gridColumn: "2", gridRow: "1/5",
                marginTop: "-30px",
                background: "linear-gradient(160deg,#4a6cf7 0%,#8b6cf6 40%,#c87b4a 80%,#e07a40 100%)",
                alignSelf: "start",
              }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-25"
                style={{ background: "radial-gradient(ellipse at 70% 12%,rgba(255,255,255,0.3) 0%,transparent 50%)" }} />
              <div className="relative z-10 mb-3">
                <h3 className="text-[15px] font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                  Real-Time Sharing
                </h3>
                <p className="text-[12px] text-white/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}>
                  Capture and post instantly. No gallery uploads. If you didn't take it now, it doesn't belong here.
                </p>
              </div>
              <div className="relative z-10">
                <ToolListMockup />
              </div>
            </div>
          </div>

         

        {/* ─ MOBILE LAYOUT — clean stacked cards ─ */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Card A */}
          <div
            className="relative rounded-[18px] overflow-hidden p-5 flex flex-col"
            style={{ background: "linear-gradient(135deg,#4f6ef7 0%,#7b6cf6 30%,#c97b4b 70%,#e8895a 100%)", minHeight: "220px" }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{ background: "radial-gradient(ellipse at 30% 20%,rgba(255,255,255,0.3) 0%,transparent 55%)" }} />
            <div className="relative z-10 mb-3">
              <h3 className="text-[15px] font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>Real Content Only</h3>
              <p className="text-[12px] text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                No AI-generated content. Every post is made by a real person in a real moment.
              </p>
            </div>
            <div className="relative z-10 flex gap-3 mt-auto">
              <DropdownMockup />
              <div className="flex-1"><PostScreenMockup /></div>
            </div>
          </div>

          {/* Card B */}
          <div
            className="relative rounded-[18px] overflow-hidden p-5 flex flex-col "
            style={{ background: "linear-gradient(160deg,#4a6cf7 0%,#8b6cf6 40%,#c87b4a 80%,#e07a40 100%)", minHeight: "210px" }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{ background: "radial-gradient(ellipse at 70% 12%,rgba(255,255,255,0.3) 0%,transparent 50%)" }} />
            <div className="relative z-10 mb-3">
              <h3 className="text-[15px] font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>Real-Time Sharing</h3>
              <p className="text-[12px] text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Capture and post instantly. No gallery uploads allowed.
              </p>
            </div>
            <div className="relative z-10"><ToolListMockup /></div>
          </div>

          {/* Card C */}
          <div
            className="relative rounded-[18px] overflow-hidden p-5 flex flex-col hover:scale-[1.01] transition-transform duration-300"
            style={{ background: "linear-gradient(135deg,#e8895a 0%,#c97b8a 35%,#7b6cf6 70%,#4f6ef7 100%)", minHeight: "180px" }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{ background: "radial-gradient(ellipse at 80% 80%,rgba(255,255,255,0.3) 0%,transparent 55%)" }} />
            <div className="relative z-10 mb-3">
              <h3 className="text-[15px] font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>No Addictive Scrolling</h3>
              <p className="text-[12px] text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                No reels, no infinite scroll. See what matters, then go live your life.
              </p>
            </div>
            <div className="relative z-10 flex gap-3 mt-auto">
              <AssignMockup />
              <div className="flex-1"><TasksMockup /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
