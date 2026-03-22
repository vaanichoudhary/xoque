"use client";

import { useState } from "react";

const LINKS = {
  Product: ["Features", "Co-Create", "Que", "Download"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Rights"],
};

const SOCIALS = [
  {
    label: "X / Twitter",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full" style={{ backgroundColor: "#0d0d1a" }}>

      {/* ── Top CTA band ───────────────────────────────── */}
      <div
        className="relative overflow-hidden border-b border-white/10"
        style={{ backgroundColor: "#f0c040" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-16 sm:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p
              className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d0d1a]/50 mb-2"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Be first
            </p>
            <h2
              className="text-[2rem] sm:text-[2.8rem] font-black text-[#0d0d1a] leading-tight"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            >
              The real world
              <br />
              is waiting.
            </h2>
          </div>

          {/* Email signup */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[360px]"
          >
            {submitted ? (
              <div
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0d0d1a] text-white text-sm font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[#f0c040]">✦</span> You're on the list.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/30 placeholder-[#0d0d1a]/40 text-[#0d0d1a] text-sm font-medium outline-none focus:bg-white/50 transition-all duration-200 border border-[#0d0d1a]/10"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-[#0d0d1a] text-white text-sm font-bold hover:bg-[#1e1b4b] active:scale-95 transition-all duration-200 whitespace-nowrap"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Notify me
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ── Main footer body ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="/" className="inline-block">
              <span
                className="text-2xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
              >
                XOQUE
                <span className="text-[#7c3aed]">.</span>
              </span>
            </a>
            <p
              className="text-[13px] text-white/40 leading-relaxed max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              A social media app built on one rule: be real. No AI content, no
              infinite scroll, no curated highlight reels. Just moments, as they
              happen.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* App store badges */}
            <div className="flex flex-wrap gap-2 mt-1">
              {["Download for Android", "Download for iOS"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-[11px] font-semibold hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {label.includes("Android") ? "↓" : ""} {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="flex flex-col gap-4">
              <p
                className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/30"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-white/50 hover:text-white transition-colors duration-150"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ──────────────────────────────────── */}
        <div className="border-t border-white/[0.07] mt-14 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p
            className="text-[12px] text-white/25 text-center sm:text-left"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            © {new Date().getFullYear()} XOQUE, Inc. All rights reserved.
          </p>

          {/* Policy pills */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[11px] text-white/25 hover:text-white/60 transition-colors duration-150"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Built with badge */}
          <div
            className="flex items-center gap-1.5 text-[11px] text-white/20"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0c040]" />
            Made for the real world
          </div>
        </div>

        {/* ── Giant watermark word ─────────────────────── */}
        <div className="relative mt-6 overflow-hidden select-none pointer-events-none" style={{ height: "clamp(60px, 14vw, 120px)" }}>
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black text-white/[0.03] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(5rem, 18vw, 14rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            XOQUE
          </span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </footer>
  );
}