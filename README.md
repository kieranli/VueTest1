<!--
 * @Author: kieranli 1010950547@qq.com
 * @Date: 2022-08-15 09:14:51
 * @LastEditors: kieranli 1010950547@qq.com
 * @LastEditTime: 2022-08-17 14:32:11
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
10、npm config get registry查看npm镜像配置，cnpm同理



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