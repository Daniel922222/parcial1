<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->

      <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item to='/'>Inicio</b-nav-item>
      <b-nav-item to='tienda'>Tienda</b-nav-item>
      <b-nav-item to='com'>comunicacion</b-nav-item>
       <b-nav-item to='Productos'>Productos</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
    <router-view/>
  </div>
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

