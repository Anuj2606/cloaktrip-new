import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['img.clerk.com'], // ✅ allow Clerk images
  },
};

export default nextConfig;
