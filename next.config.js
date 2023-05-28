/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.iran.liara.space",
        port: "",
        pathname: "/university-association/**",
      },
    ],
  },
  image: {
    domains: ["storage.iran.liara.space"],
  },
};

module.exports = nextConfig;
