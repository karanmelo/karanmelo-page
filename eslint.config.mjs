import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { configs, plugins } from 'eslint-config-airbnb-extended';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

// Root-level Node.js (CommonJS) scripts that are not part of the app bundle -
// they run under Node directly, so they need Node globals instead of the
// browser globals the rest of the project lints against.
const nodeScripts = ['next.config.js', 'sonar-project.js', 'eslint.config.mjs'];

const jsConfig = defineConfig([
  // ESLint recommended config
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // Stylistic plugin
  plugins.stylistic,
  // Import X plugin
  plugins.importX,
  // Airbnb base recommended config
  ...configs.base.recommended,
]);

const nextConfig = defineConfig([
  // React plugin
  plugins.react,
  // React hooks plugin
  plugins.reactHooks,
  // React JSX A11y plugin
  plugins.reactA11y,
  // Next.js plugin
  plugins.next,
  // Airbnb Next.js recommended config
  ...configs.next.recommended,
]);

const typescriptConfig = defineConfig([
  // TypeScript ESLint plugin
  plugins.typescriptEslint,
  // Airbnb base TypeScript config
  ...configs.base.typescript,
  // Airbnb Next.js TypeScript config
  ...configs.next.typescript,
]);

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'public/**',
      'styled-components.ts',
    ],
  },
  // JavaScript config
  ...jsConfig,
  // Next.js config
  ...nextConfig,
  // TypeScript config
  ...typescriptConfig,
  // Root-level Node scripts run under Node, not the browser - give them Node
  // globals (require/module/process/etc.) instead of no-undef errors.
  {
    files: nodeScripts,
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  // Project-specific rule overrides (carried over from the previous .eslintrc.json)
  {
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'default-param-last': 'off',
      'import-x/no-unresolved': 'off',
      'import-x/extensions': 'off',
      'import-x/prefer-default-export': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-no-useless-fragment': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.ts',
            '**/*.spec.ts',
            '**/*.test.tsx',
            '**/*.spec.tsx',
            ...nodeScripts,
          ],
        },
      ],
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  // Prettier integration (must stay last so it can disable conflicting stylistic rules)
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
]);
