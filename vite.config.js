import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures relative paths in production (important for Pages)
  build: {
    outDir: 'dist', // Optional (this is default, but explicit is better)
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
