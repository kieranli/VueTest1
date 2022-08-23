<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-23 14:31:56
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-23 16:04:25
 * @FilePath: \vue_test1\src\components\DongHua.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition标签包裹起来，但transition标签不会被解析放到模板上，可以任意取名，但与之对应的动画引用也得改名，appear代表appear:true初始即运行 -->
    
    <!-- 单个元素过度 -->
    <!-- <transition name="test" appear>
      <h4 v-show="isShow">你在做咩~</h4>
    </transition> -->

    <!-- 多个元素过度 -->
    <transition-group name="test" appear>
      <h4 v-show="isShow" key="1">你在做咩~</h4>
      <h4 v-show="isShow" key="2">你在做咩~</h4>
    </transition-group>
  </div>
</template>

<script>
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
/* 进入的起点，离开的终点 */
.test-enter,.test-leave-to{
  transform: translateX(-100%);
}
/* 进入、离开时激活过度效果 */
.test-enter-active,.test-leave-active{
  transition:0.5s linear;
}
/* 进入的终点，离开的起点 */
.test-enter-to,.test-leave{
  transform: translateX(0px);
}
</style>