module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: {
        //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
        resolve: {
            symlinks: false
        },
        devtool: 'source-map'
    },
    transpileDependencies: [
        '@coreui/utils',
        '@coreui/vue'
    ]
}
