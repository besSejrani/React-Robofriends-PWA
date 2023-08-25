const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@Types": path.resolve(__dirname, "./types"),
      "@Components": path.resolve(__dirname, "./src/Components"),
      "@Pages": path.resolve(__dirname, "./src/Pages"),
      "@Hooks": path.resolve(__dirname, "./src/Hooks"),
      "@Redux": path.resolve(__dirname, "./src/Redux"),
      "@Layout": path.resolve(__dirname, "./src/Layout"),
      "@Assets": path.resolve(__dirname, "./src/Assets"),
    },
  },
};
