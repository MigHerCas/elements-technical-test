module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  env: {
    API_URL: 'http://127.0.0.1:8080/https://us-central1-mobile-assignment-server.cloudfunctions.net/weather',
  },
};
