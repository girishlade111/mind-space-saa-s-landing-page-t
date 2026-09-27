/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mind-space-saa-s-landing-page-t',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig