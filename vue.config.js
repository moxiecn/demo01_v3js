/****************************
 * This file should be put in the ROOT directory of this project, at the same level as package.json.
 * It will be read as a configuration file by @vue-cli-service tool.
 * It must export an exportable object including various parameters.
 */

//// the following is for single page application.
// module.exports = {
//     publicPath: "./", //the base URL when deploying app. Generally, it is in the root directory of the website by defualt.
//     outputDir: "dist", //The directory of the target file generated when running "vue-clie-service build" command.
//     assetsDir: "static", //Stores all kinds of assets when to build a output, such as pictures, video and other static files.
//     indexPath: "index.html", //in output directory, filename or full filename of the index page.
//     //filenameHashing:  true,
//     //pages,
//     //lintOnSave: "default",
//     devServer: {
//         open: false, //whether open default browser automatically.
//         host: "0.0.0.0",
//         port: 9527,
//         https: false,
//         hotOnly: false
//     },

// };

//// the following is for multiple page application.
/**
 * @description: vue cli3 configuration file
 * @author: moxie.liu
 * @date: 2021-02-24
 */
const config = {
    pages: {
        app01: {
            // page 的入口
            entry: './src/pages/app01/main.js',
            // 模板来源
            template: './src/pages/app01/index.html',
            // 在 dist/index.html 的输出
            filename: 'indexApp01.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'app01 Page - official demo',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'app01']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        //subpage: 'src/subpage/main.js'
        app02ShoppingCart: {
            // page 的入口
            entry: './src/pages/app02/classic/shopping-cart/main.js',
            // 模板来源
            template: './src/pages/app02/classic/shopping-cart/index.html',
            // 在 dist/index.html 的输出
            filename: 'indexApp02ShoppingCart.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'app02 Page - official demo',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'app02ShoppingCart']
        },
    },
    publicPath: "./", //the base URL when deploying app. Generally, it is in the root directory of the website by defualt.
    outputDir: "dist", //The directory of the target file generated when running "vue-clie-service build" command.
    assetsDir: "static", //Stores all kinds of assets when to build a output, such as pictures, video and other static files.
    indexPath: "index.html", //in output directory, filename or full filename of the index page.
    //filenameHashing:  true,
    //pages,
    //lintOnSave: "default",
    runtimeCompiler: true,
    devServer: {
        index: "indexDefault.html",
        open: true, //whether open default browser automatically.
        host: "0.0.0.0",
        port: 9527,
        https: false,
        hotOnly: false, // 配置首页 入口链接
        // before: app => {
        //     app.get('/', (req, res, next) => {
        //         for (let i in pages) {
        //             res.write(`<a target="_self" href="/${i}">/${i}</a></br>`);
        //         }
        //         res.end()
        //     });
        // }
    }
}


module.exports = config;

// const path = require('path');
// const fs = require('fs');
// const glob = require('glob');
// const colors = require('colors-console');
// console.log("vue.config.js.path");
// console.log(path);
// console.log("vue.config.js.fs");
// console.log(fs);
// console.log("vue.config.js.glob");
// console.log(glob);
// console.log("vue.config.js.color");
// console.log(colors);

// 配置选项
// const config = {
//     pages: Object.assign(getPages(), {
//         app: './src/main.js' // 配置主入口文件（会生成 app.html，vue cli3并没有提供直接配置入口文件的选项）
//     })
// };

// // // 获取多页面的配置数据
// function getPages() {
//     const pages = {};
//     const pagesJson = require('./config/page.json');
//     glob.sync('./src/pages/**/*.vue').forEach(function(pageUrl) {
//         const ext = path.extname(pageUrl);
//         const pageCode = path.basename(pageUrl, ext);
//         // 文件名不能重复的验证（pageCode 在这里取的是文件名）
//         if (pages[pageCode]) {
//             console.error(colors('red', `文件名不能重复使用：${pageCode}。\n`));
//             process.exit(1);
//         }
//         // 生成入口文件
//         const entryFile = `./entry/${pageCode}.js`;
//         fs.exists(entryFile, function(exists) { // 这里没有对文件目录进行判断，所以需要先建一个'entry'文件夹，否则会报错
//             if (exists) return;
//             // 创建文件及写入文件内容
//             const appTpl = '.' + pageUrl;
//             const entryData = `import Vue from 'vue';\nimport App from '${appTpl}';\nVue.config.productionTip = false;\n new Vue({ render: h => h(App) }).$mount('#${pageCode}'); `;
//             //            const entryData = `import Vue from 'vue';\nimport App from '${appTpl}';\nVue.config.productionTip = false;\n new Vue({ render: h => h(App) }).$mount('#${pageCode}'); `;
//             fs.writeFile(entryFile, entryData, function(err) {
//                 // err.code === 'ENOENT'
//                 if (err) console.log(err);
//             });
//         });
//         // 自定义页面数据
//         const pageData = pagesJson[pageCode] || {};
//         Object.assign(pageData, {
//             url: pageUrl,
//             code: pageCode
//         });
//         // 配置多页面
//         pages[pageCode] = {
//             entry: entryFile, // 入口文件
//             template: './public/index.html', // 模板文件
//             filename: pageCode + '.html', // 打包后的文件路径
//             minify: false, // 是否压缩
//             chunks: ['chunk-vendors', 'chunk-common', 'app', pageCode], // 引入资源文件
//             chunksSortMode: 'manual', // 控制 chunk 的排序。none | auto（默认）| dependency（依赖）| manual（手动）| {function}
//             pageData: pageData
//         };
//     });
//     return pages;
// }

// module.exports = config;