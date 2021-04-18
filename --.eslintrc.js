// https://eslint.org/docs/user-guide/configuring

module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项指定环境的全局变量，下面的配置指定为node环境
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // '@vue/prettier',
    // '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // required to lint *.vue files
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 强制末尾分号
    semi: [2, 'always'],
    // 不允许出现不必要的分号 ;;
    'no-extra-semi': 2,
    // 不允许混用tab和空格
    'no-mixed-spaces-and-tabs': [0, 'smart-tabs'],
    // 缩进风格
    indent: [0, 2],
    // 强制驼峰命名规则
    camelcase: [0, { properties: 'never' }],
    // 函数定义时括号前的空格
    'space-before-function-paren': [0, { anonymous: 'always', named: 'never' }],
    // 禁用var，用let和const代替
    'no-var': 2,
    // 禁止行内备注
    // "no-inline-comments": 2,
    // 备注在行上方
    'line-comment-position': ['error', { position: 'above' }],
    // 注释风格 /*
    'spaced-comment': ['error', 'always'],
    // this别名
    'consistent-this': ['error', 'that'],
    // 禁止出现未使用过的变量
    'no-unused-vars': 1,
    // 是否允许对象中出现结尾逗号
    'comma-dangle': ['error', 'never'],
    // allow async-await
    'generator-star-spacing': 'off',
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true
      }
    ],
    // 要求检查NaN的时候使用isNaN()
    'use-isnan': 2,
    // 强制JSDoc注释
    'valid-jsdoc': [
      'error',
      {
        requireReturn: false,
        requireReturnType: false,
        requireReturnDescription: false
      }
    ],
    // 在使用typeof表达式比较的时候强制使用有效的字符串
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],
    // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-const": 0,
    "no-prototype-builtins": 0,
    // 'require-jsdoc': 0
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  globals: {
    window: true,
    document: true,
    $: true,
    _: true,
    Utils: true,
    jwerty: true,
    localforage: true,
    moment: true,
    ol: true,
    DITGisMap: true,
    layer: true,
    download: true,
    AMap: true,
    engine: true
  }
};
