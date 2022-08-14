<template>
  <div>
    <h4 v-text="msg" id="title" ref="title"></h4>
    <button @click="showDOM" ref="button">点我输出DOM</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
  import School from "./components/School"
  export default {
    name:'App',
    data(){
      return {
        msg:"欢迎学习"
      }
    },
    components: {
      School,
    },
    methods:{
      showDOM(){
        console.log(document.getElementById('title'))//原生JS操作
        console.log(this.$refs.title)//真实DOM元素
        console.log(this.$refs.button)//真实DOM元素
        console.log(this.$refs.sch)//School组件实例对象
      }
    }
  };
</script>

<style>
</style>