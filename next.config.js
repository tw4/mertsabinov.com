/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
