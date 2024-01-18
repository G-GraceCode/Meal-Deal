/** @type {import('next').NextConfig} */

// this config, help us to add add photo from a different site, like google
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
