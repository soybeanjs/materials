import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueMacros from 'unplugin-vue-macros/vite';
import dts from 'vite-plugin-dts';
import unocss from '@unocss/vite';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true
    }),
    vueMacros(),
    dts({
      rollupTypes: true,
      exclude: [
        'node_modules',
        'src/components/admin-layout/layout.module.css.d.ts',
        'src/components/admin-tab/tab.module.css.d.ts'
      ]
    }),
    unocss()
  ],
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  build: {
    lib: {
      entry: path.resolve(process.cwd(), 'src/index.ts'),
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
