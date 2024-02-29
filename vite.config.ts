import * as path from 'path';
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.mjs'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@configs': path.resolve(__dirname, 'src/configs/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@providers': path.resolve(__dirname, 'src/providers/'),
      '@routers': path.resolve(__dirname, 'src/routers/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@types': path.resolve(__dirname, 'src/assets/types/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
