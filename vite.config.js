import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
   // ⭐ REQUIRED FOR GITHUB PAGES
  plugins: [
    tailwindcss()
  ],
})