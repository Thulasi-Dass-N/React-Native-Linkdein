module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    "react-native/react-native": true,
    "jest/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:jest/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react", "react-native", "detox"],
  ignorePatterns: ["!.*", "dist", "node_modules"],
    rules: {
    'react/prop-types': ['off'],
    'react/display-name': ['off'],
    'react/no-unescaped-entities': ['off'],
    indent: ['error', 2, {SwitchCase: 1}],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    "no-console": ["error"],
    curly: 'error',
    'no-else-return': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    strict: 'error',
    'symbol-description': 'error',
    yoda: ['error', 'never', {exceptRange: true}],
  },
  // rules: {
  //   indent: [
  //     "error",
  //     2,
  //     {
  //       SwitchCase: 1,
  //       ignoredNodes: ["ConditionalExpression"],
  //     },
  //   ],
  //   "linebreak-style": ["error", "unix"],
  //   quotes: ["error", "double"],
  //   semi: ["error", "always"],
  //   "no-console": ["error"],
  //   "no-unused-vars": ["error", {vars: "all"}],
  //   "react/prop-types": "off",
  //   "import/no-relative-packages": "off",
  // },

  settings: {
    react: {
      version: "detect",
    },
  },
};

// module.exports = {
//   parser: 'babel-eslint',
//   env: {
//     browser: true,
//     commonjs: true,
//     es6: true,
//     node: true,
//     jest: true,
//   },
//   extends: ['eslint:recommended', 'plugin:react/recommended'],
//   parserOptions: {
//     ecmaFeatures: {
//       experimentalObjectRestSpread: true,
//       jsx: true,
//     },
//     sourceType: 'module',
//   },
//   plugins: ['react'],
//   rules: {
//     'react/prop-types': ['off'],
//     'react/display-name': ['off'],
//     'react/no-unescaped-entities': ['off'],
//     indent: ['error', 2, {SwitchCase: 1}],
//     'linebreak-style': ['error', 'unix'],
//     quotes: ['error', 'single'],
//     semi: ['error', 'always'],
//     'no-console': ['warn', {allow: ['clear', 'info', 'error', 'dir', 'trace']}],
//     curly: 'error',
//     'no-else-return': 'error',
//     'no-unneeded-ternary': 'error',
//     'no-useless-return': 'error',
//     'no-var': 'error',
//     'one-var': ['error', 'never'],
//     'prefer-arrow-callback': 'error',
//     strict: 'error',
//     'symbol-description': 'error',
//     yoda: ['error', 'never', {exceptRange: true}],
//   },
// };