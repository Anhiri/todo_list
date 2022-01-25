<template>
  <div class="topbar">
      <div class="search">
          <div class="search-form">
              <fa icon="search"/>
              <input type="text" 
                    class="search-input" 
                    placeholder="Search"
                    v-model="search" 
                    v-on:keyup="filterTask">  <!--v-on:keyup.enter: click nút enter-->
          </div>
      </div>
      <ul class="nav-link">
          <li class="nav-notify"><router-link to="/notify">
            <fa icon="bell"/>
          </router-link></li>
          <li class="nav-profile" ><router-link to="/profile">
                <!-- {{user.name}} -->
                Profile
            <fa icon="user-astronaut"/>
          </router-link></li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    name:'Topbar',
    
    computed:
    {
        ...mapGetters(['listTodos','listUsers']),
    },
    methods:{
        ...mapMutations(['FILTERED_TODO']),
        ...mapActions(['getTodos']),
        filterTask(){
        this.$router.push('/projects')
        if(this.search.length > 0){
            this.FILTERED_TODO(this.search)
        }
        else{
            this.getTodos()
        }
        }
    }
}
</script>

<style scoped>
    .topbar {
        position: relative;
        height: 70px;
        background-color: #b29bd8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8%;
    }
    .search{
        font-size: 20px;
        /* background-color: #fff; */
    }
    .search-input{
        /* border-color: #fff; */
        border-radius: 25px;
        border: 2px solid #b29bd8;
        outline: none;

    }
    .nav-link{
        align-items: center;
        margin-top: auto;
        display: flex; 
        justify-content: space-between;

    }
    .nav-link li {
        display: flex;
        list-style: none;
    }
    .nav-link li a{
        text-decoration: none;
    }
    .nav-notify{
        margin-right: 10px;
    }
</style>