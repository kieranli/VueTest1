<!--
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-24 20:26:44
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-24 23:20:29
 * @FilePath: \vue_test1\src\components\List.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 请求成功 -->
    <div class="row" v-show="info.users.length">
      <div class="card" v-for="user in info.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <!-- 打开页面时 -->
    <h2 v-show="info.isFirst">欢迎使用！</h2>
    <h2 v-show="info.isLogin">加载中......</h2>
    <h2 v-show="info.errMsg.length">{{info.errMsg}}</h2>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLogin: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("getUsersData", (dataObj) => {
      this.info = {...this.info,...dataObj} //es6语法，合并数组，两个或多个数组对比，相同的以后面的数据为主，没有的保留
    });
  },
};
</script>
<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>