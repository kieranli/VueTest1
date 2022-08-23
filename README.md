<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 09:14:51
 * @LastEditors: kieranli 1010950547qq.com
 * @LastEditTime: 2022-08-23 21:57:05
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

## 解决跨域问题