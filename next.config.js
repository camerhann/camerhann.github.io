/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? 'https://camerhann.github.io/' : undefined,
  // Optional: Add MDX support if you want to use JSX in your markdown
  // pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // experimental: {
  //   mdxRs: true,
  // },
  images: {
    unoptimized: true,
    // If you plan to use external images via next/image, configure domains here
    // domains: ['example.com'],
  }
};

// const withMDX = require('@next/mdx')(); // If using MDX
// module.exports = withMDX(nextConfig); // If using MDX
module.exports = nextConfig; 