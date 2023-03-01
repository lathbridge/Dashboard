const path = require("path");

module.exports = {
  // ...
  webpack: {
    alias: {
      "@": path.join(path.resolve(__dirname, "./src")),
      "@components": path.join(path.resolve(__dirname, "./src/components")),
      "@assets": path.join(path.resolve(__dirname, "./src/assets")),
      "@routes": path.join(path.resolve(__dirname, "./src/routes")),
    },
  },
};