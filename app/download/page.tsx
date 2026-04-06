// "use client";

// import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";

// export default function DownloadPage() {
//   return (
//     <div className="min-h-screen" style={{ backgroundColor: "#07020f" }}>
//       <Navbar />

//       {/* Full-height hero */}
//       <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-5 pt-24 pb-20 overflow-hidden">
//         {/* Centered glow */}
//         <div
//           className="absolute inset-0 flex items-center justify-center pointer-events-none"
//           aria-hidden
//         >
//           <div
//             className="w-[700px] h-[700px] rounded-full opacity-20 blur-[140px]"
//             style={{
//               background:
//                 "radial-gradient(ellipse, #c095e4 0%, #7c3aed 50%, transparent 80%)",
//             }}
//           />
//         </div>

//         {/* Top-right accent */}
//         <div
//           className="absolute top-24 right-0 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
//           style={{ background: "radial-gradient(ellipse, #a78bfa 0%, transparent 70%)" }}
//           aria-hidden
//         />

//         <div className="relative z-10 text-center max-w-2xl w-full">
//           <p
//             className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5"
//             style={{ fontFamily: "var(--font-mono)", color: "#c095e4" }}
//           >
//             Get xoque
//           </p>

//           <h1
//             className="font-black text-white mb-6 leading-[1.02]"
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(3.2rem, 10vw, 7rem)",
//               letterSpacing: "-0.05em",
//             }}
//           >
//             Be real.
//             <br />
//             <span style={{ color: "#c095e4" }}>Download.</span>
//           </h1>

//           <p
//             className="mb-12 text-[1rem] max-w-sm mx-auto leading-relaxed text-white/45"
//             style={{ fontFamily: "var(--font-body)" }}
//           >
//             No AI. No filters. No highlight reels.
//             <br />
//             Just you, right now.
//           </p>

//           {/* Store buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             {/* App Store */}
//             <a
//               href="#"
//               className="group flex items-center gap-4 px-7 py-4 rounded-2xl border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/35 transition-all w-full sm:w-auto"
//               style={{ minWidth: "210px" }}
//             >
//               <svg width={30} height={30} viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
//                 <path
//                   d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
//                   fill="white"
//                 />
//               </svg>
//               <div className="text-left">
//                 <p className="text-[9px] text-white/45" style={{ fontFamily: "var(--font-mono)" }}>
//                   Download on the
//                 </p>
//                 <p
//                   className="text-[18px] font-black text-white leading-tight"
//                   style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
//                 >
//                   App Store
//                 </p>
//               </div>
//             </a>

//             {/* Google Play */}
//             <a
//               href="#"
//               className="group flex items-center gap-4 px-7 py-4 rounded-2xl border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/35 transition-all w-full sm:w-auto"
//               style={{ minWidth: "210px" }}
//             >
//               <svg width={30} height={30} viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
//                 <path d="M3.18 23.76c.3.16.64.2.97.12L14.81 12 11.2 8.38 3.18 23.76z" fill="#EA4335" />
//                 <path d="M20.93 10.34L17.85 8.6l-3.04 3.04 3.04 3.04 3.1-1.76c.88-.5.88-1.58-.02-2.58z" fill="#FBBC04" />
//                 <path d="M3.18.24C2.88.4 2.67.72 2.67 1.14v21.72c0 .42.2.74.51.9l11.63-11.63L3.18.24z" fill="#4285F4" />
//                 <path d="M3.18 23.76l11.63-11.63-3.04-3.04L3.15.24C2.85.4 2.67.72 2.67 1.14v21.72c0 .42.2.74.51.9z" fill="#34A853" />
//                 <path d="M3.18.24l8.02 8.14 3.61-3.62L3.18.24z" fill="#4285F4" />
//               </svg>
//               <div className="text-left">
//                 <p className="text-[9px] text-white/45" style={{ fontFamily: "var(--font-mono)" }}>
//                   Get it on
//                 </p>
//                 <p
//                   className="text-[18px] font-black text-white leading-tight"
//                   style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
//                 >
//                   Google Play
//                 </p>
//               </div>
//             </a>
//           </div>

//           {/* Social proof */}
//           <div className="mt-14 flex flex-col items-center gap-3">
//             <div className="flex -space-x-2.5">
//               {[47, 32, 12, 58, 15].map((n) => (
//                 <img
//                   key={n}
//                   src={`https://i.pravatar.cc/48?img=${n}`}
//                   className="w-9 h-9 rounded-full border-2"
//                   style={{ borderColor: "#07020f" }}
//                   alt=""
//                 />
//               ))}
//             </div>
//             <p className="text-[12px] text-white/35" style={{ fontFamily: "var(--font-body)" }}>
//               12,000+ real people already in
//             </p>
//           </div>

//           {/* Pill badges */}
//           <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
//             {["No AI content", "Live-only posts", "No infinite scroll", "Real people only"].map((badge) => (
//               <span
//                 key={badge}
//                 className="px-3 py-1.5 rounded-full text-[11px] font-medium border"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   color: "rgba(255,255,255,0.4)",
//                   borderColor: "rgba(255,255,255,0.08)",
//                   backgroundColor: "rgba(255,255,255,0.03)",
//                 }}
//               >
//                 {badge}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function DownloadPage() {
  return (
    <div style={{ backgroundColor: "#fafaf8", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[88vh] flex flex-col items-center justify-center px-5 pt-28 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(253,255,182,0.25) 0%, rgba(192,149,228,0.1) 35%, rgba(255,160,197,0.08) 65%, #fafaf8 100%)",
        }}
      >
        {/* Blobs */}
        <div
          className="absolute top-16 -left-16 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(192,149,228,0.2) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(155,246,255,0.2) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(253,255,182,0.15) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 text-center max-w-2xl w-full">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
            style={{
              backgroundColor: "rgba(192,149,228,0.1)",
              borderColor: "rgba(192,149,228,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#c095e4" }} />
            <span
              className="text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "#7c3aed" }}
            >
              Get the app
            </span>
          </div>

          <h1
            className="font-black mb-5 leading-[1.02]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              letterSpacing: "-0.05em",
              color: "#0f0a1e",
            }}
          >
            Be real.
            <br />
            <span style={{ color: "#c095e4" }}>Download.</span>
          </h1>

          <p
            className="mb-12 max-w-sm mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#5a4a6a" }}
          >
            No AI. No filters. No highlight reels.
            <br />
            Just you, right now.
          </p>

          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-4 px-7 py-4 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto bg-white"
              style={{ borderColor: "rgba(192,149,228,0.4)", minWidth: "210px" }}
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                  fill="#0f0a1e"
                />
              </svg>
              <div className="text-left">
                <p
                  className="text-[9px] font-medium"
                  style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
                >
                  Download on the
                </p>
                <p
                  className="text-[18px] font-black leading-tight"
                  style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.02em", color: "#0f0a1e" }}
                >
                  App Store
                </p>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-4 px-7 py-4 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto bg-white"
              style={{ borderColor: "rgba(155,246,255,0.5)", minWidth: "210px" }}
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
                <path d="M3.18 23.76c.3.16.64.2.97.12L14.81 12 11.2 8.38 3.18 23.76z" fill="#EA4335" />
                <path
                  d="M20.93 10.34L17.85 8.6l-3.04 3.04 3.04 3.04 3.1-1.76c.88-.5.88-1.58-.02-2.58z"
                  fill="#FBBC04"
                />
                <path
                  d="M3.18.24C2.88.4 2.67.72 2.67 1.14v21.72c0 .42.2.74.51.9l11.63-11.63L3.18.24z"
                  fill="#4285F4"
                />
                <path
                  d="M3.18 23.76l11.63-11.63-3.04-3.04L3.15.24C2.85.4 2.67.72 2.67 1.14v21.72c0 .42.2.74.51.9z"
                  fill="#34A853"
                />
                <path d="M3.18.24l8.02 8.14 3.61-3.62L3.18.24z" fill="#4285F4" />
              </svg>
              <div className="text-left">
                <p
                  className="text-[9px] font-medium"
                  style={{ fontFamily: "var(--font-mono)", color: "#9b8aaa" }}
                >
                  Get it on
                </p>
                <p
                  className="text-[18px] font-black leading-tight"
                  style={{ fontFamily: "var(--font-body)", letterSpacing: "-0.02em", color: "#0f0a1e" }}
                >
                  Google Play
                </p>
              </div>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-2.5">
              {[47, 32, 12, 58, 15].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/48?img=${n}`}
                  className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                  alt=""
                />
              ))}
            </div>
            <p
              className="text-[13px]"
              style={{ fontFamily: "var(--font-body)", color: "#9b8aaa" }}
            >
              <span style={{ color: "#0f0a1e", fontWeight: 600 }}>12,000+</span>{" "}
              real people already in
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature pills ── */}
      <section
        className="py-14 px-5 border-t"
        style={{ borderColor: "rgba(192,149,228,0.15)", backgroundColor: "#fff" }}
      >
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {[
            { label: "No AI content", accent: "#C095E4" },
            { label: "Live-only posts", accent: "#FFA0C5" },
            { label: "No infinite scroll", accent: "#9BF6FF" },
            { label: "Real people only", accent: "#FDFFB6" },
            { label: "No ads, ever", accent: "#C095E4" },
            { label: "No gallery uploads", accent: "#FFA0C5" },
          ].map((b) => (
            <span
              key={b.label}
              className="px-4 py-2 rounded-full text-[12px] font-semibold border"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: b.accent + "18",
                borderColor: b.accent + "44",
                color: b.accent === "#FDFFB6" ? "#7a6600" : "#0f0a1e",
              }}
            >
              {b.label}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}