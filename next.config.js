/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  transpilePackages: ['sanity', '@sanity/vision'],
  experimental: {
    reactCompiler: false,
  },
};

module.exports = nextConfig;
