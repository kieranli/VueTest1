/*
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-13 18:31:46
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-23 22:08:28
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
  devServer:{
    proxy:'http://localhost:5000'
  }
})
