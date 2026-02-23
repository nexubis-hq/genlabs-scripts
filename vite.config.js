import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    cors: {
      origin: '*',  // Allow all origins
      credentials: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // Remove font imports if they're on Webflow
  build: {
    rollupOptions: {
      external: ['@fontsource/stack-sans-notch']
    }
  }
})
