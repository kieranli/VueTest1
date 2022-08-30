<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-25 11:22:44
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-25 16:41:00
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Count></Count>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
};
</script>