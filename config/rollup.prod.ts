/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 20:27:44
 * @LastEditors: Please set LastEditors
 * @Description: 打包配置
 * @FilePath: \obtool\config\rollup.prod.ts
 * 
 * @Date: 2021-04-01 14:40:26
 */
/**
 * @author: tyson
 * @description: package.json配置
 * @Date: 2021-04-01 15:21:44
 */
import json from 'rollup-plugin-json';

/**
 * @author: tyson
 * @description: 获取 package.json 配置
 * @Date: 2021-04-01 15:21:11
 */
import {
    main
} from '../package.json';

/**
 * @author: tyson
 * @description: 解析 node_modules 中的模块
 * @Date: 2021-04-01 15:21:01
 */
import {
    nodeResolve
} from '@rollup/plugin-node-resolve';


/**
 * @author: tyson
 * @description:  转换 CJS -> ESM
 * @Date: 2021-04-01 15:20:51
 */
import commonjs from '@rollup/plugin-commonjs';

/**
 * @author: tyson
 * @description: 显示包大小
 * @Date: 2021-04-01 15:20:41
 */
import filesize from 'rollup-plugin-filesize';

/**
 * @author: tyson
 * @description: 压缩 js 
 * @Date: 2021-04-01 15:20:32
 */
import {
    uglify
} from "rollup-plugin-uglify";

/**
 * @author: tyson
 * @description: 使用 Babel  
 * @Date: 2021-04-01 15:20:17
 */
// import babel from 'rollup-plugin-babel';

import {
    babel
} from '@rollup/plugin-babel';

/**
 * @author: tyson
 * @description: 区分 Development 与 Production 环境   通过 process.env.NODE_ENV 
 * @Date: 2021-04-01 15:13:30
 */
import replace from '@rollup/plugin-replace';

/**
 * @author: tyson
 * @description: Typescript
 * @Date: 2021-04-01 15:13:11
 */
import typescript from 'rollup-plugin-typescript2';

/**
 * @author: tyson
 * @description: 编译css
 * @Date: 2021-04-01 18:25:47
 */
import postcss from 'rollup-plugin-postcss';

/**
 * @author: tyson
 * @description: 压缩css
 * @Date: 2021-04-01 20:12:39
 */
import cssnano from 'cssnano';

/**
 * @author: tyson
 * @description: 环境变量
 * @Date: 2021-04-01 13:24:55
 */
const env = process.env.NODE_ENV;

/**
 * @author: tyson
 * @description: 入口文件
 * @Date: 2021-04-01 13:25:22
 */
const input = 'src/index.ts';

/**
 * @author: tyson
 * @description:  使用外部链接的模块
 * @Date: 2021-04-01 13:25:41
 */
const external = [
    'lodash',
    "vue",
    "vuex",
    "vue-router",
    "react",
    "react-dom",
    'redux',
    "single-spa",
]

/**
 * @author: tyson
 * @description: 外部模块cdn 
 * @Date: 2021-04-01 13:26:25
 */
const paths = {
    "vue": '//unpkg.com/vue@next',
    "vuex": '//cdnjs.cloudflare.com/ajax/libs/vuex/4.0.0/vuex.global.prod.min.js',
    "vue-router": '//cdnjs.cloudflare.com/ajax/libs/vue-router/4.0.5/vue-router.global.prod.min.js',
    "react": '//cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js',
    "react-dom": '//cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js',
    'redux': '//cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js',
    "single-spa": '//cdnjs.cloudflare.com/ajax/libs/single-spa/5.9.2/umd/single-spa.min.js',
}

/**
 * @author: tyson
 * @description: 全局变量 
 * @Date: 2021-04-01 13:26:46
 */
const globals = {
    'lodash': '_',
    "vue": 'Vue',
    "vuex": "Vuex",
    "vue-router": "VueRouter",
    "react": "React",
    "react-dom": "ReactDOM",
    'redux': 'Redux',
    "single-spa": "singleSpa",
}

/**
 * @author: tyson
 * @description: 输出文件,可以是一个数组 
 * @param { 
 *    name: 打包js名称,
 *    file: 输出文件,
 *    globals: 定义的全局变量,
 *    paths: cdn路径,
 *    format:   amd (异步模块定义，用于像RequireJS这样的模块加载器) 
 *            | cjs (CommonJS，适用于 Node 和 Browserify/Webpack)
 *            | esm (将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入)
 *            | iife (一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小)
 *            | umd (通用模块定义，以amd，cjs 和 iife 为一体)
 *            | system (SystemJS 加载器格式) 
 * }
 * @Date: 2021-04-01 13:27:31
 */
const output = {
    name: '@ob-tools',
    file: main,
    format: 'umd',
    globals,
    paths
};

/**
 * @author: tyson
 * @description: 各类插件
 * @Date: 2021-04-01 14:00:52
 */
const plugins = [
    nodeResolve(),
    commonjs(),
    json(),
    typescript(),
    babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
    }),
    postcss({
        modules: true,
        minimize: env === 'production' ? true : false,
        extract: true,
        plugins: [
            cssnano(),
        ]
    }),
    uglify(),
    replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        'preventAssignment': true,
    }),
    filesize(),
];

export default {
    input,
    output,
    plugins,
    external,
};