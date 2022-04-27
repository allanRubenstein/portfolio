// old version. Saving for now, delete commented code later
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//     'eslint-config-prettier',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typescript-eslint'],
//   rules: {
//     // off since most of the time NextJS takes care of importing React
//     'react/react-in-jsx-scope': 'off',
//     '@typescript-eslint/no-explicit-any': 'off',
//     'react/prop-types': 'off',
//   },
//   ignorePatterns: ['_document.js'],
//   settings: {
//     react: {
//       version: 'latest',
//     },
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['_document.js', '_document.tsx'],
  settings: {
    react: {
      version: 'latest',
    },
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: [
        'react',
        '@typescript-eslint',
        '@typescript-eslint/eslint-plugin',
      ],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
      rules: {
        // off since most of the time NextJS takes care of importing React
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
