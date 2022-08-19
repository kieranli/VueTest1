<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-19 16:56:12
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-19 16:59:54
 * @FilePath: \vue_test1\src\components\Student.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="demo">
    <h4>学生姓名:{{ name }}</h4>
    <h4>学生年龄:{{ age }}</h4>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name:'法外狂徒张三',
      age:18
    };
  }
};
</script>

<style scoped>
/* 不用scoped样式名一样就冲突了 */
.demo {
  background-color: rgb(179, 230, 219);
}
</style>