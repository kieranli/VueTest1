<!--
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-24 20:26:34
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-24 23:22:56
 * @FilePath: \vue_test1\src\components\Search.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;<button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前初始化页面
      this.$bus.$emit("getUsersData", {
        isFirst: false,
        isLogin: true,
        errMsg: "",
        users: [],
      });

      //`....${}`为es模板字符串语法
      axios.get(`https://api.github.com/search/users?q=${this.userName}`).then(
        (response) => {
          console.log("请求成功了!");
          this.$bus.$emit("getUsersData", {
            isLogin: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("请求失败！失败原因：", error);
          this.$bus.$emit("getUsersData", {
            isLogin: false,
            errMsg: error,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>