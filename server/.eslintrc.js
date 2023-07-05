module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
    },
    plugins: ['react'],
    rules: {
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { consistent: true, multiline: true },
          ObjectPattern: { consistent: true, multiline: true },
          ImportDeclaration: 'never',
          ExportDeclaration: { multiline: true, minProperties: 3 },
        },
      ],
      camelcase: 'off',
      'linebreak-style': 0,
    },
  };