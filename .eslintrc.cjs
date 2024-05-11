module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "@stylistic/ts", "@stylistic/jsx", "react-refresh"],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-max-props-per-line": [
            "error",
            { maximum: 1, when: "always" },
        ],
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "@stylistic/ts/object-curly-spacing": ["error", "always"],
        "@stylistic/jsx/jsx-curly-spacing": [2, "always"],
        "@stylistic/jsx/jsx-closing-bracket-location": 1,
        "react-refresh/only-export-components": "warn"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
}
