<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-19 09:22:09
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-21 19:46:23
 * @FilePath: \vue_test1\src\components\School.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="demo">
    <h4>学校名称:{{ name }}</h4>
    <h4>学校地址:{{ address }}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "文理学院",
      address: "重庆",
    }
  },
  mounted(){
    this.$bus.$on('StudentName',(data)=>{
      console.log('我收到了学生姓名:',data)
    })
  },
  beforeDestroy(){
    this.$bus.$off('StudentName')
  }
};
</script>

<style lang="less" scoped>
.demo {
  background-color: rgb(188, 236, 184);
  h4{
    color:red
  }
}
</style>