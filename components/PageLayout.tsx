"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#07020f" }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}