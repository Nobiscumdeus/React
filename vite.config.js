import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Add this base configuration
  base: './',  // This is important for Netlify
  
  // Specify assets include rules
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  
  // Optional: Add build configuration
  build: {
    outDir: 'dist',  // Vite's default
    copyPublicDir: true,
    sourcemap: true  // Helps with debugging
  }
})