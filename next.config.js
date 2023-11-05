const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    unoptimized: true,
  },
  // Other Next.js configuration options...
});

module.exports = nextConfig;
