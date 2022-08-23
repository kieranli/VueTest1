<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-19 09:22:09
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-19 17:04:47
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="demo">
    <School/>
    <Student/>
  </div>
</template>

<script>
  import School from "./components/School"
  import Student from "./components/Student"
  export default {
    name:'App',
    components: {
      School,
      Student
    }
  };
</script>

<style scoped>
.demo{
  background-color:gray
}
</style>