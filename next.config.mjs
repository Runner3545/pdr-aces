const isProd = process.env.NODE_ENV === "production";

const repo = "pdr-aces";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  images: { unoptimized: true },

  trailingSlash: true,

  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./gh-image-loader.js",
  },

  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "" },
};

export default nextConfig;
