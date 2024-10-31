import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shoppingnovaiguacu.com.br",
        pathname:
          "/sites/nova-iguacu/files/styles/banner_interna_1920_x_420/public/shopping-media/Banner%20Interna/**",
      },
    ],
  },
};

export default nextConfig;
