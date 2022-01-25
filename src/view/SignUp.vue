<template>
  <div>
    <Loading/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" @keyup.enter="signUp" v-model="password" placeholder="Enter Password">
        <button @click.prevent="signUp" class="btn btn-primary">Sign Up</button>
    </div>
    <p>
        <router-link to="/logout">Login</router-link>
    </p>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import {v4} from 'uuid'
import { mapActions } from 'vuex'
export default {
    name:'SignUp',
    components:{
        Loading,
    },
    methods:{
        ...mapActions(['getUsers', 'addUser']),

        signUp(){    
            this.addUser({
            id:v4(),
            name: this.name,
            email: this.email,
            password: this.password
            })
            this.getUsers();
            console.log(this.name, this.email, this.password)      
            this.$router.push("/logout");     
        },
    },
}
</script>

<style scoped>
.register{
    margin: 0 15%;
}
.register input {
    margin: 10px 0;
    width: 100%;
    border-radius: 15px;
    font-size: 18px;
    /* margin-left: 10px; */
    padding: 10px;
    outline: none;
    border: 2px solid #b29bd8;
    display: flex;
    /* flex: 1; */
}
.btn{
    border-radius: 10px;
    font-size: 18px;
    width: auto;
}
</style>