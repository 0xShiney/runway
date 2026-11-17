import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.mux.com" },
      { protocol: "https", hostname: "runway.com" },
      { protocol: "https", hostname: "runwayml.com" },
    ],
  },
};

export default nextConfig;
