module.exports = {
  lintOnSave: false,
  root: true,
  env: {
    node: true
  },
  'extends': [
    // 'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 1 //要求使用let 或 const 不使用 var
  }
}
