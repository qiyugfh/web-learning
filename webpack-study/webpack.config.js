const path = require('path')
// 启动热更新的第2步
const webpack = require('webpack')

// 导入在内存中生成HTML页面的插件
// 只要是插件，就一定要放到下面的plugins节点中去
const htmlWebpackPlugin = require('html-webpack-plugin')


// 这个配置文件，其实就是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),// 入口，表示要使用webpack打包哪个文件
    output: {// 输出文件相关的配置
        path: path.join(__dirname, './dist'), // 指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' // 这是指定输出文件的名称

    },
    devServer: {// 这是配置dev-server命令参数的第二种方式
        // --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 指定启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true // 启动热更新的第1步
    },
    plugins: [// 配置插件的节点
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的模块对象，这是启动热更新的第3步
        new htmlWebpackPlugin({ // 创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html' // 指定生成的页面的名称
        })
    ],
    module: {// 这个节点用于配置所有第三方模块加载器
        rules: [// 所有第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 配置处理.css文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理.less文件的第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //配置处理.scss文件的第三方loader规则
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=8000&name=[hash:8]-[name].[ext]' }, // 配置处理图片路径的loader,
            // limit给的的值是图片的大小，单位是byte，如果我们引用的图片大于或等于给定的limit值，则不会被转为base64格式的字符串，如果图片小于limit值，则会改为base64格式的字符串，
            // name设置图片被编译好之后的名称
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 这是配置babel来转换高级的ES语法

        ]
    },

}