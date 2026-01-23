const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  // Setup files before tests are run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  testEnvironment: 'jsdom', // For testing React components
  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Handle module aliases from tsconfig.json
  },
  
  // Optional: match test files with .test.ts or .test.tsx
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
};

// Export the final config
module.exports = createJestConfig(customJestConfig);