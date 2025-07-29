import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'
import Inspect from 'vite-plugin-inspect'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), Inspect({
    build: true,
    outputDir: '.vite-inspect'
  })],
  build: {
    emptyOutDir: true,
    outDir: "lib",
    assetsDir: "components",
    rollupOptions: {
      output: {
        dir: "lib",
        format: "esm",
        
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/cli-api': 'http://localhost:3001',
    },
    cors: true,
  },
});
