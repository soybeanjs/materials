module.exports = {
  extends: ['soybeanjs/vue'],
  globals: {
    defineOptions: 'readonly',
    defineSlots: 'readonly',
    defineModel: 'readonly'
  },
  settings: {
    'import/core-modules': ['uno.css']
  }
};
