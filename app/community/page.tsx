"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const GUIDELINES = [
  { icon: "✦",  rule: "Be real",              detail: "Post what's actually happening, not what you wish was happening." },
  { icon: "◎",  rule: "No AI, ever",          detail: "AI-generated content — images, text, avatars — is an instant ban." },
  { icon: "🤝",  rule: "Respect the moment",  detail: "Don't screenshot or share other people's posts without permission. This is their moment, not your content." },
  { icon: "🔇",  rule: "No harassment",       detail: "Pile-ons, targeted hate, and callouts have no place here. We've designed against it — and we enforce it." },
  { icon: "📍",  rule: "No doxxing",          detail: "Sharing someone's location, home, or personal info without consent is a permanent ban." },
  { icon: "🔞",  rule: "Adults only",         detail: "Explicit content is not permitted. This is a platform for real life, not curated content." },
];

const TESTIMONIALS = [
  {
    text: "First app I've used in years where I don't feel like I'm performing for an invisible audience.",
    handle: "@kai.lens",
    avatar: "https://i.pravatar.cc/48?img=11",
  },
  {
    text: "The co-create feature genuinely changed how me and my friends share moments. It's collaborative in a way Instagram never was.",
    handle: "@sara.k",
    avatar: "https://i.pravatar.cc/48?img=58",
  },
  {
    text: "I post without thinking about engagement. That's wild to say. But here I am.",
    handle: "@dev.arjun",
    avatar: "https://i.pravatar.cc/48?img=15",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#07020f" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-5 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[360px] rounded-full pointer-events-none opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #c095e4 0%, #7c3aed 60%, transparent 100%)" }}
        />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <p
            className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "#c095e4" }}
          >
            Community
          </p>
          <h1
            className="font-black text-white mb-5 leading-[1.05]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 7vw, 5rem)",
              letterSpacing: "-0.04em",
            }}
          >
            12,000+ people{" "}
            <span style={{ color: "#c095e4" }}>being real.</span>
          </h1>
          <p className="text-white/45 max-w-md mx-auto text-[0.95rem]" style={{ fontFamily: "var(--font-body)" }}>
            The xoque community is built on one shared value: authenticity. Here's how we keep it that way.
          </p>
        </div>
      </section>

      {/* Stats row */}
      <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          {[
            { val: "12k+", label: "Real people" },
            { val: "4hr",  label: "Report response" },
            { val: "0",    label: "AI posts allowed" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-6 text-center border"
              style={{
                borderColor: "rgba(192,149,228,0.15)",
                backgroundColor: "rgba(192,149,228,0.05)",
              }}
            >
              <p
                className="font-black text-white mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  letterSpacing: "-0.04em",
                  color: "#c095e4",
                }}
              >
                {s.val}
              </p>
              <p
                className="text-[11px] text-white/35 uppercase tracking-[0.12em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines */}
      <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/25 mb-8 text-center"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Community Guidelines
          </p>
          <div className="flex flex-col gap-3">
            {GUIDELINES.map((g, i) => (
              <div
                key={g.rule}
                className="flex items-start gap-5 p-6 rounded-2xl border transition-all hover:bg-white/[0.035]"
                style={{
                  borderColor: "rgba(255,255,255,0.07)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 border text-lg"
                  style={{
                    borderColor: "rgba(192,149,228,0.2)",
                    backgroundColor: "rgba(192,149,228,0.08)",
                  }}
                >
                  {g.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className="font-black text-white text-[1rem] mb-1"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                  >
                    {g.rule}
                  </h3>
                  <p className="text-white/42 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {g.detail}
                  </p>
                </div>
                <span className="text-[10px] text-white/12 font-mono self-center flex-shrink-0">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-24 px-5">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/25 mb-8 text-center"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            From the community
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.handle}
                className="rounded-2xl p-6 border"
                style={{
                  borderColor: "rgba(255,255,255,0.07)",
                  backgroundColor: "rgba(255,255,255,0.025)",
                }}
              >
                <p
                  className="text-white/55 text-[13px] leading-relaxed mb-5 italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2.5">
                  <img src={t.avatar} className="w-7 h-7 rounded-full border border-white/10" alt="" />
                  <span
                    className="text-[11px] text-white/35"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t.handle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}