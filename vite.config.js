import { defineConfig } from 'vite'

export default defineConfig({
  
  build: {
    rollupOptions: {
      input: {
        app: 'src/pages/word_guessing.html',
      },
    },
  },
  server: {
    open: 'src/pages/word_guessing.html',
  },
})