import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-12/',
  define: {
    // Вказуємо Vite, що global — це насправді window в браузері
    global: 'window',
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
});
