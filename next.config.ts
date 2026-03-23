import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
   eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    unoptimized: true,
    domains: ["pionechain.com"],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(process.cwd(), "src");
    return config;
  },
};

export default nextConfig;
