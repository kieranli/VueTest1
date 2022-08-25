<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-25 16:41:06
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-25 16:50:46
 * @FilePath: \vue_test1\src\components\Count.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h4>当前数值和:{{sum}}</h4>
    <select name="" id="" v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">选择奇数才能加</button>
    <button @click="increaseWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      number: 1,
      sum: 0,
    };
  },
  methods: {
    increase() {
      this.sum += this.number;
    },
    decrease() {
      this.sum -= this.number;
    },
    increaseOdd() {
      if (this.number % 2) this.sum += this.number;
    },
    increaseWait() {
      setTimeout(() => {
        this.sum += this.number;
      }, 1000);
    },
  },
};
</script>

<style>
button{
    margin-left: 10px;
}
</style>