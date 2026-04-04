import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/womeninaquaculture",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
