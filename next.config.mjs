/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};

export default nextConfig;
