const { resolve } = require('path')

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve('./index.html'),
        about: resolve('./src/page/about/index.html'),
        commission: resolve('./src/page/commission/index.html'),
        home: resolve('./src/page/home/index.html'),
        donation: resolve('./src/page/donation/index.html'),
      }
    }
  }
}