<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 09:14:51
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-23 13:19:29
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" ref="mylist"></MyList>
        <!-- 监视属性完成已完成事务监控 -->
        <!-- <MyFooter :todos="todos" :doneAll="doneAllTodo" :checkAll="checkAll"></MyFooter> -->
        <MyFooter :todos="todos" ref="myfooter" v-show="todos.length"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  data() {
    return {
      //浏览器缓存中todos的值为子字符串，需要转为数组，初始化时，没有todos，会返回null值导致报错，所以需要加  || []
      todos: JSON.parse(localStorage.getItem('todos')) || [], 
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
    // 编辑todo
    editTodo(id,value){
      this.todos.forEach(todo => {
        if(todo.id === id)
        todo.title = value
      });
    },
    // 利用订阅消息删除todo，这里需要用_占位，因为第一个参数为消息名
    deleteTodo(_,id){
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
  watch:{
    // 监视属性实现监控已完成事件
    // todos:{
    //   deep:true,
    //   immediate:true,
    //   handler(){
    //     let newTodos=this.todos.filter(todo => {
    //       return todo.done === true
    //     })
    //     return this.doneAllTodo=newTodos.length
    //   }
    // }

    // 利用浏览器缓存存储数据
    todos:{
      deep:true,
      handler(){
        localStorage.setItem('todos',JSON.stringify(this.todos))
      }
    }
  },
  mounted(){
    // 挂载全局事件总线
    this.$bus.$on('changeTodo',this.changeTodo)
    this.$bus.$on('editTodo',this.editTodo)
    //订阅消息
    this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)

    this.$refs.myfooter.$on('checkAllTodo',this.checkAllTodo)
    this.$refs.myfooter.$on('clearDoneTodo',this.clearDoneTodo)
  },
  beforeDestroy(){
    // 取消挂载全局事件总线
    this.$bus.$off('changeTodo')
    this.$bus.$off('editTodo')
    //取消订阅消息
    pubsub.unsubscribe(this.pubId)
  }
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
.btn-edit {
  color: #fff;
  background-color: #02B883;
  border: 1px solid #02845E;
  margin-right:5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit:hover {
  color: #fff;
  background-color: #02845E;
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
