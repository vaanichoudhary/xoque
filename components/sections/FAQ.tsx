"use client";

import { useState, useRef, useEffect } from "react";

const FAQS = [
  {
    number: "01",
    q: "Why can't I upload from my gallery?",
    a: "Because yesterday is not now. XOQUE is built on a single rule: if you didn't take it in this moment, it doesn't belong here. Your gallery is full of memories — this app is for making them. The camera opens, you capture, you post. That's the whole flow.",
    accent: "#C095E4", // Somewhere in a Fairytale — soft lavender purple
    textAccent: "#6b35a8",
  },
  {
    number: "02",
    q: "Is there an algorithm deciding what I see?",
    a: "Nope. The feed is chronological. The people you follow post, you see it — in order, in full, unranked. No engagement bait. No 'you might also like'. No invisible hand nudging you toward content that keeps you scrolling. Just people, in order, in time.",
    accent: "#9BF6FF", // Eternal Winter — soft cyan
    textAccent: "#0e7a8a",
  },
  {
    number: "03",
    q: "What even is Co-Create?",
    a: "Imagine you and your friend are at the same concert. You both open XOQUE and capture the moment — your angle, their angle. Co-Create stitches them into one shared post: same moment, two lenses, one truth. Your social media is a shared space. Your posts should be too.",
    accent: "#FDFFB6", // Parchment — soft yellow
    textAccent: "#7a6800",
  },
  {
    number: "04",
    q: "How is this different from BeReal?",
    a: "BeReal was the right instinct, wrong execution. We don't do random timers. We don't do front-and-back forced captures. XOQUE trusts you to post when something real is happening — not when an alarm goes off. You're an adult. You know when something is worth sharing.",
    accent: "#FFA0C5", // Pastel Magenta — soft pink
    textAccent: "#a0336a",
  },
  {
    number: "05",
    q: "Will there ever be ads?",
    a: "Not the kind that pretend to be your friend. We're building a subscription model — you pay a small amount, we owe you nothing but the product. No advertiser gets to whisper in our ear about what you should see or feel. Your attention is yours.",
    accent: "#C095E4", // Somewhere in a Fairytale — lavender again
    textAccent: "#6b35a8",
  },
  {
    number: "06",
    q: "Can I edit my post after sharing?",
    a: "No. And that's a feature. The moment you posted is the moment you were in. Editing it later would mean replacing a real thing with a revised thing. You can delete and repost — but you can't quietly make the past more flattering. Authenticity has no undo button.",
    accent: "#9BF6FF", // Eternal Winter — back to cyan
    textAccent: "#0e7a8a",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof FAQS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const active = isOpen || hovered;

  return (
    <div
      className="relative border-b border-[#0d0d1a]/10 cursor-pointer group"
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
      aria-expanded={isOpen}
    >
      {/* Colour wash background — softened with lower opacity */}
      <div
        className="absolute inset-0 rounded-none transition-all duration-500 ease-out pointer-events-none"
        style={{
          backgroundColor: faq.accent,
          opacity: active ? (isOpen ? 0.55 : 0.28) : 0,
          transition: "opacity 0.4s ease, background-color 0.4s ease",
        }}
      />

      {/* Question row */}
      <div className="relative flex items-center gap-5 sm:gap-8 px-5 sm:px-10 lg:px-20 py-6 sm:py-7">
        {/* Number */}
        <span
          className="flex-shrink-0 text-[11px] font-bold tracking-[0.15em] transition-colors duration-300"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: active ? faq.textAccent : "#0d0d1a40",
          }}
        >
          {faq.number}
        </span>

        {/* Question text */}
        <h3
          className="flex-1 font-black leading-tight text-[#0d0d1a] transition-all duration-300"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.05rem, 2.4vw, 1.6rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {faq.q}
        </h3>

        {/* Toggle icon */}
        <div
          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-400"
          style={{
            borderColor: active ? faq.textAccent : "#0d0d1a30",
            backgroundColor: isOpen ? faq.textAccent : "transparent",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <svg
            className="w-4 h-4 transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke={isOpen ? "#fff" : active ? faq.textAccent : "#0d0d1a50"}
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
          </svg>
        </div>
      </div>

      {/* Answer — animated height */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.45s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div ref={bodyRef}>
          <div className="relative px-5 sm:px-10 lg:px-20 pb-7 pt-0 flex gap-5 sm:gap-8">
            {/* Spacer matching number width */}
            <span className="flex-shrink-0 w-[2.2rem] sm:w-[2.8rem]" />
            <p
              className="flex-1 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: faq.textAccent,
              }}
            >
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={ref}
      className="w-full py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#f0efeb" }}
    >
      {/* Heading block */}
      <div
        className={`px-5 sm:px-10 lg:px-20 mb-14 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
       
        <h2
          className="font-black text-[#0d0d1a] leading-tight mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            letterSpacing: "-0.03em",
          }}
        >
         Got
        Questions ?
        </h2>
        <p
          className="text-[14px] sm:text-[18px] text-[#0d0d1a]/45  mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          No fluff. No corporate speak. Just honest answers.
        </p>
      </div>

      {/* Thin top border */}
      <div className="border-t border-[#0d0d1a]/10" />

      {/* FAQ list */}
      <div
        className={`transition-all duration-700 delay-150 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {FAQS.map((faq, i) => (
          <FAQItem
            key={faq.number}
            faq={faq}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      {/* Bottom nudge */}
      <div
        className={`mt-14 flex flex-col items-center gap-3 transition-all duration-700 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p
          className="text-[13px] text-[#0d0d1a]/40"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Still not satisfied?
        </p>
        <a
          href="mailto:hello@xoque.app"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#0d0d1a]/20 text-[#0d0d1a] text-[13px] font-bold hover:border-[#6b35a8] hover:text-[#6b35a8] transition-all duration-200"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Talk to us
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}