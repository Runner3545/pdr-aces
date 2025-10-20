const isProd = process.env.NODE_ENV === "production";

const repo = "pdr-aces";

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",

  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  images: { unoptimized: true },

  trailingSlash: true,
};
