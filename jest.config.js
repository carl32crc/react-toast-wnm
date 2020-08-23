export default {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/test-config/setup.ts'],
  testEnvironment: 'node',
};
