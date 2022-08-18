<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 15:04:27
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-17 13:40:40
 * @FilePath: \vue_test1\src\components\MyList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ul class="todo-main">
    <MyItem 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo="todoObj" 
    :changeTodo="changeTodo"
    :deleteTodo="deleteTodo"
    ></MyItem>
  </ul>
</template>

<script>
    import MyItem from "./MyItem"
    export default {
        name: "MyList",
        components:{
            MyItem
        },
        props:['todos','changeTodo','deleteTodo']
        
    };
</script>

<style scoped>
/*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>