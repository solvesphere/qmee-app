import { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};
export default nextConfig;
/* 
import { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  dest: "public", // Destination folder for the service worker
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

// Apply the withPWA wrapper
export default withPWA(nextConfig);
*/
