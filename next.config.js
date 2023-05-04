/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  compress: false,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
