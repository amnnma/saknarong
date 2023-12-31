/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }

module.exports = nextConfig
