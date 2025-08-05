import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio_website/',
  server: {
    port: 3000,
    open: true,
  },
})
