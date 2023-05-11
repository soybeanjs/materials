import { defineConfig } from '@unocss/vite';
import presetUno from '@unocss/preset-uno';
import transformerCompileClass from '@unocss/transformer-compile-class';

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerCompileClass({ trigger: ':soy:', classPrefix: 'soybeanjs-' })]
});
