import * as path from 'path';

module.exports = {
  rootDir: path.join(__dirname, '..'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  // this checks all files but leads to a bunch being skipped thanks to the "ignorePath": "./.gitignore" in package.json
  // had to add the !** directories/files to prevent "X Skipped" messaging when running jest lint
  testMatch: [
    '<rootDir>/**/*.{tsx,ts,js}',
    '!**/.next/**/*',
    '!**/_document.js',
    '!**/coverage/**/*',
  ],
};
