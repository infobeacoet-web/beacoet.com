/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS === 'true'
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}`
    : '',
  compiler: {
    styledComponents: false,
  },
};

module.exports = nextConfig;
