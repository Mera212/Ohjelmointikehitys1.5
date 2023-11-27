import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./ohjelmointikehitys1.5",
  plugins: [react()],
})
