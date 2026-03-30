"use client";

import { useState } from "react";

const LINKS = {
  Product: ["Features", "Co-Create", "Que", "Download"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal:   ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const SOCIALS = [
  {
    label: "X / Twitter",
    icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: "Instagram",
    icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    label: "LinkedIn",
    icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(""); }
  };

  return (
    <footer className="w-full" style={{ backgroundColor: "#0d0d1a" }}>

      {/* ── CTA Band ── */}
      <div className="relative overflow-hidden border-b border-white/10" style={{ backgroundColor: "#c095e4" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16">

          {/* MOBILE: stacked compact */}
          <div className="md:hidden py-10 flex flex-col items-center gap-5 text-center">
            <div>
              <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#0d0d1a]/45 mb-1.5"
                style={{ fontFamily: "var(--font-mono)" }}>Be first</p>
              <h2 className="text-[1.7rem] font-black text-[#0d0d1a] leading-tight"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
                The real world<br />is waiting.
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xs">
              {submitted ? (
                <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#0d0d1a] text-white text-[12px] font-bold"
                  style={{ fontFamily: "var(--font-display)" }}>
                  <span style={{ color: "#c095e4" }}>✦</span> You're on the list.
                </div>
              ) : (
                <>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-white/35 placeholder-[#0d0d1a]/40 text-[#0d0d1a] text-[12px] font-medium outline-none focus:bg-white/55 transition-all border border-[#0d0d1a]/10"
                    style={{ fontFamily: "var(--font-body)" }} />
                  <button type="submit"
                    className="px-4 py-2.5 rounded-full bg-[#0d0d1a] text-white text-[12px] font-bold hover:bg-[#1e1b4b] active:scale-95 transition-all whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)" }}>
                    Notify
                  </button>
                </>
              )}
            </form>
          </div>

          {/* DESKTOP: side by side */}
          <div className="hidden md:flex items-center justify-between gap-8 py-14">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#0d0d1a]/45 mb-2"
                style={{ fontFamily: "var(--font-mono)" }}>Be first</p>
              <h2 className="text-[2.2rem] lg:text-[2.8rem] font-black text-[#0d0d1a] leading-tight"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
                The real world<br />is waiting.
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-3 min-w-[340px]">
              {submitted ? (
                <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0d0d1a] text-white text-sm font-bold"
                  style={{ fontFamily: "var(--font-display)" }}>
                  <span style={{ color: "#c095e4" }}>✦</span> You're on the list.
                </div>
              ) : (
                <>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-5 py-3.5 rounded-full bg-white/30 placeholder-[#0d0d1a]/40 text-[#0d0d1a] text-sm font-medium outline-none focus:bg-white/50 transition-all border border-[#0d0d1a]/10"
                    style={{ fontFamily: "var(--font-body)" }} />
                  <button type="submit"
                    className="px-5 py-3.5 rounded-full bg-[#0d0d1a] text-white text-sm font-bold hover:bg-[#1e1b4b] active:scale-95 transition-all whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)" }}>
                    Notify me
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ── Footer body ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* MOBILE layout */}
        <div className="md:hidden pt-8 pb-6">

          {/* Logo + tagline row */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <a href="/" className="block mb-1.5">
                <span className="text-xl font-black text-white"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
                  XOQUE<span className="text-[#7c3aed]">.</span>
                </span>
              </a>
              <p className="text-[11px] text-white/35 leading-relaxed max-w-[180px]"
                style={{ fontFamily: "var(--font-body)" }}>
                Real moments. No AI. No filters.
              </p>
            </div>
            <div className="flex gap-2 mt-1">
              {SOCIALS.map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-5 mb-6">
            {Object.entries(LINKS).map(([heading, items]) => (
              <div key={heading}>
                <p className="text-[8px] font-bold tracking-[0.15em] uppercase text-white/25 mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}>{heading}</p>
                <ul className="flex flex-col gap-1.5">
                  {items.map(item => (
                    <li key={item}>
                      <a href="#" className="text-[11px] text-white/45 hover:text-white transition-colors leading-tight block"
                        style={{ fontFamily: "var(--font-body)" }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Download pills */}
          <div className="flex gap-2 mb-6">
            {["↓ Android", "iOS"].map(label => (
              <a key={label} href="#"
                className="flex-1 text-center px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/45 text-[11px] font-semibold hover:bg-white/[0.08] hover:text-white transition-all"
                style={{ fontFamily: "var(--font-display)" }}>
                {label}
              </a>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.07] pt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-white/20" style={{ fontFamily: "var(--font-mono)" }}>
                © {new Date().getFullYear()} XOQUE, Inc.
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-white/20"
                style={{ fontFamily: "var(--font-mono)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#c095e4" }} />
                imperfect but real.
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Privacy", "Terms", "Cookies"].map(l => (
                <a key={l} href="#" className="text-[10px] text-white/20 hover:text-white/50 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP layout */}
        <div className="hidden md:block pt-12 pb-8">
          <div className="grid grid-cols-5 gap-8 lg:gap-10 mb-12">

            {/* Brand col */}
            <div className="col-span-2 flex flex-col gap-4">
              <a href="/">
                <span className="text-2xl font-black text-white"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
                  XOQUE<span className="text-[#7c3aed]">.</span>
                </span>
              </a>
              <p className="text-[13px] text-white/38 leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-body)" }}>
                A social media app built on one rule: be real. No AI content, no infinite scroll, no curated highlight reels.
              </p>
              <div className="flex items-center gap-2.5 mt-1">
                {SOCIALS.map(s => (
                  <a key={s.label} href="#" aria-label={s.label}
                    className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/38 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {["↓ Download for Android", "Download for iOS"].map(label => (
                  <a key={label} href="#"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/45 text-[11px] font-semibold hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all"
                    style={{ fontFamily: "var(--font-display)" }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Link cols */}
            {Object.entries(LINKS).map(([heading, items]) => (
              <div key={heading} className="flex flex-col gap-3.5">
                <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/25"
                  style={{ fontFamily: "var(--font-mono)" }}>{heading}</p>
                <ul className="flex flex-col gap-2">
                  {items.map(item => (
                    <li key={item}>
                      <a href="#" className="text-[13px] text-white/45 hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-white/22" style={{ fontFamily: "var(--font-mono)" }}>
              © {new Date().getFullYear()} XOQUE, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(label => (
                <a key={label} href="#" className="text-[11px] text-white/22 hover:text-white/55 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}>{label}</a>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-white/18"
              style={{ fontFamily: "var(--font-mono)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#c095e4" }} />
              Made for the real world
            </div>
          </div>

          {/* Ghost watermark */}
          <div className="relative mt-4 overflow-hidden select-none pointer-events-none"
            style={{ height: "clamp(50px, 10vw, 100px)" }}>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black text-white/[0.025] whitespace-nowrap"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 14vw, 11rem)", letterSpacing: "-0.04em", lineHeight: 1 }}>
              XOQUE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}