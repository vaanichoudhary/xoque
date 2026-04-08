// "use client";

// import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";

// const PILLARS = [
//   {
//     symbol: "🔒",
//     title: "No anonymous accounts",
//     desc: "Every xoque account is verified by phone number. You can choose your username, but you can't hide behind anonymity.",
//     accent: "#C095E4",
//     bg: "rgba(192,149,228,0.08)",
//     border: "rgba(192,149,228,0.25)",
//   },
//   {
//     symbol: "🚫",
//     title: "Hard block on AI content",
//     desc: "We run content verification to detect and remove AI-generated posts. This isn't a policy — it's built into the product architecture.",
//     accent: "#FFA0C5",
//     bg: "rgba(255,160,197,0.08)",
//     border: "rgba(255,160,197,0.25)",
//   },
//   {
//     symbol: "👁",
//     title: "Human moderation",
//     desc: "Reports are reviewed by real people. We don't rely on automated takedowns for nuanced situations.",
//     accent: "#9BF6FF",
//     bg: "rgba(155,246,255,0.08)",
//     border: "rgba(155,246,255,0.3)",
//   },
//   {
//     symbol: "🛡",
//     title: "Real-circle privacy",
//     desc: "Your content only reaches who you choose. There's no public discovery feed, no strangers stumbling onto your posts.",
//     accent: "#C095E4",
//     bg: "rgba(192,149,228,0.08)",
//     border: "rgba(192,149,228,0.25)",
//   },
//   {
//     symbol: "⚡",
//     title: "Fast takedowns",
//     desc: "We commit to reviewing flagged content within 4 hours. Harmful content is removed without waiting for appeals.",
//     accent: "#FDFFB6",
//     bg: "rgba(253,255,182,0.12)",
//     border: "rgba(253,255,182,0.4)",
//   },
//   {
//     symbol: "💬",
//     title: "No callout culture",
//     desc: "We've designed the social graph to make pile-ons structurally impossible. Your content can't be amplified to strangers.",
//     accent: "#FFA0C5",
//     bg: "rgba(255,160,197,0.08)",
//     border: "rgba(255,160,197,0.25)",
//   },
// ];

// const COMMITMENTS = [
//   { label: "< 4hr", desc: "Report review time" },
//   { label: "0",     desc: "AI posts allowed" },
//   { label: "100%",  desc: "Human-reviewed flags" },
//   { label: "∞",     desc: "Zero tolerance on doxxing" },
// ];

// export default function SafetyPage() {
//   return (
//     <div style={{ backgroundColor: "#fafaf8", minHeight: "100vh" }}>
//       <Navbar />

//       {/* ── Hero ── */}
//       <section
//         className="relative pt-36 pb-24 px-5 overflow-hidden"
//         style={{
//           background: "linear-gradient(160deg, rgba(192,149,228,0.12) 0%, rgba(255,160,197,0.06) 50%, #fafaf8 100%)",
//         }}
//       >
//         {/* Decorative top-right blob */}
//         <div
//           className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(ellipse, rgba(155,246,255,0.2) 0%, transparent 70%)" }}
//         />
//         {/* Bottom left blob */}
//         <div
//           className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
//           style={{ background: "radial-gradient(ellipse, rgba(192,149,228,0.1) 0%, transparent 70%)" }}
//         />

//         <div className="max-w-3xl mx-auto relative z-10 text-center">
//           {/* Badge */}
//           <div
//             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
//             style={{
//               backgroundColor: "rgba(192,149,228,0.12)",
//               borderColor: "rgba(192,149,228,0.3)",
//             }}
//           >
//             <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#c095e4" }} />
//             <span
//               className="text-[11px] font-semibold tracking-[0.18em] uppercase"
//               style={{ fontFamily: "var(--font-mono)", color: "#7c3aed" }}
//             >
//               Safety
//             </span>
//           </div>

//           <h1
//             className="font-black mb-5 leading-[1.05]"
//             style={{
//               fontFamily: "var(--font-body)",
//               fontSize: "clamp(2.6rem, 7vw, 4.8rem)",
//               letterSpacing: "-0.04em",
//               color: "#0f0a1e",
//             }}
//           >
//             Real feels safer
//             <br />
//             <span style={{ color: "#c095e4" }}>when it's protected.</span>
//           </h1>

//           <p
//             className="max-w-lg mx-auto leading-relaxed"
//             style={{
//               fontFamily: "var(--font-body)",
//               fontSize: "1rem",
//               color: "#5a4a6a",
//             }}
//           >
//             Safety isn't a feature we added after the fact. It's baked into how xoque works — from the architecture up.
//           </p>
//         </div>
//       </section>

//       {/* ── Stats strip ── */}
//       <section
//         className="py-10 px-5 border-y"
//         style={{ borderColor: "rgba(192,149,228,0.15)", backgroundColor: "#fff" }}
//       >
//         <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
//           {COMMITMENTS.map((c) => (
//             <div key={c.label} className="text-center">
//               <p
//                 className="font-black leading-none mb-1"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   fontSize: "clamp(2rem, 5vw, 3rem)",
//                   letterSpacing: "-0.04em",
//                   color: "#c095e4",
//                 }}
//               >
//                 {c.label}
//               </p>
//               <p
//                 className="text-[11px] font-medium tracking-[0.1em] uppercase"
//                 style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
//               >
//                 {c.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── Pillars ── */}
//       <section className="py-20 px-5" style={{ backgroundColor: "#fafaf8" }}>
//         <div className="max-w-5xl mx-auto">
//           <p
//             className="text-[10px] font-semibold tracking-[0.2em] uppercase text-center mb-3"
//             style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
//           >
//             How we keep it safe
//           </p>
//           <h2
//             className="font-black text-center mb-12"
//             style={{
//               fontFamily: "var(--font-body)",
//               fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
//               letterSpacing: "-0.03em",
//               color: "#0f0a1e",
//             }}
//           >
//             Six things we don't compromise on.
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {PILLARS.map((p) => (
//               <div
//                 key={p.title}
//                 className="rounded-2xl p-7 border transition-all hover:shadow-md"
//                 style={{ backgroundColor: p.bg, borderColor: p.border }}
//               >
//                 <span className="text-2xl mb-4 block">{p.symbol}</span>
//                 <h3
//                   className="font-bold text-[1.05rem] mb-2"
//                   style={{
//                     fontFamily: "var(--font-body)",
//                     letterSpacing: "-0.02em",
//                     color: "#0f0a1e",
//                   }}
//                 >
//                   {p.title}
//                 </h3>
//                 <p
//                   className="text-[13px] leading-relaxed"
//                   style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
//                 >
//                   {p.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── How reporting works ── */}
//       <section
//         className="py-20 px-5"
//         style={{
//           background: "linear-gradient(135deg, rgba(155,246,255,0.08) 0%, rgba(192,149,228,0.06) 100%)",
//           borderTop: "1px solid rgba(155,246,255,0.2)",
//           borderBottom: "1px solid rgba(155,246,255,0.2)",
//         }}
//       >
//         <div className="max-w-4xl mx-auto">
//           <p
//             className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3"
//             style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
//           >
//             The process
//           </p>
//           <h2
//             className="font-black mb-12"
//             style={{
//               fontFamily: "var(--font-body)",
//               fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
//               letterSpacing: "-0.03em",
//               color: "#0f0a1e",
//             }}
//           >
//             What happens when you report.
//           </h2>

//           <div className="flex flex-col sm:flex-row gap-0">
//             {[
//               {
//                 step: "01",
//                 title: "You flag it",
//                 desc: "Tap the report button on any post, comment, or profile. Takes 3 seconds.",
//                 accent: "#C095E4",
//               },
//               {
//                 step: "02",
//                 title: "We receive it",
//                 desc: "Your report lands in our moderation queue instantly, flagged by category.",
//                 accent: "#FFA0C5",
//               },
//               {
//                 step: "03",
//                 title: "A human reviews",
//                 desc: "A real person reads the context, not just the flagged item, within 4 hours.",
//                 accent: "#9BF6FF",
//               },
//               {
//                 step: "04",
//                 title: "Action taken",
//                 desc: "Content removed, account warned or banned. You're notified of the outcome.",
//                 accent: "#FDFFB6",
//               },
//             ].map((s, i, arr) => (
//               <div key={s.step} className="flex-1 flex flex-col sm:flex-row">
//                 <div
//                   className="flex-1 p-6 rounded-2xl border"
//                   style={{
//                     backgroundColor: `${s.accent}10`,
//                     borderColor: `${s.accent}33`,
//                   }}
//                 >
//                   <span
//                     className="text-[10px] font-bold tracking-[0.15em] block mb-3"
//                     style={{ fontFamily: "var(--font-mono)", color: s.accent }}
//                   >
//                     {s.step}
//                   </span>
//                   <h3
//                     className="font-bold text-[1rem] mb-1.5"
//                     style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.02em", color: "#0f0a1e" }}
//                   >
//                     {s.title}
//                   </h3>
//                   <p
//                     className="text-[12px] leading-relaxed"
//                     style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
//                   >
//                     {s.desc}
//                   </p>
//                 </div>
//                 {/* Arrow connector — only between items, not after last */}
//                 {i < arr.length - 1 && (
//                   <div className="flex items-center justify-center px-2 text-gray-300 text-xl font-light select-none">
//                     <span className="hidden sm:block">→</span>
//                     <span className="sm:hidden">↓</span>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Report CTA ── */}
//       <section className="py-20 px-5" style={{ backgroundColor: "#fafaf8" }}>
//         <div className="max-w-2xl mx-auto">
//           <div
//             className="rounded-3xl border p-10 sm:p-14 text-center"
//             style={{
//               background: "linear-gradient(135deg, rgba(192,149,228,0.1) 0%, rgba(255,160,197,0.08) 100%)",
//               borderColor: "rgba(192,149,228,0.25)",
//             }}
//           >
//             <span className="text-4xl mb-5 block">🚨</span>
//             <h2
//               className="font-black mb-3"
//               style={{
//                 fontFamily: "var(--font-body)",
//                 fontSize: "clamp(1.5rem, 3vw, 2rem)",
//                 letterSpacing: "-0.03em",
//                 color: "#0f0a1e",
//               }}
//             >
//               See something wrong?
//             </h2>
//             <p
//               className="text-sm mb-8 max-w-sm mx-auto leading-relaxed"
//               style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
//             >
//               Use the in-app report button, or reach our safety team directly. Every report is taken seriously — by a real human.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
//               <a
//                 href="mailto:safety@xoque.app"
//                 className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[13px] transition-all active:scale-95 hover:opacity-90"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   background: "#c095e4",
//                   color: "#fff",
//                   boxShadow: "0 4px 20px rgba(192,149,228,0.4)",
//                 }}
//               >
//                 Email safety team
//               </a>
//               <a
//                 href="/help"
//                 className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[13px] border transition-all hover:bg-black/5"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   borderColor: "rgba(192,149,228,0.35)",
//                   color: "#7c3aed",
//                 }}
//               >
//                 Visit Help Center →
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// ═══════════════════════════════════════════════════════════════════
// app/safety/page.tsx
// ═══════════════════════════════════════════════════════════════════
  "use client";
import { PageShell, FadeIn, Badge, C, T } from "@/lib/pageUtils";

const PILLARS = [
  { symbol: "🔒", title: "No anonymous accounts",   desc: "Every xoque account is verified by phone number. You can choose your username, but you can't hide behind anonymity.", accent: C.purple },
  { symbol: "🚫", title: "Hard block on AI content", desc: "We run content verification to detect and remove AI-generated posts. This isn't a policy — it's built into the product architecture.", accent: C.pink   },
  { symbol: "👁",  title: "Human moderation",        desc: "Reports are reviewed by real people. We don't rely on automated takedowns for nuanced or sensitive situations.", accent: C.cyan   },
  { symbol: "🛡",  title: "Real-circle privacy",     desc: "Your content only reaches who you choose. There's no public discovery feed, no strangers stumbling onto your posts.", accent: C.purple },
  { symbol: "⚡",  title: "Fast takedowns",          desc: "We commit to reviewing flagged content within 4 hours. Harmful content is removed without waiting for appeals.", accent: C.yellow },
  { symbol: "💬",  title: "No callout culture",      desc: "We've designed the social graph to make pile-ons structurally impossible. Your content can't be amplified to strangers.", accent: C.pink   },
];

export default function SafetyPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-5 overflow-hidden"
        style={{ background: `linear-gradient(150deg, ${C.purple}18 0%, ${C.pink}0d 50%, ${C.bg} 100%)` }}>
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${C.cyan}18 0%, transparent 70%)` }} />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <Badge label="Safety" accent={C.purple} />
          <h1 className="font-black mb-5 leading-[1.04]"
            style={{ fontFamily: "var(--font-body)", fontSize: T.h1, letterSpacing: "-0.045em", color: C.dark }}>
            Real feels safer<br /><span style={{ color: C.purple }}>when it's protected.</span>
          </h1>
          <p className="max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: T.lead, color: C.body }}>
            Safety isn't a feature we added after the fact. It's baked into how xoque works — from the architecture up.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-5 border-y" style={{ borderColor: C.purple + "22", backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { val: "< 4hr", label: "Report review time",       accent: C.purple },
            { val: "0",     label: "AI posts allowed",         accent: C.pink   },
            { val: "100%",  label: "Human-reviewed flags",     accent: C.cyan   },
            { val: "0",     label: "Tolerance on doxxing",     accent: C.yellow },
          ].map(s => (
            <div key={s.label}>
              <p className="font-black leading-none mb-2" style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,5vw,3rem)", letterSpacing: "-0.04em", color: s.accent === C.yellow ? "#7a6600" : s.accent }}>{s.val}</p>
              <p className="font-semibold" style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.muted }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-5" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="font-black" style={{ fontFamily: "var(--font-body)", fontSize: T.h2sm, letterSpacing: "-0.03em", color: C.dark }}>Six things we don't compromise on.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.title} delayMs={i * 60}>
                <div className="rounded-2xl p-7 border h-full transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ backgroundColor: p.accent + "0f", borderColor: p.accent + "33" }}>
                  <span className="text-3xl mb-5 block">{p.symbol}</span>
                  <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-body)", fontSize: T.h4, letterSpacing: "-0.02em", color: C.dark }}>{p.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.body, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-5" style={{ background: `linear-gradient(135deg, ${C.cyan}0d 0%, ${C.purple}08 100%)`, borderTop: `1px solid ${C.cyan}33`, borderBottom: `1px solid ${C.cyan}33` }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-black mb-12" style={{ fontFamily: "var(--font-body)", fontSize: T.h2sm, letterSpacing: "-0.03em", color: C.dark }}>What happens when you report.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", title: "You flag it",     desc: "Tap the report button on any post, comment, or profile. Takes 3 seconds.",              accent: C.purple },
                { step: "02", title: "We receive it",   desc: "Your report lands in our moderation queue instantly, categorised automatically.",        accent: C.pink   },
                { step: "03", title: "A human reviews", desc: "A real person reads the full context — not just the flag — within 4 hours.",             accent: C.cyan   },
                { step: "04", title: "Action taken",    desc: "Content removed, account warned or banned. You're notified of the outcome.",             accent: C.yellow },
              ].map((s, i) => (
                <div key={s.step} className="rounded-2xl p-6 border" style={{ backgroundColor: s.accent + "10", borderColor: s.accent + "33" }}>
                  <span className="font-bold block mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: s.accent === C.yellow ? "#7a6600" : s.accent }}>{s.step}</span>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-body)", fontSize: T.h4, letterSpacing: "-0.02em", color: C.dark }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.body, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5" style={{ backgroundColor: C.bg }}>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl border p-10 sm:p-14 text-center"
              style={{ background: `linear-gradient(135deg, ${C.purple}12 0%, ${C.pink}0d 100%)`, borderColor: C.purple + "33" }}>
              <span className="text-5xl mb-6 block">🚨</span>
              <h2 className="font-black mb-4" style={{ fontFamily: "var(--font-body)", fontSize: T.h2sm, letterSpacing: "-0.03em", color: C.dark }}>See something wrong?</h2>
              <p className="mb-8 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.body }}>
                Use the in-app report button, or reach our safety team directly. Every report is read by a real human.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:safety@xoque.app" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all active:scale-95 hover:opacity-90"
                  style={{ fontFamily: "var(--font-body)", fontSize: T.body, background: C.purple, color: "#fff", boxShadow: `0 4px 20px ${C.purple}44` }}>
                  Email safety team
                </a>
                <a href="/help" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border transition-all hover:bg-black/5"
                  style={{ fontFamily: "var(--font-body)", fontSize: T.body, borderColor: C.purple + "44", color: C.mid }}>
                  Help Center →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}