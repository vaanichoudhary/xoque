"use client";

import PageLayout from "@/components/PageLayout";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalPageProps {
  badge: string;
  title: string;
  subtitle: string;
  updated: string;
  sections: LegalSection[];
}

export default function LegalPage({ badge, title, subtitle, updated, sections }: LegalPageProps) {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-12 px-5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full opacity-10 blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #c095e4 0%, #7c3aed 60%, transparent 100%)" }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5"
            style={{ fontFamily: "var(--font-mono)", color: "#c095e4" }}>
            {badge}
          </p>
          <h1 className="font-black text-white mb-4 leading-[1.05]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.04em",
            }}>
            {title}
          </h1>
          <p className="text-white/45 mb-3 text-[0.9rem]" style={{ fontFamily: "var(--font-body)" }}>
            {subtitle}
          </p>
          <p className="text-[10px] text-white/22" style={{ fontFamily: "var(--font-mono)" }}>
            Last updated: {updated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="h-px bg-white/[0.07] mb-10" />
          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={s.title}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[10px] text-white/18 font-mono">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-black text-white text-lg"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                    {s.title}
                  </h2>
                </div>
                <p className="text-white/45 text-[14px] leading-[1.8] pl-7"
                  style={{ fontFamily: "var(--font-body)" }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact footer */}
          <div className="mt-14 pt-8 border-t border-white/[0.07]">
            <p className="text-white/25 text-[12px]" style={{ fontFamily: "var(--font-body)" }}>
              Questions about this document?{" "}
              <a href="mailto:legal@xoque.app" className="text-[#c095e4] hover:underline">
                legal@xoque.app
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}