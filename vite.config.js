import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve('./index.html'),
        about: resolve('./about/index.html'),
        commission: resolve('./commission/index.html'),
        home: resolve('./home/index.html'),
        donation: resolve('./donation/index.html'),
      }
    }
  }
})