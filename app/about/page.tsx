// "use client";

// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";

// // ── Palette ─────────────────────────────────────────────────────────────────
// const P = "#2d1342"; // purple
// const M = "#FFA0C5"; // magenta/pink
// const C = "#9BF6FF"; // cyan
// const Y = "#FDFFB6"; // yellow

// // ── Data ────────────────────────────────────────────────────────────────────
// const TEAM = [
//   {
//     name: "Aryan S.",
//     role: "Founder & CEO",
//     quote: "I wanted an app I'd actually use. So I built it.",
//     avatar: "https://i.pravatar.cc/200?img=11",
//     accent: P,
//   },
//   {
//     name: "Meera K.",
//     role: "Head of Design",
//     quote: "Every pixel here is a decision against addiction.",
//     avatar: "https://i.pravatar.cc/200?img=32",
//     accent: M,
//   },
//   {
//     name: "Dev R.",
//     role: "Lead Engineer",
//     quote: "Real-time or nothing. That's the constraint we shipped around.",
//     avatar: "https://i.pravatar.cc/200?img=30",
//     accent: C,
//   },
//   {
//     name: "Sara T.",
//     role: "Community",
//     quote: "Communities don't scale. That's a feature, not a bug.",
//     avatar: "https://i.pravatar.cc/200?img=58",
//     accent: Y,
//   },
// ];

// const TIMELINE = [
//   { year: "2024", label: "The idea", body: "Tired of curated feeds and AI-generated noise, Aryan started building xoque in a Bangalore apartment." },
//   { year: "Q1 '25", label: "First build", body: "Live-only posting shipped. The first test: 12 friends, zero gallery uploads allowed." },
//   { year: "Q3 '25", label: "Beta launch", body: "500 invites sent. Every single one forwarded. Within a week, 12,000 people on the waitlist." },
//   { year: "2026", label: "Now", body: "xoque is live. Real people. Real moments. No algorithm deciding what you see." },
// ];

// const GALLERY_IMGS = [
//   { src: "https://xoque-lemon.vercel.app/images/1.jpeg", label: "Authentic" },
//   { src: "https://xoque-lemon.vercel.app/images/3.jpeg", label: "Que" },
//   { src: "https://xoque-lemon.vercel.app/images/5.jpeg", label: "Perspective" },
//   { src: "https://xoque-lemon.vercel.app/images/7.jpeg", label: "Live" },
//   { src: "https://xoque-lemon.vercel.app/images/9.jpeg", label: "Honest" },
//   { src: "https://xoque-lemon.vercel.app/images/2.jpeg", label: "Co-Create" },
// ];

// // ── Fade-in hook ─────────────────────────────────────────────────────────────
// function useFadeIn() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
//       { threshold: 0.12 }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);
//   return { ref, visible };
// }

// // ── Reusable fade wrapper ────────────────────────────────────────────────────
// function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
//   const { ref, visible } = useFadeIn();
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0)" : "translateY(28px)",
//         transition: `opacity 0.75s ease ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// // ── Page ─────────────────────────────────────────────────────────────────────
// export default function AboutPage() {
//   return (
//     <div style={{ backgroundColor: "#07020f", overflowX: "hidden" }}>
//       <Navbar />

//       {/* ═══════════════════════════════════════════════════════════════════
//           HERO — full viewport, dark with pastel glow blobs + big type
//       ═══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative min-h-screen flex flex-col justify-center px-5 pt-32 pb-24 overflow-hidden"
//       >
//         {/* Ambient blobs */}
//         <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
//           style={{ background: `radial-gradient(ellipse, ${P}33 0%, transparent 70%)` }} />
//         <div className="absolute top-40 right-0 w-[380px] h-[380px] rounded-full blur-[120px] pointer-events-none"
//           style={{ background: `radial-gradient(ellipse, ${M}22 0%, transparent 70%)` }} />
//         <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
//           style={{ background: `radial-gradient(ellipse, ${C}1a 0%, transparent 70%)` }} />

//         <div className="max-w-6xl mx-auto w-full relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//             {/* Left — text */}
//             <div>
//               <div
//                 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8"
//                 style={{ borderColor: `${P}44`, backgroundColor: `${P}11` }}
//               >
//                 <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: P }} />
//                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase"
//                   style={{ fontFamily: "var(--font-mono)", color: P }}>
//                   Our Story
//                 </span>
//               </div>

//               <h1
//                 className="font-black text-white leading-[1.0] mb-6"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   fontSize: "clamp(3rem, 8vw, 6rem)",
//                   letterSpacing: "-0.05em",
//                 }}
//               >
//                 We got tired<br />of{" "}
//                 <span
//                   className="relative inline-block"
//                   style={{ color: P }}
//                 >
//                   pretending.
//                   {/* Underline squiggle accent */}
//                   <svg
//                     className="absolute -bottom-2 left-0 w-full"
//                     height="8" viewBox="0 0 200 8" preserveAspectRatio="none"
//                     style={{ opacity: 0.5 }}
//                   >
//                     <path d="M0 6 Q25 1 50 5 Q75 9 100 4 Q125 -1 150 5 Q175 9 200 4"
//                       fill="none" stroke={M} strokeWidth="2.5" strokeLinecap="round" />
//                   </svg>
//                 </span>
//               </h1>

//               <p
//                 className="text-white/50 leading-[1.75] mb-8 max-w-md"
//                 style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem" }}
//               >
//                 Every platform pushed us to perform — to curate, to filter, to grow a number. xoque exists because we couldn't find a social app that felt honest. So we built the one we actually wanted.
//               </p>

//               <div className="flex items-center gap-4">
//                 <div className="flex -space-x-2.5">
//                   {[47, 32, 12, 58].map(n => (
//                     <img key={n} src={`https://i.pravatar.cc/48?img=${n}`}
//                       className="w-9 h-9 rounded-full border-2" style={{ borderColor: "#07020f" }} alt="" />
//                   ))}
//                 </div>
//                 <p className="text-white/35 text-[13px]" style={{ fontFamily: "var(--font-body)" }}>
//                   12,000+ people already here
//                 </p>
//               </div>
//             </div>

//             {/* Right — floating photo collage */}
//             <div className="relative h-[480px] hidden lg:block">
//               {/* Main large image */}
//               <div
//                 className="absolute top-0 right-0 w-[260px] h-[340px] rounded-2xl overflow-hidden border-2 shadow-2xl"
//                 style={{ borderColor: `${P}44`, boxShadow: `0 0 60px ${P}22` }}
//               >
//                 <img src="https://xoque-lemon.vercel.app/images/1.jpeg"
//                   className="w-full h-full object-cover" alt="Real moment" />
//                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,2,15,0.5) 0%, transparent 50%)" }} />
//                 <div className="absolute bottom-3 left-3">
//                   <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
//                     style={{ fontFamily: "var(--font-mono)", backgroundColor: P, color: "#1a0f2e" }}>
//                     Authentic
//                   </span>
//                 </div>
//               </div>

//               {/* Second image — offset */}
//               <div
//                 className="absolute top-28 left-0 w-[200px] h-[260px] rounded-2xl overflow-hidden border-2 shadow-xl"
//                 style={{ borderColor: `${M}44`, boxShadow: `0 0 40px ${M}1a` }}
//               >
//                 <img src="https://xoque-lemon.vercel.app/images/2.jpeg"
//                   className="w-full h-full object-cover" alt="Co-create" />
//                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,2,15,0.5) 0%, transparent 50%)" }} />
//                 <div className="absolute bottom-3 left-3">
//                   <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
//                     style={{ fontFamily: "var(--font-mono)", backgroundColor: M, color: "#1a0f2e" }}>
//                     Co-Create
//                   </span>
//                 </div>
//               </div>

//               {/* Third — bottom right */}
//               <div
//                 className="absolute bottom-0 right-20 w-[180px] h-[220px] rounded-2xl overflow-hidden border-2 shadow-xl"
//                 style={{ borderColor: `${C}44`, boxShadow: `0 0 40px ${C}1a` }}
//               >
//                 <img src="https://xoque-lemon.vercel.app/images/7.jpeg"
//                   className="w-full h-full object-cover" alt="Live" />
//                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,2,15,0.5) 0%, transparent 50%)" }} />
//                 <div className="absolute bottom-3 left-3">
//                   <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
//                     style={{ fontFamily: "var(--font-mono)", backgroundColor: C, color: "#1a3d4a" }}>
//                     Live
//                   </span>
//                 </div>
//               </div>

//               {/* Floating pill */}
//               <div
//                 className="absolute top-4 left-8 px-3 py-2 rounded-full border text-[11px] font-bold text-white/60 backdrop-blur-sm"
//                 style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)" }}
//               >
//                 🔴 Live now
//               </div>
//               <div
//                 className="absolute bottom-16 left-4 px-3 py-2 rounded-full border text-[11px] font-bold backdrop-blur-sm"
//                 style={{ borderColor: `${Y}44`, backgroundColor: `${Y}11`, color: Y }}
//               >
//                 ✦ imperfect but real.
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll hint */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
//           <span className="text-[9px] tracking-[0.2em] uppercase text-white" style={{ fontFamily: "var(--font-mono)" }}>scroll</span>
//           <div className="w-px h-8 bg-white/30 animate-pulse" />
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════════════════════════════
//           MISSION — pastel pink wash panel
//       ═══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative py-24 px-5 overflow-hidden"
//         style={{ backgroundColor: `${M}14` }}
//       >
//         {/* Top edge */}
//         <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${M}55, transparent)` }} />
//         <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${M}55, transparent)` }} />

//         <FadeIn className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
//                 style={{ fontFamily: "var(--font-mono)", color: M }}>
//                 Why xoque exists
//               </p>
//               <h2
//                 className="font-black leading-[1.05] mb-6"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
//                   letterSpacing: "-0.04em",
//                   color: "#ffffff",
//                 }}
//               >
//                 Social media broke something real in us.
//               </h2>
//               <p className="text-white/45 leading-[1.8] text-[15px]" style={{ fontFamily: "var(--font-body)" }}>
//                 We spent years optimising posts for engagement instead of meaning. We curated instead of lived. We replaced presence with performance. xoque is a bet that people actually want to be real — they just needed a place that let them.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { val: "0", unit: "ads", label: "Ever. No advertising model.", accent: M },
//                 { val: "100%", unit: "live", label: "Every post, right now.", accent: C },
//                 { val: "0", unit: "AI posts", label: "Hard-blocked, architecturally.", accent: P },
//                 { val: "∞", unit: "real moments", label: "That's the whole point.", accent: Y },
//               ].map((s) => (
//                 <div
//                   key={s.label}
//                   className="rounded-2xl p-5 border"
//                   style={{ borderColor: `${s.accent}33`, backgroundColor: `${s.accent}0d` }}
//                 >
//                   <p
//                     className="font-black leading-none mb-0.5"
//                     style={{
//                       fontFamily: "var(--font-display)",
//                       fontSize: "2.2rem",
//                       letterSpacing: "-0.04em",
//                       color: s.accent,
//                     }}
//                   >
//                     {s.val}
//                   </p>
//                   <p className="text-white/50 text-[11px] font-bold uppercase tracking-[0.1em] mb-1"
//                     style={{ fontFamily: "var(--font-mono)" }}>{s.unit}</p>
//                   <p className="text-white/28 text-[11px] leading-snug" style={{ fontFamily: "var(--font-body)" }}>{s.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </FadeIn>
//       </section>

//       {/* ═══════════════════════════════════════════════════════════════════
//           GALLERY STRIP — masonry-ish dark section
//       ═══════════════════════════════════════════════════════════════════ */}
//       <section className="py-24 px-5 overflow-hidden" style={{ backgroundColor: "#07020f" }}>
//         <FadeIn className="max-w-6xl mx-auto">
//           <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/22 text-center mb-10"
//             style={{ fontFamily: "var(--font-mono)" }}>
//             xoque in the wild
//           </p>
//           <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
//             {GALLERY_IMGS.map((img, i) => (
//               <div
//                 key={img.label}
//                 className="relative overflow-hidden rounded-xl group"
//                 style={{
//                   aspectRatio: i % 3 === 1 ? "3/4" : "1/1",
//                   gridRow: i % 3 === 1 ? "span 1" : "span 1",
//                 }}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.label}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2"
//                   style={{ background: "linear-gradient(to top, rgba(7,2,15,0.8) 0%, transparent 60%)" }}
//                 >
//                   <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/70"
//                     style={{ fontFamily: "var(--font-mono)" }}>{img.label}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//       </section>

//       {/* ═══════════════════════════════════════════════════════════════════
//           TIMELINE — cyan tinted panel
//       ═══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative py-24 px-5 overflow-hidden"
//         style={{ backgroundColor: `${C}0f` }}
//       >
//         <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C}44, transparent)` }} />
//         <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C}44, transparent)` }} />

//         <div className="max-w-4xl mx-auto">
//           <FadeIn>
//             <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
//               style={{ fontFamily: "var(--font-mono)", color: C }}>
//               How we got here
//             </p>
//             <h2
//               className="font-black text-white mb-14 leading-tight"
//               style={{
//                 fontFamily: "var(--font-display)",
//                 fontSize: "clamp(2rem, 4vw, 3rem)",
//                 letterSpacing: "-0.04em",
//               }}
//             >
//               A short history of being real.
//             </h2>
//           </FadeIn>

//           {/* Timeline items */}
//           <div className="relative">
//             {/* Vertical line */}
//             <div className="absolute left-[68px] top-4 bottom-4 w-px hidden sm:block"
//               style={{ background: `linear-gradient(to bottom, ${C}44, ${P}44, transparent)` }} />

//             <div className="flex flex-col gap-10">
//               {TIMELINE.map((t, i) => (
//                 <FadeIn key={t.year} delay={i * 100}>
//                   <div className="flex items-start gap-8">
//                     {/* Year badge */}
//                     <div
//                       className="flex-shrink-0 w-[86px] text-right hidden sm:block"
//                     >
//                       <span
//                         className="text-[11px] font-bold"
//                         style={{ fontFamily: "var(--font-mono)", color: [C, P, M, Y][i] }}
//                       >
//                         {t.year}
//                       </span>
//                     </div>

//                     {/* Dot */}
//                     <div
//                       className="flex-shrink-0 w-3 h-3 rounded-full border-2 mt-1 relative z-10 hidden sm:block"
//                       style={{ borderColor: [C, P, M, Y][i], backgroundColor: "#07020f" }}
//                     />

//                     {/* Content */}
//                     <div
//                       className="flex-1 rounded-2xl p-6 border"
//                       style={{
//                         borderColor: `${[C, P, M, Y][i]}22`,
//                         backgroundColor: `${[C, P, M, Y][i]}09`,
//                       }}
//                     >
//                       {/* Mobile year */}
//                       <span className="sm:hidden text-[10px] font-bold mb-1 block"
//                         style={{ fontFamily: "var(--font-mono)", color: [C, P, M, Y][i] }}>
//                         {t.year}
//                       </span>
//                       <h3
//                         className="font-black text-white text-lg mb-1.5"
//                         style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
//                       >
//                         {t.label}
//                       </h3>
//                       <p className="text-white/42 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
//                         {t.body}
//                       </p>
//                     </div>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════════════════════════════
//           VALUES — dark, 2-col asymmetric
//       ═══════════════════════════════════════════════════════════════════ */}
//       <section className="py-24 px-5" style={{ backgroundColor: "#07020f" }}>
//         <div className="max-w-5xl mx-auto">
//           <FadeIn>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
//               {/* Left — big label */}
//               <div className="lg:sticky lg:top-32">
//                 <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
//                   style={{ fontFamily: "var(--font-mono)", color: P }}>
//                   What drives us
//                 </p>
//                 <h2
//                   className="font-black text-white leading-[1.05] mb-4"
//                   style={{
//                     fontFamily: "var(--font-display)",
//                     fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
//                     letterSpacing: "-0.04em",
//                   }}
//                 >
//                   Four things we refuse to compromise on.
//                 </h2>
//                 <p className="text-white/38 text-[14px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
//                   Not mission statements. Actual product decisions that cost us shortcuts.
//                 </p>
//               </div>

//               {/* Right — value cards */}
//               <div className="flex flex-col gap-4">
//                 {[
//                   { symbol: "✦", label: "Authenticity", desc: "Every feature is built around one question: does this make people more real, or less? If the answer is less, we don't ship it.", accent: P },
//                   { symbol: "◎", label: "Presence",     desc: "We believe the best moments are the ones you actually live, not the ones you spend curating. Design follows that belief.", accent: M },
//                   { symbol: "⊞", label: "Community",   desc: "xoque is built by people who were tired of feeling alone in a room full of followers. A real circle beats a big audience.", accent: C },
//                   { symbol: "⚡", label: "Now",         desc: "The past is a highlight reel. We care about this moment, right here. That's why everything we build is live-first.", accent: Y },
//                 ].map((v, i) => (
//                   <FadeIn key={v.label} delay={i * 80}>
//                     <div
//                       className="rounded-2xl p-6 border flex gap-4 items-start group hover:scale-[1.01] transition-transform"
//                       style={{ borderColor: `${v.accent}25`, backgroundColor: `${v.accent}0a` }}
//                     >
//                       <div
//                         className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border"
//                         style={{ borderColor: `${v.accent}33`, backgroundColor: `${v.accent}18` }}
//                       >
//                         {v.symbol}
//                       </div>
//                       <div>
//                         <h3 className="font-black text-white text-[1.05rem] mb-1.5"
//                           style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
//                           {v.label}
//                         </h3>
//                         <p className="text-white/40 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
//                           {v.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </FadeIn>
//                 ))}
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════════════════════════════
//           TEAM — yellow tinted panel with big photo cards
//       ═══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative py-24 px-5 overflow-hidden"
//         style={{ backgroundColor: `${Y}0a` }}
//       >
//         <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${Y}44, transparent)` }} />
//         <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${Y}44, transparent)` }} />

//         <div className="max-w-5xl mx-auto">
//           <FadeIn>
//             <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-3"
//               style={{ fontFamily: "var(--font-mono)", color: Y }}>
//               The people
//             </p>
//             <h2
//               className="font-black text-white mb-14 leading-tight"
//               style={{
//                 fontFamily: "var(--font-display)",
//                 fontSize: "clamp(2rem, 4vw, 3rem)",
//                 letterSpacing: "-0.04em",
//               }}
//             >
//               Small team. Unreasonable conviction.
//             </h2>
//           </FadeIn>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//             {TEAM.map((member, i) => (
//               <FadeIn key={member.name} delay={i * 80}>
//                 <div
//                   className="rounded-2xl overflow-hidden border group"
//                   style={{ borderColor: `${member.accent}33` }}
//                 >
//                   {/* Photo */}
//                   <div className="relative aspect-square overflow-hidden">
//                     <img
//                       src={member.avatar}
//                       alt={member.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                     {/* Color overlay on hover */}
//                     <div
//                       className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-400"
//                       style={{ backgroundColor: member.accent }}
//                     />
//                     {/* Gradient */}
//                     <div
//                       className="absolute inset-0"
//                       style={{ background: "linear-gradient(to top, rgba(7,2,15,0.85) 0%, rgba(7,2,15,0.1) 50%, transparent 100%)" }}
//                     />
//                     {/* Name overlay */}
//                     <div className="absolute bottom-0 left-0 right-0 p-4">
//                       <p className="font-black text-white text-[0.95rem] leading-tight"
//                         style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
//                         {member.name}
//                       </p>
//                       <p className="text-[10px] uppercase tracking-[0.1em]"
//                         style={{ fontFamily: "var(--font-mono)", color: member.accent }}>
//                         {member.role}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Quote */}
//                   <div
//                     className="p-4 border-t"
//                     style={{ borderColor: `${member.accent}22`, backgroundColor: `${member.accent}08` }}
//                   >
//                     <p className="text-white/45 text-[11px] leading-relaxed italic" style={{ fontFamily: "var(--font-body)" }}>
//                       "{member.quote}"
//                     </p>
//                   </div>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════════════════════════════
//           CLOSING CTA — dark with purple glow, big ghosted watermark
//       ═══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative py-32 px-5 overflow-hidden text-center"
//         style={{ backgroundColor: "#07020f" }}
//       >
//         {/* Centre glow */}
//         <div
//           className="absolute inset-0 flex items-center justify-center pointer-events-none"
//           aria-hidden
//         >
//           <div
//             className="w-[600px] h-[400px] rounded-full blur-[130px] opacity-25"
//             style={{ background: `radial-gradient(ellipse, ${P} 0%, #7c3aed 55%, transparent 80%)` }}
//           />
//         </div>

//         {/* Ghost watermark */}
//         <div
//           className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
//           aria-hidden
//         >
//           <span
//             className="font-black text-white/[0.025] whitespace-nowrap"
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(7rem, 22vw, 18rem)",
//               letterSpacing: "-0.06em",
//               lineHeight: 1,
//             }}
//           >
//             xoque
//           </span>
//         </div>

//         <div className="relative z-10 max-w-2xl mx-auto">
//           <FadeIn>
//             <p className="text-[9px] font-bold tracking-[0.25em] uppercase mb-5"
//               style={{ fontFamily: "var(--font-mono)", color: P }}>
//               Join us
//             </p>
//             <h2
//               className="font-black text-white mb-5 leading-[1.02]"
//               style={{
//                 fontFamily: "var(--font-display)",
//                 fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
//                 letterSpacing: "-0.05em",
//               }}
//             >
//               The real world<br />
//               <span style={{ color: P }}>is waiting.</span>
//             </h2>
//             <p className="text-white/40 mb-10 max-w-sm mx-auto leading-relaxed"
//               style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}>
//               12,000+ people already living in the moment. No performance. No algorithm. Just now.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <a
//                 href="/download"
//                 className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-black text-[14px] transition-all active:scale-95 hover:shadow-2xl"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   background: "#ffffff",
//                   color: "#3b0764",
//                   letterSpacing: "-0.01em",
//                   boxShadow: `0 0 40px ${P}44`,
//                 }}
//               >
//                 <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
//                 </svg>
//                 Download xoque
//               </a>
//               <a
//                 href="/community"
//                 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-[13px] border transition-all hover:bg-white/[0.06]"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   borderColor: "rgba(255,255,255,0.15)",
//                   color: "rgba(255,255,255,0.6)",
//                 }}
//               >
//                 Read community guidelines →
//               </a>
//             </div>

//             {/* Bottom note */}
//             <div className="mt-16 flex items-center justify-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: P }} />
//               <span className="text-[11px] text-white/18" style={{ fontFamily: "var(--font-mono)" }}>
//                 imperfect but real.
//               </span>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";

// // ── Fade-in on scroll ────────────────────────────────────────────────────────
// function FadeIn({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0)" : "translateY(24px)",
//         transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// // ── Data ────────────────────────────────────────────────────────────────────
// const TEAM = [
//   {
//     name: "Aryan S.",
//     role: "Founder & CEO",
//     quote: "I wanted an app I'd actually use. So I built it.",
//     avatar: "https://i.pravatar.cc/200?img=11",
//     accent: "#C095E4",
//     border: "rgba(192,149,228,0.5)",
//   },
//   {
//     name: "Meera K.",
//     role: "Head of Design",
//     quote: "Every pixel here is a decision against addiction.",
//     avatar: "https://i.pravatar.cc/200?img=32",
//     accent: "#FFA0C5",
//     border: "rgba(255,160,197,0.5)",
//   },
//   {
//     name: "Dev R.",
//     role: "Lead Engineer",
//     quote: "Real-time or nothing. That's the constraint we shipped around.",
//     avatar: "https://i.pravatar.cc/200?img=15",
//     accent: "#9BF6FF",
//     border: "rgba(155,246,255,0.5)",
//   },
//   {
//     name: "Sara T.",
//     role: "Community",
//     quote: "Communities don't scale. That's a feature, not a bug.",
//     avatar: "https://i.pravatar.cc/200?img=58",
//     accent: "#FDFFB6",
//     border: "rgba(253,255,182,0.6)",
//   },
// ];

// const TIMELINE = [
//   {
//     year: "2024",
//     label: "The idea",
//     body: "Tired of curated feeds and AI-generated noise, Aryan started building xoque in a Bangalore apartment.",
//     accent: "#C095E4",
//     bg: "rgba(192,149,228,0.07)",
//     border: "rgba(192,149,228,0.22)",
//   },
//   {
//     year: "Q1 '25",
//     label: "First build",
//     body: "Live-only posting shipped. The first test: 12 friends, zero gallery uploads allowed.",
//     accent: "#FFA0C5",
//     bg: "rgba(255,160,197,0.07)",
//     border: "rgba(255,160,197,0.22)",
//   },
//   {
//     year: "Q3 '25",
//     label: "Beta launch",
//     body: "500 invites sent. Every single one forwarded. Within a week, 12,000 people on the waitlist.",
//     accent: "#9BF6FF",
//     bg: "rgba(155,246,255,0.07)",
//     border: "rgba(155,246,255,0.28)",
//   },
//   {
//     year: "2026",
//     label: "Now",
//     body: "xoque is live. Real people. Real moments. No algorithm deciding what you see.",
//     accent: "#FDFFB6",
//     bg: "rgba(253,255,182,0.15)",
//     border: "rgba(253,255,182,0.4)",
//   },
// ];

// const GALLERY = [
//   { src: "https://xoque-lemon.vercel.app/images/1.jpeg", label: "Authentic" },
//   { src: "https://xoque-lemon.vercel.app/images/3.jpeg", label: "Que" },
//   { src: "https://xoque-lemon.vercel.app/images/5.jpeg", label: "Perspective" },
//   { src: "https://xoque-lemon.vercel.app/images/7.jpeg", label: "Live" },
//   { src: "https://xoque-lemon.vercel.app/images/9.jpeg", label: "Honest" },
//   { src: "https://xoque-lemon.vercel.app/images/2.jpeg", label: "Co-Create" },
// ];

// const VALUES = [
//   {
//     symbol: "✦",
//     label: "Authenticity",
//     desc: "Every feature is built around one question: does this make people more real, or less? If the answer is less, we don't ship it.",
//     accent: "#C095E4",
//     bg: "rgba(192,149,228,0.07)",
//     border: "rgba(192,149,228,0.22)",
//   },
//   {
//     symbol: "◎",
//     label: "Presence",
//     desc: "We believe the best moments are the ones you actually live, not the ones you spend curating. Design follows that belief.",
//     accent: "#FFA0C5",
//     bg: "rgba(255,160,197,0.07)",
//     border: "rgba(255,160,197,0.22)",
//   },
//   {
//     symbol: "⊞",
//     label: "Community",
//     desc: "xoque is built by people who were tired of feeling alone in a room full of followers. A real circle beats a big audience.",
//     accent: "#9BF6FF",
//     bg: "rgba(155,246,255,0.07)",
//     border: "rgba(155,246,255,0.28)",
//   },
//   {
//     symbol: "⚡",
//     label: "Now",
//     desc: "The past is a highlight reel. We care about this moment, right here. That's why everything we build is live-first.",
//     accent: "#FDFFB6",
//     bg: "rgba(253,255,182,0.15)",
//     border: "rgba(253,255,182,0.4)",
//   },
// ];

// // ── Page ────────────────────────────────────────────────────────────────────
// export default function AboutPage() {
//   return (
//     <div style={{ backgroundColor: "#fafaf8", overflowX: "hidden" }}>
//       <Navbar />

//       {/* ══════════════════════════════════════════════════════════════════
//           HERO
//       ══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative min-h-screen flex flex-col justify-center px-5 pt-32 pb-20 overflow-hidden"
//         style={{
//           background:
//             "linear-gradient(160deg, rgba(192,149,228,0.12) 0%, rgba(255,160,197,0.07) 40%, rgba(253,255,182,0.12) 80%, #fafaf8 100%)",
//         }}
//       >
//         {/* Ambient blobs */}
//         <div
//           className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(ellipse, rgba(192,149,228,0.18) 0%, transparent 70%)" }}
//         />
//         <div
//           className="absolute top-32 right-0 w-96 h-96 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(ellipse, rgba(255,160,197,0.14) 0%, transparent 70%)" }}
//         />
//         <div
//           className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(ellipse, rgba(155,246,255,0.12) 0%, transparent 70%)" }}
//         />

//         <div className="max-w-6xl mx-auto w-full relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//             {/* Left — text */}
//             <div>
//               <div
//                 className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-7"
//                 style={{
//                   backgroundColor: "rgba(192,149,228,0.1)",
//                   borderColor: "rgba(192,149,228,0.3)",
//                 }}
//               >
//                 <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#c095e4" }} />
//                 <span
//                   className="text-[11px] font-semibold tracking-[0.18em] uppercase"
//                   style={{ fontFamily: "var(--font-mono)", color: "#7c3aed" }}
//                 >
//                   Our Story
//                 </span>
//               </div>

//               <h1
//                 className="font-black mb-6 leading-[1.02]"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)",
//                   letterSpacing: "-0.05em",
//                   color: "#0f0a1e",
//                 }}
//               >
//                 We got tired
//                 <br />
//                 of{" "}
//                 <span className="relative inline-block" style={{ color: "#c095e4" }}>
//                   pretending.
//                   <svg
//                     className="absolute -bottom-1 left-0 w-full"
//                     height="6"
//                     viewBox="0 0 200 6"
//                     preserveAspectRatio="none"
//                     style={{ opacity: 0.45 }}
//                   >
//                     <path
//                       d="M0 4 Q25 0 50 3 Q75 6 100 3 Q125 0 150 3 Q175 6 200 3"
//                       fill="none"
//                       stroke="#FFA0C5"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>
//               </h1>

//               <p
//                 className="leading-[1.75] mb-8 max-w-lg"
//                 style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "#5a4a6a" }}
//               >
//                 Every platform pushed us to perform — to curate, to filter, to grow a number. xoque exists because we couldn't find a social app that felt honest. So we built the one we actually wanted.
//               </p>

//               <div className="flex items-center gap-4">
//                 <div className="flex -space-x-2.5">
//                   {[47, 32, 12, 58].map((n) => (
//                     <img
//                       key={n}
//                       src={`https://i.pravatar.cc/48?img=${n}`}
//                       className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
//                       alt=""
//                     />
//                   ))}
//                 </div>
//                 <p
//                   className="text-[13px]"
//                   style={{ fontFamily: "var(--font-body)", color: "#9b8aaa" }}
//                 >
//                   <span style={{ color: "#0f0a1e", fontWeight: 600 }}>12,000+</span> people already here
//                 </p>
//               </div>
//             </div>

//             {/* Right — floating photo collage */}
//             <div className="relative h-[480px] hidden lg:block">
//               {/* Main image */}
//               <div
//                 className="absolute top-0 right-0 w-[260px] h-[340px] rounded-2xl overflow-hidden border-4 shadow-xl"
//                 style={{ borderColor: "rgba(192,149,228,0.5)", boxShadow: "0 24px 60px rgba(192,149,228,0.2)" }}
//               >
//                 <img
//                   src="https://xoque-lemon.vercel.app/images/1.jpeg"
//                   className="w-full h-full object-cover"
//                   alt="Real moment"
//                 />
//                 <div
//                   className="absolute inset-0"
//                   style={{ background: "linear-gradient(to top, rgba(15,10,30,0.4) 0%, transparent 50%)" }}
//                 />
//                 <div className="absolute bottom-3 left-3">
//                   <span
//                     className="text-[9px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
//                     style={{
//                       fontFamily: "var(--font-mono)",
//                       backgroundColor: "#C095E4",
//                       color: "#fff",
//                     }}
//                   >
//                     Authentic
//                   </span>
//                 </div>
//               </div>

//               {/* Second image */}
//               <div
//                 className="absolute top-24 left-0 w-[200px] h-[260px] rounded-2xl overflow-hidden border-4 shadow-lg"
//                 style={{ borderColor: "rgba(255,160,197,0.5)", boxShadow: "0 16px 40px rgba(255,160,197,0.18)" }}
//               >
//                 <img
//                   src="https://xoque-lemon.vercel.app/images/2.jpeg"
//                   className="w-full h-full object-cover"
//                   alt="Co-create"
//                 />
//                 <div
//                   className="absolute inset-0"
//                   style={{ background: "linear-gradient(to top, rgba(15,10,30,0.4) 0%, transparent 50%)" }}
//                 />
//                 <div className="absolute bottom-3 left-3">
//                   <span
//                     className="text-[9px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
//                     style={{
//                       fontFamily: "var(--font-mono)",
//                       backgroundColor: "#FFA0C5",
//                       color: "#fff",
//                     }}
//                   >
//                     Co-Create
//                   </span>
//                 </div>
//               </div>

//               {/* Third image */}
//               <div
//                 className="absolute bottom-0 right-20 w-[180px] h-[220px] rounded-2xl overflow-hidden border-4 shadow-lg"
//                 style={{ borderColor: "rgba(155,246,255,0.5)", boxShadow: "0 16px 40px rgba(155,246,255,0.15)" }}
//               >
//                 <img
//                   src="https://xoque-lemon.vercel.app/images/7.jpeg"
//                   className="w-full h-full object-cover"
//                   alt="Live"
//                 />
//                 <div
//                   className="absolute inset-0"
//                   style={{ background: "linear-gradient(to top, rgba(15,10,30,0.4) 0%, transparent 50%)" }}
//                 />
//                 <div className="absolute bottom-3 left-3">
//                   <span
//                     className="text-[9px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
//                     style={{
//                       fontFamily: "var(--font-mono)",
//                       backgroundColor: "#9BF6FF",
//                       color: "#0a3d4a",
//                     }}
//                   >
//                     Live
//                   </span>
//                 </div>
//               </div>

//               {/* Floating pills */}
//               <div
//                 className="absolute top-6 left-8 px-3 py-1.5 rounded-full border text-[11px] font-semibold bg-white shadow-sm"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   borderColor: "rgba(192,149,228,0.3)",
//                   color: "#5a4a6a",
//                 }}
//               >
//                 🔴 Live now
//               </div>
//               <div
//                 className="absolute bottom-20 left-2 px-3 py-1.5 rounded-full border text-[11px] font-semibold bg-white shadow-sm"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   borderColor: "rgba(253,255,182,0.6)",
//                   color: "#5a4a6a",
//                 }}
//               >
//                 ✦ imperfect but real.
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll hint */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
//           <span
//             className="text-[9px] tracking-[0.2em] uppercase"
//             style={{ fontFamily: "var(--font-mono)", color: "#5a4a6a" }}
//           >
//             scroll
//           </span>
//           <div className="w-px h-7 animate-pulse" style={{ backgroundColor: "#c095e4" }} />
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════════════════════
//           MISSION — pastel pink tinted panel
//       ══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative py-24 px-5"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(255,160,197,0.1) 0%, rgba(192,149,228,0.06) 100%)",
//           borderTop: "1px solid rgba(255,160,197,0.2)",
//           borderBottom: "1px solid rgba(255,160,197,0.2)",
//         }}
//       >
//         <FadeIn className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <p
//                 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
//                 style={{ fontFamily: "var(--font-mono)", color: "#be185d" }}
//               >
//                 Why xoque exists
//               </p>
//               <h2
//                 className="font-black leading-[1.05] mb-6"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
//                   letterSpacing: "-0.04em",
//                   color: "#0f0a1e",
//                 }}
//               >
//                 Social media broke something real in us.
//               </h2>
//               <p
//                 className="leading-[1.8] text-[15px]"
//                 style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
//               >
//                 We spent years optimising posts for engagement instead of meaning. We curated instead of lived. We replaced presence with performance. xoque is a bet that people actually want to be real — they just needed a place that let them.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { val: "0",    unit: "ads",        label: "Ever. No advertising model.",   accent: "#C095E4" },
//                 { val: "100%", unit: "live",        label: "Every post, right now.",        accent: "#9BF6FF" },
//                 { val: "0",    unit: "AI posts",    label: "Hard-blocked, architecturally.", accent: "#FFA0C5" },
//                 { val: "∞",    unit: "real moments",label: "That's the whole point.",       accent: "#FDFFB6" },
//               ].map((s) => (
//                 <div
//                   key={s.unit}
//                   className="rounded-2xl p-5 border"
//                   style={{
//                     backgroundColor: s.accent + "12",
//                     borderColor: s.accent + "44",
//                   }}
//                 >
//                   <p
//                     className="font-black leading-none mb-0.5"
//                     style={{
//                       fontFamily: "var(--font-body)",
//                       fontSize: "2.2rem",
//                       letterSpacing: "-0.04em",
//                       color: s.accent === "#FDFFB6" ? "#7a6600" : s.accent,
//                     }}
//                   >
//                     {s.val}
//                   </p>
//                   <p
//                     className="font-semibold uppercase tracking-[0.1em] mb-1 text-[10px]"
//                     style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
//                   >
//                     {s.unit}
//                   </p>
//                   <p
//                     className="text-[11px] leading-snug"
//                     style={{ fontFamily: "var(--font-body)", color: "#9b8aaa" }}
//                   >
//                     {s.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </FadeIn>
//       </section>

//       {/* ══════════════════════════════════════════════════════════════════
//           GALLERY
//       ══════════════════════════════════════════════════════════════════ */}
//       <section className="py-20 px-5" style={{ backgroundColor: "#fafaf8" }}>
//         <FadeIn className="max-w-6xl mx-auto">
//           <p
//             className="text-[10px] font-semibold tracking-[0.2em] uppercase text-center mb-3"
//             style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
//           >
//             xoque in the wild
//           </p>
//           <h2
//             className="font-black text-center mb-10"
//             style={{
//               fontFamily: "var(--font-body)",
//               fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
//               letterSpacing: "-0.03em",
//               color: "#0f0a1e",
//             }}
//           >
//             Real moments. Real people.
//           </h2>
//           <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
//             {GALLERY.map((img, i) => (
//               <div
//                 key={img.label}
//                 className="relative overflow-hidden rounded-xl group cursor-pointer"
//                 style={{ aspectRatio: "1/1" }}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.label}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2"
//                   style={{ background: "linear-gradient(to top, rgba(15,10,30,0.65) 0%, transparent 60%)" }}
//                 >
//                   <span
//                     className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white"
//                     style={{ fontFamily: "var(--font-mono)" }}
//                   >
//                     {img.label}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//       </section>

//       {/* ══════════════════════════════════════════════════════════════════
//           TIMELINE — cyan tinted
//       ══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative py-24 px-5"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(155,246,255,0.08) 0%, rgba(192,149,228,0.05) 100%)",
//           borderTop: "1px solid rgba(155,246,255,0.2)",
//           borderBottom: "1px solid rgba(155,246,255,0.2)",
//         }}
//       >
//         <div className="max-w-4xl mx-auto">
//           <FadeIn>
//             <p
//               className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3"
//               style={{ fontFamily: "var(--font-mono)", color: "#0891b2" }}
//             >
//               How we got here
//             </p>
//             <h2
//               className="font-black mb-14 leading-tight"
//               style={{
//                 fontFamily: "var(--font-body)",
//                 fontSize: "clamp(2rem, 4vw, 3rem)",
//                 letterSpacing: "-0.04em",
//                 color: "#0f0a1e",
//               }}
//             >
//               A short history of being real.
//             </h2>
//           </FadeIn>

//           <div className="relative">
//             {/* Vertical line */}
//             <div
//               className="absolute left-[74px] top-4 bottom-4 w-px hidden sm:block"
//               style={{
//                 background:
//                   "linear-gradient(to bottom, rgba(155,246,255,0.5), rgba(192,149,228,0.5), transparent)",
//               }}
//             />

//             <div className="flex flex-col gap-8">
//               {TIMELINE.map((t, i) => (
//                 <FadeIn key={t.year} delay={i * 80}>
//                   <div className="flex items-start gap-6">
//                     {/* Year */}
//                     <div className="flex-shrink-0 w-[90px] text-right hidden sm:block">
//                       <span
//                         className="text-[11px] font-bold"
//                         style={{ fontFamily: "var(--font-mono)", color: t.accent === "#FDFFB6" ? "#7a6600" : t.accent }}
//                       >
//                         {t.year}
//                       </span>
//                     </div>

//                     {/* Dot */}
//                     <div
//                       className="flex-shrink-0 w-3 h-3 rounded-full border-2 mt-1 relative z-10 hidden sm:block bg-white"
//                       style={{ borderColor: t.accent === "#FDFFB6" ? "#c9a700" : t.accent }}
//                     />

//                     {/* Card */}
//                     <div
//                       className="flex-1 rounded-2xl p-6 border"
//                       style={{ backgroundColor: t.bg, borderColor: t.border }}
//                     >
//                       <span
//                         className="sm:hidden text-[10px] font-bold mb-1 block"
//                         style={{ fontFamily: "var(--font-mono)", color: t.accent === "#FDFFB6" ? "#7a6600" : t.accent }}
//                       >
//                         {t.year}
//                       </span>
//                       <h3
//                         className="font-bold text-lg mb-1.5"
//                         style={{
//                           fontFamily: "var(--font-body)",
//                           letterSpacing: "-0.02em",
//                           color: "#0f0a1e",
//                         }}
//                       >
//                         {t.label}
//                       </h3>
//                       <p
//                         className="text-[13px] leading-relaxed"
//                         style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
//                       >
//                         {t.body}
//                       </p>
//                     </div>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════════════════════
//           VALUES — asymmetric sticky layout
//       ══════════════════════════════════════════════════════════════════ */}
//       <section className="py-24 px-5" style={{ backgroundColor: "#fafaf8" }}>
//         <div className="max-w-5xl mx-auto">
//           <FadeIn>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//               {/* Sticky left */}
//               <div className="lg:sticky lg:top-32">
//                 <p
//                   className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
//                   style={{ fontFamily: "var(--font-mono)", color: "#7c3aed" }}
//                 >
//                   What drives us
//                 </p>
//                 <h2
//                   className="font-black leading-[1.05] mb-4"
//                   style={{
//                     fontFamily: "var(--font-body)",
//                     fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
//                     letterSpacing: "-0.04em",
//                     color: "#0f0a1e",
//                   }}
//                 >
//                   Four things we refuse to compromise on.
//                 </h2>
//                 <p
//                   className="text-[14px] leading-relaxed"
//                   style={{ fontFamily: "var(--font-body)", color: "#9b8aaa" }}
//                 >
//                   Not mission statements. Actual product decisions that cost us shortcuts.
//                 </p>
//               </div>

//               {/* Right — cards */}
//               <div className="flex flex-col gap-4">
//                 {VALUES.map((v, i) => (
//                   <FadeIn key={v.label} delay={i * 70}>
//                     <div
//                       className="rounded-2xl p-6 border flex gap-4 items-start transition-all hover:shadow-md hover:-translate-y-0.5"
//                       style={{ backgroundColor: v.bg, borderColor: v.border }}
//                     >
//                       <div
//                         className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
//                         style={{ backgroundColor: v.accent + "22" }}
//                       >
//                         {v.symbol}
//                       </div>
//                       <div>
//                         <h3
//                           className="font-bold text-[1.05rem] mb-1.5"
//                           style={{
//                             fontFamily: "var(--font-body)",
//                             letterSpacing: "-0.02em",
//                             color: "#0f0a1e",
//                           }}
//                         >
//                           {v.label}
//                         </h3>
//                         <p
//                           className="text-[13px] leading-relaxed"
//                           style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
//                         >
//                           {v.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </FadeIn>
//                 ))}
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════════════════════
//           TEAM — yellow tinted
//       ══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative py-24 px-5"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(253,255,182,0.18) 0%, rgba(192,149,228,0.06) 100%)",
//           borderTop: "1px solid rgba(253,255,182,0.35)",
//           borderBottom: "1px solid rgba(253,255,182,0.35)",
//         }}
//       >
//         <div className="max-w-5xl mx-auto">
//           <FadeIn>
//             <p
//               className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3"
//               style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
//             >
//               The people
//             </p>
//             <h2
//               className="font-black mb-14 leading-tight"
//               style={{
//                 fontFamily: "var(--font-body)",
//                 fontSize: "clamp(2rem, 4vw, 3rem)",
//                 letterSpacing: "-0.04em",
//                 color: "#0f0a1e",
//               }}
//             >
//               Small team. Unreasonable conviction.
//             </h2>
//           </FadeIn>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
//             {TEAM.map((member, i) => (
//               <FadeIn key={member.name} delay={i * 70}>
//                 <div
//                   className="rounded-2xl overflow-hidden border-2 bg-white shadow-sm group transition-all hover:shadow-lg hover:-translate-y-1"
//                   style={{ borderColor: member.border }}
//                 >
//                   {/* Photo */}
//                   <div className="relative aspect-square overflow-hidden">
//                     <img
//                       src={member.avatar}
//                       alt={member.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                     {/* Subtle overlay */}
//                     <div
//                       className="absolute inset-0"
//                       style={{
//                         background:
//                           "linear-gradient(to top, rgba(15,10,30,0.6) 0%, rgba(15,10,30,0.05) 50%, transparent 100%)",
//                       }}
//                     />
//                     {/* Name */}
//                     <div className="absolute bottom-0 left-0 right-0 p-3">
//                       <p
//                         className="font-black text-white text-[0.9rem] leading-tight"
//                         style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.02em" }}
//                       >
//                         {member.name}
//                       </p>
//                       <p
//                         className="text-[9px] uppercase tracking-[0.1em] font-semibold"
//                         style={{ fontFamily: "var(--font-mono)", color: member.accent }}
//                       >
//                         {member.role}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Quote */}
//                   <div
//                     className="p-4 border-t"
//                     style={{ borderColor: member.border }}
//                   >
//                     <p
//                       className="text-[11px] leading-relaxed italic"
//                       style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
//                     >
//                       "{member.quote}"
//                     </p>
//                   </div>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════════════════════
//           CLOSING CTA
//       ══════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative py-32 px-5 text-center overflow-hidden"
//         style={{
//           background:
//             "linear-gradient(160deg, rgba(192,149,228,0.1) 0%, rgba(255,160,197,0.07) 50%, #fafaf8 100%)",
//         }}
//       >
//         <div
//           className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
//           aria-hidden
//         >
//           <span
//             className="font-black whitespace-nowrap"
//             style={{
//               fontFamily: "'Arimo', sans-serif",
//               fontSize: "clamp(6rem, 20vw, 16rem)",
//               letterSpacing: "-0.06em",
//               lineHeight: 1,
//               color: "rgba(192,149,228,0.07)",
//             }}
//           >
//             xoque
//           </span>
//         </div>

//         <div className="relative z-10 max-w-2xl mx-auto">
//           <FadeIn>
//             <p
//               className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5"
//               style={{ fontFamily: "var(--font-mono)", color: "#7c3aed" }}
//             >
//               Join us
//             </p>
//             <h2
//               className="font-black mb-5 leading-[1.02]"
//               style={{
//                 fontFamily: "var(--font-body)",
//                 fontSize: "clamp(2.6rem, 7vw, 5rem)",
//                 letterSpacing: "-0.05em",
//                 color: "#0f0a1e",
//               }}
//             >
//               The real world
//               <br />
//               <span style={{ color: "#c095e4" }}>is waiting.</span>
//             </h2>
//             <p
//               className="mb-10 max-w-sm mx-auto leading-relaxed"
//               style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#5a4a6a" }}
//             >
//               12,000+ people already living in the moment. No performance. No algorithm. Just now.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <a
//                 href="/download"
//                 className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-[14px] transition-all active:scale-95 hover:opacity-90"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   background: "#c095e4",
//                   color: "#fff",
//                   boxShadow: "0 8px 28px rgba(192,149,228,0.4)",
//                 }}
//               >
//                 <svg
//                   width={14}
//                   height={14}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
//                   />
//                 </svg>
//                 Download xoque
//               </a>
//               <a
//                 href="/community"
//                 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[13px] border transition-all hover:bg-black/5"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   borderColor: "rgba(192,149,228,0.35)",
//                   color: "#7c3aed",
//                 }}
//               >
//                 Read community guidelines →
//               </a>
//             </div>

//             <div className="mt-14 flex items-center justify-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#c095e4" }} />
//               <span
//                 className="text-[11px]"
//                 style={{ fontFamily: "var(--font-mono)", color: "#c4b5d4" }}
//               >
//                 imperfect but real.
//               </span>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


"use client";

import { PageShell, FadeIn, Badge, C, T } from "@/lib/pageUtils";

const TEAM = [
  { name: "Aryan S.",  role: "Founder & CEO",  quote: "I wanted an app I'd actually use. So I built it.",                         avatar: "https://i.pravatar.cc/300?img=11", accent: C.purple },
  { name: "Meera K.", role: "Head of Design",  quote: "Every pixel here is a decision against addiction.",                        avatar: "https://i.pravatar.cc/300?img=32", accent: C.pink   },
  { name: "Dev R.",   role: "Lead Engineer",   quote: "Real-time or nothing. That's the constraint we shipped around.",          avatar: "https://i.pravatar.cc/300?img=15", accent: C.cyan   },
  { name: "Sara T.",  role: "Community Lead",  quote: "Communities don't scale. That's a feature, not a bug.",                   avatar: "https://i.pravatar.cc/300?img=58", accent: C.yellow },
];

const TIMELINE = [
  { year: "2024",    label: "The idea",     body: "Tired of curated feeds and AI-generated noise, Aryan started building xoque in a Bangalore apartment.", accent: C.purple },
  { year: "Q1 '25", label: "First build",  body: "Live-only posting shipped. First test: 12 friends, zero gallery uploads allowed.",                       accent: C.pink   },
  { year: "Q3 '25", label: "Beta launch",  body: "500 invites sent. Every single one forwarded. Within a week, 12,000 people on the waitlist.",            accent: C.cyan   },
  { year: "2026",   label: "Now",          body: "xoque is live. Real people. Real moments. No algorithm deciding what you see.",                          accent: C.yellow },
];

const VALUES = [
  { symbol: "✦", label: "Authenticity", desc: "Every feature is built around one question: does this make people more real, or less? If the answer is less, we don't ship it.", accent: C.purple },
  { symbol: "◎", label: "Presence",     desc: "We believe the best moments are the ones you actually live, not the ones you spend curating. Design follows that belief.",        accent: C.pink   },
  { symbol: "⊞", label: "Community",   desc: "xoque is built by people who were tired of feeling alone in a room full of followers. A real circle beats a big audience.",       accent: C.cyan   },
  { symbol: "⚡", label: "Now",         desc: "The past is a highlight reel. We care about this moment, right here. That's why everything we build is live-first.",             accent: C.yellow },
];

const GALLERY = [
  "https://xoque-lemon.vercel.app/images/1.jpeg",
  "https://xoque-lemon.vercel.app/images/3.jpeg",
  "https://xoque-lemon.vercel.app/images/5.jpeg",
  "https://xoque-lemon.vercel.app/images/7.jpeg",
  "https://xoque-lemon.vercel.app/images/9.jpeg",
  "https://xoque-lemon.vercel.app/images/2.jpeg",
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-24 px-5 overflow-hidden"
        style={{
          background: `linear-gradient(150deg, ${C.purple}1a 0%, ${C.pink}0d 45%, ${C.bg} 100%)`,
        }}
      >
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${C.purple}22 0%, transparent 70%)` }} />
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${C.pink}18 0%, transparent 70%)` }} />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div>
              <Badge label="Our Story" accent={C.purple} />
              <h1 className="font-black mb-6 leading-[1.0]"
                style={{ fontFamily: "var(--font-body)", fontSize: T.h1, letterSpacing: "-0.05em", color: C.dark }}>
                We got tired<br />of{" "}
                <span className="relative inline-block" style={{ color: C.purple }}>
                  pretending.
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" style={{ opacity: 0.5 }}>
                    <path d="M0 4 Q25 0 50 3 Q75 6 100 3 Q125 0 150 3 Q175 6 200 3" fill="none" stroke={C.pink} strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "var(--font-body)", fontSize: T.lead, color: C.body }}>
                Every platform pushed us to perform — to curate, to filter, to grow a number. xoque exists because we couldn't find a social app that felt honest. So we built the one we actually wanted.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {[47,32,12,58].map(n => (
                    <img key={n} src={`https://i.pravatar.cc/48?img=${n}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="" />
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.muted }}>
                  <span style={{ color: C.dark, fontWeight: 700 }}>12,000+</span> people already here
                </p>
              </div>
            </div>

            {/* Photo collage */}
            <div className="relative h-[460px] hidden lg:block">
              <div className="absolute top-0 right-0 w-[255px] h-[335px] rounded-2xl overflow-hidden border-[3px] shadow-2xl"
                style={{ borderColor: C.purple + "88", boxShadow: `0 24px 60px ${C.purple}28` }}>
                <img src="https://xoque-lemon.vercel.app/images/1.jpeg" className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(15,10,30,0.55) 0%,transparent 55%)" }} />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-mono)", background: C.purple, color: "#fff" }}>Authentic</span>
              </div>
              <div className="absolute top-24 left-0 w-[200px] h-[255px] rounded-2xl overflow-hidden border-[3px] shadow-xl"
                style={{ borderColor: C.pink + "88", boxShadow: `0 16px 40px ${C.pink}22` }}>
                <img src="https://xoque-lemon.vercel.app/images/2.jpeg" className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(15,10,30,0.55) 0%,transparent 55%)" }} />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-mono)", background: C.pink, color: "#fff" }}>Co-Create</span>
              </div>
              <div className="absolute bottom-0 right-20 w-[175px] h-[215px] rounded-2xl overflow-hidden border-[3px] shadow-xl"
                style={{ borderColor: C.cyan + "88", boxShadow: `0 16px 40px ${C.cyan}22` }}>
                <img src="https://xoque-lemon.vercel.app/images/7.jpeg" className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(15,10,30,0.55) 0%,transparent 55%)" }} />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-mono)", background: C.cyan, color: "#0a3d4a" }}>Live</span>
              </div>
              {/* Pills */}
              <div className="absolute top-4 left-6 px-4 py-2 rounded-full border bg-white shadow-sm text-[14px] font-semibold"
                style={{ fontFamily: "var(--font-body)", borderColor: C.purple + "44", color: C.mid }}>🔴 Live now</div>
              <div className="absolute bottom-16 left-0 px-4 py-2 rounded-full border bg-white shadow-sm text-[14px] font-semibold"
                style={{ fontFamily: "var(--font-body)", borderColor: C.yellow + "88", color: C.mid }}>✦ imperfect but real.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 px-5" style={{ background: `linear-gradient(135deg, ${C.pink}10 0%, ${C.purple}08 100%)`, borderTop: `1px solid ${C.pink}33`, borderBottom: `1px solid ${C.pink}33` }}>
        <FadeIn className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge label="Why xoque exists" accent={C.pink} />
              <h2 className="font-black leading-[1.05] mb-5" style={{ fontFamily: "var(--font-body)", fontSize: T.h2, letterSpacing: "-0.04em", color: C.dark }}>
                Social media broke something real in us.
              </h2>
              <p className="leading-relaxed" style={{ fontFamily: "var(--font-body)", fontSize: T.lead, color: C.body }}>
                We spent years optimising posts for engagement instead of meaning. We curated instead of lived. We replaced presence with performance. xoque is a bet that people actually want to be real — they just needed a place that let them.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "0",    unit: "ads",         label: "No advertising model. Ever.",   accent: C.purple },
                { val: "100%", unit: "live",         label: "Every single post, right now.", accent: C.cyan   },
                { val: "0",    unit: "AI posts",     label: "Hard-blocked architecturally.", accent: C.pink   },
                { val: "∞",    unit: "real moments", label: "That's the whole point.",       accent: C.yellow },
              ].map(s => (
                <div key={s.unit} className="rounded-2xl p-5 border" style={{ backgroundColor: s.accent + "14", borderColor: s.accent + "44" }}>
                  <p className="font-black leading-none mb-1" style={{ fontFamily: "var(--font-body)", fontSize: "2.4rem", letterSpacing: "-0.05em", color: s.accent === C.yellow ? "#7a6600" : s.accent }}>{s.val}</p>
                  <p className="font-bold uppercase tracking-[0.1em] mb-1" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: C.muted }}>{s.unit}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.muted }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20 px-5" style={{ backgroundColor: C.bg }}>
        <FadeIn className="max-w-6xl mx-auto">
          <p className="font-bold text-center mb-3 uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: C.muted }}>xoque in the wild</p>
          <h2 className="font-black text-center mb-10" style={{ fontFamily: "var(--font-body)", fontSize: T.h2sm, letterSpacing: "-0.03em", color: C.dark }}>Real moments. Real people.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl group cursor-pointer" style={{ aspectRatio: "1/1" }}>
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to top,rgba(15,10,30,0.65) 0%,transparent 60%)" }} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-5" style={{ background: `linear-gradient(135deg, ${C.cyan}0d 0%, ${C.purple}08 100%)`, borderTop: `1px solid ${C.cyan}33`, borderBottom: `1px solid ${C.cyan}33` }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Badge label="How we got here" accent={C.cyan} />
            <h2 className="font-black mb-14 leading-tight" style={{ fontFamily: "var(--font-body)", fontSize: T.h2sm, letterSpacing: "-0.04em", color: C.dark }}>A short history of being real.</h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-[76px] top-4 bottom-4 w-px hidden sm:block"
              style={{ background: `linear-gradient(to bottom, ${C.cyan}55, ${C.purple}55, transparent)` }} />
            <div className="flex flex-col gap-8">
              {TIMELINE.map((t, i) => (
                <FadeIn key={t.year} delayMs={i * 80}>
                  <div className="flex items-start gap-5">
                    <div className="hidden sm:block flex-shrink-0 w-[88px] text-right">
                      <span className="font-bold" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: t.accent === C.yellow ? "#7a6600" : t.accent }}>{t.year}</span>
                    </div>
                    <div className="hidden sm:block flex-shrink-0 w-3 h-3 rounded-full border-2 mt-1.5 relative z-10 bg-white" style={{ borderColor: t.accent === C.yellow ? "#c9a700" : t.accent }} />
                    <div className="flex-1 rounded-2xl p-6 border" style={{ backgroundColor: t.accent + "0f", borderColor: t.accent + "33" }}>
                      <span className="sm:hidden font-bold block mb-1" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: t.accent === C.yellow ? "#7a6600" : t.accent }}>{t.year}</span>
                      <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-body)", fontSize: T.h4, letterSpacing: "-0.02em", color: C.dark }}>{t.label}</h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.body, lineHeight: 1.7 }}>{t.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 px-5" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="lg:sticky lg:top-28">
                <Badge label="What drives us" accent={C.purple} />
                <h2 className="font-black leading-[1.05] mb-4" style={{ fontFamily: "var(--font-body)", fontSize: T.h2sm, letterSpacing: "-0.04em", color: C.dark }}>Four things we refuse to compromise on.</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: T.lead, color: C.muted }}>Not mission statements. Actual product decisions that cost us shortcuts.</p>
              </div>
              <div className="flex flex-col gap-4">
                {VALUES.map((v, i) => (
                  <FadeIn key={v.label} delayMs={i * 70}>
                    <div className="rounded-2xl p-6 border flex gap-4 items-start transition-all hover:shadow-md hover:-translate-y-0.5"
                      style={{ backgroundColor: v.accent + "0f", borderColor: v.accent + "33" }}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: v.accent + "22" }}>{v.symbol}</div>
                      <div>
                        <h3 className="font-bold mb-1.5" style={{ fontFamily: "var(--font-body)", fontSize: T.h4, letterSpacing: "-0.02em", color: C.dark }}>{v.label}</h3>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.body, lineHeight: 1.7 }}>{v.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 px-5" style={{ background: `linear-gradient(135deg, ${C.yellow}18 0%, ${C.purple}08 100%)`, borderTop: `1px solid ${C.yellow}55`, borderBottom: `1px solid ${C.yellow}55` }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Badge label="The people" accent={C.yellow} />
            <h2 className="font-black mb-14 leading-tight" style={{ fontFamily: "var(--font-body)", fontSize: T.h2sm, letterSpacing: "-0.04em", color: C.dark }}>Small team. Unreasonable conviction.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delayMs={i * 70}>
                <div className="rounded-2xl overflow-hidden border-2 bg-white shadow-sm group transition-all hover:shadow-xl hover:-translate-y-1"
                  style={{ borderColor: m.accent + "66" }}>
                  <div className="relative aspect-square overflow-hidden">
                    <img src={m.avatar} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(15,10,30,0.65) 0%,rgba(15,10,30,0.05) 55%,transparent 100%)" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-black text-white leading-tight mb-0.5" style={{ fontFamily: "var(--font-body)", fontSize: T.h4, letterSpacing: "-0.02em" }}>{m.name}</p>
                      <p className="font-bold uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: m.accent }}>{m.role}</p>
                    </div>
                  </div>
                  <div className="p-4 border-t" style={{ borderColor: m.accent + "33" }}>
                    <p className="italic" style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.body, lineHeight: 1.6 }}>"{m.quote}"</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 px-5 text-center overflow-hidden" style={{ backgroundColor: C.bg }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="font-black whitespace-nowrap" style={{ fontFamily: "'Arimo', sans-serif", fontSize: "clamp(6rem,20vw,16rem)", letterSpacing: "-0.06em", lineHeight: 1, color: C.purple + "0e" }}>xoque</span>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <FadeIn>
            <Badge label="Join us" accent={C.purple} />
            <h2 className="font-black mb-5 leading-[1.02]" style={{ fontFamily: "var(--font-body)", fontSize: T.h1, letterSpacing: "-0.05em", color: C.dark }}>
              The real world<br /><span style={{ color: C.purple }}>is waiting.</span>
            </h2>
            <p className="mb-10 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)", fontSize: T.lead, color: C.body }}>
              12,000+ people already living in the moment. No performance. No algorithm. Just now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/download" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold transition-all active:scale-95 hover:opacity-90"
                style={{ fontFamily: "var(--font-body)", fontSize: T.body, background: C.purple, color: "#fff", boxShadow: `0 8px 28px ${C.purple}55` }}>
                <svg width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" /></svg>
                Download xoque
              </a>
              <a href="/community" className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold border transition-all hover:bg-black/5"
                style={{ fontFamily: "var(--font-body)", fontSize: T.body, borderColor: C.purple + "44", color: C.mid }}>
                Community guidelines →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}