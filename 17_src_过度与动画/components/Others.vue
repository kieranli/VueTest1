<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-23 14:31:56
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-23 20:36:16
 * @FilePath: \vue_test1\src\components\DongHua.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 第三方库的动画效果使用，这里用animate.css举例 -->
    <!-- 
      安装animate: npm install animate.css --save
      引入:import 'animate.css'
      使用: 1.标签配置:class="animate__animated animate__bounce" 在这里可以配置到name里
            2.enter-active-class="xxx",leave-active-class="xxx"
     -->
    <!-- 多个元素过度 -->s
    <transition-group
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__bounceOut"
    >
      <h4 v-show="isShow" key="1">你在做咩~</h4>
      <h4 v-show="isShow" key="2">你在做咩~</h4>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "GuoDu",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
h4 {
  background-color: aquamarine;
}
</style>