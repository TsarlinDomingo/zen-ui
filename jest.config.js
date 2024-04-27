/* eslint-disable */
export default {
  displayName: 'mono-reef',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {
    // '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    // '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
    '\\.[jt]sx?$': 'babel-jest',
    // '\\.css$': 'some-css-transformer',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: ['./node_modules', 'lib'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageDirectory: '../../coverage/packages/mono-reef',
  coverageReporters: ['json', 'json-summary', 'text'],
};
