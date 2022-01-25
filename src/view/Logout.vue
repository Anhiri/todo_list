<template>
<div>
        <Loading/>
        <h1>Login page</h1>
        <!-- <v-alert color="error"
            :value="error"
            icon="close">
            The username or the password are incorrect
        </v-alert> -->
        <div id="logout" class="register">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" @keyup.enter="login" placeholder="Enter Password">
            <button @click="login" class="btn btn-primary">Login</button>
        </div>
        <p>
            <router-link to="/signup">Sign Up</router-link>
        </p>
</div>
    
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Loading from '../components/Loading.vue'
export default {
    name:'Login',
    data() { 
      return{
          email:'',
          password:'',
          error:false,
      }
    },
    components:{
        Loading,
    },
    computed:{
        ...mapState(['isLoggedIn'])
    },
     methods:{
        ...mapActions(["logIn"]),
        login() {
            this.$store.dispatch("logIn", {
                email: this.email,
                password: this.password,
            })
            // console.log('Login', this.email, this.password)
            // this.isLoggedIn = true;
                this.$router.push('/')

        }
    }
}
</script>

<style>
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
    width: 100%;
}
</style>