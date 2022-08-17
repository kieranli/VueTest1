<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 15:04:27
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-17 17:02:26
 * @FilePath: \vue_test1\src\components\MyFooter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @click="handleAll"/>
    </label>
    <span> <span>已完成{{haveTodo}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  // props:['todos','haveTodo','checkAll'],
  props:['todos','checkAll'],
  // 计算属性实现已完成监控
  computed:{
    haveTodo(){
        let newTodos=this.todos.filter(todo => {
          return todo.done === true
        })
        console.log(newTodos)
        return newTodos.length
    }
  },
  methods:{
    handleAll(){
      // 通知App全选
      this.checkAll()
    }
  }
};
</script>

<style scoped>
/*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>