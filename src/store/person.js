import axios from "axios";
import { nanoid } from "nanoid";
export default {
    namespaced: true,
    actions: {
      addWang(context, value) {
        if (value.name.indexOf("王") === 0) {
          context.commit("ADDPERSON", value);
        } else {
          alert('只能添加姓王的人员！')
        }
      },
      addPersonServer(context){
        axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
          response => {
            context.commit('ADDPERSON',{personId:nanoid(),name:response.data})
          },
          error => {
            alert(error.message)
          }
        )
    }
    },
    mutations: {
      ADDPERSON(state, value) {
        console.log("ADDPERSON被调用了", state, value);
        state.personList.unshift(value);
      },
    },
    state: {
      personList: [{ personId: "001", name: "张三" }],
    },
    getters: {
      firstName(state) {
        return state.personList[0].name;
      },
    },
  };