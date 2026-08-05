/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // 静态导出
  trailingSlash: true,     // GitHub Pages 需要
  images: {
    unoptimized: true,     // 禁用 Next.js 图片优化（国内 CDN 友好）
  },
};

module.exports = nextConfig;
