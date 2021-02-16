module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    
    workboxOptions: {
      include: [
        /^index\.html$/ , /\.css$/, /\.js$/, /^manifest\.json$/, /\.png$/
      ],
      exclude: []
    }

  }
}