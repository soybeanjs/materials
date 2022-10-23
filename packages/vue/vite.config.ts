import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueMacros from 'unplugin-vue-macros/vite';
import dts from 'vite-plugin-dts';
import unocss from '@unocss/vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [vue(), vueJsx(), vueMacros(), dts(), unocss()],
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: '@soybeanjs/vue-materials',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
