<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-23 14:31:56
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-23 15:54:13
 * @FilePath: \vue_test1\src\components\DongHua.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition标签包裹起来，但transition标签不会被解析放到模板上，可以任意取名，但与之对应的动画引用也得改名，appear代表appear:true初始即运行 -->
    <transition name="test" appear>
      <h4 v-show="isShow">你在做咩~</h4>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DongHua",
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

/* .name-enter-active进入时激活 */
.test-enter-active {
  /*引用动画test，持续时间1s，linear为匀速 */
  animation: test 1s linear;
}
/* .name-leave-active离开时激活 */
.test-leave-active {
  /*引用动画test，持续时间1s，linear为匀速 */
  animation: test 0.5s linear reverse;
}
/* 创建一个动画关键帧 */
@keyframes test {
  from {
    /* 从X轴-100%处出发 */
    transform: translateX(-100%);
  }
  to {
    /* 到达X轴0px处 */
    transform: translateX(0px);
  }
}
</style>