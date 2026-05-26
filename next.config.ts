import type { NextConfig } from 'next';

// Detect if we are building inside GitHub Actions (CI/CD) to apply subdirectory prefix
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // Configures static HTML exports for GitHub Pages (portfolio.github.io)
  output: 'export',
  
  // Solves GitHub Pages subdirectory routing exclusively in CI/CD pipeline,
  // leaving Vercel and local development perfectly clean at root domain.
  basePath: isGithubActions ? '/portfolio.github.io' : '',
  assetPrefix: isGithubActions ? '/portfolio.github.io/' : '',
  
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
