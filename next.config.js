/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    ignoreDuringBuilds: true,
    images: { unoptimized: true } 
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }

module.exports = nextConfig
