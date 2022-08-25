<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-25 11:22:21
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-25 14:07:47
 * @FilePath: \vue_test1\src\components\Category.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <h4 class="title">{{ title }}分类</h4>
    <slot>看看是否有效</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.container {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
.title {
  text-align: center;
  justify-content: center;
  background-color: #fda501;
}
img{
    width: 100%;
}
video{
    width: 100%;
}
</style>