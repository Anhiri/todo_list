<template>
  <div class="menu">
      
      <ul class="nav-link">
        <div class="logo">
          <p class="logo-text">study</p>
        </div>
        <li><router-link to="/">
          <fa icon ="home"/>
        Home</router-link></li>
        <li><router-link to="/stats">
          <fa icon ="signal"/>
        Stats</router-link></li>
        <li><router-link to="/projects">
          <fa icon ="tasks"/>
        Projects</router-link></li>
        <li><router-link to="/addtask/0">
          <fa icon ="plus-circle"/>
        Add Task</router-link></li>
        <li><router-link to="/calendar">
          <fa icon ="calendar-check"/>
        Calendar</router-link></li>
        <li><router-link to="/setting">
          <fa icon ="cog"/>
        Setting</router-link></li>
        <div>
          
          <!-- <li v-if="currentUser.name" @click="logoutUser">
            <router-link to="/logout">
              <fa icon ="sign-out-alt"/>
              {{currentUser.name}}
              Logout
            </router-link>
          </li> -->
          <li @click="logoutUser">
            <router-link to="/logout">
              <fa icon ="sign-out-alt"/>
              Login
            </router-link>
          </li>
        </div>
        <!-- <li ><router-link to="/signup">
          <fa icon ="sign-out-alt"/>
        SignUp</router-link></li> -->
        <!-- <p v-if="users.id">{{users.name}}</p> -->
      </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

// import Loading from "./Loading.vue"
export default {
    name: 'Menu',
    props: {
      // isLoaded,
    },
    computed:{
      ...mapState(['users', 'isLoggedIn','currentUser']),
      ...mapGetters(['listUsers'])
    },
    methods:{
      logoutUser(){
        this.$store.dispatch('logoutUser')
      }
    }
}
</script>

<style scoped>

  .menu {
    display: flex;
    background-color: #b29bd8;
    /* margin-top: 70px; */

  }
  .nav-link{
    align-items: center;
    margin-top: 0;
    font-size: 18px;
  }
  .nav-link p{
    font-size: 30px;
    font-weight: 700;
    color: #000;
  }
  .logo-text:after{
    content: "";
    display:block;
    width: 5px;
    height: 5px;
    background-color:red;
    border-radius: 20px;
    margin-top: -17px;
    /* margin-left: -7px; */
  }
  .nav-link .logo {
    height: 60px;
  }
  .nav-link li {
    display: flex;
    list-style: none;
    margin-top: 30px;
  }
  .nav-link li a{
    text-decoration: none;
  }
</style>