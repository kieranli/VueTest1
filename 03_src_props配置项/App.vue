<template>
  <div>
    <h4>{{msg}}</h4>
    <!-- <Student></Student> -->
    <!-- age在此处传值为字符串，若有计算则会出错 -->
    <!-- <Student name="张三" age="18" sex="男"></Student> -->
    <!-- age在此处用v-bind绑定，即，传入的值为冒号里作为js表达式的传值 -->
    <Student name="张三" :age="18" sex="男"></Student>
    <Student name="李四" :age="19" sex="女"></Student>
    <Student name="王五"  sex="女"></Student>
  </div>
</template>

<script>
  import Student from "./components/Student"
  export default {
    name:'App',
    data(){
      return {
        msg:'看看data与props的区别' 
      }
    },
    components: {
      Student,
    }
  };
</script>

<style>
</style>