module.exports = {
  displayName: 'tests',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components',
    'jest-axe/extend-expect',
  ],
  collectCoverageFrom: [
    '**/components/**/*.{tsx,ts,js}',
    '**/pages/**/*.{tsx,ts,js}',
    // don't collect coverage from the .next directory
    '!**/.next/**',
  ],
  projects: ['./test/jest.lint.ts', './jest.config.js'],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
