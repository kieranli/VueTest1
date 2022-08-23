<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 15:04:27
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-19 16:45:34
 * @FilePath: \vue_test1\src\components\MyFooter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- v-model实现 -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span> <span>已完成{{doneAll}}</span> / 全部{{total}} </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "MyFooter",
  props:['todos'],
  computed:{
    // 全部
    total(){
      return this.todos.length
    },
    // 计算属性实现 已完成
    doneAll(){
        // filter完成
        // let newTodos=this.todos.filter(todo => {
        //   return todo.done === true
        // })
        // console.log(newTodos)
        // return newTodos.length

        // reduce完成
        // return this.todos.reduce((pre,todo)=>{
        //   console.log('@',pre,todo)
        //   return pre + (todo.done ? 1:0)
        // },0)

        // reduce完成，简写
        return this.todos.reduce((pre,todo)=>pre + (todo.done ? 1:0),0)
    },
    // 判断全选框是否需要勾选
    isAll:{
      // console.log(this.total === this.doneAll)
      get(){
        return this.total === this.doneAll && this.total>0
      },
      set(value){
        // 调用自定义事件同步选择结果
        this.$emit('checkAllTodo',value)
      }
    }
  },
  methods:{
    // 全选或全不选
    // checkAll(e){
    //   console.log(e.target.checked) //根据event获取标签的checked属性
    //   // 通知App全选或全不选
    //   this.checkAllTodo(e.target.checked)
    // }
    clearDone(){
      // 调用自定义事件清除
      this.$emit('clearDoneTodo')
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