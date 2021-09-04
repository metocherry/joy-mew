module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: [
    '@metocherry/eslint-config-joy',
    '@metocherry/eslint-config-joy/react',
    '@metocherry/eslint-config-joy/typescript',
  ],
  rules: {},
}
