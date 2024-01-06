<template>
  <div>
    <!-- <loginComponent /> -->
    <!-- <adminComponent /> -->
  </div>
  <router-view></router-view>
<div>
  <!-- <footerComponent></footerComponent> -->

</div>
</template>

<script>
// import loginComponent from './components/Login.vue'
// import footerComponent from './components/Footer.vue'
// import adminComponent from './components/admin.vue'
export default {
  
  name: 'App',
  components: {
    // loginComponent,
    // adminComponent
    // footerComponent
    
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
  margin-top: 60px;
}

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
