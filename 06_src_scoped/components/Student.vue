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
  background-color: rgb(127, 250, 223);
}
</style>