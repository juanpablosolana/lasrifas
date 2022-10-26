/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'lh3.googleusercontent.com', 'scontent.fmex30-1.fna.fbcdn.net'],
  },
}

module.exports = nextConfig
