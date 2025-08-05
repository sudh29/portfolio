import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/my_portfolio_website/' : '/',
  server: {
    port: 3000,
    open: true,
  },
})
