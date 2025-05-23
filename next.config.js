/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
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