import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  basePath: isProd ? "/zaidokal.github.io" : "",
  assetPrefix: isProd ? "/zaidokal.github.io/" : "",
};

export default nextConfig;
