import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",  // Important for Node.js
      ecmaVersion: "latest",
      globals: {
        console: true,
        require: true,
        module: true,
        exports: true
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
