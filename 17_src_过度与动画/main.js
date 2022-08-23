/*
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-23 14:30:16
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-23 14:47:01
 * @FilePath: \vue_test1\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';

import App from './App';
Vue.config.productionTip=false
new Vue({
    render:h=>h(App)
}).$mount('#app')