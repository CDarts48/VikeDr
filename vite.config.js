import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), vike()],
  publicDir: 'public',
  server: {
    hmr: {
      // You can specify additional HMR options if needed
      protocol: 'ws',
      host: 'localhost'
    }
  }
})