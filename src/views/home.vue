<template>
  <div id="app">
    <div id="logo-box">
      <img alt="Vue logo" src="../assets/vue-logo.png" />
      <img alt="Express logo" src="../assets/express-logo.png" />
    </div>
    <h3>
      <router-link :to="{ name: 'sample-intro' }">Try Sample 😉</router-link>
      <router-view></router-view>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    console.log(
      `
                            __
     ,                    ," e'--o
    ((                   (  | __,'
     \\~----------------' \_;/
     (                      /
     /) ._______________.  )
    (( (               (( (
     ''-'               ''-'

    PLZ HELP THIS POOR BACKEND DEVELOPER STRUGGLING TO SET FRONTEND CONFIGURATION...
    `
    );
  },
};
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

#logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
</style>
