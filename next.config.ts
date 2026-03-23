import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname, // tells Next.js your workspace root is the project folder
  },
};

export default nextConfig;

