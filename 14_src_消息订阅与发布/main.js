/*
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-17 23:08:45
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-21 19:45:48
 * @FilePath: \vue_test1\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
// 关闭生产提示
Vue.config.productionTip=false

// //创建一个组件
// const Demo = Vue.extend({})
// //new一个组件实例对象
// const d = new Demo
// // $bus取名可任意不冲突即可，在此加上$是为了迎合vue的写法，bus有总线的意思
// Vue.prototype.$bus=d //在vue原型上绑定了一个傀儡组件实例对象，让所有组件实例对象都能看到、取到并运用$on、$emit、$off方法

// new一个Vue实例
new Vue({
    // 将App放入容器中
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线
    }
}).$mount('#app')