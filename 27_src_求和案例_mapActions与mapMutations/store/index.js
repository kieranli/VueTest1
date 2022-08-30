/*
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-28 17:39:40
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-28 20:06:48
 * @FilePath: \vue_test1\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);

// 定义一个actions,用于响应组件中的动作
const actions = {
  // add(context,value){
  //     console.log('add被调用了',context,value)
  //     context.commit('ADD',value)
  // },
  // reduce(context,value){
  //     console.log('reduce被调用了',context,value)
  //     context.commit('REDUCE',value)
  // },
  addOdd(context, value) {
    console.log("addOdd被调用了", context, value);
    if (context.state.sum % 2) context.commit("ADD", value);
  },
  addWait(context,value){
    setTimeout(()=>{
        context.commit('ADD',value)
    },1000)
  }
};

// 定义一个mutations，用于操作数据(state)
const mutations = {
  ADD(state, value) {
    console.log("ADD被调用了", state, value);
    state.sum += value;
  },
  REDUCE(state, value) {
    console.log("ADD被调用了", state, value);
    state.sum -= value;
  },
};

// 定义一个state,用于存储数据
const state = {
  sum: 0,
  school:'重庆',
  subject:'前端'
};

// 定义一个getters，用于对state中数据的加工，便于复用
const getters = {
  bigSum(state){
    return state.sum*10
  }
}
// new一个Vuex并暴露
export default new Vuex.Store({
  actions: actions,
  mutations,
  state,
  getters
});
