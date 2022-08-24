<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 09:14:51
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-24 10:53:04
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="root">
    <button @click="getStudents">点我获取学生信息</button>
    <button @click="getCars">点我获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods:{
    // 本地开启一台node服务器地址为localhost:5000/students，以下写法会产生跨域问题。
    // 是否跨域看 cors 关键词，跨域的问题是前端产生的，需要协议名、主机名、端口号一致才不会跨域，在这里端口号一个8080，一个5000于是跨域
    // Access to XMLHttpRequest at 'http://localhost:5000/students' from 
    // origin 'http://localhost:8080' has been blocked by CORS policy: 
    // No 'Access-Control-Allow-Origin' header is present on the requested resource.

    // getStudents(){
    //   axios.get('http://localhost:5000/students').then(
    //     response => {
    //       console.log('请求成功了！，学生数据为：',response.data)
    //     },
    //     error => {
    //       console.log('请求失败了，失败原因为：',error.message)
    //     }
    //   )
    // }

    // 解决办法一：利用vue-cli开启一个代理服务器，代理服务器的端口会与本机一致，这里访问代理服务器
    // 需要在vue.config.js里配置代理服务器
    // 注意：这种方法，若代理服务器没有，才会去发送请求，代理服务器根目录即在文件夹public下
    getStudents(){
      axios.get('http://localhost:8080/kieran1/students').then(
        response => {
          console.log('请求成功了！，学生数据为：',response.data)
        },
        error => {
          console.log('请求失败了，失败原因为：',error.message)
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/kieran2/cars').then(
        response => {
          console.log('请求成功了！，汽车数据为：',response.data)
        },
        error => {
          console.log('请求失败了，失败原因为：',error.message)
        }
      )
    }
  }
};
</script>