<template>
  <div class="student">
    <h4 @click="showName">学生姓名:{{ name | MySlice}}</h4>
    <h4>学生年龄:{{ age }}</h4>
    <button @click="hello">点我测试原型方法</button>
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

<style>
.student {
  background-color: rgb(127, 250, 223);
}
</style>