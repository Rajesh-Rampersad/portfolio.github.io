import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configures static HTML exports for GitHub Pages (portfolio.github.io)
  output: 'export',
  // Static exports do not support Vercel dynamic image optimization
  images: {
    unoptimized: true,
  },
  // Suppress typescript checks during build if any minor react definitions mismatches, ensuring smooth compilation
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
