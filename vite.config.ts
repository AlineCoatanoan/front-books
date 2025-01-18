import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirige les appels commençant par "/api" vers ton backend
      '/api': {
        target: 'https://api-books-mu.vercel.app', // L'URL de ton backend
        changeOrigin: true, // Nécessaire pour changer l'origine des requêtes
        rewrite: (path) => path.replace(/^\/api/, ''), // Supprime le préfixe "/api"
      },
    },
  },
});
