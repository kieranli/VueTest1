<template>
  <div class="student">
    <h3>{{msg}}</h3>
    <h4>学生姓名:{{ name }}</h4>
    <h4>学生年龄:{{ age }}</h4>
    <h4>学生性别:{{ sex }}</h4>
    <h4>学生年龄+1:{{ age+1 }}</h4>
    <h4>学生年龄+1:{{ Myage+1 }}</h4>
    <button @click="AddAge">点我增加年龄</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:'学生信息',
      Myage:this.age
    };
  },
  methods:{
    AddAge(){
      // 注意此种方式虽然可以操作改变age数据，但由于age是由外部传值，Vue是不允许修改的，这里控制台会报错
      // this.age++
      this.Myage++
    }
  },
  // 简单接收，不限制类型等
  // props:['name','age','sex']

  // 限制数据类型
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }

  // 限制：数据类型、是否必须、默认值
  props:{
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      default:99
    },
    sex:{
      type:String,
      required:true
    }
  }
};
</script>

<style>
.student {
  background-color: rgb(127, 250, 223);
}
</style>