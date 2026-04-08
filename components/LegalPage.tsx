// "use client";

// import PageLayout from "@/components/PageLayout";

// interface LegalSection {
//   title: string;
//   content: string;
// }

// interface LegalPageProps {
//   badge: string;
//   title: string;
//   subtitle: string;
//   updated: string;
//   sections: LegalSection[];
// }

// export default function LegalPage({ badge, title, subtitle, updated, sections }: LegalPageProps) {
//   return (
//     <PageLayout>
//       {/* Hero */}
//       <section className="relative pt-36 pb-12 px-5 overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full opacity-10 blur-[100px] pointer-events-none"
//           style={{ background: "radial-gradient(ellipse, #c095e4 0%, #7c3aed 60%, transparent 100%)" }} />
//         <div className="max-w-2xl mx-auto relative z-10">
//           <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5"
//             style={{ fontFamily: "var(--font-mono)", color: "#c095e4" }}>
//             {badge}
//           </p>
//           <h1 className="font-black text-white mb-4 leading-[1.05]"
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(2rem, 5vw, 3.5rem)",
//               letterSpacing: "-0.04em",
//             }}>
//             {title}
//           </h1>
//           <p className="text-white/45 mb-3 text-[0.9rem]" style={{ fontFamily: "var(--font-body)" }}>
//             {subtitle}
//           </p>
//           <p className="text-[10px] text-white/22" style={{ fontFamily: "var(--font-mono)" }}>
//             Last updated: {updated}
//           </p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="pb-24 px-5">
//         <div className="max-w-2xl mx-auto">
//           <div className="h-px bg-white/[0.07] mb-10" />
//           <div className="flex flex-col gap-10">
//             {sections.map((s, i) => (
//               <div key={s.title}>
//                 <div className="flex items-baseline gap-3 mb-3">
//                   <span className="text-[10px] text-white/18 font-mono">{String(i + 1).padStart(2, "0")}</span>
//                   <h2 className="font-black text-white text-lg"
//                     style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
//                     {s.title}
//                   </h2>
//                 </div>
//                 <p className="text-white/45 text-[14px] leading-[1.8] pl-7"
//                   style={{ fontFamily: "var(--font-body)" }}>
//                   {s.content}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Contact footer */}
//           <div className="mt-14 pt-8 border-t border-white/[0.07]">
//             <p className="text-white/25 text-[12px]" style={{ fontFamily: "var(--font-body)" }}>
//               Questions about this document?{" "}
//               <a href="mailto:legal@xoque.app" className="text-[#c095e4] hover:underline">
//                 legal@xoque.app
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>
//     </PageLayout>
//   );
// }


"use client";
// components/LegalPage.tsx — shared template for all legal pages

import { PageShell, FadeIn, Badge, C, T } from "@/lib/pageUtils";

export interface LegalSection {
  title: string;
  content: string | string[]; // string[] = multiple paragraphs
}

interface LegalPageProps {
  badge: string;
  title: string;
  subtitle: string;
  updated: string;
  accentColor?: string;
  sections: LegalSection[];
}

export default function LegalPage({
  badge,
  title,
  subtitle,
  updated,
  accentColor = C.purple,
  sections,
}: LegalPageProps) {
  return (
    <PageShell>
      {/* Hero */}
      <section
        className="relative pt-36 pb-16 px-5 overflow-hidden"
        style={{ background: `linear-gradient(150deg, ${accentColor}15 0%, ${C.bg} 65%)` }}
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${accentColor}18 0%, transparent 70%)` }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <Badge label={badge} accent={accentColor} />
          <h1
            className="font-black mb-4 leading-[1.04]"
            style={{ fontFamily: "var(--font-body)", fontSize: T.h1, letterSpacing: "-0.045em", color: C.dark }}
          >
            {title}
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: T.lead, color: C.body, marginBottom: "12px" }}>
            {subtitle}
          </p>
          <p className="font-medium" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: C.muted }}>
            Last updated: {updated}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-5">
        <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}55, transparent)` }} />
      </div>

      {/* Content */}
      <section className="pt-12 pb-28 px-5" style={{ backgroundColor: C.bg }}>
        <div className="max-w-2xl mx-auto flex flex-col gap-12">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delayMs={i * 50}>
              <div className="flex gap-5 items-start">
                {/* Step number */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold mt-0.5"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "13px", backgroundColor: accentColor + "18", color: accentColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h2
                    className="font-bold mb-3"
                    style={{ fontFamily: "var(--font-body)", fontSize: T.h4, letterSpacing: "-0.025em", color: C.dark }}
                  >
                    {s.title}
                  </h2>
                  {Array.isArray(s.content)
                    ? s.content.map((p, pi) => (
                        <p key={pi} style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.body, lineHeight: 1.8, marginBottom: pi < s.content.length - 1 ? "14px" : 0 }}>{p}</p>
                      ))
                    : (
                        <p style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.body, lineHeight: 1.8 }}>{s.content}</p>
                      )
                  }
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Contact */}
          <div className="mt-4 pt-10 border-t" style={{ borderColor: accentColor + "33" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: T.body, color: C.muted }}>
              Questions about this document?{" "}
              <a href="mailto:legal@xoque.app" className="font-semibold hover:underline" style={{ color: accentColor }}>
                legal@xoque.app
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}