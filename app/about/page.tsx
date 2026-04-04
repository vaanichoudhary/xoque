"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// ── Palette ─────────────────────────────────────────────────────────────────
const P = "#2d1342"; // purple
const M = "#FFA0C5"; // magenta/pink
const C = "#9BF6FF"; // cyan
const Y = "#FDFFB6"; // yellow

// ── Data ────────────────────────────────────────────────────────────────────
const TEAM = [
  {
    name: "Aryan S.",
    role: "Founder & CEO",
    quote: "I wanted an app I'd actually use. So I built it.",
    avatar: "https://i.pravatar.cc/200?img=11",
    accent: P,
  },
  {
    name: "Meera K.",
    role: "Head of Design",
    quote: "Every pixel here is a decision against addiction.",
    avatar: "https://i.pravatar.cc/200?img=32",
    accent: M,
  },
  {
    name: "Dev R.",
    role: "Lead Engineer",
    quote: "Real-time or nothing. That's the constraint we shipped around.",
    avatar: "https://i.pravatar.cc/200?img=30",
    accent: C,
  },
  {
    name: "Sara T.",
    role: "Community",
    quote: "Communities don't scale. That's a feature, not a bug.",
    avatar: "https://i.pravatar.cc/200?img=58",
    accent: Y,
  },
];

const TIMELINE = [
  { year: "2024", label: "The idea", body: "Tired of curated feeds and AI-generated noise, Aryan started building xoque in a Bangalore apartment." },
  { year: "Q1 '25", label: "First build", body: "Live-only posting shipped. The first test: 12 friends, zero gallery uploads allowed." },
  { year: "Q3 '25", label: "Beta launch", body: "500 invites sent. Every single one forwarded. Within a week, 12,000 people on the waitlist." },
  { year: "2026", label: "Now", body: "xoque is live. Real people. Real moments. No algorithm deciding what you see." },
];

const GALLERY_IMGS = [
  { src: "https://xoque-lemon.vercel.app/images/1.jpeg", label: "Authentic" },
  { src: "https://xoque-lemon.vercel.app/images/3.jpeg", label: "Que" },
  { src: "https://xoque-lemon.vercel.app/images/5.jpeg", label: "Perspective" },
  { src: "https://xoque-lemon.vercel.app/images/7.jpeg", label: "Live" },
  { src: "https://xoque-lemon.vercel.app/images/9.jpeg", label: "Honest" },
  { src: "https://xoque-lemon.vercel.app/images/2.jpeg", label: "Co-Create" },
];

// ── Fade-in hook ─────────────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

// ── Reusable fade wrapper ────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#07020f", overflowX: "hidden" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — full viewport, dark with pastel glow blobs + big type
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-5 pt-32 pb-24 overflow-hidden"
      >
        {/* Ambient blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${P}33 0%, transparent 70%)` }} />
        <div className="absolute top-40 right-0 w-[380px] h-[380px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${M}22 0%, transparent 70%)` }} />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${C}1a 0%, transparent 70%)` }} />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8"
                style={{ borderColor: `${P}44`, backgroundColor: `${P}11` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: P }} />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: P }}>
                  Our Story
                </span>
              </div>

              <h1
                className="font-black text-white leading-[1.0] mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  letterSpacing: "-0.05em",
                }}
              >
                We got tired<br />of{" "}
                <span
                  className="relative inline-block"
                  style={{ color: P }}
                >
                  pretending.
                  {/* Underline squiggle accent */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8" viewBox="0 0 200 8" preserveAspectRatio="none"
                    style={{ opacity: 0.5 }}
                  >
                    <path d="M0 6 Q25 1 50 5 Q75 9 100 4 Q125 -1 150 5 Q175 9 200 4"
                      fill="none" stroke={M} strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p
                className="text-white/50 leading-[1.75] mb-8 max-w-md"
                style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem" }}
              >
                Every platform pushed us to perform — to curate, to filter, to grow a number. xoque exists because we couldn't find a social app that felt honest. So we built the one we actually wanted.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {[47, 32, 12, 58].map(n => (
                    <img key={n} src={`https://i.pravatar.cc/48?img=${n}`}
                      className="w-9 h-9 rounded-full border-2" style={{ borderColor: "#07020f" }} alt="" />
                  ))}
                </div>
                <p className="text-white/35 text-[13px]" style={{ fontFamily: "var(--font-body)" }}>
                  12,000+ people already here
                </p>
              </div>
            </div>

            {/* Right — floating photo collage */}
            <div className="relative h-[480px] hidden lg:block">
              {/* Main large image */}
              <div
                className="absolute top-0 right-0 w-[260px] h-[340px] rounded-2xl overflow-hidden border-2 shadow-2xl"
                style={{ borderColor: `${P}44`, boxShadow: `0 0 60px ${P}22` }}
              >
                <img src="https://xoque-lemon.vercel.app/images/1.jpeg"
                  className="w-full h-full object-cover" alt="Real moment" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,2,15,0.5) 0%, transparent 50%)" }} />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "var(--font-mono)", backgroundColor: P, color: "#1a0f2e" }}>
                    Authentic
                  </span>
                </div>
              </div>

              {/* Second image — offset */}
              <div
                className="absolute top-28 left-0 w-[200px] h-[260px] rounded-2xl overflow-hidden border-2 shadow-xl"
                style={{ borderColor: `${M}44`, boxShadow: `0 0 40px ${M}1a` }}
              >
                <img src="https://xoque-lemon.vercel.app/images/2.jpeg"
                  className="w-full h-full object-cover" alt="Co-create" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,2,15,0.5) 0%, transparent 50%)" }} />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "var(--font-mono)", backgroundColor: M, color: "#1a0f2e" }}>
                    Co-Create
                  </span>
                </div>
              </div>

              {/* Third — bottom right */}
              <div
                className="absolute bottom-0 right-20 w-[180px] h-[220px] rounded-2xl overflow-hidden border-2 shadow-xl"
                style={{ borderColor: `${C}44`, boxShadow: `0 0 40px ${C}1a` }}
              >
                <img src="https://xoque-lemon.vercel.app/images/7.jpeg"
                  className="w-full h-full object-cover" alt="Live" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,2,15,0.5) 0%, transparent 50%)" }} />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "var(--font-mono)", backgroundColor: C, color: "#1a3d4a" }}>
                    Live
                  </span>
                </div>
              </div>

              {/* Floating pill */}
              <div
                className="absolute top-4 left-8 px-3 py-2 rounded-full border text-[11px] font-bold text-white/60 backdrop-blur-sm"
                style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                🔴 Live now
              </div>
              <div
                className="absolute bottom-16 left-4 px-3 py-2 rounded-full border text-[11px] font-bold backdrop-blur-sm"
                style={{ borderColor: `${Y}44`, backgroundColor: `${Y}11`, color: Y }}
              >
                ✦ imperfect but real.
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[9px] tracking-[0.2em] uppercase text-white" style={{ fontFamily: "var(--font-mono)" }}>scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MISSION — pastel pink wash panel
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-5 overflow-hidden"
        style={{ backgroundColor: `${M}14` }}
      >
        {/* Top edge */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${M}55, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${M}55, transparent)` }} />

        <FadeIn className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)", color: M }}>
                Why xoque exists
              </p>
              <h2
                className="font-black leading-[1.05] mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  letterSpacing: "-0.04em",
                  color: "#ffffff",
                }}
              >
                Social media broke something real in us.
              </h2>
              <p className="text-white/45 leading-[1.8] text-[15px]" style={{ fontFamily: "var(--font-body)" }}>
                We spent years optimising posts for engagement instead of meaning. We curated instead of lived. We replaced presence with performance. xoque is a bet that people actually want to be real — they just needed a place that let them.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "0", unit: "ads", label: "Ever. No advertising model.", accent: M },
                { val: "100%", unit: "live", label: "Every post, right now.", accent: C },
                { val: "0", unit: "AI posts", label: "Hard-blocked, architecturally.", accent: P },
                { val: "∞", unit: "real moments", label: "That's the whole point.", accent: Y },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-5 border"
                  style={{ borderColor: `${s.accent}33`, backgroundColor: `${s.accent}0d` }}
                >
                  <p
                    className="font-black leading-none mb-0.5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.2rem",
                      letterSpacing: "-0.04em",
                      color: s.accent,
                    }}
                  >
                    {s.val}
                  </p>
                  <p className="text-white/50 text-[11px] font-bold uppercase tracking-[0.1em] mb-1"
                    style={{ fontFamily: "var(--font-mono)" }}>{s.unit}</p>
                  <p className="text-white/28 text-[11px] leading-snug" style={{ fontFamily: "var(--font-body)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GALLERY STRIP — masonry-ish dark section
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-5 overflow-hidden" style={{ backgroundColor: "#07020f" }}>
        <FadeIn className="max-w-6xl mx-auto">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/22 text-center mb-10"
            style={{ fontFamily: "var(--font-mono)" }}>
            xoque in the wild
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {GALLERY_IMGS.map((img, i) => (
              <div
                key={img.label}
                className="relative overflow-hidden rounded-xl group"
                style={{
                  aspectRatio: i % 3 === 1 ? "3/4" : "1/1",
                  gridRow: i % 3 === 1 ? "span 1" : "span 1",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2"
                  style={{ background: "linear-gradient(to top, rgba(7,2,15,0.8) 0%, transparent 60%)" }}
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/70"
                    style={{ fontFamily: "var(--font-mono)" }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TIMELINE — cyan tinted panel
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-5 overflow-hidden"
        style={{ backgroundColor: `${C}0f` }}
      >
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C}44, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C}44, transparent)` }} />

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)", color: C }}>
              How we got here
            </p>
            <h2
              className="font-black text-white mb-14 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
              }}
            >
              A short history of being real.
            </h2>
          </FadeIn>

          {/* Timeline items */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[68px] top-4 bottom-4 w-px hidden sm:block"
              style={{ background: `linear-gradient(to bottom, ${C}44, ${P}44, transparent)` }} />

            <div className="flex flex-col gap-10">
              {TIMELINE.map((t, i) => (
                <FadeIn key={t.year} delay={i * 100}>
                  <div className="flex items-start gap-8">
                    {/* Year badge */}
                    <div
                      className="flex-shrink-0 w-[86px] text-right hidden sm:block"
                    >
                      <span
                        className="text-[11px] font-bold"
                        style={{ fontFamily: "var(--font-mono)", color: [C, P, M, Y][i] }}
                      >
                        {t.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div
                      className="flex-shrink-0 w-3 h-3 rounded-full border-2 mt-1 relative z-10 hidden sm:block"
                      style={{ borderColor: [C, P, M, Y][i], backgroundColor: "#07020f" }}
                    />

                    {/* Content */}
                    <div
                      className="flex-1 rounded-2xl p-6 border"
                      style={{
                        borderColor: `${[C, P, M, Y][i]}22`,
                        backgroundColor: `${[C, P, M, Y][i]}09`,
                      }}
                    >
                      {/* Mobile year */}
                      <span className="sm:hidden text-[10px] font-bold mb-1 block"
                        style={{ fontFamily: "var(--font-mono)", color: [C, P, M, Y][i] }}>
                        {t.year}
                      </span>
                      <h3
                        className="font-black text-white text-lg mb-1.5"
                        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                      >
                        {t.label}
                      </h3>
                      <p className="text-white/42 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        {t.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          VALUES — dark, 2-col asymmetric
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-5" style={{ backgroundColor: "#07020f" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left — big label */}
              <div className="lg:sticky lg:top-32">
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-mono)", color: P }}>
                  What drives us
                </p>
                <h2
                  className="font-black text-white leading-[1.05] mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  Four things we refuse to compromise on.
                </h2>
                <p className="text-white/38 text-[14px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Not mission statements. Actual product decisions that cost us shortcuts.
                </p>
              </div>

              {/* Right — value cards */}
              <div className="flex flex-col gap-4">
                {[
                  { symbol: "✦", label: "Authenticity", desc: "Every feature is built around one question: does this make people more real, or less? If the answer is less, we don't ship it.", accent: P },
                  { symbol: "◎", label: "Presence",     desc: "We believe the best moments are the ones you actually live, not the ones you spend curating. Design follows that belief.", accent: M },
                  { symbol: "⊞", label: "Community",   desc: "xoque is built by people who were tired of feeling alone in a room full of followers. A real circle beats a big audience.", accent: C },
                  { symbol: "⚡", label: "Now",         desc: "The past is a highlight reel. We care about this moment, right here. That's why everything we build is live-first.", accent: Y },
                ].map((v, i) => (
                  <FadeIn key={v.label} delay={i * 80}>
                    <div
                      className="rounded-2xl p-6 border flex gap-4 items-start group hover:scale-[1.01] transition-transform"
                      style={{ borderColor: `${v.accent}25`, backgroundColor: `${v.accent}0a` }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border"
                        style={{ borderColor: `${v.accent}33`, backgroundColor: `${v.accent}18` }}
                      >
                        {v.symbol}
                      </div>
                      <div>
                        <h3 className="font-black text-white text-[1.05rem] mb-1.5"
                          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                          {v.label}
                        </h3>
                        <p className="text-white/40 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TEAM — yellow tinted panel with big photo cards
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-5 overflow-hidden"
        style={{ backgroundColor: `${Y}0a` }}
      >
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${Y}44, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${Y}44, transparent)` }} />

        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ fontFamily: "var(--font-mono)", color: Y }}>
              The people
            </p>
            <h2
              className="font-black text-white mb-14 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Small team. Unreasonable conviction.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 80}>
                <div
                  className="rounded-2xl overflow-hidden border group"
                  style={{ borderColor: `${member.accent}33` }}
                >
                  {/* Photo */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Color overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-400"
                      style={{ backgroundColor: member.accent }}
                    />
                    {/* Gradient */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(7,2,15,0.85) 0%, rgba(7,2,15,0.1) 50%, transparent 100%)" }}
                    />
                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-black text-white text-[0.95rem] leading-tight"
                        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                        {member.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.1em]"
                        style={{ fontFamily: "var(--font-mono)", color: member.accent }}>
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div
                    className="p-4 border-t"
                    style={{ borderColor: `${member.accent}22`, backgroundColor: `${member.accent}08` }}
                  >
                    <p className="text-white/45 text-[11px] leading-relaxed italic" style={{ fontFamily: "var(--font-body)" }}>
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CLOSING CTA — dark with purple glow, big ghosted watermark
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-32 px-5 overflow-hidden text-center"
        style={{ backgroundColor: "#07020f" }}
      >
        {/* Centre glow */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div
            className="w-[600px] h-[400px] rounded-full blur-[130px] opacity-25"
            style={{ background: `radial-gradient(ellipse, ${P} 0%, #7c3aed 55%, transparent 80%)` }}
          />
        </div>

        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-black text-white/[0.025] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(7rem, 22vw, 18rem)",
              letterSpacing: "-0.06em",
              lineHeight: 1,
            }}
          >
            xoque
          </span>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "var(--font-mono)", color: P }}>
              Join us
            </p>
            <h2
              className="font-black text-white mb-5 leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
                letterSpacing: "-0.05em",
              }}
            >
              The real world<br />
              <span style={{ color: P }}>is waiting.</span>
            </h2>
            <p className="text-white/40 mb-10 max-w-sm mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}>
              12,000+ people already living in the moment. No performance. No algorithm. Just now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/download"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-black text-[14px] transition-all active:scale-95 hover:shadow-2xl"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "#ffffff",
                  color: "#3b0764",
                  letterSpacing: "-0.01em",
                  boxShadow: `0 0 40px ${P}44`,
                }}
              >
                <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                Download xoque
              </a>
              <a
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-[13px] border transition-all hover:bg-white/[0.06]"
                style={{
                  fontFamily: "var(--font-display)",
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Read community guidelines →
              </a>
            </div>

            {/* Bottom note */}
            <div className="mt-16 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: P }} />
              <span className="text-[11px] text-white/18" style={{ fontFamily: "var(--font-mono)" }}>
                imperfect but real.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}