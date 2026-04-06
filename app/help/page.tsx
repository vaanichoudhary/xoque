// "use client";

// import { useState } from "react";
// import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";

// const FAQS = [
//   {
//     category: "Getting Started",
//     items: [
//       { q: "How do I create a xoque account?", a: "Download the app from the App Store or Google Play, tap 'Create Account', and verify your phone number. That's it. No email required." },
//       { q: "Is xoque free to use?", a: "Yes. xoque is free. We don't have a paid tier, ads, or anything in between. We're funded by investors who believe in the mission." },
//       { q: "What devices does xoque support?", a: "iOS 15+ and Android 10+. We're not on web — posting from a phone camera is part of the core experience." },
//     ],
//   },
//   {
//     category: "Posting & Content",
//     items: [
//       { q: "Why can't I upload from my gallery?", a: "That's by design. xoque is built for real-time moments. If you took it yesterday, it's not for here." },
//       { q: "What is a Que Card?", a: "A Que Card lets you post a thought, vibe, or update without a photo. Text-only, quick, and ephemeral." },
//       { q: "What is Co-Create mode?", a: "Tag friends into your moment and let them add their perspective in real time. Think of it as a collaborative post." },
//     ],
//   },
//   {
//     category: "Account & Privacy",
//     items: [
//       { q: "Who can see my posts?", a: "Only the people you choose. There's no algorithmic amplification on xoque — your circle is your circle." },
//       { q: "How do I delete my account?", a: "Go to Settings → Account → Delete Account. Your data is fully removed within 30 days." },
//       { q: "Does xoque sell my data?", a: "No. We never have, never will. Read our Privacy Policy for the full picture." },
//     ],
//   },
// ];

// export default function HelpPage() {
//   const [open, setOpen] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: "#07020f" }}>
//       <Navbar />

//       {/* Hero */}
//       <section className="relative pt-36 pb-20 px-5 overflow-hidden">
//         <div
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[340px] rounded-full pointer-events-none opacity-20 blur-[110px]"
//           style={{ background: "radial-gradient(ellipse, #c095e4 0%, #7c3aed 60%, transparent 100%)" }}
//         />
//         <div className="max-w-2xl mx-auto relative z-10 text-center">
//           <p
//             className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4"
//             style={{ fontFamily: "var(--font-mono)", color: "#c095e4" }}
//           >
//             Help Center
//           </p>
//           <h1
//             className="font-black text-white mb-5 leading-[1.05]"
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
//               letterSpacing: "-0.04em",
//             }}
//           >
//             Real answers.{" "}
//             <span style={{ color: "#c095e4" }}>No bots.</span>
//           </h1>
//           <p className="text-white/45 max-w-md mx-auto text-[0.95rem]" style={{ fontFamily: "var(--font-body)" }}>
//             Everything you need to know about xoque, answered by humans who built it.
//           </p>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="pb-24 px-5">
//         <div className="max-w-2xl mx-auto flex flex-col gap-10">
//           {FAQS.map((section) => (
//             <div key={section.category}>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#c095e4" }} />
//                 <p
//                   className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/25"
//                   style={{ fontFamily: "var(--font-mono)" }}
//                 >
//                   {section.category}
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 {section.items.map((item) => {
//                   const isOpen = open === item.q;
//                   return (
//                     <div
//                       key={item.q}
//                       className="rounded-xl overflow-hidden border transition-all duration-200"
//                       style={{
//                         borderColor: isOpen ? "rgba(192,149,228,0.35)" : "rgba(255,255,255,0.07)",
//                         backgroundColor: isOpen ? "rgba(192,149,228,0.07)" : "rgba(255,255,255,0.02)",
//                       }}
//                     >
//                       <button
//                         onClick={() => setOpen(isOpen ? null : item.q)}
//                         className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
//                       >
//                         <span
//                           className="font-bold text-[14px] leading-snug text-white/80"
//                           style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
//                         >
//                           {item.q}
//                         </span>
//                         <span
//                           className="text-xl flex-shrink-0 transition-transform duration-250"
//                           style={{
//                             color: "#c095e4",
//                             transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
//                             display: "inline-block",
//                           }}
//                         >
//                           +
//                         </span>
//                       </button>
//                       {isOpen && (
//                         <div className="px-5 pb-5">
//                           <p
//                             className="text-[13px] leading-relaxed pt-4 border-t text-white/45"
//                             style={{
//                               fontFamily: "var(--font-body)",
//                               borderColor: "rgba(192,149,228,0.15)",
//                             }}
//                           >
//                             {item.a}
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}

//           {/* Contact card */}
//           <div
//             className="rounded-2xl border p-8 text-center"
//             style={{
//               borderColor: "rgba(192,149,228,0.2)",
//               background: "rgba(192,149,228,0.06)",
//             }}
//           >
//             <p
//               className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/22 mb-3"
//               style={{ fontFamily: "var(--font-mono)" }}
//             >
//               Still stuck?
//             </p>
//             <h3
//               className="font-black text-white text-xl mb-2"
//               style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
//             >
//               Talk to a real human.
//             </h3>
//             <p className="text-white/40 text-sm mb-6 max-w-xs mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
//               Our support team responds within 24 hours. No AI, no scripts.
//             </p>
//             <a
//               href="mailto:support@xoque.app"
//               className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border font-bold text-[13px] transition-all hover:bg-white/10"
//               style={{
//                 fontFamily: "var(--font-display)",
//                 borderColor: "rgba(192,149,228,0.3)",
//                 color: "#c095e4",
//               }}
//             >
//               support@xoque.app
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const FAQS = [
  {
    category: "Getting Started",
    accent: "#C095E4",
    bg: "rgba(192,149,228,0.07)",
    border: "rgba(192,149,228,0.2)",
    activeBorder: "rgba(192,149,228,0.5)",
    activeBg: "rgba(192,149,228,0.1)",
    items: [
      {
        q: "How do I create a xoque account?",
        a: "Download the app from the App Store or Google Play, tap 'Create Account', and verify your phone number. That's it. No email required.",
      },
      {
        q: "Is xoque free to use?",
        a: "Yes. xoque is free. We don't have a paid tier, ads, or anything in between. We're funded by investors who believe in the mission.",
      },
      {
        q: "What devices does xoque support?",
        a: "iOS 15+ and Android 10+. We're not on web — posting from a phone camera is part of the core experience.",
      },
    ],
  },
  {
    category: "Posting & Content",
    accent: "#FFA0C5",
    bg: "rgba(255,160,197,0.07)",
    border: "rgba(255,160,197,0.2)",
    activeBorder: "rgba(255,160,197,0.5)",
    activeBg: "rgba(255,160,197,0.1)",
    items: [
      {
        q: "Why can't I upload from my gallery?",
        a: "That's by design. xoque is built for real-time moments. If you took it yesterday, it's not for here.",
      },
      {
        q: "What is a Que Card?",
        a: "A Que Card lets you post a thought, vibe, or update without a photo. Text-only, quick, and ephemeral.",
      },
      {
        q: "What is Co-Create mode?",
        a: "Tag friends into your moment and let them add their perspective in real time. Think of it as a collaborative post.",
      },
    ],
  },
  {
    category: "Account & Privacy",
    accent: "#9BF6FF",
    bg: "rgba(155,246,255,0.07)",
    border: "rgba(155,246,255,0.25)",
    activeBorder: "rgba(155,246,255,0.55)",
    activeBg: "rgba(155,246,255,0.1)",
    items: [
      {
        q: "Who can see my posts?",
        a: "Only the people you choose. There's no algorithmic amplification on xoque — your circle is your circle.",
      },
      {
        q: "How do I delete my account?",
        a: "Go to Settings → Account → Delete Account. Your data is fully removed within 30 days.",
      },
      {
        q: "Does xoque sell my data?",
        a: "No. We never have, never will. Read our Privacy Policy for the full picture.",
      },
    ],
  },
];

export default function HelpPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: "#fafaf8", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-20 px-5 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, rgba(155,246,255,0.12) 0%, rgba(192,149,228,0.06) 50%, #fafaf8 100%)",
        }}
      >
        <div
          className="absolute -top-16 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(192,149,228,0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-10 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,160,197,0.1) 0%, transparent 70%)" }}
        />

        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
            style={{
              backgroundColor: "rgba(155,246,255,0.15)",
              borderColor: "rgba(155,246,255,0.35)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#9BF6FF" }} />
            <span
              className="text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "#0891b2" }}
            >
              Help Center
            </span>
          </div>

          <h1
            className="font-black mb-4 leading-[1.05]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              letterSpacing: "-0.04em",
              color: "#0f0a1e",
            }}
          >
            Real answers.{" "}
            <span style={{ color: "#c095e4" }}>No bots.</span>
          </h1>
          <p
            className="max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#5a4a6a" }}
          >
            Everything you need to know about xoque — answered by humans who actually built it.
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="pb-20 px-5" style={{ backgroundColor: "#fafaf8" }}>
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          {FAQS.map((section) => (
            <div key={section.category}>
              {/* Section header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: section.accent }}
                />
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
                >
                  {section.category}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {section.items.map((item) => {
                  const isOpen = open === item.q;
                  return (
                    <div
                      key={item.q}
                      className="rounded-xl border overflow-hidden transition-all duration-200"
                      style={{
                        borderColor: isOpen ? section.activeBorder : section.border,
                        backgroundColor: isOpen ? section.activeBg : "#fff",
                      }}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : item.q)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span
                          className="font-semibold text-[14px] leading-snug"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "#0f0a1e",
                          }}
                        >
                          {item.q}
                        </span>
                        <span
                          className="text-xl flex-shrink-0 transition-transform duration-200 inline-block"
                          style={{
                            color: section.accent,
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          }}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p
                            className="text-[13px] leading-relaxed pt-4 border-t"
                            style={{
                              fontFamily: "var(--font-body)",
                              color: "#5a4a6a",
                              borderColor: `${section.accent}30`,
                            }}
                          >
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact card */}
          <div
            className="rounded-2xl border p-8 sm:p-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(192,149,228,0.08) 0%, rgba(255,160,197,0.06) 100%)",
              borderColor: "rgba(192,149,228,0.2)",
            }}
          >
            <p
              className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
            >
              Still stuck?
            </p>
            <h3
              className="font-black text-xl mb-2"
              style={{
                fontFamily: "var(--font-body)",
                letterSpacing: "-0.02em",
                color: "#0f0a1e",
              }}
            >
              Talk to a real human.
            </h3>
            <p
              className="text-sm mb-6 max-w-xs mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#5a4a6a" }}
            >
              Our support team responds within 24 hours. No AI, no scripts — a real person reads your message.
            </p>
            <a
              href="mailto:support@xoque.app"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-[13px] transition-all hover:opacity-80"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: "#c095e4",
                color: "#fff",
                boxShadow: "0 4px 16px rgba(192,149,228,0.35)",
              }}
            >
              support@xoque.app
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}