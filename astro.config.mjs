// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortClassName: true,
        sortAttributes: true,
        collapseWhitespace: true,
      },
      img: {
        quality: 80,
      },
      js: true,
      svg: {
        multipass: true,
      }
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['react-icons']
    },
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        ecma: 2020,
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            ui: ['tailwindcss']
          }
        }
      }
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  experimental: {
    // Usuń nieprawidłowe flagi eksperymentalne
  }
});
