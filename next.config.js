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
  // jsdom (pulled in via isomorphic-dompurify, a dependency of sanity/@sanity/vision)
  // reads files relative to its own location on disk. If webpack bundles it into
  // a vendor chunk (which it otherwise would, as a transitive dep of a
  // transpiled package), that path resolution breaks with an ENOENT for
  // default-stylesheet.css. Keeping it external forces a plain `require()` so
  // it resolves from its real node_modules location at runtime.
  serverExternalPackages: ['isomorphic-dompurify', 'jsdom'],
  experimental: {
    reactCompiler: false,
  },
};

module.exports = nextConfig;
