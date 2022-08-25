<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-25 11:22:44
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-25 14:10:31
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="entirety">
    <Category title="美食" :ListData="foods">
      <img
        src="https://img1.baidu.com/it/u=1294439722,116143144&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        alt=""
      />
    </Category>
    <Category title="游戏" :ListData="games">
      <ul>
        <li v-for="(list, index) in games" :key="index">{{ list }}</li>
      </ul>
    </Category>
    <Category title="电影" :ListData="films">
    <!-- controls才能使视频播放 -->
      <video controls src="https://tb-video.bdstatic.com/tieba-smallvideo-transcode-crf/28054427_830291d9c3532e30740004c1aa2c3d4a_0.mp4?vt=1&pt=3&ver=&cr=2&cd=0&sid=&ft=8&tbau=2022-08-26_4201a192eaaede59a98cfdbc5e5a7b0357d0efa0e3e58af453ac4fb8bd1c343d&ptid="></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  data() {
    return {
      foods: ["火锅", "海鲜", "螺狮粉", "麻辣烫"],
      games: ["穿越火线", "英雄联盟", "红色警戒", "魔兽争霸"],
      films: ["《阿凡达》", "《目的地》", "《扫黄风暴》", "《寒战》"],
    };
  },
  components: { Category },
};
</script>

<style>
.entirety {
  display: flex;
  justify-content: space-around;
}
</style>