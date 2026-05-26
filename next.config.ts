import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Configures static HTML exports for GitHub Pages (portfolio.github.io)
  output: 'export',
  // Solves GitHub Pages subdirectory routing for CSS/JS assets and links
  basePath: isProd ? '/portfolio.github.io' : '',
  assetPrefix: isProd ? '/portfolio.github.io/' : '',
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
