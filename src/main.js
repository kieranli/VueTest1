/*
  该文件是整个项目的<入口文件>
*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建Vue的实例对象
new Vue({
  //完成了这个功能：将App组件放入容器中
  render: h => h(App),
}).$mount('#app')//.$mount为el配置的另一种写法，绑定容器
