"use client";

import { useRef, useEffect, useState } from "react";

/* ── Data ─────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Priya Mehta",
    handle: "@priya.mehta",
    avatar: "PM",
    avatarBg: "linear-gradient(135deg, #f97316, #ec4899)",
    text: "There's something different about opening up social media and seeing your friends again. I guess I'm not ready for it yet XD but I love it.",
    size: "md",
  },
  {
    name: "Rohan Das",
    handle: "@rohan_das",
    avatar: "RD",
    avatarBg: "linear-gradient(135deg, #6366f1, #7c3aed)",
    text: "At first, I thought sharing moments the way you experienced them felt boring, until you're surrounded by a community who appreciates authenticity. Everyone's just posting what they're actually doing, not what they wish they were doing. Good touch.",
    size: "lg",
  },
  {
    name: "Aisha Noor",
    handle: "@aishanoor",
    avatar: "AN",
    avatarBg: "linear-gradient(135deg, #10b981, #0ea5e9)",
    text: "As someone who spends hours editing my posts, this app is a relief. I just open it, click, and post. No pressure to be perfect, just the way my friends know me.",
    size: "md",
  },
  {
    name: "Karan Verma",
    handle: "@karan.v",
    avatar: "KV",
    avatarBg: "linear-gradient(135deg, #f0c040, #f97316)",
    text: "This feels like the beginning of something big. In an age of AI and curated polished content, this one's taking a 180 and going back to basics. Let's add the social back in social media.",
    size: "lg",
  },
  {
    name: "Mei Lin",
    handle: "@mei.lin",
    avatar: "ML",
    avatarBg: "linear-gradient(135deg, #c084fc, #818cf8)",
    text: "Co-create is such a simple idea — showing the moment through various lenses — and still no one managed to come up with it. Until now. Your social media is a shared space with your people; why shouldn't your post be the same.",
    size: "xl",
  },
  {
    name: "Dev Arjun",
    handle: "@dev.arjun",
    avatar: "DA",
    avatarBg: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    text: "Finally unfollowed everyone on other apps and I don't miss it. XOQUE just hits different.",
    size: "sm",
  },
  {
    name: "Sara Khan",
    handle: "@sara.k",
    avatar: "SK",
    avatarBg: "linear-gradient(135deg, #ec4899, #f97316)",
    text: "The Que feature is everything. Snap and go. No second-guessing. No regret spiral in the notes app before posting.",
    size: "md",
  },
  {
    name: "Lucas Obi",
    handle: "@lucasobi",
    avatar: "LO",
    avatarBg: "linear-gradient(135deg, #34d399, #10b981)",
    text: "I showed my friends XOQUE and within a week they deleted Instagram. That's the word-of-mouth this deserves.",
    size: "sm",
  },
];

/* Duplicate for seamless loop */
const ROW1 = [...TESTIMONIALS, ...TESTIMONIALS];
const ROW2 = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)];

/* ── Twitter/X icon ───────────────────────────────── */
function XIcon() {
  return (
    <svg className="w-4 h-4 text-[#0d0d1a]/25" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ── Avatar ───────────────────────────────────────── */
function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[13px] font-bold"
      style={{ background: bg }}
    >
      {initials}
    </div>
  );
}

/* ── Verified badge ───────────────────────────────── */
function VerifiedBadge() {
  return (
    <svg className="w-4 h-4 text-[#6366f1] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/* ── Card width by size ───────────────────────────── */
const sizeMap: Record<string, string> = {
  sm:  "w-[220px] sm:w-[240px]",
  md:  "w-[280px] sm:w-[300px]",
  lg:  "w-[340px] sm:w-[360px]",
  xl:  "w-[380px] sm:w-[400px]",
};

/* ── Single card ──────────────────────────────────── */
function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div
      className={`flex-shrink-0 ${sizeMap[t.size]} bg-white rounded-2xl border border-black/[0.07] shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-5 flex flex-col gap-3 hover:shadow-[0_4px_24px_rgba(0,0,0,0.11)] hover:-translate-y-0.5 transition-all duration-200 cursor-default mx-3`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <Avatar initials={t.avatar} bg={t.avatarBg} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-[13px] font-bold text-[#0d0d1a]" style={{ fontFamily:"var(--font-display)"}}>
                {t.name}
              </span>
              <VerifiedBadge />
            </div>
            <span className="text-[11px] text-[#0d0d1a]/40" style={{ fontFamily: "'DM Mono', monospace" }}>
              {t.handle}
            </span>
          </div>
        </div>
        <XIcon />
      </div>

      {/* Quote */}
      <p
        className="text-[13px] sm:text-[14px] text-[#0d0d1a]/70 leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {t.text}
      </p>
    </div>
  );
}

/* ── Marquee row ──────────────────────────────────── */
function MarqueeRow({
  items,
  direction,
  speed = 40,
}: {
  items: typeof TESTIMONIALS;
  direction: "left" | "right";
  speed?: number;
}) {
  const isLeft = direction === "left";
  return (
    <div className="relative flex overflow-hidden w-full">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #f0efeb, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #f0efeb, transparent)" }} />

      {/* Track */}
      <div
        className="flex items-stretch py-2"
        style={{
          animation: `marquee-${isLeft ? "left" : "right"} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${i}-${t.handle}`} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────── */
export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#f0efeb" }}
    >
      {/* Heading */}
      <div
        className={`px-5 sm:px-12 lg:px-20 mb-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span
          className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#6366f1] mb-3 block"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Community
        </span>
        <h2
          className="text-[2rem] sm:text-[2.6rem] font-black leading-tight text-[#0d0d1a] max-w-lg"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          What the community thinks of{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            XOQUE.
          </span>
        </h2>
      </div>

      {/* Marquee rows */}
      <div
        className={`flex flex-col gap-5 transition-all duration-700 delay-150 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <MarqueeRow items={ROW1} direction="left" speed={45} />
        <MarqueeRow items={ROW2} direction="right" speed={38} />
      </div>

      {/* Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');

        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}