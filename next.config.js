/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['images.unsplash.com'],
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  optimizeFonts: true,
};

module.exports = nextConfig;
