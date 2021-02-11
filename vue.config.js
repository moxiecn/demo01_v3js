/****************************
 * This file should be put in the ROOT directory of this project, at the same level as package.json.
 * It will be read as a configuration fil by @vue-cli-service tool.
 * It must export an exportable object including various parameters.
 */

module.exports = {
    publicPath: "./", //the base URL when deploying app. Generally, it is in the root directory of the website by defualt.
    outputDir: "dist", //The directory of the target file generated when running "vue-clie-service build" command.
    assetsDir: "static", //Stores all kinds of assets when to build a output, such as pictures, video and other static files.
    indexPath: "index.html", //in output directory, filename or full filename of the index page.
    //filenameHashing:  true,
    //pages,
    //lintOnSave: "default",
    devServer: {
        open: false, //only can run it under apple system.
        host: "0.0.0.0",
        port: 9527,
        https: false,
        hotOnly: false
    }
};