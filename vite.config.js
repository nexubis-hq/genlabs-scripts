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
      input: {
        index: 'index.html',
        agentic: 'src/agentic.js',
      },
      external: ['@fontsource/stack-sans-notch'],
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'agentic') return 'assets/agentic.js'
          return 'assets/index.js'
        },
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      }
    }
  }
})
