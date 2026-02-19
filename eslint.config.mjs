import tseslint from 'typescript-eslint';
import html from 'eslint-plugin-html';

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: { html },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src', 'demo'],
        },
      },
    },

    rules: {
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    ignores: ['**/*.js', '**/*.mjs', '**/*.d.ts'],
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
);
