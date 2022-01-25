<template>
  <div>
    <Loading/>
    <h1>Calendar Page</h1>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
export default {
    name:'Calendar',
    components:{
      Loading,
    },
    methods:{
      abc(){
        console.log('abc')
      }
    }
}
</script>

<style>

</style>