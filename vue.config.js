module.exports = {
  devServer: {
    proxy: {
      "/api": {
        ws: false,
        target: "https://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
