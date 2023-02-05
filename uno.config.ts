import { defineConfig } from '@unocss/vite';
import presetMini from '@unocss/preset-mini';
import transformerCompileClass from '@unocss/transformer-compile-class';

export default defineConfig({
  presets: [presetMini()],
  transformers: [transformerCompileClass({ trigger: ':soy:', classPrefix: 'soybeanjs-' })]
});
