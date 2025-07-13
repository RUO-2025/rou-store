const checkEnvVariables = require("./check-env-variables")


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === "production",
  },

  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.up.railway.app",
      },
      {
        protocol: "https",
        hostname: "*.railway.app",
      },
      {
        protocol: "https",
        hostname: "*.mersate.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
}

module.exports = nextConfig
