const path = require('path');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
    // mode: 'production',
    devServer: {
        port: 4093,
        // compress: true,
        proxy: 'https://kcp.test.ined.ru'
    },

    // pages:{
    //     'index':{
    //         entry: 'src/pages/security/main.js',
    //         template: 'public/index.html',
    //         filename: 'index.html',
    //         title: 'Цифровая платформа прогнозирования потребности в профессиональных кадрах ',
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     },
    // },
    chainWebpack: config =>{
        config.module
            .rule('vue')
            .use('vue-loader')
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json', '.sass'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve(__dirname, "src"),
            }
        },
        plugins: [
            new VuetifyLoaderPlugin({
                progressiveImages: true,
                match (originalTag, { kebabTag, camelTag, path, component }) {
                    if (kebabTag.startsWith('core-')) {
                        return [
                            camelTag,
                            `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`
                        ]
                    }
                }
            })
        ]
    },
    // css:{
    //     extract: true
    // },
    runtimeCompiler: true
}