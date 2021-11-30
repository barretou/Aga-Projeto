<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12">
        <div id="nav">
          <div>
            <img src="../assets/logo-aga.svg" alt="" />
          </div>
          <div class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link to="/quem-somos">Quem Somos</router-link>
            <router-link to="/servicos">Serviços</router-link>
            <router-link to="/contato">Contato</router-link>
            <router-link to="/"><ButtonClient TextButton="Clientes"/></router-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonClient from './ButtonClient.vue'

export default {
  name: "Navbar",
  components: {
    ButtonClient
  },
};
</script>

<style scoped>
#nav {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}   

#nav img {
  width: 10rem;
}

.nav-links a {
  padding: 5px 15px;
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  display: inline-flex;
}

.nav-links a:not(:last-of-type)::before  {
  content: "";
  width: 100%;
  position: absolute;
  height: 2px;
  background: #239dd3;
  transition: 0.2s ease-in-out;
  transform: translateX(-100%);
  bottom: 0;
  left: 0;
}

.nav-links a:hover {
  color: #239dd3;
}

.nav-links a:hover::before{
  color: #239dd3;
  transform: translateX(0);
}

#nav a.router-link-exact-active {
  color: #239dd3;
}

@media screen and (max-width: 600px) {
  #nav {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
  }

  #nav img {
    width: 8rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .nav-links a {
    padding: 5px;
    font-weight: bold;
    color: #2c3e50;    
    font-size: 1.2rem;
    text-decoration: none;
  }
}
</style>
    