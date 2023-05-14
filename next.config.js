/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
    SPACE: process.env.SPACE,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    HOST: process.env.HOST,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
