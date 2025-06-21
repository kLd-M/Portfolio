import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'], // Ensure PDF files are treated as assets
  base: '/Portfolio/', // Match this to your repository name
  build: {
    outDir: 'dist', // (default)
    emptyOutDir: true // ← Clears dist folder on each build
  }
})
