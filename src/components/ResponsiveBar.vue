<template>
  <div class="d-flex justify-content-between align-items-center px-2 px-lg-0">
    <div>
        <img class="logo-responsive" src="../assets/logo-aga.svg" alt="" />
    </div>
    <v-menu transition="scale-transition" origin="center center">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
         <i class="fas fa-bars"></i> MENU
        </v-btn>
      </template>
      <v-list>
        <v-list-item class="d-flex flex-column justify-content-center">
          <v-list-item-title class="py-2"><router-link class="text-dark fw-bold" to="/">HOME</router-link></v-list-item-title>
          <v-list-item-title class="py-2"><router-link class="text-dark fw-bold" to="/quem-somos">QUEM SOMOS</router-link></v-list-item-title>
          <v-list-item-title class="py-2"><router-link class="text-dark fw-bold" to="/servicos">SERVIÇOS</router-link></v-list-item-title>
          <v-list-item-title class="py-2"><router-link class="text-dark fw-bold" to="/contato">CONTATO</router-link></v-list-item-title>
          <v-list-item-title class="py-2"><router-link class="text-dark fw-bold" to="cliente/"><ButtonClient TextButton="Clientes"/></router-link></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>       
</template>

<script>
import ButtonClient from './ButtonClient.vue'
export default {
  name: "ResponsiveBar",
  components: {
    ButtonClient
  },
  data() {
    return {
      links: [
        'Home',
        'Sobre',
        'Contato',
        'Login',
        'Cadastro'
      ]
    }
  }

};
</script>

<style lang="css" scoped>
    .logo-responsive {
        width: 150px;
        height: auto;
        padding: 0.5rem;
    }
</style>