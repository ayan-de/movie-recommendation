import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};


module.exports = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.unsplash.com",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "i.ytimg.com",
      pathname: "/**",
    },],
  },
}

export default nextConfig;
