<template>
  <div class="demo">
    <h4>学生姓名:{{ name }}</h4>
    <h4>学生年龄:{{ age }}</h4>
    <button @click="add">点我age++</button>
    <button @click="sendName">自定义事件给父组件传值</button>
    <button @click="demotest">demotest</button>
    <button @click="unbind">解绑一个自定义事件</button>
    <button @click="unbinds">解绑多个自定义事件</button>
    <button @click="unbindAll">解绑所有自定义事件</button>
    <button @click="death">点我销毁组件实例对象</button>
    <button @click="clickTest">不加native的原生事件被当作自定义事件</button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name:'法外狂徒张三',
      age:18
    };
  },
  methods:{
    add(){
      console.log('add被调用了')
      this.age++
    },
    sendName(){
      // v-on绑定自定义事件的调用
      this.$emit('sendStudentName',this.name,600,800,900)
    },
    demotest(){
      this.$emit('demo')
    },
    unbind(){
      this.$off('sendStudentName')//解绑一个自定义事件
    },
    unbinds(){
      this.$off(['sendStudentName','demo'])//解绑多个自定义事件
    },
    unbindAll(){
      this.$off()//解绑所有自定义事件
    },
    death(){
      this.$destroy()//销毁了当前Student组件实例,销毁后所有绑定在Student下的自定义事件全部失效
    },
    clickTest(){
      this.$emit('click')
    }
  }
};
</script>

<style scoped>
/* 不用scoped样式名一样就冲突了 */
.demo {
  background-color: rgb(179, 230, 219);
}
</style>