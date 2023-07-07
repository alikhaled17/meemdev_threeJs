/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  output: 'standalone',
  i18n: {
    locales: ["en-US", "ar-SA"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  },
  publicRuntimeConfig: {
    BACKEND_URL: process.env.BACKEND_URL
  }
};

module.exports = nextConfig;
