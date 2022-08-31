/*
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-28 17:39:40
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-31 22:33:54
 * @FilePath: \vue_test1\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
import countOptions from "./count";
import personOptions from "./person";
// 使用Vuex插件
Vue.use(Vuex);

// new一个Vuex并暴露
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});
