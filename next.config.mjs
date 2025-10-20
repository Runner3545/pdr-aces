/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/pdr-aces" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/pdr-aces/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
