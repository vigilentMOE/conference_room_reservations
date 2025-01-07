// eslint.config.js
// Import required parsers and plugins
import babelParser from "@babel/eslint-parser"; // Parser for modern JavaScript features
import reactPlugin from "eslint-plugin-react"; // ESLint plugin for React-specific linting
import reactHooksPlugin from "eslint-plugin-react-hooks"; // ESLint plugin for React Hooks rules
import prettierPlugin from "eslint-plugin-prettier"; // ESLint plugin for Prettier formatting
import js from "@eslint/js"; // Core ESLint configurations
import globals from "globals"; // Pre-defined global variables

export default [
  {
    // Main configuration block for JavaScript and JSX files
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021, // Enables ES2021 syntax features
      sourceType: "module", // Treats files as ES modules
      parser: babelParser, // Uses Babel to parse modern JavaScript
      parserOptions: {
        requireConfigFile: false, // Do not require a Babel configuration file
        babelOptions: {
          presets: [
            "@babel/preset-env", // Use the preset-env for compiling modern JavaScript
            [
              "@babel/preset-react", // Use the preset-react for compiling JSX and React code
              {
                runtime: "automatic", // Enable the new JSX transform in React 17+
                importSource: "preact", // Use Preact instead of React
              },
            ],
          ],
        },
      },
      globals: {
        ...globals.browser, // Adds browser globals (window, document, etc.)
        ...globals.node, // Adds Node.js globals (process, require, etc.)
      },
    },
    plugins: {
      react: reactPlugin, // Enable React linting rules
      "react-hooks": reactHooksPlugin, // Enable React Hooks rules
      prettier: prettierPlugin, // Enable Prettier formatting rules
    },
    rules: {
      ...js.configs.recommended.rules, // Include ESLint recommended rules
      ...reactPlugin.configs.recommended.rules, // Include React recommended rules
      ...reactHooksPlugin.configs.recommended.rules, // Include React Hooks rules
      ...prettierPlugin.configs.recommended.rules, // Include Prettier rules
      "prettier/prettier": "error", // Enforce Prettier formatting
      "react/prop-types": "off", // Disable React PropTypes checking
      "no-console": "off", // Warning for console.log statements
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Allow unused variables starting with _
      "react/react-in-jsx-scope": "off", // No need to import React in JSX files (React 17+)
    },
    settings: {
      react: {
        version: "detect", // Automatically detect installed React version
      },
    },
  },
  {
    // Additional configuration for test files
    files: ["**/*.{test,spec}.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // Add Jest testing globals
      },
    },
  },
];
