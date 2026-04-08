// 




"use client";

import { useRef, useEffect, useState } from "react";

/* ── Varied WIDTHS, uniform HEIGHT = same row height like the reference ── */
const INSIGHTS = [
  { id: 1,  src: "/images/1.jpeg",  label: "Real moments, no edits",         tag: "Authentic",   w: 200 },
  { id: 2,  src: "/images/2.jpeg",  label: "Co-create with your squad",      tag: "Co-Create",   w: 290 },
  { id: 3,  src: "/images/3.jpeg",  label: "Snap. Post. Gone.",               tag: "Que",         w: 190 },
  { id: 4,  src: "/images/4.jpeg",  label: "No algorithm. Just people.",     tag: "Feed",        w: 270 },
  { id: 5,  src: "/images/5.jpeg",  label: "Your lens, their story",          tag: "Perspective", w: 220 },
  { id: 6,  src: "/images/6.jpeg",  label: "Friends, not followers",          tag: "Community",   w: 195 },
  { id: 7,  src: "/images/7.jpeg",  label: "Right now. Not yesterday.",      tag: "Live",        w: 310 },
  { id: 8,  src: "/images/8.jpeg",  label: "Imperfect but real.",             tag: "Raw",         w: 210 },
  { id: 9,  src: "/images/9.jpeg",  label: "Zero edits, full truth.",        tag: "Honest",      w: 250 },
  { id: 10, src: "/images/10.jpeg", label: "Your moment, unfiltered.",       tag: "Unfiltered",  w: 190 },
  { id: 11, src: "/images/11.jpeg", label: "People over aesthetics.",        tag: "Real",        w: 270 },
  { id: 12, src: "/images/12.jpeg", label: "This is what today looks like.", tag: "Now",         w: 230 },
];

const INSIGHT_ROW1 = [...INSIGHTS, ...INSIGHTS];
const INSIGHT_ROW2 = [
  ...INSIGHTS.slice(5), ...INSIGHTS.slice(0, 5),
  ...INSIGHTS.slice(5), ...INSIGHTS.slice(0, 5),
];

const TESTIMONIALS = [
  {
    name: "Priya Mehta",  handle: "@priya.mehta", avatar: "PM",
    avatarBg: "linear-gradient(135deg,#f97316,#ec4899)",
    text: "There's something different about opening up social media and seeing your friends again. I guess I'm not ready for it yet XD but I love it.",
  },
  {
    name: "Rohan Das",    handle: "@rohan_das",   avatar: "RD",
    avatarBg: "linear-gradient(135deg,#6366f1,#7c3aed)",
    text: "At first, I thought sharing moments the way you experienced them felt boring, until you're surrounded by a community who appreciates authenticity. Everyone's just posting what they're actually doing, not what they wish they were doing. Good touch.",
  },
  {
    name: "Aisha Noor",   handle: "@aishanoor",   avatar: "AN",
    avatarBg: "linear-gradient(135deg,#10b981,#0ea5e9)",
    text: "As someone who spends hours editing my posts, this app is a relief. I just open it, click, and post. No pressure to be perfect.",
  },
  {
    name: "Karan Verma",  handle: "@karan.v",     avatar: "KV",
    avatarBg: "linear-gradient(135deg,#f0c040,#f97316)",
    text: "This feels like the beginning of something big. In an age of AI and curated polished content, this one's taking a 180 and going back to basics.",
  },
  {
    name: "Mei Lin",      handle: "@mei.lin",     avatar: "ML",
    avatarBg: "linear-gradient(135deg,#c084fc,#818cf8)",
    text: "Co-create is such a simple idea — showing the moment through various lenses — and still no one managed to come up with it. Until now.",
  },
  {
    name: "Dev Arjun",    handle: "@dev.arjun",   avatar: "DA",
    avatarBg: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    text: "Finally unfollowed everyone on other apps and I don't miss it. XOQUE just hits different.",
  },
  {
    name: "Sara Khan",    handle: "@sara.k",      avatar: "SK",
    avatarBg: "linear-gradient(135deg,#ec4899,#f97316)",
    text: "The Que feature is everything. Snap and go. No second-guessing. No regret spiral in the notes app before posting.",
  },
  {
    name: "Lucas Obi",    handle: "@lucasobi",    avatar: "LO",
    avatarBg: "linear-gradient(135deg,#34d399,#10b981)",
    text: "I showed my friends XOQUE and within a week they deleted Instagram. That's the word-of-mouth this deserves.",
  },
];

const COLS = [0,1,2,3].map(ci => TESTIMONIALS.filter((_,i) => i%4===ci));

function XIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "rgba(13,13,26,0.2)" }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function VerifiedBadge() {
  return (
    <svg className="w-3.5 h-3.5 text-[#4f46e5] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────
   InsightCard: fixed HEIGHT, variable WIDTH
   Image is a plain <img> — no opacity tricks.
   If it errors, show a gradient placeholder instead.
────────────────────────────────────────────────────── */
function InsightCard({ item }: { item: typeof INSIGHTS[0] }) {
  const [errored, setErrored] = useState(false);

  const FALLBACKS = [
    "linear-gradient(135deg,#4f46e5,#7c3aed)",
    "linear-gradient(135deg,#0ea5e9,#6366f1)",
    "linear-gradient(135deg,#f97316,#ec4899)",
    "linear-gradient(135deg,#10b981,#0ea5e9)",
    "linear-gradient(135deg,#7c3aed,#c084fc)",
    "linear-gradient(135deg,#f0c040,#f97316)",
    "linear-gradient(135deg,#ec4899,#7c3aed)",
    "linear-gradient(135deg,#34d399,#0ea5e9)",
  ];

  return (
    <div
      className="flex-shrink-0 mx-1.5 relative group cursor-pointer rounded-2xl overflow-hidden"
      style={{
        width: `${item.w}px`,
        height: "220px", // ← uniform height for all cards
      }}
    >
      {/* Image OR fallback — no layering tricks */}
      {!errored ? (
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setErrored(true)}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: FALLBACKS[(item.id - 1) % 8] }}
        >
          <span className="text-white/40 text-[10px] text-center px-3"
            style={{ fontFamily: "var(--font-mono)" }}>
            {item.src}
          </span>
        </div>
      )}

      {/* Always-on bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

      {/* Tag */}
      <div className="absolute top-2.5 left-2.5 z-10">
        <span
          className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold text-white bg-black/35 backdrop-blur-sm border border-white/15"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {item.tag}
        </span>
      </div>

      {/* Label — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <p
          className="text-white text-[11px] font-semibold leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {item.label}
        </p>
      </div>
    </div>
  );
}

function PhotoMarqueeRow({ items, direction, speed = 35 }: {
  items: typeof INSIGHTS; direction: "left" | "right"; speed?: number;
}) {
  const isLeft = direction === "left";
  return (
    <div className="relative overflow-hidden w-full mb-10" style={{ height: "236px" }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right,#f0efeb,transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left,#f0efeb,transparent)" }} />

      {/* Scrolling track */}
      <div
        className="flex items-center h-full"
        style={{
          animation: `marquee-${isLeft ? "left" : "right"} ${speed}s linear infinite`,
          willChange: "transform",
          width: "max-content",
        }}
      >
        {items.map((item, i) => (
          <InsightCard key={`${i}-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-5 flex flex-col gap-3 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-200 mb-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[12px] font-bold"
            style={{ background: t.avatarBg }}>{t.avatar}</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-[13px] font-bold text-[#0d0d1a]" style={{ fontFamily: "var(--font-display)" }}>{t.name}</span>
              <VerifiedBadge />
            </div>
           <span className="text-[11px] text-[#0d0d1a]/40" style={{ fontFamily: "var(--font-inter)" }}>{t.handle}</span>
          </div>
        </div>
        <XIcon />
      </div>
      <p className="text-[13px] text-[#0d0d1a]/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{t.text}</p>
    </div>
  );
}

export default function Testimonials() {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV1(true); }, { threshold: 0.05 });
    const o2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV2(true); }, { threshold: 0.05 });
    if (r1.current) o1.observe(r1.current);
    if (r2.current) o2.observe(r2.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <section className="w-full overflow-hidden" style={{ backgroundColor: "#f0efeb" }}>

      {/* PART 1 — Photo marquee */}
      <div ref={r1} className="pt-16 sm:pt-20 pb-12 mt-5">

        <div className={`px-5 sm:px-12 lg:px-20 mb-8 transition-all duration-700 ${v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="text-[25px] mb-5  font-bold tracking-[0.18em] uppercase text-[#6366f1] mb-2 block"
            style={{ fontFamily: "var(--font-mono)" }}>Inside XOQUE</span>
          <h2 className="font-extrabold leading-tight text-[#0d0d1a]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3.5vw,2.4rem)", letterSpacing: "-0.025em" }}>
            Real moments.{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#6366f1,#a78bfa)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>
              Real people.
            </span>
          </h2>
          <p className="mt-2 py-5 text-[19px] text-[#4b4b6a]/55 max-w-sm mb-8" style={{ fontFamily: "var(--font-body)" }}>
            A glimpse into what XOQUE looks like in the wild.
          </p>
        </div>

        <div className={`flex flex-col gap-5 transition-all duration-700 delay-100 ${v1 ? "opacity-100" : "opacity-0"}`}>
          <PhotoMarqueeRow items={INSIGHT_ROW1} direction="left"  speed={42} />
          <PhotoMarqueeRow items={INSIGHT_ROW2} direction="right" speed={35} />
        </div>
      </div>

      <div className="mx-5 sm:mx-12 lg:mx-20 h-px" style={{ backgroundColor: "rgba(13,13,26,0.08)" }} />

      {/* PART 2 — Testimonials */}
      <div ref={r2} className="pt-14 sm:pt-20 pb-7 sm:pb-24 mt-4 px-5 sm:px-8 lg:px-16">
        <div className={`mb-10 text-center transition-all duration-700 ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="font-extrabold text-[#0d0d1a] leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,4vw,2.8rem)", letterSpacing: "-0.025em" }}>
            What the community thinks of XOQUE.
          </h2>
          <p className="mt-8 mb-13 text-[18px] text-[#4b4b6a]/50" style={{ fontFamily: "var(--font-body)" }}>
            No paid reviews. No influencer deals. Just real people.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-150 ${v2 ? "opacity-100" : "opacity-0"}`}>
          <div className="hidden lg:grid grid-cols-4 gap-4 items-start">
            {COLS.map((col, ci) => (
              <div key={ci} className="flex flex-col">
                {col.map((t, ti) => <TestimonialCard key={ti} t={t} />)}
              </div>
            ))}
          </div>
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 items-start">
            {[0,1].map(ci => (
              <div key={ci} className="flex flex-col">
                {TESTIMONIALS.filter((_,i) => i%2===ci).map((t,ti) => <TestimonialCard key={ti} t={t} />)}
              </div>
            ))}
          </div>
          <div className="sm:hidden flex flex-col gap-3">
            {TESTIMONIALS.slice(0,4).map((t,i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>

      <style>{`
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