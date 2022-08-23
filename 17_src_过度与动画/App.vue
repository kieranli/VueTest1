<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-23 14:30:00
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-23 16:17:31
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="root">
    <DongHua></DongHua>
    <GuoDu></GuoDu>
    <Others></Others>
  </div>
</template>

<script>
import DongHua from './components/DongHua'
import GuoDu from './components/GuoDu'
import Others from './components/Others'
export default {
    name:'App',
    components:{
        DongHua,GuoDu,Others
    }
}
</script>

<style>
</style>