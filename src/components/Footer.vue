<template>
  <section>
    <v-container class="footer">
      <v-row>
        <v-col
          class="d-flex align-items-center justify-content-center"
          cols="12"
          md="6"
          lg="3"
        >
          <img class="footer-img" src="../assets/logo-aga.svg" alt="" />
        </v-col>
        <v-col
          class="
            d-flex
            flex-column
            align-items-center
            text-center text-lg-start
          "
          cols="12"
          md="6"
          lg="3"
        >
          <h4 class="dark-azul-title">Endereço</h4>
          <p>
            <i class="fas fa-map-marker-alt azul-title"></i> Rua dos Mundurucus,
            3100. Ed. Metropolitan, Sala 1102.
          </p>
          <p>CEP 66040-033 Belém-PA</p>
        </v-col>
        <v-col
          class="
            d-flex
            flex-column
            align-items-center
            text-center text-lg-start
          "
          cols="12"
          md="6"
          lg="3"
        >
          <h4 class="dark-azul-title">Contato</h4>
          <p>
            <i class="fas fa-envelope azul-title"></i>
            agafactoring@agafactoring.com.br
          </p>
          <p><i class="fas fa-phone azul-title"></i> (91) 3201-9999</p>
        </v-col>
        <v-col
          class="d-flex justify-content-center align-items-center"
          cols="12"
          md="6"
          lg="3"
        >
          <router-link to="/"
            ><ButtonClient TextButton="Clientes"
          /></router-link>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" lg="12">
          <hr class="w-100" />
          <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <p class="mx-5 text-center">AGA Factoring | Todos os direitos reservados.2012 - 2021</p>
            <p class="mx-5 text-center">Desenvolvido por Bredi</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ButtonClient from "./ButtonClient.vue";
export default {
  name: "Footer",
  components: {
    ButtonClient,
  },
};
</script>

<style lang="css" scoped>
.dark-azul-title {
  color: #0d4685 !important;
  font-weight: 600 !important;
}

.azul-title {
  color: #00aeef !important;
}

.footer {
  height: auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
}

.footer-img {
  width: 10rem;
}

@media screen and (max-width: 600px) {
  .footer-img {
    width: 8rem;
  }
}
</style>