import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Set base for GitHub Pages - correct for project repositories
  plugins: [react()],
  // Add development server configuration
  server: {
    host: true, // Allow external connections
    port: 3000, // Standard port
    open: true, // Auto-open browser
  },
  build: {
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'icons-vendor': ['react-icons/fa'],
          // UI components chunk
          'ui-components': [
            './src/components/Button.jsx',
            './src/components/OptimizedImage.jsx'
          ],
          // Sections chunks - group related sections
          'core-sections': [
            './src/sections/HeroSection.jsx',
            './src/sections/AboutSection.jsx'
          ],
          'feature-sections': [
            './src/sections/CirclesSection.jsx',
            './src/sections/BenefitsSection.jsx',
            './src/sections/ActivitiesSection.jsx'
          ],
          'content-sections': [
            './src/sections/FounderSection.jsx',
            './src/sections/NewsSection.jsx',
            './src/sections/CommunityPresenceSection.jsx'
          ],
          'utils': [
            './src/utils/enhancedPerformanceMonitoring.js',
            './src/utils/uxEnhancements.js'
          ]
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize build performance
    target: 'esnext',
    minify: 'esbuild',
    // CSS code splitting
    cssCodeSplit: true,
    // Set chunk size warnings
    chunkSizeWarningLimit: 500
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons/fa']
  },  // CSS optimization
  css: {
    postcss: {
      plugins: []
    }
  }
}))
