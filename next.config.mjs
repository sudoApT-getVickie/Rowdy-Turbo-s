/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // This explicitly sets the subpath routing for GitHub Pages
  basePath: '/Rowdy-Turbo-s',
  assetPrefix: '/Rowdy-Turbo-s/',
};

export default nextConfig;
