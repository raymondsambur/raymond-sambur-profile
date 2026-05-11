import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves from https://<username>.github.io/<repo-name>/
  // Change this to your repo name, or remove if using a custom domain
  basePath: "/raymond-sambur-profile",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
