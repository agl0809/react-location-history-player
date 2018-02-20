module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'plugins': [
    'prettier',
  ],
  'rules': {
    'prettier/prettier': ['error', {
      'singleQuote': true
    }],
  'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}
