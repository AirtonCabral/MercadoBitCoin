<template>
  <p class="steps">Etapa {{ stepsNumber }} de 4</p>
  <router-view></router-view>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    stepsNumber: 1
  }),
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
#app .steps { 
  font-size: 1rem;
  color: #020405;
  margin-left: -210px;
  margin-bottom: -10px;
}
</style>
