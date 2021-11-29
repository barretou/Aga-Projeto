<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link  to="/quem-somos">Quem Somos</router-link>
        <router-link  to="/servicos">Serviços</router-link>
        <router-link  to="/contato">Contato</router-link>
        <router-link  to="/cliente">Área do Cliente</router-link>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

}
</script>

<style scoped>
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
  color: #239dd3;
}

@media screen and (max-width: 600px) {
  #nav {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

</style>
    