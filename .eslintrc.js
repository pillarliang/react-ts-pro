module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'prettier/unicorn',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 9,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        curly: ['error', 'multi-line'],
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
        'no-lone-blocks': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-shadow': 'error',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'rest-spread-spacing': ['error', 'never'],
        'semi-spacing': 'error',
        'semi-style': 'error',
        'unicode-bom': 'error',
        'template-tag-spacing': ['error', 'never'],
        '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        }],
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {
            },
        }],
        'jsx-quotes': ['error', 'prefer-double'],
        'linebreak-style': ['error', 'unix'],

        // 此处用于覆盖默认推荐规则
        'no-fallthrough': 'off',
        'no-implied-eval': 'error',
        complexity: ['error', 10], // 圈复杂度报警，PCG EPC 要求
        'new-cap': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        'react/display-name': 'off',

        // 此处用于覆盖公司规则
        '@typescript-eslint/naming-convention': ['warn',
            // 函数可以使用驼峰
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            // 内部变量使用驼峰法
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
            },
            // 全局对象各种写法都可以支持，以应对不同类库的支持
            {
                selector: 'variable',
                modifiers: ['global'],
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
            // 函数引用使用驼峰法、或者首字母大写（React 组件）
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase'],
                types: ['function'],
            },
            // 导出的布尔值，字符串、数字、数组使用全大写，下划线分割单词
            {
                selector: 'variable',
                modifiers: ['exported'],
                format: ['UPPER_CASE'],
                types: ['boolean', 'string', 'number', 'array'],
            },
            // 导出的 function 使用 camelCase
            {
                selector: 'variable',
                modifiers: ['exported'],
                format: ['camelCase', 'PascalCase'],
                types: ['function'],
            },
            // 解构的变量可以使用大写用于 Class
            // TODO: 使用 constructor type，https://github.com/typescript-eslint/typescript-eslint/issues/1485
            {
                selector: 'variable',
                modifiers: ['destructured'],
                format: ['camelCase', 'PascalCase'],
            },
            // 类名和类型定义使用首字母大写
            {
                selector: ['class', 'typeLike'],
                format: ['PascalCase'],
            },

            // TODO: 增加 selector: 'property' 的 camelCase 限制，但目前 React 的 dangerouslySetInnerHTML 参数需要 __html 所以暂时不加

            // 类成员方法使用驼峰法，并阻止使用下划线开头和结尾
            {
                selector: ['classMethod', 'classProperty'],
                leadingUnderscore: 'forbid', // 阻止使用下划线开始
                trailingUnderscore: 'forbid', // 阻止使用下划线结尾
                format: ['camelCase'],
            },
        ],

        // 老项目豁免
        '@typescript-eslint/explicit-member-accessibility': 'off',
        // 强制一致地使用 function 声明或表达式，定义顺序问题的延伸，暂时豁免（公司规则为推荐）
        'func-style': ['off', 'expression'],
        // 公司推荐 2 个空格
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false,
        }],
        'import/prefer-default-export': 'off', // 公司为推荐
        '@typescript-eslint/member-ordering': 'off', // 公司为强制，但存量仓库可关闭

        // TS 规则适配
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'react/jsx-uses-vars': 'error',
        'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
        'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
        '@typescript-eslint/require-await': 'off',
    }
};
