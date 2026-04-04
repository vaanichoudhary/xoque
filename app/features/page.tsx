"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const FEATURES = [
  {
    symbol: "📸",
    title: "Live-only posting",
    desc: "No gallery uploads. If you didn't capture it right now, it doesn't belong here. Every post is timestamped and verified as live.",
    tag: "Core",
  },
  {
    symbol: "✦",
    title: "Zero AI content",
    desc: "Hard-blocked. No AI-generated images, no AI-written captions, no synthetic avatars. Everything you see is from a real person.",
    tag: "Core",
  },
  {
    symbol: "⊞",
    title: "Co-Create",
    desc: "Tag friends into a moment and let them post from their perspective in real time. A squad story, told by the whole squad.",
    tag: "Social",
  },
  {
    symbol: "🎯",
    title: "Que Cards",
    desc: "Share a thought, a vibe, or a quick update — no photo needed. Quick, ephemeral, and real.",
    tag: "Formats",
  },
  {
    symbol: "◎",
    title: "No infinite scroll",
    desc: "See what matters. Then close the app and go live your life. We've deliberately removed the feed mechanics that keep you stuck.",
    tag: "Wellbeing",
  },
  {
    symbol: "📍",
    title: "Live location context",
    desc: "Optional live location tags let your friends know where you are in this moment — not where you were last Tuesday.",
    tag: "Context",
  },
  {
    symbol: "🔴",
    title: "Live mode",
    desc: "Broadcast to your people in real time. No delay, no editing window, no going back. Just the moment as it happens.",
    tag: "Formats",
  },
  {
    symbol: "🔒",
    title: "Real-circle privacy",
    desc: "You choose who sees what. No algorithmic suggestions, no shadow audiences. Your content reaches exactly who you pick.",
    tag: "Privacy",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#07020f" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-5 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full pointer-events-none opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #c095e4 0%, #7c3aed 60%, transparent 100%)" }}
        />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <p
            className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "#c095e4" }}
          >
            What's inside
          </p>
          <h1
            className="font-black text-white mb-5 leading-[1.05]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 7vw, 5rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Built for{" "}
            <span style={{ color: "#c095e4" }}>real moments.</span>
          </h1>
          <p className="text-white/45 max-w-md mx-auto text-[0.95rem]" style={{ fontFamily: "var(--font-body)" }}>
            Every feature exists for one reason: to make you more present, not more performative.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="pb-20 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-7 border transition-all hover:bg-white/[0.045] group"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                backgroundColor: "rgba(255,255,255,0.025)",
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{f.symbol}</span>
                <span
                  className="text-[8px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "#c095e4",
                    borderColor: "rgba(192,149,228,0.25)",
                    backgroundColor: "rgba(192,149,228,0.08)",
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <h3
                className="font-black text-white text-lg mb-2.5"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {f.title}
              </h3>
              <p className="text-white/42 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="pb-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 border"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(192,149,228,0.08) 100%)",
              borderColor: "rgba(139,92,246,0.2)",
            }}
          >
            <div>
              <p
                className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/25 mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Ready?
              </p>
              <h2
                className="font-black text-white text-[1.8rem] sm:text-[2.2rem] leading-tight"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                The real world<br />is waiting.
              </h2>
            </div>
            <a
              href="/download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[14px] transition-all active:scale-95 hover:opacity-90 flex-shrink-0"
              style={{
                fontFamily: "var(--font-display)",
                background: "#ffffff",
                color: "#3b0764",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
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