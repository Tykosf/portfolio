module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "React": "true"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "react/jsx-uses-react": "error",   
        "react/jsx-uses-vars": "error",
        "consistent-return": "error",
        "flowtype/no-types-missing-file-annotation": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "import/prefer-default-export": "off",
        "react/default-props-match-prop-types": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-closing-tag-location": "off",
        "react/jsx-filename-extension": "off",
        "react/no-string-refs": "off",
        "react/no-unused-prop-types": "error",
        "react/no-unused-state": "error",
        "react/prefer-stateless-function": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/sort-comp": "off",
        "max-len": "off",
        "no-case-declarations": "off",
        "no-console": "off",
        "no-mixed-operators": "error",
        "no-nested-ternary": "error",
        "no-shadow": "off",
        "no-use-before-define": "off",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "error",
        "prefer-promise-reject-errors": "off",
        "react/jsx-closing-tag-location": "error"
    }
};