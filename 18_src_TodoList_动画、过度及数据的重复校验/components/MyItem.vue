<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-19 16:13:47
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-23 20:47:03
 * @FilePath: \vue_test1\src\components\MyItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__fadeIn"
    leave-active-class="animate__fadeOutLeft"
    >
    <li key="todo.id">
    <label>
      <input 
        type="checkbox" 
        :checked="todo.done" 
        @change="handleCheck(todo.id)"
      />
      <!-- 该代码可直接完成功能，但违背了原则，因其修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text" 
        :value="todo.title" 
        v-show="todo.isEdit"
        @blur="handleBlur($event,todo)"
        ref="inputTitle"
        ></input>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <!-- blur为失去焦点时 -->
    <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
  </li>
  </transition> 
</template>

<script>
    import 'animate.css';
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
          },
          handleEdit(todo){
            // hasOwnProperty作用为在一个对象中找是否有某个属性或对象
            // 没有当前属性时才给添加
            if(todo.hasOwnProperty('isEdit')){
              // vue给对象添加数据不能直接赋值，需用$set，否则添加的不是响应式数据，改变不会引起模板的重新解析
              // todo.isEdit = false   //错误方式
              todo.isEdit = true
            }else{
              this.$set(todo,'isEdit',true)
            }
            // 由于vue会在这段代码整体跑完之后再解析模板，所以这么写，当运行foucs时，input框还并未出现在再页面中，则失效
            // this.$refs.inputTitle.focus()
            // 可行方式，但不推荐。定时器不写事件，异步立即执行
            // setTimeout(()=>{
            //   this.$refs.inputTitle.focus()
            // })
            // 标准写法
            this.$nextTick(function(){
              this.$refs.inputTitle.focus()
            })
          },
          handleBlur(e,todo){
            todo.isEdit = false
            if(!e.target.value.trim())
            return alert("输入不能为空值!")

            this.$bus.$emit('editTodo',todo.id,e.target.value)         
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