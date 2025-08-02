// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ disables built-in image optimization
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
