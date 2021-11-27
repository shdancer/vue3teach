module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://zhaoxin2021.tiaozhan.com',
        changeOrigin: true,
        secure: true
      }
    }
  }
}