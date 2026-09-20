/** @type {import('next').NextConfig} */
// Set basePath only for GitHub Pages; for Vercel and local development, keep it empty ''
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubPages ? '/portfolio' : '');

const nextConfig = {
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
