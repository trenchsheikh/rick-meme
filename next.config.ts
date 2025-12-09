import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Temporarily disabled React Compiler to fix Vercel 404 issues
  // The React Compiler can cause build issues on Vercel
  // reactCompiler: true,
};

export default nextConfig;
