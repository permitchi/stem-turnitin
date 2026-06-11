import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/stem-turnitin", // Replace with your GitHub repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;