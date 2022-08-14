<template>
  <div class="School">
    <h4>学校名称:{{ name }}</h4>
    <h4>学校地址:{{ address }}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "重庆文理学院",
      address: "重庆永川",
    };
  },
};
</script>

<style>
    .School{
        background-color: red;
    }
</style>