<template>
  <div id="app">
    <body>
      <HeaderTitle /> 
      <router-view ></router-view>
    </body>
  </div>
</template>

<script>
import HeaderTitle from './components/HeaderTitle';

export default {
  name: 'App',
  components: {
    HeaderTitle
    },
  
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
body {
  background-image: url('assets/Night_sky.png');
  background-size: cover;
  color: white;
}
</style>
