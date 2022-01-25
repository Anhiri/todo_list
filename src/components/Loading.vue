<template>
  <section class="preloading" v-if="isLoaded">
    <div class="loader loader-1">
      <div class="loader-outter"></div>
      <div class="loader-inner"></div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
// import $ from 'jquery';
export default {
  name: "Loading",
  data(){
    return {
    }
  },
  mounted(){
    this.LOADING(true)
      setTimeout(() => {
        // console.log('gfdgfdgs')
        this.LOADING(false)
      }, 1000)
    // this.request.onreadystatechange = function() {
    //     if(this.readyState == 4 && this.status == 200) {
    //       // let allData = JSON.parse(this.request.responseText)
    //       // this.vm.ajaxData = allData;
    //       this.isloaded = true;
    //     }
    //   }
    //   this.request.open("GET", this.url+"/"+this.params, true);
    //   this.request.send()
    //   this.isloaded = true;
    
    // document.onreadystatechange = () => {
    //   if(document.readyState=="complete"){
    //     // setTimeout(() => {this.isLoaded = true}, 1000)
    //     this.isLoaded=true;
    //     console.log('test')
    //   }
      // console.log('test')
      // this.request.open("GET", this.url+"/"+this.params, true);
      // this.isLoaded = true;
    // }
  },
  computed:{
    ...mapGetters(['isLoaded'])
  },
  methods:{
    ...mapMutations(['LOADING']),
  }
}
</script>

<style>
section {
  
  /* display: none; */
}

.preloading{
  position: fixed;
  display: inline-block;
  text-align: center; 
  vertical-align: top;
  z-index: 1;
  margin-left: -40%;
  width: 100%;
  height: 420px;
  background: rgba(255, 255, 255, 0.493);
 
}

section .loader {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin: 75px 75px 75px -150px;
}

/* .loader-star {
  position: absolute;
  top: calc(50% - 12px);
} */
.loader-1 .loader-outter {
  position: absolute;
  border: 4px solid #6c47a6;
  border-left-color: transparent;
  border-bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}

.loader-1 .loader-inner {
  position: absolute;
  border: 4px solid #6c47a6;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}

@keyframes loader-1-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>