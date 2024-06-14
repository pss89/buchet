import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      // input: '/buchet'
      input: 'src/main.js'
    }
  },
  server: {
    fs: {
      strict: true
    }
  },
  esbuild: {
    include: ['vue-meta']
  }
})
