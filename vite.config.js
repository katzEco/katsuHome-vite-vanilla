import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        commission: resolve(__dirname, 'commission/index.html'),
        home: resolve(__dirname, 'home/index.html'),
        donation: resolve(__dirname, 'donation/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      }
    }
  }
})