// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
// 引入插件
import plugins from './plugins'
// 关闭生产提示
Vue.config.productionTip=false

// 应用一个插件
Vue.use(plugins,1,2,3)
// new一个Vue实例
new Vue({
    el:'#app',
    // 将App放入容器中
    render:h=>h(App)
})