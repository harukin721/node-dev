module.exports = {
    "env": {
        "browser": true,
        "jquery": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "no-cosole": [
            "off"
        ]
    }
};
