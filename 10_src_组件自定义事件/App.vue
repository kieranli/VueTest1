<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-19 09:22:09
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-19 11:39:14
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="demo">
    <h4>这是一个标题</h4>
    <!-- props让子组件给App传值 -->
    <h5>学生姓名为：{{StudentName}}</h5>
    <School :getSchoolName="getSchoolName"></School>
    
    <!-- v-on或@绑定自定义事件让子组件给App传值 -->
    <!-- <Student v-on:sendStudentName="getStudentName"></Student> -->

    <!-- 只触发一次 -->
    <!-- <Student @sendStudentName.once="getStudentName"></Student> -->

    <!-- ref取到组件实例对象，再用$refs.student.$on挂载自定义事件 -->
    <!-- <Student ref="student"></Student> -->

    <!-- 给组件标签绑定非自定义事件需要加上.native(原生的),否则会被vue认为是自定义事件处理 -->
    <!-- <Student ref="student" @click="show"></Student> -->
    <!-- 加上.native之后，vue将click事件绑定到了Student的根节点<div>上 -->
    <Student ref="student" @click.native="show"></Student>

  </div>
</template>

<script>
  import School from "./components/School"
  import Student from "./components/Student"
  export default {
    name:'App',
    data(){
      return {
        StudentName:''
      }
    },
    components: {
      School,
      Student
    },
    methods:{
      getSchoolName(name){
        console.log('App收到了School子组件的学校名称：',name)
      },
      // ...a为es6语法，即不管后续多少参数，都放到params数组里
      getStudentName(name,...params){
        console.log('App收到了Student子组件的学校名称：',name,params) //法外狂徒张三  [600, 800, 900]
        this.StudentName = name
      },
      demo(){
        console.log('demo被调用了')
      },
      show(){
        alert('123')
      }
    },
    mounted(){
      // 在student实例对象上调用getStudentName当sendStudentName被调用时
      this.$refs.student.$on('sendStudentName',this.getStudentName)

      // 直接把函数写到这里会导致这里的this是Student的组件实例对象，解决办法有两种，一就是不这么写，二就是写成箭头函数
      // this.$refs.student.$on('sendStudentName',(name,...params)=>{
      //   console.log('App收到了Student子组件的学校名称：',name,params) //法外狂徒张三  [600, 800, 900]
      //   this.StudentName = name
      // })

      this.$refs.student.$on('demo',this.demo)

      // 这种方法比直接v-on绑定具有更高灵活性
      // setTimeout(()=>{
      //   this.$refs.student.$on('sendStudentName',this.getStudentName)
      //   this.$refs.student.$on('demo',this.demo)
      // },3000)
    }
  };
</script>

<style scoped>
.demo{
  color:purple
}
</style>