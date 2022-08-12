/*
  该文件是整个项目的<入口文件>
*/
//引入Vue，实际引入的为vue.runtime.esm.js，为残缺版缺少模板解析的vue
import Vue from 'vue'
// import Vue from 'vue/dist/vue'，引入完整版vue
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
/*
    关于不同版本的Vue:
      1.vue.js与vue.runtime.xxx.js的区别:
        (1).vue.js是完整版的Vue.包含:核心功能+模板解析器
        (2).vue.runtime.xxx.js是运行版的Vue,只包含核心功能,没有模板解析器.
      2.因为vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项,需要使用
        render函数接收到的createElement函数去指定具体内容.
*/
//创建Vue的实例对象
new Vue({
  // template:`<App></App>`,
  // components:{
  //   App
  // }

  //完成了这个功能：将App组件放入容器中
  render: h => h(App)
  
  //render实际运行原理
  // render(createElement){
  //   return createElement('h4','你好啊')
  // }

  // 修改成箭头函数为
  // render:(createElement)=>{
  //   return createElement('h4','你好啊')
  // }

  // 只有一个参数时
  // render:createElement=>{
  //   return createElement('h4','你好啊')
  // }

  // 函数体只有一句且为return时
  // 此处与render: h => h(App)的区别只在传参，此处传参为html内置元素，而19行所传是定义的组件，不加引号直接调用时直接找到App组件
  // render:createElement=>createElement('h4','你好啊')

  // 修改一个参数名
  // render:h=>h('h4','你好啊')

}).$mount('#app')//.$mount为el配置的另一种写法，绑定容器
