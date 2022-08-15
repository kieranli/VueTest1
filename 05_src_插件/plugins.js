export default {
    install(Vue,a,b,c){
        console.log(Vue,a,b,c)//这里的Vue不是Vm，是Vm的缔造者Vue
        // 定义一个全局混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:100
                }
            },
            methods:{
                showName(){
                    alert(this.name)
                }
            }
        })

        // 定义一个全局指令
        Vue.directive('fbind',{
            bind(element,binding){
                console.log(element,binding)
                element.value=binding.value
            },
            inserted(element,binding){
                element.focus()
            },
            update(element,binding){
                element.value=binding.value
            }

        })

        // 定义一个全局过滤器
        Vue.filter('MySlice',function(value){
                return value.slice(0,4)
            }
        )

        // 给Vue原型上加一个方法，（vm和组件实例对象都能使用了）
        Vue.prototype.hello=()=>{alert('你好啊')}
    }
}