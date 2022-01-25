<template>
  <div>
    <Loading />
    <div class="home">
      <p class="home-text">study</p>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
export default {
    name:'Home',
    components:{
      Loading,
    },
}
</script>

<style>
  .home .home-text {
    font-size: 50px;
    font-weight: 700;
    color: #000;
    position: relative;
  }
  .home-text::before{
    content: "";
    position: absolute;
    display: inline-block;
    width: 9px;
    height: 9px;
    background-color:red;
    border-radius: 20px;
    margin-top: 46px;
    margin-left: -20px;
  }
</style>