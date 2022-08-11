<template>
  <!-- 组件的结构 -->
  <div>
    <div class="demo">
      <h4>学校名称：{{ schoolName }}</h4>
      <h4>学校地址：{{ address }}</h4>
      <button @click="showX">点我打印实例对象</button>
    </div>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
  name: "School",
  data() {
    return {
      schoolName: "野鸡大学",
      address: "武汉市江岸区",
    };
  },
  methods: {
    showX() {
      console.log(this);
      console.log(this.x); //顺着原型链一直找，直到在Vue的原型对象(Vue.prototype)上找到x
    },
  },
};
// export default school;
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: aliceblue;
}
</style>