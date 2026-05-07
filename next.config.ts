import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // SECURITY NOTE: For production, consider downloading randomuser.me images 
  // to your /public folder to avoid relying on a 3rd-party host.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
    ],
  },
  // Add robust HTTP Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            // Enforce HTTPS
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            // Prevent Clickjacking
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            // Prevent MIME-sniffing
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            // Disable unnecessary browser features
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          }
        ],
      },
    ];
  },
};

export default nextConfig;
