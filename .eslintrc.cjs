module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "react",
    "react-refresh",
    "@typescript-eslint",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "max-len": ["error", 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "import/no-extraneous-dependencies": ["off"],
    "no-param-reassign": ["error", { "props": false }],
  },
};
