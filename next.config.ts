import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
        pathname: "**",
      },
    ],
  },
  // Оптимізації для зменшення bundle size та покращення продуктивності
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  // Оптимізація webpack для кращого tree-shaking
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Оптимізація для клієнтського бандлу
      config.optimization = {
        ...config.optimization,
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Виділяємо великі бібліотеки в окремі чанки
            motion: {
              name: "motion",
              test: /[\\/]node_modules[\\/](motion|framer-motion)[\\/]/,
              priority: 20,
            },
            swiper: {
              name: "swiper",
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              priority: 20,
            },
            lottie: {
              name: "lottie",
              test: /[\\/]node_modules[\\/]lottie-react[\\/]/,
              priority: 20,
            },
            reactPlayer: {
              name: "react-player",
              test: /[\\/]node_modules[\\/]react-player[\\/]/,
              priority: 20,
            },
          },
        },
      };
    }
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
