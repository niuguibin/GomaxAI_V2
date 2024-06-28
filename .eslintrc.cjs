/* eslint-env node */
module.exports = {
  //支持 typescript 语法
  parser: 'vue-eslint-parser', // vue引入出错
  parserOptions: {
    ecmaVersion: "latest",
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  globals: {
    "NodeJS": true
  },
}
