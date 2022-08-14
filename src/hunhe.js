export const hunhetest={
    data(){
        return{
            age:100
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    },
    mounted(){
            console.log('混入测试')
    }
}