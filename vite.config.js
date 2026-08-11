import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 1. Import the path module

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.mkv'],
  resolve: {
    alias: {
      // 2. Define the '@' symbol to point to your 'src' directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})