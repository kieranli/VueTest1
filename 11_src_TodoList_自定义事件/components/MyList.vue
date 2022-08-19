<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 15:04:27
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-19 16:48:52
 * @FilePath: \vue_test1\src\components\MyList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ul class="todo-main">
    <MyItem 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo="todoObj" 
    @changeTodo="handleChangeTodo"
    @deleteTodo="handleDeleteTodo"
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
        props:['todos'],
        methods:{
          // 当子组件调用mylist给他绑定的changeTodo事件时,mylist调用app给自己绑定的changeTodo
          handleChangeTodo(id){
            this.$emit('changeTodo',id)
          },
          // 当子组件调用mylist给他绑定的deleteTodo事件时,mylist调用app给自己绑定的deleteTodo
          handleDeleteTodo(id){
            this.$emit('deleteTodo',id)
          }
        },

        // 这里有v-for循环不能使用ref方式添加
        // mounted(){
        //   this.refs.myitem.$on('changeTodo1',this.handleChangeTodo)
        //   this.refs.myitem.$on('deleteTodo1',this.handleDeleteTodo)
        // }
        
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