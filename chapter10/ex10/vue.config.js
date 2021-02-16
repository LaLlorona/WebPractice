module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    workboxOptions: {
      runtimeCaching: [{
        urlPattern: /\.png$/,
        handler: 'cacheFirst', //read cachce first, and if it fails then search from the internet
        options: {
          cacheName: 'png-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365
          }
        }
      },
      {
        urlPattern: /\.json$/,
        handler: 'staleWhileRevalidate',
        options: {
          cacheName: 'json-cache',
          cacheableResponse: {statuses: [200]}
        }
      },
      ]
    }
  }
}