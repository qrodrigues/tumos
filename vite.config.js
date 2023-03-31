import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // copier le fichier gutenberg.txt dans le dossier de build
    copy({
      targets: [
        { src: 'src/data/gutenberg.txt', dest: 'dist' }
      ]
    })
  ]
});
