const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      // 入口
      entry:'src/main.js'
    }
  },
  transpileDependencies: true,
  lintOnSave:false  //关闭语法检测
})
