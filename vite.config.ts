
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React bundle
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          
          // Heavy animation libraries
          if (id.includes('framer-motion')) {
            return 'animations';
          }
          
          // UI components bundle
          if (id.includes('@radix-ui') || id.includes('components/ui')) {
            return 'ui-components';
          }
          
          // Icons bundle  
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          
          // Map and heavy components
          if (id.includes('dotted-map') || id.includes('world-map') || id.includes('timeline')) {
            return 'heavy-components';
          }
          
          // Routing
          if (id.includes('react-router')) {
            return 'router';
          }
          
          // Query and state management
          if (id.includes('@tanstack/react-query')) {
            return 'query';
          }
          
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'framer-motion', 
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-tooltip',
      'react-router-dom',
      '@tanstack/react-query',
      'dotted-map'
    ],
    force: true
  },
  define: {
    global: 'globalThis',
  },
}));
