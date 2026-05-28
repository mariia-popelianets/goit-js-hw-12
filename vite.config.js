import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    base: '/goit-js-hw-12/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
<<<<<<< HEAD
      global: 'window',
=======
      global: 'window', 
>>>>>>> 5ccd1a4f6e2387ec33c2bd3760e3251af58b982c
    },
    root: 'src', // Вказуємо, що розробка йде в папці src
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
      outDir: '../dist', // Виходимо на рівень вище, щоб папка dist створилася в корені
      emptyOutDir: true,
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
