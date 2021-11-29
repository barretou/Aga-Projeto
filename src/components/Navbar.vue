<template>
    <div id="nav">

      <div>
        <img src="../assets/logo-aga.svg" alt="">
      </div>

      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link  to="/quem-somos">Quem Somos</router-link>
        <router-link  to="/servicos">Serviços</router-link>
        <router-link  to="/contato">Contato</router-link>
        <router-link  to="/cliente">Área do Cliente</router-link>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

}
</script>

<style scoped>
#nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.nav-links a{
  padding: 10px;
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
  .nav-links{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

</style>
    