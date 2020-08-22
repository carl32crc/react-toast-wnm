module.exports = {
  collectCoverageFrom: ["tests/**/*.{ts,tsx,js,jsx}"],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/test-config/setup.ts'],
  testEnvironment: 'node',
}