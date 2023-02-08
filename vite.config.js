const { resolve } = require('path')

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/page/about/index.html'),
        commission: resolve(__dirname, 'src/page/commission/index.html'),
        home: resolve(__dirname, 'src/page/home/index.html'),
        donation: resolve(__dirname, 'src/page/donation/index.html'),
      }
    }
  }
}