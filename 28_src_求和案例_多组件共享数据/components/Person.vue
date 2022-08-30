<!--
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-30 22:12:21
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-30 22:38:29
 * @FilePath: \vue_test1\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h4 style="color:red">Count组件的和为:{{count}}</h4>
    <input
      type="text"
      placeholder="请输入姓名"
      @keyup.enter="addPerson"
      v-model="name"
    />
    <ul>
      <li v-for="p in personList" :key="p.personId">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    count(){
      return this.$store.state.sum;
    }
  },
  methods: {
    addPerson() {
      const newPerson = { personId: nanoid(), name: this.name };
      this.$store.commit("ADDPERSON", newPerson);
      this.name = "";
    },
  },
};
</script>

<style>
</style>