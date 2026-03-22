import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import Hook from "@/components/sections/Hook";
import Vision from "@/components/sections/Vision";
import Features from "@/components/sections/Features";
import Carousal from "@/components/sections/Carousal";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Pillars />
    <Hook />
    <Vision />
    <Features />
    <Carousal />
    <FAQ />
    <Footer />
  </div>
  );
}
