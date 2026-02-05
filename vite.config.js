import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/vapi': {
        target: 'https://vapi.vnappmob.com/api/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/vapi/, ''),
        secure: false,
      },
      '/api/btmc': {
        target: 'http://api.btmc.vn/api/BTMCAPI',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/btmc/, ''),
        secure: false,
      },
      '/api/world': {
        target: 'https://freegoldapi.com/data',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/world/, ''),
        secure: false,
      },
    },
  },
})
