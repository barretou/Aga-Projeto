<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link  to="/quem-somos">Quem Somos</router-link>
      <router-link  to="/servicos">Serviços</router-link>
      <router-link  to="/contato">Contato</router-link>
      <router-link  to="/cliente">Área do Cliente</router-link>
    </div>
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
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
  height: 100vh;
}
</style>
