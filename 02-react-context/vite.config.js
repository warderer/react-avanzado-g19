import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Me permite saber la ruta

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuro Alias para mi carpeta SRC
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
