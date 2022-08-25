/*
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-21 20:00:14
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-25 10:01:22
 * @FilePath: \vue_test1\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
// 引入vue-resource插件
import vueResource from 'vue-resource'
Vue.use(vueResource)
// 关闭生产提示
Vue.config.productionTip=false


// new一个Vue实例
new Vue({
    el:'#app',
    // 将App放入容器中
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线
    }
})