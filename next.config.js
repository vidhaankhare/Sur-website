/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable React DevTools in development
  reactDevOverlay: true,
  
  // TypeScript configuration
  typescript: {
    // Enable type checking during build
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    // Enable ESLint during build
    ignoreDuringBuilds: false,
  },
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Add custom webpack configurations here if needed
    
    // Important: return the modified config
    return config;
  },
  
  // Development server configuration
  devIndicators: {
    autoPrerender: false,
  },
  
  // Enable source maps in development
  productionBrowserSourceMaps: true,
  
  // Configure images
  images: {
    domains: ['img.youtube.com'],
  },
}

module.exports = nextConfig
