export default {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
}
