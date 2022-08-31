<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 09:14:51
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-31 22:50:57
 * @FilePath: \vue_test1\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 笔记
## npm指令
    1、启动项目npm run serve
    2、安装less插件npm i less-loader@7(@符号+版本可安装选择版本，不写默认安装最新，若版本冲突则)
    3、查看webpack/less-loader等版本号 npm view webpack versions
    4、查看安装的指定插件版本号npm list less-loader(less-loader为指定插件名)
    5、若想卸载插件更新版本npm uninstall less-loader
    6、安装nanoid(小型uuid)npm i nanoid
    7、项目文件夹下npm list vue查看vue版本
    8、npm run build项目打包
    9、npm config set registry https://registry.npm.taobao.org设置npm镜像为淘宝镜像
    10、npm install -g cnpm --registry=https://registry.npm.taobao.org通过npm安装使用cnpm为淘宝镜像
    11、npm config get registry查看npm镜像配置，cnpm同理
    12、安装第三方动画库如：npm install animate.css --save
    13、安装axios：npm i axios
    14、安装express:npm install express --save-dev
    15、安装vue-resource插件库npm i vue-resource
    15、安装vuex:npm i vuex
        注意：现在安装vue时npm i vue默认安装的都是vue3,默认安装vuex变成了vuex4版本，而vue3只能用vuex4,vue2只能用vuex3所以安装vuex时需要加上@对应版本号
## git
    1.push：
        1).git status   查看仓库状态
        2).git add .    所有改动内容存到暂存区
        3).git commit -m "注释" 将暂存区内容提交到本地仓库（带版本号）
        4).git push origin master   上传本地当前分支代码到远程仓库master分支
    2.pull:
        若本地有改动，需要保留；
            1).git stash/git stash save "注释"    将未提交的修改(工作区和暂存区)保存至堆栈，用于后续恢复当前工作目录
            2).git stash list 查看当前stash中内容
            3).git stash pop    将当前stash应用到当前分支工作目录并删除最近的stash
            4).git stash apply/git stash apply stash@{1}    将当前stash/对应stash(stash@{1}为stash名)应用到当前分支工作目录，不删除stash
            5).git stash drop stash@{1} 删除对应stash
        若本地有改动，需要废弃：
            1).git add 前，可以使用如下方法：
                git checkout -- rainbow.txt start.txt   指定文件
                git checkout -- *   所有文件
                git checkout -- *.txt   指定后缀
            2).git add 后git commit 前，可以使用如下方法将修改<从暂存区拿回工作区>后，再使用第一种方法：
                git reset HEAD rainbow.txt start.txt 指定文件
                git reset HEAD *   所有文件
                git reset HEAD *.txt   指定后缀
            3).git commit后，此时只能选择回退版本：详情看git版本回退
        远程分支pull到本地：
            1).git pull origin master
    3.git版本回退
        1).git log查看版本及版本号，英文状态按q退出查看
        2).git reset --hard HEAD^   回退到上一个版本
        3).git reset --hard commit_id(版本号)   回退指定版本

        
## package.json配置
    1.关闭变量声明未使用的报错：
        将"extends"中的"eslint:recommended"去掉

## vue.config.json配置
    1.关闭语法检测：
        lintOnSave:false


## ref属性
    1、被用来给元素或子组件注册引用信息（id的替代者）
    2、应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象
    3、使用方式：
        打标识：<h1 ref="XXX"></h1> 或 <School ref="XXX"></School>
        获取：this.$refs.XXX

## 配置项props
    功能：让组件接收外部传过来的数据
        (1)、传递数据：
            <Demo name="xxx"/>
        (2)、接收数据：
            第一种方式(只接收)：
                props:['name']
            第二种方式(限制类型):
                props:{
                    name:String
                }
            第三种方式(限制类型、限制必要性、制定默认值)：
                props:{
                    name:{
                        type:String,
                        required:true,
                        default:99
                    }
                }
    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    若业务需求确实需要修改，那么请复制props的内容到data种一份，然后去修改data中的数据。

## 配置项mixins(混入/混合)

    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
            {
                data(){...},
                methods:{
                    ...
                },
                ...
            }
        第二步使用混入，例如：
            (1)、全局混入：Vue.mixix(xxx)  //此方法所有组件以及Vm都会混入
            (2)、局部混入：mixins:['xxx']
    注意：
        在混入的配置中，data数据中，原来就有的以原来的为主，而像函数之类的则是都会运行

## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据。
    定义插件：
        对象.install=function(Vue,options){
            //1.添加全局过滤器
            Vue.filter('',function(){})
            //2.添加全局指令
            Vue.directive('',{
                bind(){},inserted(){},update(){}
                }
            )
            //3.配置全局混入
            Vue.minin({...})
            //4.添加实例方法
            Vue.prototype.$myMethod=function(){}
            Vue.prototype.$myProperty=xxxx
        }
    引入插件：对应export方式引入
    使用插件：Vue.use()
    
## scoped样式
    作用：让样式在局部生效，防止冲突。
    写法：<style scoped>

## TodoList案例总结
    组件化编码流程：
        (1)、拆分静态组件：组件按照功能点拆分，命名不要与html元素一致
        (2)、实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一群组件在用：
            1)一个组件在：放在组件内部即可
            2)一群组件在用：放在他们共同的父母件上（状态提升）
        (3)、实现交互：从绑定事件开始
    props适用于：
        (1)、父组件==>子组件 通信
        (2)、子组件==>父组件 通信 （要求父亲先给与一个函数）
    使用v-model时切记：
        v-model绑定的值不能是props传过来的值，因为props是不可以修改的
        props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做

## webStorage
    1、存储内容大小一般支持5MB左右（不同浏览器不同）
    2、浏览器端通过Window.localStorage和Window.sessionStorage属性来实现本地存储机制
    3、相关API:
        1.xxxxxStorage.setItem('key','value');
            该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
        2.xxxxxStorage.getItem('key');
            该方法接受一个键名作为参数，返回键名对应的值。
        3.xxxxxStorage.removeItem('key');
            该方法接受一个键名作为参数，并把该键名从存储中删除。
        3.xxxxxStorage.clear();
            该方法会清空存储中的所有数据。
    4、备注：
        1.sessionStorage存储的内容会随着浏览器窗口关闭而消失。
        2.localStorage存储的内容，需要手动清除才会消失。（利用API或者清除浏览器缓存）
        3.xxxxStorage.getItem(xxx),如果xxx对应的value获取不到，那么getItem的返回值是null,而不是undefind
        4.JSON.parse(null)的结果依然是null

## 组件自定义事件
    1.一种组件间通信的方式。适用于：子组件=>父组件
    2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）。
    3.绑定自定义事件：
        1).第一种方式，在父组件中：
            <demo @zidingyi="test"/> 或 <demo v-on:zidingyi="test"/>
        2).第二种方式，在父组件中：
            <demo ref="demo"/>
            ......
            methods:{
                test(){}
            },
            mounted(){
                this.$refs.xxx.$on('zidingyi',this.test)
            }
        3).若想让自定义事件智能触发一次，可以使用once修饰符，或$once方法
    4.触发自定义事件：this.$emit('zidingyi',params)
    5.解绑自定义事件：
        1).单个解绑：this.$off('xxx')
        2).多个解绑：this.$off(['xxx','yyy'])
        3).全部解绑：this.$off()
    6.组件上也可以绑定原生DOM事件，需要使用native修饰符。
    7.注意：
        通过this.$refs.xxx.$on('zidingyi',回调)绑定自定义事件时，回调要么配置在methods中，要么写成箭头函数，否则this指向为绑定ref的子组件实例对象

## 全局事件总线（GlobalEventBus）
    1.一种组件间通信的方式，适用于任意组件间通信。
    2.安装全局事件总线：
        new Vue({
            ...
            beforeCreate(){
                Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vue
            },
            ...
        })
    3.使用事件总线：
        1).接收数据：A组件想接收数据，则在A组件中给$bus绑定事件，事件的回调留在A组件中。
            methods:{
                demo(data){
                    ....
                }
            },
            mounted(){
                this.$bus.$on('xxxx',this.demo) //或者将回调写在这里，但要写成箭头函数
            }
        2.提供数据：this.$bus.$emit('xxxx',data)
    4.最好在beforeDestroy钩子中，用$off去解绑<当前组件所用到的>事件，以免在组件销毁后事件仍然存留在$bus上占用内存

## 消息订阅与发布（pubsub）
    1.一种组件间通信的方式，适用于任意组件间通信。
    2.安装第三方库npm i pubsub-js
    3.订阅方与发布方需要引入import pubsub from "pubsub-js"
    4.接收数据：A组件想要接收数据，则在A组件中订阅消息，订阅的回调函数留在A组件自身。
        methods:{
            demo(){
                ...
            }
        },
        mounted(){
            this.pubId = pubsub.subscribe("XXX",this.demo)
        }

        或者将回调直接写在这里，但注意要写成箭头函数

        mounted(){
            this.pubId = pubsub.subscribe("xxx",(msgName,data)=>{})
        }

    5.提供数据：pubsub.publish("xxx",data)
    6.注意这里的回调函数中多一个参数，第一个为消息名，第二个开始才是数据
    7.最好在beforeDestroy钩子中用pubsub.unsubscribe(this.pubId)取消订阅

## nextTick
    1.语法：this.$nextTick(回调函数)
    2.作用：在下一次DOM更新结束后执行其指定的回调函数。
    3.什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## Vue封装的过度与动画
    1.作用:在插入、更新或移除DOM元素时,在合适的时候给元素添加样式类名
    2.图示:
                        Enter                                               Leave
        Opacity:0------------------>Opacity:1               Opacity:1----------------->Opacity:0 
       
        v-enter                    v-enter-to               v-leave                    v-leave-to
   
        ------------v-enter-active-----------               ------------v-leave-active-----------
    3.写法:
        1).准备好样式:
            元素进入的样式:
                1.v-enter:进入的起点
                2.v-enter-active:进入过程中
                3.v-enter-to:进入的终点
            元素离开的样式:
                1.v-leave:离开的起点
                2.v-leave-active:离开的过程中
                3.v-leave-to:离开的终点
        2).使用<transition>包裹要过度的元素,并配置name属性:
            <transition name="hello">
                <h1 v-show="isShow">你在做咩~</h1>
            </transition>
        3).备注:若有多个元素需要过度,则需要使用<transition-group>,且每个元素都要指定key值

## Vue脚手架配置代理
    方法一：
        在vue.config.js中配置如下：
            devServer:{
                proxy:"http://localhost:5000"//请求的服务器地址
            }
        说明：
            1.优点：配置简单，请求资源时，直接发给前端(8080)即可
            2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
            3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（有限匹配前端资源）
    方法二：
        在vue.config.js中配置如下：
        devServer: {
            proxy: {
                '/kieran1': {
                    target: 'http://localhost:5000',//不重写则请求服务器收到的路径也会带有前缀
                    pathRewrite:{'^/kieran1':''}, //路径重写，正则匹配将/kieran字符串换位空字符串
                    ws: true,//用于支持websocket
                    changeOrigin: true //用于控制请求头中的host值，为true时与被请求服务器端口一致，为false则如实表明自己的端口号,vue中默认为值true,react默认false
                },
                '/kieran2': {
                    target: 'http://localhost:5001',
                    pathRewrite:{'^/kieran2':''},
                    ws: true,
                    changeOrigin: true
                }
            }
        }
        说明：
            1.优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
            2.缺点：配置略微繁琐，请求资源时必须加前缀。

## 搭建vuex环境
    1.创建文件：src/store/index.js
        index.js:
            <!-- 引入Vue核心库 -->
            import Vue from 'vue'
            <!-- 引入Vuex -->
            import Vuex from 'vuex'
            <!-- 应用Vuex插件 -->
            Vue.use(Vuex)

            <!-- 准备actions,用于响应组件中用户的动作 -->
            const actions = {}
            <!-- 准备mutations,用于处理state中的数据 -->
            const mutations = {}
            <!-- 准备state对象，保存具体的数据 -->
            const state = {}

            <!-- 创建并暴露store -->
            export default new Vuex.Store({
                actions,
                mutations,
                state
            })
    2.在main.js中创建vm时传入store配置项
        ......
        <!-- 引入store -->
        import store from './store'
        ......

        <!-- 创建vm -->
        new Vue=({
            ...
            store,
            ...
        })

## Vuex的基本使用
    1.初始化数据、配置actions、配置mutaions，操作文件store.js
    <!-- 引入Vue核心库 -->
    import Vue from 'vue'
    <!-- 引入Vuex -->
    import Vuex from 'vuex'
    <!-- 引用Vuex -->
    Vue.use(Vuex)

    const actions = {
        add(context,value){
            context.commit('ADD',value)
        }
    },
    const mutations = {
        ADD(state,value){
            state.sum += value
        }
    },

    <!-- 初始化数据 -->
    const state = {
        sum:0
    }

    <!-- 创建并暴露store -->
    export default new Vuex.Store({
        acitons,
        mutations,
        state
    })

    2.组件中读取vuex中的数据：模板中：$store.state.sum 非模板中：this.$store.state.sum
    3.组件中修改vuex中的数据：$store.dispatch('actions中的方法名',value)或$store.commit('mutations中的方法名',数据)
    备注：若没有网络请求或其他复杂业务逻辑，组件中也可以越过actions,即不写dispatch,直接编写commit

## VueX中的getters配置项
    1.概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。
    2.在store.js中追加getters配置
    ......
    const getters = {
        bigSum(state){
            return state.sum*10
        }
    }

    <!-- 创建并暴露store -->
    export default new Vuex.Store({
        ......
        getters
    })
    3.组件中读取数据：$store.getters.bigSum

## 四个map方法的使用
    1.mapState方法：用于帮助我们映射state中的数据为计算属性
        computed:{
            <!-- 借助mapState生成，对象写法 -->
            ...mapState({sum:'sum',school:'school',subject:'subject'})
            <!-- 借助mapState生成计算属性，数组写法，两边名需要一致 -->
            ...mapState(['sum','school','subject'])
        }
    2.mapGetters方法：用于帮助我们映射getters中的数据为计算属性
        computed:{
            <!-- 借助mapGetters生成，对象写法 -->
            ...mapGetters({bigSum:'bigSum'})
            <!-- 借助mapGetters生成计算属性,数组写法，两边名需要一致-->
            ...mapGetters(['bigSum'])
        }
    3.mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数
        methods:{
            <!-- 靠mapActions生成,对象写法 -->
            ...mapActions({increaseOdd:"addOdd",increaseWait:"addWait"}),
            <!-- 靠mapActions生成,数组写法 -->
            ...mapActions(["addOdd","addWait"]),
        }
    4.mapMutations方法：用户帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数
        methods:{
            <!-- 靠mapMutations生成,对象写法 -->
            ...mapMutations({ increase: "ADD", decrease: "REDUCE" }),
            <!-- 靠mapMutations生成,数组写法 -->
            ...mapMutations(["ADD","REDUCE"]),
        }

    备注：mapActions与mapMutations使用时，若需要传递参数，需要在模板中绑定事件时传递参数，否则参数是事件对象。

## Vuex模块化及namespace命名空间
    1.目的：让代码更好维护，让多种数据分类更加明确。
    2.修改store.js
        const countAbout = {
            namespaced:true,//开启命名空间
            state:{...},
            actions:{...},
            mutations:{...},
            getters:{...},
        }

        const personAbout = {
            namespaced:true,//开启命名空间
            state:{...},
            actions:{...},
            mutations:{...},
            getters:{...},
        }

        export default new Vuex.Store({
            modules:{
                countAbout,
                personAbout
            }
        })

    3.开启命名空间后，组件中读取state数据：
        <!-- 方式一，自己直接读取 -->
        this.$store.state.personAbout.xxx
        <!-- 方式二，借助mapState读取 -->
        ...mapState('personAbout',{xxx:'xxx'})
        或
        ...mapState('personAbout',['xxx'])
    4.开启命名空间后，组件中读取getters数据：
        <!-- 方式一，自己直接读取 -->
        this.$store.state.getters['personAbout/xxx']
        <!-- 方式二，借助mapGetters读取 -->
        ...mapGetters('personAbout',{xxx:'xxx'})
        或
        ...mapGetters('personAbout',['xxx'])
    5.开启命名空间后，组件中调用dispatch：
        <!-- 方式一，自己直接调用 -->
        this.$store.dispatch('personAbout/xxx',value))
        <!-- 方式二，借助mapActions调用 -->
        ...mapActions('personAbout',{xxx:'xxx'})
        或
        ...mapActions('personAbout',['xxx'])
    6.开启命名空间后，组件中调用commit：
        <!-- 方式一，自己直接调用 -->
        this.$store.commit('personAbout/xxx',value))
        <!-- 方式二，借助mapMutations调用 -->
        ...mapMutations('personAbout',{xxx:'xxx'})
        或
        ...mapMutations('personAbout',['xxx'])