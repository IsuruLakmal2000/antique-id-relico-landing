import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "url-shortener.me",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
      },
    ],
  },
};

export default nextConfig;
