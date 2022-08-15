<template>
  <div class="school">
    <h4 @click="showName">学校名称:{{ name }}</h4>
    <h4>学校地址:{{ address }}</h4>
    <input type="text" v-fbind="name">
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:'文理学院',
      address:'重庆'
    };
  }
};
</script>

<style>
.school {
  background-color: rgb(86, 230, 73);
}
</style>