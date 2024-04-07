import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  rootDir: 'src',
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@config$': '<rootDir>/config/index.ts',
    '^@constants$': '<rootDir>/constants/index.ts',
    '^@components$': '<rootDir>/components/index.ts',
    '^@hooks$': '<rootDir>/hooks/index.ts',
    '^@pages$': '<rootDir>/pages/index.ts',
    '^@schemas$': '<rootDir>/schemas/index.ts',
    '^@services$': '<rootDir>/services/index.ts',
    '^@stores/(.*)$': '<rootDir>/stores/$1',
    '^@structures$': '<rootDir>/structures/index.ts',
    '^@styles$': '<rootDir>/styles/index.ts',
    '^@utils$': '<rootDir>/utils/index.ts',
  },
  setupFiles: ['<rootDir>/testUtils/setupTests.js'],
};

export default jestConfig;
