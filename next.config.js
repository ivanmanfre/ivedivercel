/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export configuration
  // output: 'export',
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  // Remove GitHub Pages specific configurations
  // assetPrefix: '/',
  // trailingSlash: true,
}

module.exports = nextConfig

