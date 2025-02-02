import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  typescript: {
    // Ignore ESLint errors while type-checking
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
