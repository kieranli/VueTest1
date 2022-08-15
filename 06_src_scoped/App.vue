<template>
  <div class="demo">
    <h4>这是一个标题</h4>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  import School from "./components/School"
  import Student from "./components/Student"
  export default {
    name:'App',
    data(){
      return {
      }
    },
    components: {
      School,
      Student
    }
  };
</script>

<style scoped>
.demo{
  color:purple
}
</style>