<template>
  <li>
    <label>
      <input 
        type="checkbox" 
        :checked="todo.done" 
        @change="handleCheck(todo.id)"
      />
      <!-- 该代码可直接完成功能，但违背了原则，因其修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
    export default {
        name: "MyItem",
        props:['todo','changeTodo','deleteTodo'],
        methods:{
          handleCheck(id){
            // console.log(id)
            // 通知App勾选
            this.changeTodo(id)
          },
          handleDelete(id){
            // console.log(id)
            // 通知App删除
            if(confirm('是否删除当前任务'))
            this.deleteTodo(id)
          }
        }
    };
</script>

<style lang="less" scoped>
/*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
    button{
      display: block;
    }
  }
</style>