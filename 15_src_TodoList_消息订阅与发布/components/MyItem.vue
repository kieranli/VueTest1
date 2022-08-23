<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-19 16:13:47
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-23 10:51:27
 * @FilePath: \vue_test1\src\components\MyItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
    import pubsub from "pubsub-js";
    export default {
        name: "MyItem",
        props:['todo'],
        methods:{
          handleCheck(id){
            // console.log(id)

            // 调用自定义事件,传值给父组件
            this.$bus.$emit('changeTodo',id)
          },
          handleDelete(id){
            // console.log(id)

            // 调用自定义事件,传值给父组件
            if(confirm('是否删除当前任务')) 
            pubsub.publish('deleteTodo',id)
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