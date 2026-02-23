import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        // Copy 404.html to dist for GitHub Pages SPA routing
        copyFileSync(
          join(__dirname, 'public', '404.html'),
          join(__dirname, 'dist', '404.html')
        )
      }
    }
  ],
  base: "/",              // correct for USERNAME.github.io
  build: {
    outDir: "dist",
    copyPublicDir: true,
  },
  publicDir: 'public',
})