// "use client";

// import { useEffect, useRef, useState } from "react";

// // ── Mock app screen: Feed ──────────────────────────────────────
// function FeedScreen() {
//   const posts = [
//     { user: "maya_r", time: "just now", tag: "Live", color: "#f97316", text: "This sunset is unreal 🌇", likes: 42 },
//     { user: "dev.arjun", time: "2m ago", tag: "Raw", color: "#7c3aed", text: "Skipped the filter. Posted anyway.", likes: 87 },
//     { user: "sara.k", time: "4m ago", tag: "Real", color: "#0ea5e9", text: "No edits. Just this moment 📍", likes: 31 },
//   ];
//   return (
//     <div className="w-full h-full bg-[#0d0d1a] rounded-xl overflow-hidden flex flex-col">
//       {/* App bar */}
//       <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
//         <span className="text-white font-black text-base tracking-tight" style={{ fontFamily:"var(--font-display)"}}>
//           XOQUE
//         </span>
//         <div className="flex gap-2">
//           <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[11px]">🔔</div>
//           <div className="w-6 h-6 rounded-full bg-[#f0c040] flex items-center justify-center text-[10px] font-bold text-[#0d0d1a]">M</div>
//         </div>
//       </div>
//       {/* Posts */}
//       <div className="flex flex-col gap-0 flex-1 overflow-hidden">
//         {posts.map((p, i) => (
//           <div key={i} className="px-4 py-3 border-b border-white/[0.06]">
//             <div className="flex items-center gap-2 mb-1.5">
//               <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600" />
//               <span className="text-[12px] font-semibold text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>@{p.user}</span>
//               <span
//                 className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
//                 style={{ backgroundColor: p.color }}
//               >{p.tag}</span>
//             </div>
//             <p className="text-[12px] text-white/65 leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.text}</p>
//             <div className="flex items-center gap-3 mt-1.5">
//               <span className="text-[10px] text-white/30">{p.time}</span>
//               <span className="text-[10px] text-white/30">♥ {p.likes}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ── Mock app screen: Capture ───────────────────────────────────
// function CaptureScreen() {
//   return (
//     <div className="w-full h-full bg-[#111127] rounded-xl overflow-hidden flex flex-col">
//       <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
//         <span className="text-white/50 text-[11px]" style={{ fontFamily: "'DM Mono', monospace" }}>CAPTURE</span>
//         <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold animate-pulse">● LIVE</span>
//       </div>
//       {/* Camera view */}
//       <div className="flex-1 relative bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] flex items-center justify-center">
//         <div className="absolute inset-4 border border-white/10 rounded-lg" />
//         <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-white/60 rounded-tl" />
//         <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-white/60 rounded-tr" />
//         <div className="absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 border-white/60 rounded-bl" />
//         <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-white/60 rounded-br" />
//         <div className="text-4xl opacity-40">📸</div>
//       </div>
//       {/* Bottom controls */}
//       <div className="flex items-center justify-between px-5 py-3 border-t border-white/10">
//         <div className="w-8 h-8 rounded-full bg-white/10" />
//         <div className="w-12 h-12 rounded-full border-4 border-white/60 bg-white/10 flex items-center justify-center">
//           <div className="w-8 h-8 rounded-full bg-white/90" />
//         </div>
//         <div className="w-8 h-8 rounded-lg bg-white/10" />
//       </div>
//     </div>
//   );
// }

// // ── Floating tag badge ─────────────────────────────────────────
// function FloatingBadge({ text, style }: { text: string; style?: React.CSSProperties }) {
//   return (
//     <div
//       className="absolute z-20 px-3 py-1.5 rounded-full bg-white shadow-lg text-[11px] font-semibold text-[#0d0d1a] whitespace-nowrap"
//       style={{ fontFamily: "'DM Sans', sans-serif", ...style }}
//     >
//       {text}
//     </div>
//   );
// }

// export default function Vision() {
//   const [visible, setVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.15 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="w-full overflow-hidden"
//       style={{ backgroundColor: "#f0c040" }}
//     >
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

//         {/* ── LEFT: Text block ── */}
//         <div
//           className={`flex flex-col transition-all duration-700 ease-out ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <span
//             className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d0d1a]/50 mb-4"
//             style={{ fontFamily: "'DM Mono', monospace" }}
//           >
//             Our Vision
//           </span>

//           <h2
//             className="font-black leading-[1.0] tracking-tight text-[#0d0d1a] mb-6"
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
//               letterSpacing: "-0.03em",
//             }}
//           >
//             Share in the moment,{" "}
//             <span className="relative inline-block">
//               not the
//               <br />
//               highlight reel.
//               <svg
//                 className="absolute -bottom-2 left-0 w-full"
//                 height="6"
//                 viewBox="0 0 200 6"
//                 fill="none"
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M0 3 Q50 6 100 3 Q150 0 200 3"
//                   stroke="#0d0d1a"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   fill="none"
//                 />
//               </svg>
//             </span>
//           </h2>

//           <p
//             className="text-[15px] sm:text-base text-[#0d0d1a]/65 leading-relaxed mb-8 max-w-sm"
//             style={{ fontFamily: "'DM Sans', sans-serif" }}
//           >
//             XOQUE was built on a single belief: the best social media is the
//             most honest one. No curated galleries. No AI feeds. No dopamine
//             loops. Just humans sharing real moments, right now, with each other.
//           </p>

//           <a
//             href="#download"
//             className="self-start inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0d0d1a] text-white text-sm font-bold hover:bg-[#1e1b4b] active:scale-95 transition-all duration-200"
//             style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
//           >
//             Explore XOQUE
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </a>
//         </div>

//         {/* ── RIGHT: Layered screenshot mockups ── */}
//         <div
//           className={`relative h-[480px] sm:h-[520px] transition-all duration-700 delay-200 ease-out ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           {/* Main card — Feed screen, slightly rotated left */}
//           <div
//             className="absolute top-0 left-0 w-[62%] sm:w-[58%] h-[88%] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.22)] border border-black/10"
//             style={{ transform: "rotate(-2.5deg)", zIndex: 1 }}
//           >
//             <FeedScreen />
//           </div>

//           {/* Secondary card — Capture screen, overlapping right */}
//           <div
//             className="absolute top-10 right-0 w-[55%] sm:w-[52%] h-[80%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.20)] border border-black/10"
//             style={{ transform: "rotate(2deg)", zIndex: 2 }}
//           >
//             <CaptureScreen />
//           </div>

//           {/* Floating badges — like the reference image's tooltip callouts */}
//           <FloatingBadge
//             text="✦ No AI content"
//             style={{ bottom: "10%", left: "2%", zIndex: 10, transform: "rotate(-3deg)" }}
//           />
//           <FloatingBadge
//             text="📸 Capture only"
//             style={{ top: "6%", right: "2%", zIndex: 10, transform: "rotate(2deg)" }}
//           />
//           <FloatingBadge
//             text="⚡ Real-time feed"
//             style={{ bottom: "18%", right: "4%", zIndex: 10, transform: "rotate(-1.5deg)" }}
//           />
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";

/* ── Layered screenshot mockup matching the reference ── */
function ScreenshotMockup({ visible }: { visible: boolean }) {
  return (
    /* Outer browser chrome — the main dark window */
    <div
      className="relative w-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        transition: "opacity 0.8s ease 0.25s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s",
      }}
    >
      {/* Main app window */}
      <div className="relative rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.22)] border border-black/10"
        style={{ background: "#1a1a2e" }}>

        {/* Window title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#111120] border-b border-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-3">
            <div className="flex items-center justify-center gap-2 bg-white/[0.06] rounded-md px-3 py-1 text-[10px] text-white/40 max-w-[160px] mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}>
              xoque.app
            </div>
          </div>
          <div className="text-[10px] text-white/30 font-bold" style={{ fontFamily: "var(--font-display)" }}>XOQUE</div>
        </div>

        {/* App content area */}
        <div className="relative" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)" }}>

          {/* Purple inner bg with feed preview */}
          <div className="p-4">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/50 text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>Feed</span>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-white/10" />
                <div className="w-5 h-5 rounded-full bg-[#f0c040] flex items-center justify-center text-[8px] font-bold text-[#0d0d1a]">M</div>
              </div>
            </div>

            {/* Post cards */}
            {[
              { user: "@kai.lens",   tag: "Live",  col: "#f97316", text: "Streets at 3am. No edits.",        av: "#6366f1" },
              { user: "@dev.arjun",  tag: "Raw",   col: "#7c3aed", text: "Unfiltered. Just this moment.",    av: "#ec4899" },
              { user: "@sara.k",     tag: "Real",  col: "#0ea5e9", text: "This is what today looks like.",  av: "#10b981" },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                <div className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: p.av }} />
                <div className="flex-1 bg-white/[0.07] rounded-lg px-2.5 py-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] font-semibold text-white/75">{p.user}</span>
                    <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ backgroundColor: p.col }}>{p.tag}</span>
                  </div>
                  <p className="text-[9px] text-white/55 leading-snug">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating "Columns" panel — top right overlay ── */}
      <div
        className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] border border-black/[0.06] overflow-hidden w-[140px] sm:w-[160px]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.5s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s",
        }}
      >
        <div className="flex items-center justify-between px-3 py-2 border-b border-black/[0.06]">
          <span className="text-[11px] font-bold text-[#0d0d1a]" style={{ fontFamily: "var(--font-display)" }}>Post Mode</span>
          <span className="text-[10px] text-black/30 cursor-pointer">✕</span>
        </div>
        {[
          { label: "Count",  val: "1" },
          { label: "Type",   val: "Live" },
          { label: "Width",  val: "Auto" },
          { label: "Gutter", val: "0" },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between px-3 py-1.5 border-b border-black/[0.04] last:border-0">
            <span className="text-[9px] text-black/40" style={{ fontFamily: "var(--font-body)" }}>{row.label}</span>
            <span className="text-[9px] font-semibold text-[#0d0d1a]" style={{ fontFamily: "var(--font-body)" }}>{row.val}</span>
          </div>
        ))}
      </div>

      {/* ── Floating "Fonts" panel — bottom left overlay ── */}
      <div
        className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.16)] border border-black/[0.06] overflow-hidden w-[150px] sm:w-[170px]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.65s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.65s",
        }}
      >
        <div className="flex items-center justify-between px-3 py-2 border-b border-black/[0.06]">
          <span className="text-[11px] font-bold text-[#0d0d1a]" style={{ fontFamily: "var(--font-display)" }}>Capture</span>
          <span className="text-[10px] text-black/30 cursor-pointer">✕</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/[0.05]">
          <span className="text-[9px] text-black/30">🔍</span>
          <span className="text-[9px] text-black/25 italic" style={{ fontFamily: "var(--font-body)" }}>Search mode...</span>
        </div>
        <div className="px-3 py-1.5 border-b border-black/[0.04]">
          <p className="text-[8px] text-black/35 font-semibold mb-1 uppercase tracking-wider">Recent</p>
          {["Live Now", "Raw Moment", "Candid Shot"].map((f, i) => (
            <p key={i} className={`text-[10px] py-0.5 ${i === 1 ? "italic text-black/50" : i === 2 ? "font-mono text-black/60" : "font-semibold text-black/80"}`}
              style={{ fontFamily: i === 1 ? "Georgia, serif" : "var(--font-body)" }}>
              {f}
            </p>
          ))}
        </div>
        <div className="px-3 py-1.5">
          <p className="text-[8px] text-black/30 font-semibold mb-1 uppercase tracking-wider">In this app</p>
          <p className="text-[9px] text-black/50" style={{ fontFamily: "var(--font-body)" }}>Co-Create ↓</p>
        </div>
      </div>

      {/* ── "Fill × Hug" tooltip ── */}
      <div
        className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6366f1] text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 0.8s",
          fontFamily: "var(--font-mono)",
        }}
      >
        Real × Now
      </div>
    </div>
  );
}

/* ── Section ── */
export default function Vision() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden"
      style={{ backgroundColor: "#f0c040" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">

        {/* ── Left-right layout maintained on ALL screen sizes ── */}
        <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[2fr_3fr] md:grid-cols-[1fr_1.4fr] gap-6 sm:gap-10 md:gap-14 items-center">

          {/* ── LEFT: Text block ── */}
          <div
            className={`flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            

            {/* Big heading */}
            <h2
              className="font-extrabold text-[#0d0d1a] leading-[1.05] mb-3 sm:mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Share in the moment,{" "}
              <span className="relative inline-block">
                not the
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="4"
                  viewBox="0 0 100 4"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ opacity: 0.5 }}
                >
                  <path d="M0 2 Q25 4 50 2 Q75 0 100 2" stroke="#0d0d1a" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
              {" "}highlight reel.
            </h2>

            {/* Body copy */}
            <p
              className="text-[10px] sm:text-[12px] md:text-[18px] text-[#0d0d1a]/65 leading-relaxed mt-5 mb-4 sm:mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Work together in real time and empower your community to create in new ways. Keep your feed authentic with moments that give every connection visibility throughout the day.
            </p>

            {/* CTA button */}
            <a
              href="#download"
              className="self-start inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-[#0d0d1a] text-white font-bold hover:bg-[#1e1b4b] active:scale-95 transition-all duration-200"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.65rem, 1.8vw, 0.875rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Explore XOQUE
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* ── RIGHT: Screenshot mockup ── */}
          <div className="relative py-8 sm:py-10 px-4 sm:px-6 md:px-8">
            <ScreenshotMockup visible={visible} />
          </div>

        </div>
      </div>
    </section>
  );
}