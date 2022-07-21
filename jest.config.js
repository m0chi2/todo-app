module.exports = {
  roots: ['<rootDir>/src/'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories:
    // src追加: Cannot find module解消
    ['node_modules', 'src'],
  moduleNameMapper: {
    // Handle assets and css imports (with CSS modules)
    // https://jestjs.io/docs/webpack#handling-static-assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
