<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 09:14:51
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-18 11:23:44
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" :changeTodo="changeTodo" :deleteTodo="deleteTodo"></MyList>
        <!-- 监视属性完成已完成事务监控 -->
        <!-- <MyFooter :todos="todos" :doneAll="doneAllTodo" :checkAll="checkAll"></MyFooter> -->
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearDoneTodo="clearDoneTodo" v-show="todos.length"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: "001", title: "抽烟", done: true },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "烫头", done: true },
      ],
      // doneAllTodo:0
    };
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  methods:{
    // 添加todo
    addTodo(value){
      this.todos.unshift(value)
    },
    // 修改todo
    changeTodo(id){
      this.todos.forEach(todo => {
        if(todo.id === id)
        todo.done=!todo.done
      });
    },
    // 删除todo
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    // 全选,遍历数组所有元素的done值，将其改成与全选框的布尔值一致
    checkAllTodo(done){
      this.todos.forEach(todo => {
        todo.done = done
      });
    },
    // 清除已完成任务
    clearDoneTodo(){
      this.todos=this.todos.filter((todo)=>{
        // return todo.done === false
        return !todo.done //简写，done的值为true时删除，即过滤时舍弃为true的值
      })
    }
  },
  // 监视属性实现监控已完成事件
  // watch:{
  //   todos:{
  //     deep:true,
  //     immediate:true,
  //     handler(){
  //       let newTodos=this.todos.filter(todo => {
  //         return todo.done === true
  //       })
  //       return this.doneAllTodo=newTodos.length
  //     }
  //   }
  // }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
