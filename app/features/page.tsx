// "use client";

// import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";

// const FEATURES = [
//   {
//     symbol: "📸",
//     title: "Live-only posting",
//     desc: "No gallery uploads. If you didn't capture it right now, it doesn't belong here. Every post is timestamped and verified as live.",
//     tag: "Core",
//   },
//   {
//     symbol: "✦",
//     title: "Zero AI content",
//     desc: "Hard-blocked. No AI-generated images, no AI-written captions, no synthetic avatars. Everything you see is from a real person.",
//     tag: "Core",
//   },
//   {
//     symbol: "⊞",
//     title: "Co-Create",
//     desc: "Tag friends into a moment and let them post from their perspective in real time. A squad story, told by the whole squad.",
//     tag: "Social",
//   },
//   {
//     symbol: "🎯",
//     title: "Que Cards",
//     desc: "Share a thought, a vibe, or a quick update — no photo needed. Quick, ephemeral, and real.",
//     tag: "Formats",
//   },
//   {
//     symbol: "◎",
//     title: "No infinite scroll",
//     desc: "See what matters. Then close the app and go live your life. We've deliberately removed the feed mechanics that keep you stuck.",
//     tag: "Wellbeing",
//   },
//   {
//     symbol: "📍",
//     title: "Live location context",
//     desc: "Optional live location tags let your friends know where you are in this moment — not where you were last Tuesday.",
//     tag: "Context",
//   },
//   {
//     symbol: "🔴",
//     title: "Live mode",
//     desc: "Broadcast to your people in real time. No delay, no editing window, no going back. Just the moment as it happens.",
//     tag: "Formats",
//   },
//   {
//     symbol: "🔒",
//     title: "Real-circle privacy",
//     desc: "You choose who sees what. No algorithmic suggestions, no shadow audiences. Your content reaches exactly who you pick.",
//     tag: "Privacy",
//   },
// ];

// export default function FeaturesPage() {
//   return (
//     <div className="min-h-screen" style={{ backgroundColor: "#07020f" }}>
//       <Navbar />

//       {/* Hero */}
//       <section className="relative pt-36 pb-20 px-5 overflow-hidden">
//         <div
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full pointer-events-none opacity-20 blur-[120px]"
//           style={{ background: "radial-gradient(ellipse, #c095e4 0%, #7c3aed 60%, transparent 100%)" }}
//         />
//         <div className="max-w-3xl mx-auto relative z-10 text-center">
//           <p
//             className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4"
//             style={{ fontFamily: "var(--font-mono)", color: "#c095e4" }}
//           >
//             What's inside
//           </p>
//           <h1
//             className="font-black text-white mb-5 leading-[1.05]"
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(2.6rem, 7vw, 5rem)",
//               letterSpacing: "-0.04em",
//             }}
//           >
//             Built for{" "}
//             <span style={{ color: "#c095e4" }}>real moments.</span>
//           </h1>
//           <p className="text-white/45 max-w-md mx-auto text-[0.95rem]" style={{ fontFamily: "var(--font-body)" }}>
//             Every feature exists for one reason: to make you more present, not more performative.
//           </p>
//         </div>
//       </section>

//       {/* Features grid */}
//       <section className="pb-20 px-5">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {FEATURES.map((f) => (
//             <div
//               key={f.title}
//               className="rounded-2xl p-7 border transition-all hover:bg-white/[0.045] group"
//               style={{
//                 borderColor: "rgba(255,255,255,0.07)",
//                 backgroundColor: "rgba(255,255,255,0.025)",
//               }}
//             >
//               <div className="flex items-start justify-between mb-5">
//                 <span className="text-2xl">{f.symbol}</span>
//                 <span
//                   className="text-[8px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full border"
//                   style={{
//                     fontFamily: "var(--font-mono)",
//                     color: "#c095e4",
//                     borderColor: "rgba(192,149,228,0.25)",
//                     backgroundColor: "rgba(192,149,228,0.08)",
//                   }}
//                 >
//                   {f.tag}
//                 </span>
//               </div>
//               <h3
//                 className="font-black text-white text-lg mb-2.5"
//                 style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
//               >
//                 {f.title}
//               </h3>
//               <p className="text-white/42 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
//                 {f.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA strip */}
//       <section className="pb-24 px-5">
//         <div className="max-w-5xl mx-auto">
//           <div
//             className="rounded-2xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 border"
//             style={{
//               background: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(192,149,228,0.08) 100%)",
//               borderColor: "rgba(139,92,246,0.2)",
//             }}
//           >
//             <div>
//               <p
//                 className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/25 mb-2"
//                 style={{ fontFamily: "var(--font-mono)" }}
//               >
//                 Ready?
//               </p>
//               <h2
//                 className="font-black text-white text-[1.8rem] sm:text-[2.2rem] leading-tight"
//                 style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
//               >
//                 The real world<br />is waiting.
//               </h2>
//             </div>
//             <a
//               href="/download"
//               className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[14px] transition-all active:scale-95 hover:opacity-90 flex-shrink-0"
//               style={{
//                 fontFamily: "var(--font-display)",
//                 background: "#ffffff",
//                 color: "#3b0764",
//                 boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
//               }}
//             >
//               Download xoque
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }



"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const FEATURES = [
  {
    symbol: "📸",
    title: "Live-only posting",
    desc: "No gallery uploads. If you didn't capture it right now, it doesn't belong here. Every post is timestamped and verified as live.",
    tag: "Core",
    accent: "#C095E4",
    bg: "rgba(192,149,228,0.07)",
    border: "rgba(192,149,228,0.2)",
  },
  {
    symbol: "✦",
    title: "Zero AI content",
    desc: "Hard-blocked. No AI-generated images, no AI-written captions, no synthetic avatars. Everything you see is from a real person.",
    tag: "Core",
    accent: "#C095E4",
    bg: "rgba(192,149,228,0.07)",
    border: "rgba(192,149,228,0.2)",
  },
  {
    symbol: "⊞",
    title: "Co-Create",
    desc: "Tag friends into a moment and let them post from their perspective in real time. A squad story, told by the whole squad.",
    tag: "Social",
    accent: "#FFA0C5",
    bg: "rgba(255,160,197,0.07)",
    border: "rgba(255,160,197,0.2)",
  },
  {
    symbol: "🎯",
    title: "Que Cards",
    desc: "Share a thought, a vibe, or a quick update — no photo needed. Quick, ephemeral, and real.",
    tag: "Formats",
    accent: "#9BF6FF",
    bg: "rgba(155,246,255,0.07)",
    border: "rgba(155,246,255,0.25)",
  },
  {
    symbol: "◎",
    title: "No infinite scroll",
    desc: "See what matters. Then close the app and go live your life. We've deliberately removed the feed mechanics that keep you stuck.",
    tag: "Wellbeing",
    accent: "#FDFFB6",
    bg: "rgba(253,255,182,0.15)",
    border: "rgba(253,255,182,0.4)",
  },
  {
    symbol: "📍",
    title: "Live location context",
    desc: "Optional live location tags let your friends know where you are in this moment — not where you were last Tuesday.",
    tag: "Context",
    accent: "#9BF6FF",
    bg: "rgba(155,246,255,0.07)",
    border: "rgba(155,246,255,0.25)",
  },
  {
    symbol: "🔴",
    title: "Live mode",
    desc: "Broadcast to your people in real time. No delay, no editing window, no going back. Just the moment as it happens.",
    tag: "Formats",
    accent: "#FFA0C5",
    bg: "rgba(255,160,197,0.07)",
    border: "rgba(255,160,197,0.2)",
  },
  {
    symbol: "🔒",
    title: "Real-circle privacy",
    desc: "You choose who sees what. No algorithmic suggestions, no shadow audiences. Your content reaches exactly who you pick.",
    tag: "Privacy",
    accent: "#C095E4",
    bg: "rgba(192,149,228,0.07)",
    border: "rgba(192,149,228,0.2)",
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ backgroundColor: "#fafaf8", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-20 px-5 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(155,246,255,0.1) 0%, rgba(192,149,228,0.07) 50%, #fafaf8 100%)",
        }}
      >
        <div
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(253,255,182,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,160,197,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
            style={{
              backgroundColor: "rgba(192,149,228,0.1)",
              borderColor: "rgba(192,149,228,0.3)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#c095e4" }}
            />
            <span
              className="text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "#7c3aed" }}
            >
              What's inside
            </span>
          </div>

          <h1
            className="font-black mb-5 leading-[1.05]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(2.6rem, 7vw, 4.8rem)",
              letterSpacing: "-0.04em",
              color: "#0f0a1e",
            }}
          >
            Built for{" "}
            <span style={{ color: "#c095e4" }}>real moments.</span>
          </h1>
          <p
            className="max-w-md mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "#5a4a6a",
            }}
          >
            Every feature exists for one reason: to make you more present, not more performative.
          </p>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="pb-16 px-5 pt-4" style={{ backgroundColor: "#fafaf8" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-7 border transition-all hover:shadow-md hover:-translate-y-0.5 group"
              style={{ backgroundColor: f.bg, borderColor: f.border }}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{f.symbol}</span>
                <span
                  className="text-[9px] font-semibold tracking-[0.14em] uppercase px-2 py-0.5 rounded-full"
                  style={{
                    fontFamily: "var(--font-mono)",
                    backgroundColor: f.accent + "25",
                    color: f.accent === "#FDFFB6" ? "#7a6600" : f.accent,
                    border: `1px solid ${f.accent}44`,
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3
                className="font-bold text-[1.05rem] mb-2"
                style={{
                  fontFamily: "var(--font-body)",
                  letterSpacing: "-0.02em",
                  color: "#0f0a1e",
                }}
              >
                {f.title}
              </h3>
              <p
                className="text-[13px] leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 px-5" style={{ backgroundColor: "#fafaf8" }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-10 sm:p-16 flex flex-col sm:flex-row items-center justify-between gap-8 border"
            style={{
              background:
                "linear-gradient(135deg, rgba(192,149,228,0.12) 0%, rgba(255,160,197,0.08) 100%)",
              borderColor: "rgba(192,149,228,0.25)",
            }}
          >
            <div>
              <p
                className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2"
                style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
              >
                Ready?
              </p>
              <h2
                className="font-black leading-tight"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  letterSpacing: "-0.04em",
                  color: "#0f0a1e",
                }}
              >
                The real world<br />is waiting.
              </h2>
            </div>
            <a
              href="/download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[14px] transition-all active:scale-95 hover:opacity-90 flex-shrink-0"
              style={{
                fontFamily: "var(--font-body)",
                background: "#c095e4",
                color: "#fff",
                boxShadow: "0 8px 28px rgba(192,149,228,0.4)",
              }}
            >
              Download xoque
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}