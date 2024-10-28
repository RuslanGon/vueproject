import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default {
  files: ['**/*.{js,mjs,jsx,vue}'],
  ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  extends: [
    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    skipFormatting,
  ],
}