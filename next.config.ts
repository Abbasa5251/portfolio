import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // YouTube video thumbnails rendered in the tutorials section.
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    // The site never renders an image wider than the 1280px content column at
    // 2x, so generating 3840w variants only wastes optimisation time.
    deviceSizes: [384, 640, 828, 1080, 1280, 1920],
  },
};

export default nextConfig;
