<template>
  <!-- 组件的结构 -->
  <div>
    <div>
      <h4>学生姓名：{{name}}</h4>
      <h4>年龄：{{age}}</h4>
    </div>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
  name: "Student",
  data() {
    return {
      name: "张三",
      age: "18",
    };
  }
};
// export default school;
</script>