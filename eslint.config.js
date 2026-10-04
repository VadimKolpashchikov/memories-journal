import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  globalIgnores(['dist']),
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
  }),
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      '@stylistic': stylistic,
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'max-params': ['error', 2],
      '@stylistic/exp-jsx-props-style': ['error', {
        singleLine: { maxItems: 2 },
        multiLine: { minItems: 3 },
      }],
      '@stylistic/jsx-max-props-per-line': 'off',
      '@stylistic/jsx-first-prop-new-line': 'off',
      '@stylistic/jsx-closing-bracket-location': ['error', {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned',
      }],
      '@stylistic/arrow-parens': ['error', 'always'],
      'max-len': ['error', {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      '@stylistic/object-curly-newline': ['error', {
        ObjectPattern: {
          minProperties: 2,
          multiline: true,
          consistent: true,
        },
      }],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: false,
      }],
    },
  },
]);
