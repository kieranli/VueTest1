/*
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-01 18:31:46
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-28 21:24:57
 * @FilePath: \vue_test1\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      // 入口
      entry:'src/main.js'
    }
  },
  transpileDependencies: true,
  lintOnSave:false,  //关闭语法检测
  // 配置代理服务器（第一种方法）
  // devServer:{
  //   proxy:'http://localhost:5000'
  // },
  // 配置代理服务器（第二种方法）
  devServer: {
    proxy: {
      // /kieran为请求前缀，可以看作是个类名，加了前缀的才走相应内容
      // 配置前缀时，前缀紧跟端口号,如：http://localhost:8080/kieran/students
      '/kieran1': {
        target: 'http://localhost:5000',//不重写则请求服务器收到的路径也会带有前缀
        pathRewrite:{'^/kieran1':''}, //路径重写，正则匹配将/kieran字符串换位空字符串
        ws: true,//用于支持websocket
        changeOrigin: true //用于控制请求头中的host值，为true时与被请求服务器端口一致，为false则如实表明自己的端口号
      },
      '/kieran2': {
        target: 'http://localhost:5001',//不重写则请求服务器收到的路径也会带有前缀
        pathRewrite:{'^/kieran2':''}, //路径重写，正则匹配将/kieran字符串换位空字符串
        ws: true,//用于支持websocket，默认为true
        changeOrigin: true //用于控制请求头中的host值，为true时与被请求服务器端口一致，为false则如实表明自己的端口号,vue中默认true,react中默认false
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
