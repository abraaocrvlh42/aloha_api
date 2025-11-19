const { resolve } = require('path');
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`);

module.exports = { ...rootConfig, ...{
  rootDir: root,
  displayName: 'end2end-tests',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  testMatch: ['<rootDir>/tests/e2e/**/*.test.ts'],
}}