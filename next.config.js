module.exports = {
  images: {
    domains: ['imgur.com'],
  },
  trailingSlash: true, // Required for static export routing
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/shop': { page: '/shop' },
      '/cart': { page: '/cart' },
      // You can add dynamic routes manually if needed
    };
  },
};
