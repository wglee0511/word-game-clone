module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest'],
  },
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '^(!.lib)/(.*)': '<rootDir>/src/$1/$2',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testTimeout: 10000,
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'https://localhost:3000',
  },
};
