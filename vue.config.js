module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/css/sass/vars.sass"
                    @import "@/assets/css/sass/fonts.sass"
                `
            }
        }
    },
    filenameHashing: false,
    productionSourceMap: false,
    configureWebpack: (config) => {
        return {
            devServer: {
                proxy: {
                    '/wp-json': {
                        target: 'http://arkada',
                        secure: false,
                        changeOrigin: true
                    },
                }
            }
        }
    }
}