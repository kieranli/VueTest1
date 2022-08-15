<template>
  <div class="demo">
    <h4>学校名称:{{ name }}</h4>
    <h4>学校地址:{{ address }}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "文理学院",
      address: "重庆",
    };
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: rgb(86, 230, 73);
  h4{
    color:red
  }
}
</style>