import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gzip compression for rendered content & static files
  compress: true,

  // Experiments
  experimental: {
    // Single worker configuration prevents Windows EPERM process kill issue
    workerThreads: false,
    cpus: 1,
    // Inline CSS eliminates the render-blocking CSS <link> request
    inlineCss: true,
    // Tree-shake large packages so only used exports are bundled
    optimizePackageImports: ["framer-motion", "lenis"],
  },

  // Next.js Image Optimization: serve AVIF first (40-50% smaller than WebP), then WebP fallback
  images: {
    formats: ["image/avif", "image/webp"],
    // Responsive breakpoints covering all common device widths
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Default quality 80 — better visual quality vs default 75
    qualities: [80],
    // Minimum cache TTL of 1 year for optimized images
    minimumCacheTTL: 31536000,
  },

  // Security & caching headers — improves Best Practices score
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Long-term caching for public images
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
