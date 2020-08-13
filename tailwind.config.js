module.exports = {
    purge: [],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
    extends: ['stylelint-config-recommended']

};

module.exports = {
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                ],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
    },
};