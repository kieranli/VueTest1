<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-25 16:41:06
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-28 18:39:31
 * @FilePath: \vue_test1\src\components\Count.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h4>当前数值和:{{ $store.state.sum }}</h4>
    <select name="" id="" v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">sum值为奇数才能加</button>
    <button @click="increaseWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    // increase() {
    //   this.$store.dispatch("add", this.number);
    // },
    // decrease() {
    //   this.$store.dispatch("reduce", this.number);
    // },
    // increaseOdd() {
    //   if (this.$store.state.sum % 2) this.$store.dispatch("add", this.number);
    // },
    // increaseWait() {
    //   setTimeout(() => {
    //     this.$store.dispatch("add", this.number);
    //   }, 1000);
    // },

    // 标准写法应该为：没有业务逻辑的可以直接调用commit,有业务逻辑的需要把业务逻辑写到actions里
    increase() {
      this.$store.commit("ADD", this.number);
    },
    decrease() {
      this.$store.commit("REDUCE", this.number);
    },
    increaseOdd() {
      this.$store.dispatch("addOdd", this.number);
    },
    increaseWait() {
      this.$store.dispatch("addWait", this.number);
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>