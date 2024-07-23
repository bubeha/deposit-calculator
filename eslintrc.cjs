module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'prettier'],
  rules: {
    'semi': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    // increase the severity of rules so they are auto-fixable
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },
  'overrides': [
    // override "simple-import-sort" config
    {
      'files': ['*.js', '*.jsx', '*.ts', '*.tsx'],
      'rules': {
        'simple-import-sort/imports': [
          'error',
          {
            'groups': [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.x
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-plusplus': 'off',
        'max-len': ['error', {'code': 120}]
      },
    },
  ],
}
