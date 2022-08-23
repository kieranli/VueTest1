<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-19 16:13:47
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-19 16:20:28
 * @FilePath: \vue_test1\src\components\MyHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
// 引入nanoid
import {nanoid} from 'nanoid'
export default {
  name: "MyHeader",
  data(){
    return{
      title:''
    }
  },
  // props:['addTodo'],
  methods:{
    //事件获取value值
    // add(event){
    //   console.log(event.target.value) 
    // }

    // v-model绑定获取,包装一个todoObj传给App
    add(){
      // 数据校验，trim()为去掉首尾空格,若为空则returns
      if(!this.title.trim()) return
      // 包装一个todoObj
      const todoObj={id:nanoid(),title:this.title.trim(),done:false}

      // 通知App组件调用addTodo添加todoObj
      // this.addTodo(todoObj)

      // 调用自定义事件传值
      this.$emit('addTodo',todoObj)
      
      //清空输入框
      this.title=''
    }
  }
};
</script>

<style scoped>
/*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>