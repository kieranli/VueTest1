<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 09:14:51
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-24 21:58:25
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="root">
      <div class="container">
        <Search></Search>
        <List></List>
      </div>
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
export default {
  name: "App",
  components:{
    Search,List
  }
};
</script>
<style>
</style>