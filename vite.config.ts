import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  envPrefix: ["VITE_", "ACCESS_"],
  plugins: [
    tailwindcss(),
  ],
})