/*
 * @Author: kieranli 1010950547qq.com
 * @Date: 2022-08-31 22:25:37
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-31 22:36:54
 * @FilePath: \vue_test1\src\store\count.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    namespaced: true,
    actions: {
      addOdd(context, value) {
        console.log("addOdd被调用了", context, value);
        if (context.state.sum % 2) context.commit("ADD", value);
      },
      addWait(context, value) {
        setTimeout(() => {
          context.commit("ADD", value);
        }, 1000);
      },
    },
    mutations: {
      ADD(state, value) {
        console.log("ADD被调用了", state, value);
        state.sum += value;
      },
      REDUCE(state, value) {
        console.log("ADD被调用了", state, value);
        state.sum -= value;
      },
    },
    state: {
      sum: 0,
      school: "重庆",
      subject: "前端",
    },
    getters: {
      bigSum(state) {
        return state.sum * 10;
      },
    },
  };