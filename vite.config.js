import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://TheLeon137.github.io/Tic-Tac-Toe-React'
})
