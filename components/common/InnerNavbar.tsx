"use client";
// InnerNavbar — always shows the dark scrolled state (for light-bg inner pages)
// Drop this in components/common/InnerNavbar.tsx

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Features",  href: "/features" },
  { label: "Blog",      href: "/blog" },
];

function DownloadIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
    </svg>
  );
}

export default function InnerNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
        style={{ background: "transparent" }}
      >
        <nav
          className="w-full max-w-3xl"
          style={{
            borderRadius: "14px",
            padding: "9px 14px",
            // Always scrolled/dark state — never transparent on inner pages
            background: "rgba(12,3,32,0.92)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(139,92,246,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" aria-label="XOQUE Home" className="flex-shrink-0">
              <span
                className="font-black text-white"
                style={{
                  fontFamily: "'Arimo', sans-serif",
                  fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                  letterSpacing: "-0.04em",
                  fontWeight: 900,
                  textTransform: "lowercase",
                }}
              >
                xoque
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative px-3.5 py-1.5 text-[13px] font-medium text-white/70 hover:text-white transition-all duration-200 rounded-xl hover:bg-white/[0.08] group"
                    style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.01em" }}
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#a78bfa] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a
                href="/download"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[12px] overflow-hidden active:scale-95 transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "#ffffff",
                  color: "#3b0764",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
                }}
              >
                <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                <DownloadIcon />
                Download App
              </a>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="/download"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-white"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                <DownloadIcon size={11} />
                Get App
              </a>
              <button
                className="w-8 h-8 rounded-lg flex flex-col items-center justify-center gap-[5px] hover:bg-white/[0.08] transition-colors focus:outline-none"
                onClick={() => setMenuOpen(p => !p)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close" : "Menu"}
              >
                <span className={`block w-[18px] h-[1.5px] bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
                <span className={`block w-[18px] h-[1.5px] bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block w-[18px] h-[1.5px] bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className="md:hidden overflow-hidden"
            style={{
              maxHeight: menuOpen ? "260px" : "0px",
              opacity: menuOpen ? 1 : 0,
              transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease",
            }}
          >
            <div className="mt-3 pt-3 border-t border-white/[0.08] flex flex-col gap-0.5 pb-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium text-white/65 hover:text-white hover:bg-white/[0.07] rounded-xl transition-all duration-150"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#7c3aed] opacity-60 flex-shrink-0" />
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-white/[0.06] my-1.5 mx-3" />
              <a
                href="/download"
                onClick={() => setMenuOpen(false)}
                className="mx-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold text-white active:scale-95 transition-all"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "linear-gradient(135deg,rgba(124,58,237,0.5),rgba(139,92,246,0.3))",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                <DownloadIcon />
                Download XOQUE
              </a>
            </div>
          </div>
        </nav>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}