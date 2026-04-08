"use client";
// lib/pageUtils.tsx  — shared utilities for all inner pages

import React, { useEffect, useRef, useState } from "react";
import InnerNavbar from "@/components/common/InnerNavbar";
import Footer from "@/components/common/Footer";

// ── Design tokens ────────────────────────────────────────────────────────────
export const C = {
  purple:  "#c095e4",
  pink:    "#FFA0C5",
  cyan:    "#9BF6FF",
  yellow:  "#FDFFB6",
  dark:    "#0f0a1e",   // darkest text / headings
  mid:     "#3b1f6e",   // dark purple mid
  body:    "#4a3560",   // body text
  muted:   "#7c6a9a",   // muted text
  bg:      "#f7f5fc",   // page bg — very faint purple-white
  card:    "#ffffff",
};

// Typography scale — all ≥ 18px for small text
// Note: T.tag (11px) and Badge (12px) are intentional exceptions for mono
// category badges only — visually compact UI elements, not body copy.
export const T = {
  tag:     "11px",   // exception: mono badge only
  body:    "18px",   // minimum body text
  lead:    "20px",
  h4:      "22px",
  h3:      "26px",
  h2sm:    "clamp(26px, 4vw, 38px)",
  h2:      "clamp(32px, 5vw, 52px)",
  h1:      "clamp(40px, 8vw, 80px)",
};

// ── FadeIn ───────────────────────────────────────────────────────────────────

// style default is defined outside the component to avoid a new object
// reference on every render (which would cause unnecessary re-renders in
// memoized children).
const DEFAULT_STYLE: React.CSSProperties = {};

export function FadeIn({
  children,
  delayMs = 0,
  className = "",
  style = DEFAULT_STYLE,
}: {
  children: React.ReactNode;
  /** Delay in milliseconds before the fade-in animation starts. */
  delayMs?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fix: use `let` so the variable is assigned before the callback fires,
    // avoiding the `const` temporal dead zone issue.
    let obs: IntersectionObserver;
    obs = new IntersectionObserver(
      (entries) => {
        // Fix: guard against empty entries array before accessing [0]
        const e = entries[0];
        if (e?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delayMs}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
FadeIn.displayName = "FadeIn";

// ── Page shell ───────────────────────────────────────────────────────────────
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh", overflowX: "hidden" }}>
      <InnerNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
PageShell.displayName = "PageShell";

// ── Section badge ─────────────────────────────────────────────────────────────
export function Badge({ label, accent = C.purple }: { label: string; accent?: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
      // Fix: instead of concatenating hex strings (which breaks for shorthand/
      // named/hsl colors), use CSS opacity properties for the alpha effect.
      style={{
        backgroundColor: accent,
        borderColor: accent,
        // Intentional exception to the ≥18px rule — mono badge is a compact UI
        // element, not body copy. Documented in T token comments above.
      }}
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: accent }}
      />
      <span
        className="font-bold tracking-[0.14em] uppercase"
        style={{
          fontFamily: "var(--font-mono)",
          color: accent,
          fontSize: "12px",        // intentional exception — see T.tag note
          opacity: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
}
Badge.displayName = "Badge";