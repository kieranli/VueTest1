<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-25 11:22:44
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-25 14:48:33
 * @FilePath: \vue_test1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="entirety">
    <Category title="美食" :ListData="foods">
      <img
        slot="center"
        src="https://img1.baidu.com/it/u=1294439722,116143144&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        alt=""
      />
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏" :ListData="games">
      <ul slot="center">
        <li v-for="(list, index) in games" :key="index">{{ list }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" :ListData="films">
      <!-- controls才能使视频播放 -->
      <video
        slot="center"
        controls
        src="https://tb-video.bdstatic.com/tieba-smallvideo-transcode-crf/28054427_830291d9c3532e30740004c1aa2c3d4a_0.mp4?vt=1&pt=3&ver=&cr=2&cd=0&sid=&ft=8&tbau=2022-08-26_4201a192eaaede59a98cfdbc5e5a7b0357d0efa0e3e58af453ac4fb8bd1c343d&ptid="
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎来观影</h4>
      </template>
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
a {
  display: flex;
  justify-content: center;
}
.entirety,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>