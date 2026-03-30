// "use client";

// import { useEffect, useState } from "react";

// const LETTERS = ["X", "O", "Q", "U", "E"];

// export default function Hero() {
//   const [visibleCount, setVisibleCount] = useState(0);
//   const [glowActive, setGlowActive] = useState(false);
//   const [taglineIn, setTaglineIn] = useState(false);
//   const [buttonsIn, setButtonsIn] = useState(false);
//   const [badgeIn, setBadgeIn] = useState(false);

//   useEffect(() => {
//     const timers: ReturnType<typeof setTimeout>[] = [];

//     timers.push(setTimeout(() => setBadgeIn(true), 250));

//     for (let i = 0; i < LETTERS.length; i++) {
//       timers.push(setTimeout(() => setVisibleCount(i + 1), 550 + i * 120));
//     }

//     timers.push(setTimeout(() => setGlowActive(true), 550 + LETTERS.length * 120 + 100));
//     timers.push(setTimeout(() => setTaglineIn(true), 1100));
//     timers.push(setTimeout(() => setButtonsIn(true), 1350));

//     return () => timers.forEach(clearTimeout);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d1a] px-5 pt-28 pb-20">

//       {/* Purple ambient glow — matches UI reference hero */}
//       <div
//         aria-hidden
//         className={`pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[360px] transition-opacity duration-1000 ${glowActive ? "opacity-100" : "opacity-0"}`}
//         style={{
//           background:
//             "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.18) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
//         }}
//       />

//       {/* Badge */}
//       <div
//         className={`mb-10 transition-all duration-500 ${
//           badgeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
//         }`}
//       >
//         <span
//           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-medium text-white/50 tracking-[0.16em] uppercase"
//           style={{ fontFamily: "'DM Mono', monospace" }}
//         >
//           <span className="w-1.5 h-1.5 rounded-full bg-[#f0c040]" />
//           Real content · No AI · No filters
//         </span>
//       </div>

//       {/* XOQUE Heading — opacity + translateX wipe, NO clip-path on text */}
//       <div className="relative flex items-center justify-center mb-7">
//         {LETTERS.map((letter, i) => {
//           const visible = i < visibleCount;
//           return (
//             <span
//               key={letter}
//               className="select-none font-black leading-none"
//               style={{
//                 fontFamily: "'Syne', 'Helvetica Neue', sans-serif",
//                 fontSize: "clamp(4rem, 19vw, 10.5rem)",
//                 letterSpacing: "-0.03em",
//                 // Animation: slide in from left + fade — avoids background/backgroundClip conflict
//                 opacity: visible ? 1 : 0,
//                 transform: visible ? "translateX(0px)" : "translateX(-16px)",
//                 transition: "opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)",
//                 transitionDelay: `${i * 30}ms`,
//               }}
//             >
//               {/*
//                 Gradient text uses a child <span> so `background` and
//                 `WebkitBackgroundClip` never coexist with animated props on the same node.
//                 This eliminates the shorthand conflict warning entirely.
//               */}
//               <GradientLetter active={glowActive}>{letter}</GradientLetter>
//             </span>
//           );
//         })}

//         {/* Yellow underline draws in after full reveal */}
//         <span
//           aria-hidden
//           className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-[#f0c040] transition-all duration-700 ease-out ${
//             glowActive ? "w-full opacity-100" : "w-0 opacity-0"
//           }`}
//           style={{ transitionDelay: "80ms" }}
//         />
//       </div>

//       {/* Tagline */}
//       <p
//         className={`text-center max-w-[280px] sm:max-w-sm md:max-w-md text-[14px] sm:text-[15px] md:text-base text-white/45 font-medium leading-relaxed mb-12 transition-all duration-500 ${
//           taglineIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
//         }`}
//         style={{ fontFamily: "'DM Sans', sans-serif" }}
//       >
//         The feed that shows you{" "}
//         <span className="text-white font-semibold">what's real</span>
//         {" "}— unfiltered moments,{" "}
//         <span className="text-white font-semibold">genuine people</span>
//         {", "}zero algorithmic noise.
//       </p>

//       {/* CTA Buttons */}
//       <div
//         className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-[280px] sm:max-w-none sm:w-auto transition-all duration-500 ${
//           buttonsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//       >
//         <a
//           href="#android"
//           className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#f0c040] text-[#0d0d1a] text-sm font-bold overflow-hidden hover:bg-white active:scale-95 transition-all duration-200 shadow-[0_4px_20px_rgba(240,192,64,0.22)] hover:shadow-[0_4px_28px_rgba(240,192,64,0.38)]"
//           style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
//         >
//           <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none" />
//           <AndroidIcon />
//           Download for Android
//         </a>

//         <a
//           href="#ios"
//           className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.04] text-white text-sm font-semibold hover:bg-white/[0.08] hover:border-white/25 active:scale-95 transition-all duration-200"
//           style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
//         >
//           <AppleIcon />
//           Download for iOS
//         </a>
//       </div>

//       {/* Social proof */}
//       <div
//         className={`mt-11 flex items-center gap-3 transition-all duration-500 delay-300 ${
//           buttonsIn ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="flex -space-x-2">
//           {["#7c3aed", "#f0c040", "#34d399", "#a78bfa"].map((c, i) => (
//             <div
//               key={i}
//               className="w-6 h-6 rounded-full border-2 border-[#0d0d1a]"
//               style={{ backgroundColor: c }}
//             />
//           ))}
//         </div>
//         <p
//           className="text-[12px] text-white/35"
//           style={{ fontFamily: "'DM Sans', sans-serif" }}
//         >
//           Joined by{" "}
//           <span className="text-white/60 font-semibold">12,000+</span> real creators
//         </p>
//       </div>

//       {/* Font import */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
//       `}</style>
//     </section>
//   );
// }

// /**
//  * Isolated component for gradient text.
//  * Keeps `backgroundImage`, `WebkitBackgroundClip`, `backgroundClip`,
//  * and `WebkitTextFillColor` on a node that NEVER has animated props —
//  * eliminating the shorthand/non-shorthand React warning entirely.
//  */
// function GradientLetter({
//   children,
//   active,
// }: {
//   children: string;
//   active: boolean;
// }) {
//   return (
//     <span
//       style={{
//         display: "inline-block",
//         backgroundImage: active
//           ? "linear-gradient(155deg, #ffffff 0%, #ddd6fe 45%, #a78bfa 100%)"
//           : "linear-gradient(155deg, #ffffff 0%, #94a3b8 100%)",
//         WebkitBackgroundClip: "text",
//         backgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         color: "transparent",
//         transition: "background-image 0.6s ease",
//       }}
//     >
//       {children}
//     </span>
//   );
// }

// function AndroidIcon() {
//   return (
//     <svg className="w-[15px] h-[15px] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M6.18 15.64a2.18 2.18 0 0 1-2.18-2.18V9.54a2.18 2.18 0 1 1 4.36 0v3.92a2.18 2.18 0 0 1-2.18 2.18zm11.64 0a2.18 2.18 0 0 1-2.18-2.18V9.54a2.18 2.18 0 1 1 4.36 0v3.92a2.18 2.18 0 0 1-2.18 2.18zM5.5 7.5v9.5A1.5 1.5 0 0 0 7 18.5h.5V21a1.5 1.5 0 0 0 3 0v-2.5h3V21a1.5 1.5 0 0 0 3 0v-2.5H17a1.5 1.5 0 0 0 1.5-1.5V7.5h-13zm1.56-4.18 1.2-2.08a.28.28 0 0 1 .48.28l-1.2 2.08a5.44 5.44 0 0 1 4.92 0L11.24 1.6a.28.28 0 0 1 .48-.28l1.2 2.08A5.5 5.5 0 0 1 5.5 6H18.5a5.5 5.5 0 0 0-11.44-2.68z" />
//     </svg>
//   );
// }

// function AppleIcon() {
//   return (
//     <svg className="w-[15px] h-[15px] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//     </svg>
//   );
// }








// "use client";

// import { useEffect, useState } from "react";

// const LETTERS = [
//   { char: "X", num: "01", baseX: 0  },
//   { char: "O", num: "02", baseX: 0  },
//   { char: "Q", num: "03", baseX: 0  },
//   { char: "U", num: "04", baseX: 0  },
//   { char: "E", num: "05", baseX: 0  },
// ];

// const LETTER_GRADIENTS = [
//   "linear-gradient(160deg,#22d3ee 0%,#38bdf8 100%)",
//   "linear-gradient(160deg,#38bdf8 0%,#818cf8 100%)",
//   "linear-gradient(160deg,#818cf8 0%,#a78bfa 100%)",
//   "linear-gradient(160deg,#a78bfa 0%,#c084fc 100%)",
//   "linear-gradient(160deg,#c084fc 0%,#ec4899 100%)",
// ];

// function GradientLetter({
//   char, gradient, visible, glowOn, tiltE,
// }: {
//   char: string; gradient: string; visible: boolean; glowOn: boolean; tiltE: boolean;
// }) {
//   const isE = char === "E";
//   return (
//     <span
//       className="block font-black leading-none select-none"
//       style={{
//         fontFamily: "var(--font-display)",
//         fontSize: "clamp(3.5rem,16vw,9.5rem)",
//         letterSpacing: "-0.04em",
//         /* All letters fade+scale in together */
//         opacity: visible ? 1 : 0,
//         transform: visible
//           ? isE
//             ? tiltE
//               ? "scale(1) rotate(10deg) translateY(4px)"   /* final playful tilt */
//               : "scale(1) rotate(0deg)"                     /* just appeared, upright */
//             : "scale(1)"
//           : "scale(0.7)",
//         transformOrigin: isE ? "bottom center" : "center",
//         transition: isE
//           ? tiltE
//             /* Spring-y bounce into the tilt — slight overshoot feel */
//             ? "opacity 0.5s ease, transform 0.6s cubic-bezier(0.34,1.6,0.64,1)"
//             /* Appear upright first */
//             : "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)"
//           : "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.4,0.64,1)",
//       }}
//     >
//       <span style={{
//         display: "inline-block",
//         backgroundImage: gradient,
//         WebkitBackgroundClip: "text",
//         backgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         color: "transparent",
//         filter: glowOn ? "drop-shadow(0 0 14px rgba(167,139,250,0.3))" : "none",
//         transition: "filter 0.6s ease",
//       }}>
//         {char}
//       </span>
//     </span>
//   );
// }

// export default function Hero() {
//   /* Phase 1 — all letters pop in together */
//   const [visible,  setVisible]  = useState(false);
//   /* Phase 2 — E tilts right after a short pause */
//   const [tiltE,    setTiltE]    = useState(false);
//   const [glowOn,   setGlowOn]   = useState(false);
//   const [numsIn,   setNumsIn]   = useState(false);
//   const [subIn,    setSubIn]    = useState(false);
//   const [drawLine, setDrawLine] = useState(false);
//   const [btnsIn,   setBtnsIn]   = useState(false);
//   const [badgeIn,  setBadgeIn]  = useState(false);

//   useEffect(() => {
//     const t: ReturnType<typeof setTimeout>[] = [];
//     t.push(setTimeout(() => setBadgeIn(true),  150));
//     /* All letters appear at once */
//     t.push(setTimeout(() => setVisible(true),  500));
//     /* Numbers fade in just after */
//     t.push(setTimeout(() => setNumsIn(true),   750));
//     /* E tilts playfully — Disney-style — after a beat */
//     t.push(setTimeout(() => setTiltE(true),    950));
//     t.push(setTimeout(() => setGlowOn(true),  1100));
//     t.push(setTimeout(() => setSubIn(true),   1250));
//     t.push(setTimeout(() => setDrawLine(true),1400));
//     t.push(setTimeout(() => setBtnsIn(true),  1550));
//     return () => t.forEach(clearTimeout);
//   }, []);

//   return (
//     <section
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16"
//       style={{ background:"linear-gradient(145deg,#6d28d9 0%,#7c3aed 30%,#8b5cf6 55%,#a855f7 80%,#9333ea 100%)" }}
//     >
//       {/* ── Orbs ── */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full opacity-25"
//           style={{ background:"radial-gradient(circle,#22d3ee 0%,transparent 65%)", animation:"float-a 8s ease-in-out infinite" }} />
//         <div className="absolute -bottom-40 -right-20 w-[550px] h-[550px] rounded-full opacity-20"
//           style={{ background:"radial-gradient(circle,#ec4899 0%,transparent 65%)", animation:"float-a 10s ease-in-out infinite reverse" }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full transition-opacity duration-1000"
//           style={{ background:"radial-gradient(ellipse,rgba(255,255,255,0.07) 0%,transparent 65%)", opacity:glowOn ? 1 : 0 }} />
//         <div className="absolute inset-0 opacity-[0.06]"
//           style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize:"160px" }} />
//       </div>

//       {/* ── Badge ── */}
//       <div className={`relative z-10 mb-8 transition-all duration-500 ${badgeIn?"opacity-100 translate-y-0":"opacity-0 -translate-y-3"}`}>
//         <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-[11px] font-medium text-white/70 tracking-[0.16em] uppercase"
//           style={{ fontFamily:"var(--font-mono)" }}>
//           <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
//             style={{ boxShadow:"0 0 8px rgba(74,222,128,0.8)", animation:"pulse-dot 2s ease-in-out infinite" }} />
//           Real content · No AI · No filters
//         </span>
//       </div>

//       {/* ── Inner dark card ── */}
//       <div
//         className={`relative z-10 w-full max-w-4xl mx-auto mb-10 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 ${glowOn?"shadow-[0_8px_60px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)]":"shadow-[0_4px_30px_rgba(0,0,0,0.2)]"}`}
//         style={{ background:"linear-gradient(135deg,rgba(30,10,60,0.92) 0%,rgba(45,18,96,0.95) 100%)", backdropFilter:"blur(12px)" }}
//       >
//         {/* Top shimmer line */}
//         <div className="absolute top-0 left-0 right-0 h-px"
//           style={{ background:"linear-gradient(90deg,transparent,rgba(139,92,246,0.6),rgba(34,211,238,0.4),transparent)" }} />

//         {/* Sparkle */}
//         <div className={`absolute top-4 right-5 text-[#c4b5fd] text-xl select-none transition-all duration-700 ${glowOn?"opacity-100 scale-100 rotate-12":"opacity-0 scale-50"}`}
//           style={{ transitionDelay:"300ms" }}>✦</div>

//         {/* ── Letters ── */}
//         <div className="flex items-end justify-between px-3 sm:px-5 py-5 sm:py-7">
//           {LETTERS.map((l, i) => {
//             const isE = l.char === "E";
//             return (
//               <div
//                 key={l.char}
//                 className="relative flex-1 flex flex-col items-center justify-center"
//               >
//                 {/* Number superscript */}
//                 <span
//                   className="absolute font-bold select-none"
//                   style={{
//                     fontFamily:"var(--font-display)",
//                     fontSize:"clamp(0.55rem,1.5vw,0.95rem)",
//                     color:"rgba(196,181,253,0.55)",
//                     top: i%2===0 ? "2px" : "auto",
//                     bottom: i%2!==0 ? "2px" : "auto",
//                     right: (i===0||i===4) ? "6px" : "auto",
//                     left: (i===1||i===3) ? "6px" : "auto",
//                     ...(i===2 && { left:"50%", transform:"translateX(-50%)", top:"0px" }),
//                     opacity: numsIn ? 1 : 0,
//                     transition:"opacity 0.4s ease",
//                     transitionDelay:`${i*60}ms`,
//                   }}
//                 >{l.num}</span>

//                 <GradientLetter
//                   char={l.char}
//                   gradient={LETTER_GRADIENTS[i]}
//                   visible={visible}
//                   glowOn={glowOn}
//                   tiltE={tiltE}
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom shimmer */}
//         <div className="absolute bottom-0 left-0 right-0 h-px"
//           style={{ background:"linear-gradient(90deg,transparent,rgba(236,72,153,0.4),rgba(139,92,246,0.5),transparent)" }} />
//       </div>

//       {/* ── Tagline ── */}
//       <div className={`relative z-10 text-center mb-11 transition-all duration-600 ${subIn?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>

//         {/* Handwriting "friends" */}
//         <div className="flex justify-center mb-1">
//           <span
//             className="text-[#7dd3fc] text-xl sm:text-2xl select-none"
//             style={{
//               fontFamily:"'Caveat', cursive",
//               fontWeight: 600,
//               letterSpacing:"0.02em",
//               transform:"rotate(-3deg)",
//               display:"inline-block",
//               textShadow:"0 0 20px rgba(125,211,252,0.5)",
//             }}
//           >
//             friends
//           </span>
//         </div>

//         {/* "It's Your [Social strikethrough] Media App" */}
//         <p
//           className="text-white font-semibold text-lg sm:text-2xl tracking-tight"
//           style={{ fontFamily:"var(--font-display)" }}
//         >
//           It's Your{" "}
//           {/* Only "Social" gets the doodle cut — wrapped tightly */}
//           <span className="relative inline-block">
//             <span className="text-white/40">Social</span>
//             {/* Two wobbly hand-drawn lines crossing just "Social" */}
//             <svg
//               aria-hidden
//               className="absolute pointer-events-none"
//               style={{
//                 left: "-2px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 width: "calc(100% + 4px)",
//                 height: "22px",
//                 overflow: "visible",
//               }}
//               viewBox="0 0 90 22"
//               fill="none"
//             >
//               <path
//                 d="M2 13 C18 9, 38 15, 55 10 C68 6, 80 12, 88 8"
//                 stroke="#5eead4"
//                 strokeWidth="2.4"
//                 strokeLinecap="round"
//                 style={{
//                   strokeDasharray: 110,
//                   strokeDashoffset: drawLine ? 0 : 110,
//                   transition:"stroke-dashoffset 0.45s cubic-bezier(0.16,1,0.3,1)",
//                 }}
//               />
//               <path
//                 d="M3 8 C20 13, 42 5, 58 10 C70 14, 82 7, 88 12"
//                 stroke="#5eead4"
//                 strokeWidth="1.6"
//                 strokeLinecap="round"
//                 opacity="0.5"
//                 style={{
//                   strokeDasharray: 105,
//                   strokeDashoffset: drawLine ? 0 : 105,
//                   transition:"stroke-dashoffset 0.45s cubic-bezier(0.16,1,0.3,1) 0.07s",
//                 }}
//               />
//             </svg>
//           </span>
//           {" "}Media App
//         </p>

//         {/* "imperfect but real." with squiggle underline */}
//         <div className="relative inline-block mt-3">
//           <p className="text-[12px] text-white/40 tracking-widest"
//             style={{ fontFamily:"var(--font-mono)" }}>
//             imperfect but real.
//           </p>
//           <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 120 6" fill="none" style={{ height:"6px" }}>
//             <path
//               d="M0 3 Q10 0 20 3 Q30 6 40 3 Q50 0 60 3 Q70 6 80 3 Q90 0 100 3 Q110 6 120 3"
//               stroke="rgba(167,139,250,0.4)"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               fill="none"
//               style={{
//                 strokeDasharray:130,
//                 strokeDashoffset: drawLine ? 0 : 130,
//                 transition:"stroke-dashoffset 0.7s ease 0.15s",
//               }}
//             />
//           </svg>
//         </div>
//       </div>

//       {/* ── CTA Buttons ── */}
//       <div className={`relative z-10 flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-xs sm:max-w-none sm:w-auto transition-all duration-600 ${btnsIn?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>

//         {/* iOS — white solid */}
//         <a href="#ios"
//           className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[14px] overflow-hidden active:scale-95 transition-all duration-200"
//           style={{
//             fontFamily:"var(--font-display)", letterSpacing:"-0.01em",
//             background:"#ffffff", color:"#4c1d95",
//             boxShadow:"0 4px 20px rgba(0,0,0,0.22),0 0 0 1px rgba(255,255,255,0.15),inset 0 1px 0 rgba(255,255,255,0.9)",
//           }}
//         >
//           <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-transparent via-violet-200/60 to-transparent skew-x-12 pointer-events-none" />
//           <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//             style={{ boxShadow:"0 0 0 2px rgba(139,92,246,0.5),0 0 24px rgba(139,92,246,0.25)" }} />
//           <AppleIcon />
//           Download for iOS
//         </a>

//         {/* Android — frosted glass */}
//         <a href="#android"
//           className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[14px] text-white overflow-hidden active:scale-95 transition-all duration-200"
//           style={{
//             fontFamily:"var(--font-display)", letterSpacing:"-0.01em",
//             background:"rgba(255,255,255,0.08)", backdropFilter:"blur(12px)",
//             boxShadow:"0 0 0 1.5px rgba(255,255,255,0.2),0 4px_20px rgba(0,0,0,0.2)",
//           }}
//         >
//           <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//             style={{ background:"linear-gradient(135deg,rgba(34,211,238,0.15),rgba(168,85,247,0.15))", boxShadow:"0 0 0 1.5px rgba(139,92,246,0.5)" }} />
//           <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
//           <AndroidIcon />
//           Download for Android
//         </a>
//       </div>

//       {/* Social proof */}
//       <div className={`relative z-10 mt-8 flex items-center gap-3 transition-all duration-500 delay-200 ${btnsIn?"opacity-100":"opacity-0"}`}>
//         <div className="flex -space-x-2">
//           {["#22d3ee","#a78bfa","#ec4899","#f0c040"].map((c,i)=>(
//             <div key={i} className="w-6 h-6 rounded-full border-2 border-[#7c3aed]" style={{ backgroundColor:c }} />
//           ))}
//         </div>
//         <p className="text-[12px] text-white/35" style={{ fontFamily:"var(--font-body)" }}>
//           <span className="text-white/60 font-semibold">12,000+</span> real people already in
//         </p>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
//         @keyframes float-a {
//           0%,100% { transform: translateY(0) scale(1); }
//           50%      { transform: translateY(-28px) scale(1.04); }
//         }
//         @keyframes pulse-dot {
//           0%,100% { opacity:1; }
//           50%      { opacity:0.35; }
//         }
//       `}</style>
//     </section>
//   );
// }

// function AppleIcon() {
//   return (
//     <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
//     </svg>
//   );
// }
// function AndroidIcon() {
//   return (
//     <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M6.18 15.64a2.18 2.18 0 0 1-2.18-2.18V9.54a2.18 2.18 0 1 1 4.36 0v3.92a2.18 2.18 0 0 1-2.18 2.18zm11.64 0a2.18 2.18 0 0 1-2.18-2.18V9.54a2.18 2.18 0 1 1 4.36 0v3.92a2.18 2.18 0 0 1-2.18 2.18zM5.5 7.5v9.5A1.5 1.5 0 0 0 7 18.5h.5V21a1.5 1.5 0 0 0 3 0v-2.5h3V21a1.5 1.5 0 0 0 3 0v-2.5H17a1.5 1.5 0 0 0 1.5-1.5V7.5h-13zm1.56-4.18 1.2-2.08a.28.28 0 0 1 .48.28l-1.2 2.08a5.44 5.44 0 0 1 4.92 0L11.24 1.6a.28.28 0 0 1 .48-.28l1.2 2.08A5.5 5.5 0 0 1 5.5 6H18.5a5.5 5.5 0 0 0-11.44-2.68z"/>
//     </svg>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";

// const NUMS  = ["01","02","03","04","05"];
// // Lowercase — matches the brand logo style
// const CHARS = ["x","o","q","u","e"];

// function GLetter({ char, visible, isE, tiltE }: {
//   char: string; visible: boolean; isE: boolean; tiltE: boolean;
// }) {
//   return (
//     <span
//       className="block leading-none font-black select-none"
//       style={{
//         fontFamily: "var(--font-display)",
//         fontSize: "clamp(4.5rem, 18.5vw, 14rem)",
//         letterSpacing: "-0.045em",
//         color: "#ffffff",
//         // Phase 1: all letters pop in together (scale up from 0.78)
//         opacity: visible ? 1 : 0,
//         transform: visible
//           ? isE && tiltE
//             // Phase 2: E springs to 9deg with overshoot — Disney bounce
//             ? "scale(1) rotate(9deg) translateY(6px)"
//             : "scale(1) rotate(0deg)"
//           : "scale(0.78) translateY(16px)",
//         transformOrigin: isE ? "bottom center" : "center bottom",
//         transition: isE
//           ? tiltE
//             // Spring overshoot curve — goes slightly past 9deg, bounces back
//             ? "opacity 0.5s ease, transform 0.65s cubic-bezier(0.34,1.55,0.64,1)"
//             // First appear upright with bounce
//             : "opacity 0.55s ease, transform 0.55s cubic-bezier(0.34,1.4,0.64,1)"
//           : "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
//         textShadow: "0 2px 8px rgba(0,0,0,0.3)",
//       }}
//     >
//       {char}
//     </span>
//   );
// }

// export default function Hero() {
//   // Phase 1 — all letters appear at once
//   const [visible,  setVisible]  = useState(false);
//   // Phase 2 — E tilts right after a beat (Disney-style)
//   const [tiltE,    setTiltE]    = useState(false);
//   const [numsIn,   setNumsIn]   = useState(false);
//   const [subIn,    setSubIn]    = useState(false);
//   const [drawLine, setDrawLine] = useState(false);
//   const [btnsIn,   setBtnsIn]   = useState(false);

//   useEffect(() => {
//     const t: ReturnType<typeof setTimeout>[] = [];
//     // All letters appear at once
//     t.push(setTimeout(() => setVisible(true),  350));
//     // Numbers fade in just after letters land
//     t.push(setTimeout(() => setNumsIn(true),   650));
//     // E tilts playfully — after a beat so it feels like a character moment
//     t.push(setTimeout(() => setTiltE(true),    850));
//     // Tagline slides up
//     t.push(setTimeout(() => setSubIn(true),   1000));
//     // Doodle lines draw in
//     t.push(setTimeout(() => setDrawLine(true),1150));
//     // Buttons appear
//     t.push(setTimeout(() => setBtnsIn(true),  1300));
//     return () => t.forEach(clearTimeout);
//   }, []);

//   return (
//     <section
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-20"
//       style={{
//         background: "linear-gradient(160deg, #1e0a3c 0%, #2d1260 30%, #3b0764 60%, #4c1d95 85%, #5b21b6 100%)",
//       }}
//     >
//       {/* Background layers */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 right-0 h-48"
//           style={{ background: "linear-gradient(to bottom, rgba(10,0,30,0.55), transparent)" }} />
//         <div className="absolute bottom-0 left-0 right-0 h-40"
//           style={{ background: "linear-gradient(to bottom, transparent 0%, #3b0764 60%, #2d1260 100%)" }} />
//         <div
//           className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] rounded-full"
//           style={{ background: "radial-gradient(ellipse, rgba(109,40,217,0.4) 0%, rgba(91,33,182,0.12) 50%, transparent 70%)" }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//             backgroundSize: "160px",
//           }}
//         />
//       </div>

//       {/* Badge */}
//       <div
//         className={`relative z-10 mb-6 sm:mb-8 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
//       >
//         <span
//           className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.06] text-[10px] sm:text-[11px] font-medium text-white/50 tracking-[0.14em] uppercase"
//           style={{ fontFamily: "var(--font-mono)" }}
//         >
//           <span
//             className="w-1.5 h-1.5 rounded-full bg-[#4ade80] flex-shrink-0"
//             style={{ boxShadow: "0 0 6px rgba(74,222,128,0.9)", animation: "pulse-dot 2s ease-in-out infinite" }}
//           />
//           Real content · No AI · No filters
//         </span>
//       </div>

//       {/* xoque letters */}
//       <div className="relative z-10 w-full max-w-5xl mx-auto mb-4 sm:mb-6">
//         <div className="flex items-end justify-between px-0 sm:px-1">
//           {CHARS.map((char, i) => {
//             // FIX: check against lowercase "e" since CHARS is lowercase
//             const isE = char === "e";
//             return (
//               <div key={`${char}-${i}`} className="relative flex-1 flex flex-col items-center">

//                 {/* Number superscript — alternating top/bottom per reference image */}
//                 <span
//                   className="absolute text-md font-semibold select-none"
//                   style={{
//                     fontFamily: "var(--font-display)",
//                     fontSize: "clamp(0.4rem, 1.1vw, 0.72rem)",
//                     color: "rgba(196,181,253,0.38)",
//                     letterSpacing: "0.02em",
//                     top:    i % 2 === 0 ? "50px"  : "auto",
//                     bottom: i % 2 !== 0 ? "15px" : "auto",
//                     right:  (i === 0 || i === 4) ? "15px" : "auto",
//                     left:   (i === 1 || i === 3) ? "30px" : "auto",
//                     ...(i === 2 && { left: "50%", transform: "translateX(-80%)", top: "2px" }),
//                     opacity: numsIn ? 1 : 0,
//                     transition: "opacity 0.4s ease",
//                     transitionDelay: `${i * 55}ms`,
//                   }}
//                 >
//                   {NUMS[i]}
//                 </span>

//                 <GLetter
//                   char={char}
//                   visible={visible}
//                   isE={isE}
//                   tiltE={tiltE}
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* Thin separator line */}
//         <div
//           className="mt-2 mx-1 h-px"
//           style={{
//             background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(167,139,250,0.25), transparent)",
//             opacity: numsIn ? 1 : 0,
//             transition: "opacity 0.6s ease 0.3s",
//           }}
//         />
//       </div>

//       {/* Tagline */}
//       <div
//         className={`relative z-10 flex flex-col items-center gap-0.5 mb-8 sm:mb-10 transition-all duration-600 ${subIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//       >
//         {/* Handwriting "friends" floating above */}
//         <span
//           style={{
//             fontFamily: "'Caveat', cursive",
//             fontWeight: 600,
//             fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
//             color: "#67e8f9",
//             display: "inline-block",
//             transform: "rotate(-2.5deg) translateX(-10px)",
//             textShadow: "0 0 16px rgba(103,232,249,0.35)",
//             marginBottom: "2px",
//           }}
//         >
//           friends
//         </span>

//         {/* Main tagline */}
//         <p
//           className="text-white/85 font-semibold tracking-tight text-center"
//           style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.8vw, 1.45rem)" }}
//         >
//           It's Your{" "}
//           {/* Only "Social" gets the doodle strikethrough */}
//           <span className="relative inline-block">
//             <span className="text-white/30">Social</span>
//             <svg
//               aria-hidden
//               className="absolute pointer-events-none"
//               style={{ left: "-2px", top: "50%", transform: "translateY(-50%)", width: "calc(100% + 4px)", height: "20px", overflow: "visible" }}
//               viewBox="0 0 90 20" fill="none"
//             >
//               <path
//                 d="M2 12 C18 8,38 14,55 9 C68 5,80 11,88 7"
//                 stroke="#5eead4" strokeWidth="2.2" strokeLinecap="round"
//                 style={{ strokeDasharray: 110, strokeDashoffset: drawLine ? 0 : 110, transition: "stroke-dashoffset 0.45s cubic-bezier(0.16,1,0.3,1)" }}
//               />
//               <path
//                 d="M3 7 C20 12,42 4,58 9 C70 13,82 6,88 11"
//                 stroke="#5eead4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
//                 style={{ strokeDasharray: 105, strokeDashoffset: drawLine ? 0 : 105, transition: "stroke-dashoffset 0.45s cubic-bezier(0.16,1,0.3,1) 0.07s" }}
//               />
//             </svg>
//           </span>
//           {" "}Media App
//         </p>

//         {/* Mono subline */}
//         <p
//           className="text-white/25 tracking-widest mt-1.5"
//           style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(0.6rem, 1.3vw, 0.75rem)" }}
//         >
//           imperfect but real.
//         </p>
//       </div>

//       {/* CTA Buttons */}
//       <div
//         className={`relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-none sm:w-auto transition-all duration-500 ${btnsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//       >
//         <a
//           href="#ios"
//           className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[14px] text-[#3b0764] bg-white overflow-hidden active:scale-95 transition-all duration-200"
//           style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
//         >
//           <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-transparent via-violet-100/60 to-transparent skew-x-12 pointer-events-none" />
//           <AppleIcon />
//           Download for iOS
//         </a>

//         <a
//           href="#android"
//           className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[14px] text-white overflow-hidden active:scale-95 transition-all duration-200"
//           style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em", background: "rgba(255,255,255,0.09)", backdropFilter: "blur(8px)", boxShadow: "0 0 0 1px rgba(255,255,255,0.2), 0 4px 16px rgba(0,0,0,0.2)" }}
//         >
//           <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//             style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0 0 0 1px rgba(255,255,255,0.3)" }} />
//           <AndroidIcon />
//           Download for Android
//         </a>
//       </div>

//       {/* Social proof */}
//       <div
//         className={`relative z-10 mt-7 flex items-center gap-3 transition-all duration-500 delay-100 ${btnsIn ? "opacity-100" : "opacity-0"}`}
//       >
//         <div className="flex -space-x-2">
//           {["#22d3ee","#a78bfa","#ec4899","#f0c040"].map((c, i) => (
//             <div key={i} className="w-6 h-6 rounded-full border-2 border-[#2d1260]" style={{ backgroundColor: c }} />
//           ))}
//         </div>
//         <p className="text-[11px] text-white/25" style={{ fontFamily: "var(--font-body)" }}>
//           <span className="text-white/50 font-semibold">12,000+</span> real people already in
//         </p>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
//         @keyframes pulse-dot {
//           0%,100% { opacity: 1; }
//           50%      { opacity: 0.3; }
//         }
//       `}</style>
//     </section>
//   );
// }

// function AppleIcon() {
//   return (
//     <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
//     </svg>
//   );
// }
// function AndroidIcon() {
//   return (
//     <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M6.18 15.64a2.18 2.18 0 0 1-2.18-2.18V9.54a2.18 2.18 0 1 1 4.36 0v3.92a2.18 2.18 0 0 1-2.18 2.18zm11.64 0a2.18 2.18 0 0 1-2.18-2.18V9.54a2.18 2.18 0 1 1 4.36 0v3.92a2.18 2.18 0 0 1-2.18 2.18zM5.5 7.5v9.5A1.5 1.5 0 0 0 7 18.5h.5V21a1.5 1.5 0 0 0 3 0v-2.5h3V21a1.5 1.5 0 0 0 3 0v-2.5H17a1.5 1.5 0 0 0 1.5-1.5V7.5h-13zm1.56-4.18 1.2-2.08a.28.28 0 0 1 .48.28l-1.2 2.08a5.44 5.44 0 0 1 4.92 0L11.24 1.6a.28.28 0 0 1 .48-.28l1.2 2.08A5.5 5.5 0 0 1 5.5 6H18.5a5.5 5.5 0 0 0-11.44-2.68z"/>
//     </svg>
//   );
// }


"use client";

import { useEffect, useState } from "react";

/*
  PIXEL-PERFECT background from reference image (1392×782, 16:9):

  CIRCLE:
    Center: 65% × 1392 = 905x,  40% × 782 = 313y
    Radius (stroke center): ~185px
    Stroke width: ~50px
    Gradient: purple (top-left) → hot pink (bottom-right)

  ALL THREE LINES share one junction point: ~(585, 587)  [42%x, 75%y]

  LINE 1 – upper-left diagonal:
    Exits top edge at ~13% from left → (181, 0)
    Goes DOWN-RIGHT to junction (585, 587)
    Gradient: bright cyan at top → purple at junction

  LINE 2 – left side, nearly horizontal:
    Exits left edge at ~58% down → (0, 454)
    Goes RIGHT and SLIGHTLY DOWN to junction (585, 587)
    Gradient: bright cyan at left → purple at junction

  LINE 3 – base going to bottom-right:
    From junction (585, 587) → exits bottom-right corner (1392, 782)
    Gradient: purple at junction → hot pink at far right
*/
function XoqueLogo() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1392 782"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        {/* Line 1: cyan top-left → purple where it meets line 2 */}
        <linearGradient id="l1" x1="-78" y1="-10" x2="600" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#00e5ff" />
          <stop offset="40%"  stopColor="#5a22e8" />
          <stop offset="100%" stopColor="#7020e8" />
        </linearGradient>

        {/* Line 2: starts cyan-ish, quickly becomes the same deep purple as l1's end, then transitions to magenta/pink */}
        <linearGradient id="l2" x1="-10" y1="470" x2="1600" y2="850" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#00d4ff" />
          <stop offset="15%"  stopColor="#5a22e8" />
          <stop offset="30%"  stopColor="#7020e8" />
          <stop offset="50%"  stopColor="#cc18cc" />
          <stop offset="100%" stopColor="#ff08b0" />
        </linearGradient>

        {/* Ring: purple → magenta → pink */}
        <linearGradient id="ring" x1="650" y1="80" x2="1070" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#7020e8" />
          <stop offset="45%"  stopColor="#b818d8" />
          <stop offset="100%" stopColor="#ff08b0" />
        </linearGradient>
      </defs>

      {/* O ring */}
      <circle cx="905" cy="90" r="350" stroke="url(#ring)" strokeWidth="85" fill="none" />

      {/* Line 1: upper-left diagonal */}
      <line x1="-78" y1="-10" x2="600" y2="900" stroke="url(#l1)" strokeWidth="28" strokeLinecap="round" />

      {/* Line 2: wide diagonal */}
      <line x1="-10" y1="470" x2="1600" y2="850" stroke="url(#l2)" strokeWidth="95" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Types ─── */
interface NumPlace { side: "above" | "below"; h: "left" | "right" | "center" }

const CHARS: string[]    = ["x", "o", "q", "u", "e"];
const NUMS: string[]     = ["01", "02", "03", "04", "05"];
const NUM_PLACE: NumPlace[] = [
  { side: "above", h: "right"  },
  { side: "below", h: "left"   },
  { side: "above", h: "center" },
  { side: "below", h: "left"   },
  { side: "above", h: "right"  },
];

const AVATARS = [
  "https://i.pravatar.cc/48?img=47",
  "https://i.pravatar.cc/48?img=32",
  "https://i.pravatar.cc/48?img=12",
  "https://i.pravatar.cc/48?img=58",
];

/* ─── Letter component ─── */
interface LetterProps {
  char: string; num: string; place: NumPlace;
  visible: boolean; tiltE: boolean; delay: number;
}

function Letter({ char, num, place, visible, tiltE, delay }: LetterProps) {
  const isE = char === "e";

  const numStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 10,
    fontFamily: "'Outfit', sans-serif",
    fontSize: "clamp(0.90rem, 4vw, 6rem)",
    fontWeight: 600,
    color: "rgba(158, 158, 158, 0.9)",
    letterSpacing: "0.05em",
    lineHeight: 1,
    pointerEvents: "none",
    userSelect: "none",
    // vertical — sit right over the letter
    ...(place.side === "above" ? { bottom: "60%" } : { top: "75%" }),
    // horizontal
    ...(place.h === "right"
      ? { right: "30px" }
      : place.h === "left"
      ? { left: "90px" }
      : { left: "50%", transform: "translateX(-50%)" }),
  };

  return (
    <div className="relative flex-1 flex flex-col items-center">
      <span style={numStyle}>{num}</span>
      <span
        className="block leading-none font-bold select-none"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(3.8rem, 22vw, 50rem)",
          letterSpacing: "1.8rem",
          fontWeight: 700,
          color: "#ffffff",
          textShadow: "0 2px 32px rgba(0,0,0,0.55)",
          opacity: visible ? 1 : 0,
          transform: visible
            ? isE && tiltE ? "scale(1) rotate(13deg) translateY(8px)" : "scale(1)"
            : "scale(0.82) translateY(18px)",
          transformOrigin: isE ? "bottom center" : "center bottom",
          transition:
            isE && tiltE
              ? `opacity 0.5s ease ${delay}ms, transform 0.7s cubic-bezier(0.34,1.55,0.64,1) ${delay}ms`
              : `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        }}
      >
        {char}
      </span>
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [tiltE,   setTiltE]   = useState(false);
  const [numsIn,  setNumsIn]  = useState(false);
  const [subIn,   setSubIn]   = useState(false);
  const [btnsIn,  setBtnsIn]  = useState(false);

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];
    t.push(setTimeout(() => setVisible(true),  280));
    t.push(setTimeout(() => setNumsIn(true),   550));
    t.push(setTimeout(() => setTiltE(true),    820));
    t.push(setTimeout(() => setSubIn(true),   1050));
    t.push(setTimeout(() => setBtnsIn(true),  1250));
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#000000", padding: "80px 16px 48px" }}
    >
      {/* Background logo – pixel-perfect */}
      <XoqueLogo />

      {/* Subtle center vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 48%, transparent 0%, rgba(0,0,0,0.28) 100%)",
        }}
      />

      {/* ── Word mark ── */}
      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: "min(960px, 95vw)",
          marginBottom: "clamp(4px, 1.2vw, 12px)",
        }}
      >
        <div
          className="flex items-end justify-between"
          style={{ opacity: numsIn ? 1 : 0, transition: "opacity 0.5s ease 0.15s" }}
        >
          {CHARS.map((char, i) => (
            <Letter
              key={char}
              char={char}
              num={NUMS[i]}
              place={NUM_PLACE[i]}
              visible={visible}
              tiltE={tiltE}
              delay={i * 55}
            />
          ))}
        </div>

        {/* separator */}
        <div
          style={{
            height: "1px",
            marginTop: "4px",
            background:
              "linear-gradient(90deg,transparent,rgba(130,80,240,0.5),rgba(0,212,255,0.3),transparent)",
            opacity: numsIn ? 1 : 0,
            transition: "opacity 0.6s ease 0.35s",
          }}
        />
      </div>

      {/* ── Tagline – sits below separator with breathing room ── */}
      <div
        className="relative z-10"
        style={{
          marginTop: "clamp(20px, 3.5vw, 44px)",
          marginBottom: "clamp(28px, 4.5vw, 52px)",
          opacity: subIn ? 1 : 0,
          transform: subIn ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.55s ease, transform 0.55s ease",
        }}
      >
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(0.8rem, 2vw, 1.3rem)",
            fontWeight: 800,
            letterSpacing: "0.24em",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            margin: 0,
          }}
        >
          imperfect but real.
        </p>
      </div>

      {/* ── CTA Buttons ── */}
      <div
        className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center"
        style={{
          gap: "12px",
          width: "100%",
          maxWidth: "420px",
          opacity: btnsIn ? 1 : 0,
          transform: btnsIn ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {/* iOS */}
        <a
          href="#ios"
          style={{
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "9px",
            padding: "15px 24px",
            borderRadius: "999px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#0a0a14",
            background: "#ffffff",
            boxShadow: "0 4px 28px rgba(0,0,0,0.6)",
            textDecoration: "none",
            cursor: "pointer",
            transition: "transform 0.18s, box-shadow 0.18s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(0,0,0,0.7)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 28px rgba(0,0,0,0.6)";
          }}
        >
          <AppleIcon />
          Download for iOS
        </a>

        {/* Android */}
        <a
          href="#android"
          style={{
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "9px",
            padding: "15px 24px",
            borderRadius: "999px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#ffffff",
            background: "rgba(255,255,255,0.10)",
            border: "1.5px solid rgba(255,255,255,0.24)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            textDecoration: "none",
            cursor: "pointer",
            transition: "transform 0.18s, border-color 0.18s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.24)";
          }}
        >
          <AndroidIcon />
          Download for Android
        </a>
      </div>

      {/* ── Social proof ── */}
      <div
        className="relative z-10 flex items-center"
        style={{
          gap: "10px",
          marginTop: "22px",
          opacity: btnsIn ? 1 : 0,
          transition: "opacity 0.5s ease 0.2s",
        }}
      >
        <div style={{ display: "flex" }}>
          {AVATARS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              width={28}
              height={28}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "2px solid #000",
                objectFit: "cover",
                marginLeft: i === 0 ? 0 : -8,
                position: "relative",
                zIndex: AVATARS.length - i,
              }}
            />
          ))}
        </div>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
            margin: 0,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.58)", fontWeight: 600 }}>12,000+</span>{" "}
          real people already in
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        @media (max-width:480px){section{padding-top:64px!important}}
      `}</style>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M6.18 15.64a2.18 2.18 0 0 1-2.18-2.18V9.54a2.18 2.18 0 1 1 4.36 0v3.92a2.18 2.18 0 0 1-2.18 2.18zm11.64 0a2.18 2.18 0 0 1-2.18-2.18V9.54a2.18 2.18 0 1 1 4.36 0v3.92a2.18 2.18 0 0 1-2.18 2.18zM5.5 7.5v9.5A1.5 1.5 0 0 0 7 18.5h.5V21a1.5 1.5 0 0 0 3 0v-2.5h3V21a1.5 1.5 0 0 0 3 0v-2.5H17a1.5 1.5 0 0 0 1.5-1.5V7.5h-13zm1.56-4.18 1.2-2.08a.28.28 0 0 1 .48.28l-1.2 2.08a5.44 5.44 0 0 1 4.92 0L11.24 1.6a.28.28 0 0 1 .48-.28l1.2 2.08A5.5 5.5 0 0 1 5.5 6H18.5a5.5 5.5 0 0 0-11.44-2.68z" />
    </svg>
  );
}