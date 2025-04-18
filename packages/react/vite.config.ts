import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: {
      drafts: {
        customMedia: true
      }
    }
  },
  build: {
    cssMinify: "lightningcss"
  },
  plugins: [
    react(),
    tailwindcss(),
  ]
})
