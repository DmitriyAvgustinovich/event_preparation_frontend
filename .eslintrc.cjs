module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "antd/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "@ant-design/icons",
            group: "external",
            position: "after",
          },
          {
            pattern: "pages/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "store/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "configs/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "constants/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "hooks/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "providers/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "utils/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "types/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "*.scss",
            group: "index",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
