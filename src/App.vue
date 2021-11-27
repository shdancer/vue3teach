<template>
  <div id="nav">
    <router-link to="/">梦开始的地方</router-link> |
    <router-link to="/componentAdvance">组件高级</router-link> |
    <router-link to="/compositionapi">组合式API</router-link> |
    <router-link to="/router">vue-router</router-link> |
    <router-link to="/axios">axios</router-link> |
    <router-link to="/element-plus">ElementPlus展示</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
