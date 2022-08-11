<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    //引入组件,后缀可有可无
    import School from './components/School'
    import Student from './components/Student'
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>