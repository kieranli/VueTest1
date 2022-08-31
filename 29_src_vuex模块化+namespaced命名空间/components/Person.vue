<!--
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-30 22:12:21
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-31 22:22:35
 * @FilePath: \vue_test1\src\components\Person.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h4 style="color:red">Count组件的和为:{{count}}</h4>
    <h4>当前列表第一个人的姓名是：{{firstName}}</h4>
    <input
      type="text"
      placeholder="请输入姓名"
      @keyup.enter="addPerson"
      v-model="name"
    />
    <button @click="addWang">只能添加姓王的人</button>
    <button @click="addPersonServer">请求服务器随机添加一个人</button>
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
      return this.$store.state.personAbout.personList;
    },
    count(){
      return this.$store.state.countAbout.sum;
    },
    firstName(){
      return this.$store.getters['personAbout/firstName'];
    }
  },
  methods: {
    addPerson() {
      const newPerson = { personId: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADDPERSON", newPerson);
      this.name = "";
    },
    addWang(){
      const newPerson = { personId: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addWang", newPerson);
      this.name = "";
    },
    addPersonServer(){
      this.$store.dispatch("personAbout/addPersonServer")
    }
  },
};
</script>

<style>
</style>