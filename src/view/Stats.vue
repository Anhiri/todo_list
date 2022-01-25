<template>
  <div class="stats">
    <!-- <section v-if="!isloaded">
      <div class="loader loader-1">
        <div class="loader-outter"></div>
        <div class="loader-inner"></div>
      </div>
    </section> -->
    <Loading />
    <h1>Stats Page</h1>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
export default {
  name: "Stats",
  components:{
    Loading,
  },
  // data:()=>{
  //   return {
  //     isloaded:false
  //   }
  // },
  // mounted(){
  //   document.onreadystatechange = () => {
  //     if(document.readyState=="complete"){
  //       this.isloaded=true;
  //     }
  //   }
  // },
  methods:{
   
  }

}
</script>

<style>
.stats {
  position: relative;
  height: 420px;
  overflow: hidden;
}
/* section {
  position: fixed;
  width: 100%;
  display: inline-block;
  text-align: center;
  height: 420px;
  vertical-align: top;
  background: rgba(255, 255, 255, 0.493);
  z-index: 1;
  margin-left: -40%;
}

.loader {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin: 75px 75px 75px -150px;
}

.loader-star {
  position: absolute;
  top: calc(50% - 12px);
}
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
} */
</style>