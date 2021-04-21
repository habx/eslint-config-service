module.exports = {
  'parser':'@typescript-eslint/parser',
  'parserOptions':{
    'ecmaVersion':2021,
    'lib':['esnext']
  },
  'extends':[
    'plugin:prettier/recommended'
  ],
  'plugins':[
    '@typescript-eslint',
    'import-helpers'
  ],
  'rules':{
    'no-redeclare':'error',
    'no-console':'error',
    'no-shadow': 'off',
    'prefer-template':'error',
    'no-empty':'error',
    'no-debugger':'warn',
    'no-unused-vars':'off',

    'import-helpers/order-imports': ['warn', {
      'newlinesBetween': 'always',
      'groups': [
        'module',
        [
          '/^@config/',
          '/^@logger/',
          '/^@pubSub/',
          '/^@knex/',
          '/^@links/',
          '/^@drivers/',
          '/^@typings/',
          '/^@helpers/',
          '/^@utils/',
          '/^@middlewares/',
          '/^@jobs/',
          '/^@publishers/',
          '/^@consumers/',
          '/^@controllers/',
          '/^@directives/',
          '/^@schemas/',
          '/^@graphql/',
          '/^@resolvers/',
          '/^@services/',
          '/^@events/',
          '/^@models/',
          '/^@test/'
        ],
        'parent',
        ['sibling', 'index']
      ],
      'alphabetize': { 'order': 'asc', 'ignoreCase': true }
    }],

    'prettier/prettier':[
      'warn',
      {
        'trailingComma':'es5',
        'tabWidth':2,
        'semi':false,
        'singleQuote':true,
        'prefer-template':true
      }
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars':[
      'error',
      {
        'argsIgnorePattern':'^_',
        'varsIgnorePattern':'^_'
      }
    ]
  },
  'env':{
    'node':true
  }
}
