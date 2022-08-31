<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-25 16:41:06
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-31 21:23:30
 * @FilePath: \vue_test1\src\components\Count.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h4 style="color: red">Person组件的总人数为:{{ personList.length }}</h4>
    <h4>当前数值和:{{ sum }}</h4>
    <h4>当前数值十倍：{{ bigSum }}</h4>
    <h4>我在{{ school }},学习{{ subject }}</h4>
    <select name="" id="" v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase(number)">+</button>
    <button @click="decrease(number)">-</button>
    <button @click="increaseOdd(number)">sum值为奇数才能加</button>
    <button @click="increaseWait(number)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      number: 1,
    };
  },
  computed: {
    ...mapState("countAbout", {
      sum: "sum",
      school: "school",
      subject: "subject",
    }), //es6语法引入时需用逗号标注当前语句的结束
    ...mapState('personAbout', { personList: 'personList' }), //es6语法引入时需用逗号标注当前语句的结束
    ...mapGetters('countAbout',{ bigSum: "bigSum" }),
  },
  methods: {
    ...mapMutations('countAbout',{ increase: "ADD", decrease: "REDUCE" }),
    ...mapActions('countAbout',{ increaseOdd: "addOdd", increaseWait: "addWait" }),
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>