<template>
  <div class="student">
    <h4 @click="showName">学生姓名:{{ name }}</h4>
    <h4>学生年龄:{{ age }}</h4>
  </div>
</template>
<script>
import {hunhetest} from '../hunhe'
export default {
  data() {
    return {
      name:'张三',
      age:18
    };
  },
  mixins:[hunhetest]
};
</script>

<style>
.student {
  background-color: rgb(127, 250, 223);
}
</style>