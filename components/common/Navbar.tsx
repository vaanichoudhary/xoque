// "use client";

// import { useState, useEffect } from "react";

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Features", href: "/features" },
//   { label: "Blog", href: "/blog" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 16);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on resize to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setMenuOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#0d0d1a]/95 backdrop-blur-md shadow-[0_2px_24px_0_rgba(99,60,255,0.15)]"
//           : "bg-[#0d0d1a]"
//       }`}
//     >
//       <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-18">

//           {/* Logo */}
//           <a
//             href="/"
//             className="flex-shrink-0 group"
//             aria-label="XOQUE Home"
//           >
//             <span
//               className="text-2xl font-black tracking-tighter text-white group-hover:text-[#a78bfa] transition-colors duration-200"
//               style={{ fontFamily: "'Syne', 'Helvetica Neue', sans-serif", letterSpacing: "-0.04em" }}
//             >
//               XOQUE
//               <span className="text-[#7c3aed] group-hover:text-[#f0c040] transition-colors duration-200">.</span>
//             </span>
//           </a>

//           {/* Desktop Nav Links */}
//           <ul className="hidden md:flex items-center gap-1">
//             {NAV_LINKS.map((link) => (
//               <li key={link.label}>
//                 <a
//                   href={link.href}
//                   className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
//                   style={{ fontFamily: "'DM Sans', sans-serif" }}
//                 >
//                   {link.label}
//                   <span className="absolute bottom-1 left-4 right-4 h-px bg-[#f0c040] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Desktop CTA */}
//           <div className="hidden md:flex items-center gap-3">
//             <a
//               href="#download"
//               className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#0d0d1a] bg-[#f0c040] rounded-full hover:bg-white transition-all duration-200 shadow-[0_0_20px_0_rgba(240,192,64,0.35)] hover:shadow-[0_0_28px_0_rgba(240,192,64,0.55)] active:scale-95"
//               style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
//             >
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
//                 />
//               </svg>
//               Download App
//             </a>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-white/5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
//             onClick={() => setMenuOpen((prev) => !prev)}
//             aria-expanded={menuOpen}
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//           >
//             <span
//               className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
//                 menuOpen ? "translate-y-[7px] rotate-45" : ""
//               }`}
//             />
//             <span
//               className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
//                 menuOpen ? "opacity-0 scale-x-0" : ""
//               }`}
//             />
//             <span
//               className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
//                 menuOpen ? "-translate-y-[7px] -rotate-45" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//             menuOpen ? "max-h-72 opacity-100 pb-4" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="border-t border-white/10 pt-3 flex flex-col gap-1">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-150"
//                 style={{ fontFamily: "'DM Sans', sans-serif" }}
//               >
//                 {link.label}
//               </a>
//             ))}

//             <a
//               href="#download"
//               onClick={() => setMenuOpen(false)}
//               className="mt-2 mx-0 flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#0d0d1a] bg-[#f0c040] rounded-full hover:bg-white transition-all duration-200 shadow-[0_0_20px_0_rgba(240,192,64,0.3)] active:scale-95"
//               style={{ fontFamily: "var(--font-display)" }}
//             >
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
//                 />
//               </svg>
//               Download App
//             </a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }















// "use client";

// import { useState, useEffect } from "react";

// const NAV_LINKS = [
//   { label: "Home",     href: "/" },
//   { label: "Features", href: "#features" },
//   { label: "Blog",     href: "#blog" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [menuOpen]);

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
//         {/*
//           THE CREATIVE CHOICE:
//           - Floating pill / island navbar — not a full-width bar
//           - Transparent on hero so it blends into the purple gradient
//           - On scroll: gains a deep dark frosted glass look with a subtle
//             violet border — feels premium, feels XOQUE
//           - Max width capped so it sits centered and never feels generic
//         */}
//         <nav
//           className="w-full max-w-3xl transition-all duration-400"
//           style={{
//             borderRadius: scrolled ? "16px" : "20px",
//             background: scrolled
//               ? "rgba(18,6,46,0.82)"
//               : "rgba(255,255,255,0.04)",
//             backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(8px)",
//             border: scrolled
//               ? "1px solid rgba(139,92,246,0.2)"
//               : "1px solid rgba(255,255,255,0.08)",
//             boxShadow: scrolled
//               ? "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.1)"
//               : "none",
//             padding: scrolled ? "10px 16px" : "10px 16px",
//             transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
//           }}
//         >
//           <div className="flex items-center justify-between gap-4">

//             {/* ── Logo ── */}
//             <a
//               href="/"
//               className="flex-shrink-0 group relative"
//               aria-label="XOQUE Home"
//             >
//               {/* Subtle glow behind logo on hover */}
//               <span
//                 className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                 style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, transparent 70%)", filter: "blur(8px)" }}
//               />
//               <span
//                 className="relative font-black text-white transition-all duration-300"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
//                   letterSpacing: "-0.04em",
//                 }}
//               >
//                 XOQUE
//                 <span
//                   className="transition-all duration-300"
//                   style={{ color: "#7c3aed" }}
//                 >.</span>
//               </span>
//             </a>

//             {/* ── Desktop nav links ── */}
//             <ul className="hidden md:flex items-center gap-0.5">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="relative px-3.5 py-1.5 text-[13px] font-medium text-white/55 hover:text-white transition-colors duration-200 rounded-xl hover:bg-white/[0.06] group"
//                     style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.01em" }}
//                   >
//                     {link.label}
//                     {/* Dot indicator instead of underline — more playful */}
//                     <span
//                       className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#a78bfa] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200"
//                     />
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* ── Desktop CTA ── */}
//             <div className="hidden md:flex items-center gap-2.5">
//               {/* Ghost "Sign in" — small and quiet */}
//               <a
//                 href="#signin"
//                 className="text-[12px] font-medium text-white/40 hover:text-white/80 transition-colors duration-200 px-2 py-1"
//                 style={{ fontFamily: "var(--font-body)" }}
//               >
//                 Sign in
//               </a>

//               {/* Primary CTA — white pill on purple hero, dark pill on scroll */}
//               <a
//                 href="#download"
//                 className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[12px] overflow-hidden transition-all duration-300 active:scale-95"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   letterSpacing: "-0.01em",
//                   background: scrolled ? "#ffffff" : "rgba(255,255,255,0.12)",
//                   color: scrolled ? "#3b0764" : "#ffffff",
//                   border: scrolled ? "none" : "1px solid rgba(255,255,255,0.2)",
//                   boxShadow: scrolled
//                     ? "0 2px 12px rgba(0,0,0,0.25)"
//                     : "0 0 0 1px rgba(255,255,255,0.1)",
//                 }}
//               >
//                 {/* Shimmer */}
//                 <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
//                 <DownloadIcon />
//                 Download App
//               </a>
//             </div>

//             {/* ── Mobile: Download pill + hamburger ── */}
//             <div className="md:hidden flex items-center gap-2.5">
//               {/* Small download pill on mobile */}
//               <a
//                 href="#download"
//                 className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   background: "rgba(255,255,255,0.1)",
//                   color: "#ffffff",
//                   border: "1px solid rgba(255,255,255,0.15)",
//                 }}
//               >
//                 <DownloadIcon size={12} />
//                 Get App
//               </a>

//               {/* Hamburger */}
//               <button
//                 className="relative w-8 h-8 rounded-lg flex flex-col items-center justify-center gap-[5px] hover:bg-white/[0.06] transition-colors focus:outline-none"
//                 onClick={() => setMenuOpen(p => !p)}
//                 aria-expanded={menuOpen}
//                 aria-label={menuOpen ? "Close menu" : "Open menu"}
//               >
//                 <span className={`block w-[18px] h-[1.5px] bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
//                 <span className={`block w-[18px] h-[1.5px] bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
//                 <span className={`block w-[18px] h-[1.5px] bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
//               </button>
//             </div>
//           </div>

//           {/* ── Mobile menu — slides down inside the pill ── */}
//           <div
//             className="md:hidden overflow-hidden transition-all duration-350 ease-in-out"
//             style={{ maxHeight: menuOpen ? "260px" : "0px", opacity: menuOpen ? 1 : 0, transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease" }}
//           >
//             <div className="mt-3 pt-3 border-t border-white/[0.08] flex flex-col gap-0.5 pb-1">
//               {NAV_LINKS.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-150"
//                   style={{ fontFamily: "var(--font-body)" }}
//                 >
//                   {/* Small violet dot per link */}
//                   <span className="w-1 h-1 rounded-full bg-[#7c3aed] opacity-60 flex-shrink-0" />
//                   {link.label}
//                 </a>
//               ))}

//               {/* Divider */}
//               <div className="h-px bg-white/[0.06] my-1.5 mx-3" />

//               {/* Mobile CTA — full width */}
//               <a
//                 href="#download"
//                 onClick={() => setMenuOpen(false)}
//                 className="mx-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all duration-200 active:scale-95"
//                 style={{
//                   fontFamily: "var(--font-display)",
//                   background: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(139,92,246,0.3))",
//                   border: "1px solid rgba(139,92,246,0.3)",
//                 }}
//               >
//                 <DownloadIcon />
//                 Download XOQUE
//               </a>

//               {/* Sign in link */}
//               <a
//                 href="#signin"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-center py-2 text-[12px] text-white/30 hover:text-white/60 transition-colors"
//                 style={{ fontFamily: "var(--font-body)" }}
//               >
//                 Already have an account? Sign in
//               </a>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile menu backdrop */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 z-40 md:hidden"
//           style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
//           onClick={() => setMenuOpen(false)}
//         />
//       )}
//     </>
//   );
// }

// function DownloadIcon({ size = 14 }: { size?: number }) {
//   return (
//     <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="flex-shrink-0">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
//     </svg>
//   );
// }






"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Features", href: "#features" },
  { label: "Blog",     href: "#blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 80);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

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
      {/*
        CRITICAL: header must NEVER have a background.
        background: "transparent" + no Tailwind bg class.
        Only the inner nav pill gets styling.
      */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
        style={{ background: "transparent" }}
      >
        <nav
          className="w-full max-w-3xl"
          style={{
            borderRadius: "14px",
            padding: "9px 14px",
            transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",

            // ON HERO (not scrolled):
            // A very subtle purple-tinted glass pill so it's readable
            // but clearly part of the hero, not floating over nothing
            background: scrolled
              ? "rgba(12,3,32,0.88)"
              : "rgba(60,10,100,0.35)",

            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",

            border: scrolled
              ? "1px solid rgba(139,92,246,0.2)"
              : "1px solid rgba(255,255,255,0.08)",

            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.04) inset"
              : "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <a href="/" aria-label="XOQUE Home" className="flex-shrink-0">
              <span
                className="font-black text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                XOQUE<span style={{ color: "#7c3aed" }}>.</span>
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
                    {/* Violet dot on hover */}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#a78bfa] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a
                href="#download"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[12px] overflow-hidden active:scale-95 transition-all duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.01em",
                  // On hero: white ghost pill — clearly readable on purple
                  // On scroll: solid white pill with dark text
                  background: scrolled ? "#ffffff" : "rgba(255,255,255,0.15)",
                  color: scrolled ? "#3b0764" : "#ffffff",
                  border: scrolled ? "none" : "1px solid rgba(255,255,255,0.28)",
                  boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.25)" : "none",
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
                href="#download"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-white"
                style={{
                  fontFamily: "var(--font-display)",
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
              maxHeight: menuOpen ? "240px" : "0px",
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
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="mx-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold text-white active:scale-95 transition-all"
                style={{
                  fontFamily: "var(--font-display)",
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

function DownloadIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
    </svg>
  );
}