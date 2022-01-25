<template>
  <div id="nav">
    <!-- <h1>App</h1> -->
    <Menu/>
    <div class="body-content">
      <Topbar class="topbar"/>
    <div class="content">
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Topbar from './components/Topbar.vue'
export default {
  name:'App',
  components:{
    Menu,
    Topbar,
  }
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.body-content{
  flex: 1;
  
}
.topbar {
}
.content{
  width:100%;
  max-height: 420px;
}
</style>
