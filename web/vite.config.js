import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/static/",
  plugins: [
      svelte({
        compilerOptions: {
          hydratable: false
        }
      })
  ],
  build: {
    outDir: resolve('./dist'),
    manifest: "manifest.json",
    rollupOptions: {
      input: './src/main.js',
    },
  },
  server: {
    origin: "http://localhost:5173",
    cors: {
      allowedHeaders: "*"
    }
  }
})
