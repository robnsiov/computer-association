/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  experimental: {
    appDir: true,
  },
  // reactStrictMode: false,
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
};

module.exports = nextConfig;
