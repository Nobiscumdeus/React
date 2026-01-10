import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],

  //Specify assets include rules 
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
   // Other Vite configurations...
   debug: true,
})
