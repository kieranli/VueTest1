// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
// 关闭生产提示
Vue.config.productionTip=false

// new一个Vue实例
new Vue({
    el:'#app',
    // 将App放入容器中
    render:h=>h(App)
})