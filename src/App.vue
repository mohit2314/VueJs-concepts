<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/input">Input</router-link>
    <router-link to="/isv2">ISV2</router-link>
    <router-link to="/timer">Timer</router-link>
    <router-link to="/vmodel">V Model Demo</router-link>
    <router-link to="/cropper">Cropper Demo</router-link>


  </div>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
 font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
