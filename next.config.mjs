/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to build a static HTML folder (/out)
  images: {
    unoptimized: true, // Required for static GitHub Pages exports
  },
  // IMPORTANT: If your repository is named "ghosh-desktop" (not a user root repo), 
  // uncomment the next line and replace with your exact repository name to fix CSS paths.
  // basePath: '/ghosh-desktop',
};

export default nextConfig;
