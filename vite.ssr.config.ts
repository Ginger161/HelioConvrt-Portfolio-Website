import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Used ONLY by scripts/prerender.mjs to render the page to HTML at build time. The normal site build (vite.config.ts) is untouched.
// Browser-only libraries are swapped for empty stand-ins so the server render can't crash on them.
const stub = (file: string) => fileURLToPath(new URL(`./scripts/ssr-stubs/${file}`, import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@n8n_io/n8n-demo-component': stub('empty.ts'),
      '@react-three/fiber': stub('fiber.ts'),
      '@react-three/drei': stub('drei.ts'),
    },
  },
})
