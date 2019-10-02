module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      "prettier",
      "prettier/react"
      ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "prettier"
    ],
    "rules": {
        "semi": 0,
        "quotes": ["error", "single"],
        "indent": ["error", 2],
        "comma-dangle": ["warn", "always"]
    }
};