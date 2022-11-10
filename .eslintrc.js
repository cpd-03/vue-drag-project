  //有时候代码里有些特殊情况需要我们在某一行或者某几行关闭ESLint检测，可以使用注释。
 //  /* eslint-disable */
 //  alert('str');
 //  /* eslint-enable */

module.exports = {
  root: true,
  env: {
    // 预定义的全局变量，这里是浏览器环境
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": "off",
    "vue/no-v-model-argument": "off",
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // 使用 === 替代 == allow-null允许null和undefined==
    eqeqeq: [2, "allow-null"],
    // 文件末尾强制换行
    "eol-last": 2,
    // 禁止或强制在单行代码块中使用空格
    "block-spacing": [2, "always"],
    // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab
    "brace-style": [
      2,
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    /**
     * 双峰驼命名格式
     * var myFavoriteColor   = "#112C85";
     * var _myFavoriteColor  = "#112C85";
     * var myFavoriteColor_  = "#112C85";
     * var MY_FAVORITE_COLOR = "#112C85";
     */
    camelcase: [
      2,
      {
        properties: "always",
      },
    ],
    // 函数调用时 函数名与()之间不能有空格 - 开启
    "no-spaced-func": 2,
    // 控制逗号前后的空格
    "comma-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    //  数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    "comma-dangle": [2, "never"],
    // 强制所有控制语句使用一致的括号风格
    curly: [2, "all"],
    // 要求回调函数中有容错处理
    "handle-callback-err": [2, "^(err|error)$"],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // 强制在关键字前后使用一致的空格
    "keyword-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 要求构造函数首字母大写
    "new-cap": [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    // 要求调用无参构造函数时有圆括号
    "new-parens": 2,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    "no-eq-null": 2,
    // 禁止条件表达式中出现赋值操作符
    "no-cond-assign": 2,
    // 禁止修改 const 声明的变量
    "no-const-assign": 2,
    // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    "no-control-regex": 0,
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    "no-extra-parens": [2, "functions"],
    // 禁止 case 语句落空
    "no-fallthrough": 2,
    // 禁止数字字面量中使用前导和末尾小数点
    "no-floating-decimal": 2,
    // 禁止对 function 声明重新赋值
    "no-func-assign": 2,
    // 禁止在嵌套的块中出现 function 或 var 声明
    "no-inner-declarations": [2, "functions"],
    // 禁止在字符串和注释之外不规则的空白
    "no-irregular-whitespace": 2,
    // 不允许标签与变量同名
    "no-label-var": 2,
    // 不允许空格和 tab 混合缩进
    "no-mixed-spaces-and-tabs": 2,
    // 禁止使用多个空格
    "no-multi-spaces": 2,
    // 禁止末尾空格
    "no-trailing-spaces": [2, { skipBlankLines: false }],
    // 不允许多个空行
    "no-multiple-empty-lines": [
      2,
      {
        max: 1,
      },
    ],
    // 允许将变量初始化为 undefined
    "no-undef-init": 0,
    // 禁止出现令人困惑的多行表达式
    "no-unexpected-multiline": 2,
    // 禁用一成不变的循环条件
    "no-unmodified-loop-condition": 2,
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    "no-unreachable": 2,
    // 禁止属性前有空白
    "no-whitespace-before-property": 2,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    semi: [2, "never"],
    // 强制在块之前使用一致的空格
    "space-before-blocks": [2, "always"],
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [2, "never"],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": [2, "never"],
    // 要求操作符周围有空格
    "space-infix-ops": 2,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": [
      2,
      "always",
      {
        markers: [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!",
          ",",
        ],
      },
    ],
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "template-curly-spacing": [2, "never"],
    // 要求使用 isNaN() 检查 NaN
    "use-isnan": 2,
    // 要求 IIFE 使用括号括起来
    "wrap-iife": [2, "any"],
    // 是否允许debugger
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // 强制在花括号中使用一致的空格
    "object-curly-spacing": [
      2,
      "always",
      {
        objectsInObjects: false,
      },
    ],
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    "array-bracket-spacing": [2, "never"],
  },
};
