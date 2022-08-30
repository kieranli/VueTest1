<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-25 16:41:06
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-30 21:33:54
 * @FilePath: \vue_test1\src\components\Count.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h4>当前数值和:{{ sum }}</h4>
    <h4>当前数值十倍：{{ bigSum }}</h4>
    <h4>我在{{ school }},学习{{ subject }}</h4>
    <select name="" id="" v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 需要传参 -->
    <button @click="increase(number)">+</button>
    <button @click="decrease(number)">-</button>

    <!-- 数组写法需保证函数名一致 -->
    <!-- <button @click="ADD(number)">+</button>
    <button @click="REDUCE(number)">-</button> -->

    <!-- 需要传参 -->
    <button @click="increaseOdd(number)">sum值为奇数才能加</button>
    <button @click="increaseWait(number)">等一等再加</button>

    <!-- 数组写法需保证函数名一致 -->
    <!-- <button @click="addOdd(number)">sum值为奇数才能加</button>
    <button @click="addWait(number)">等一等再加</button> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      number: 1,
    };
  },
  computed: {
    // 靠程序员手动书写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum
    // },

    // 靠mapState映射，对象写法(...为es6语法中的扩展运算符，可将mapState返回的对象解构添加到computed对象中)
    ...mapState({ sum: "sum", school: "school", subject: "subject" }), //es6语法引入时需用逗号标注当前语句的结束
    ...mapGetters({ bigSum: "bigSum" }),

    // 靠mapState映射，数组写法,此写法需注意在本页引用的名与state映射的名需要一致
    // ...mapState(['sum','school','subject']),
    // ...mapGetters(['bigSum'])
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

    // 程序员手写调用commit与dispatch
    // increase() {
    //   this.$store.commit("ADD", this.number);
    // },
    // decrease() {
    //   this.$store.commit("REDUCE", this.number);
    // },
    // increaseOdd() {
    //   this.$store.dispatch("addOdd", this.number);
    // },
    // increaseWait() {
    //   this.$store.dispatch("addWait", this.number);
    // },

    // 借助mapMutations调用commit,对象写法
    ...mapMutations({ increase: "ADD", decrease: "REDUCE" }),

    // 借助mapMutations调用commit,数组写法
    // ...mapMutations(["ADD","REDUCE"]),

    // 借助mapActions调用dispatch，对象写法
    ...mapActions({increaseOdd:"addOdd",increaseWait:"addWait"}),

    // 借助mapActions调用dispatch，数组写法
    // ...mapActions(["addOdd","addWait"]),
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>