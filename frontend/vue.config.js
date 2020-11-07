module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    open: process.platform === 'darwin',
    port: 8081,
    https: false,
    hotOnly: false,
  },
}