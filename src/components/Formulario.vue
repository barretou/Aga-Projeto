<template>
  <div>
    <div class="text-center">
      <p class="azul-title">Para mais informações</p>
      <h2 class="fw-bold dark-azul-title">Pré Cadastro</h2>
      <p>
        Para mais informações realize o seu pré-cadastro e nossos atendentes
        entrarão em contato
      </p>
    </div>
    <v-text-field label="Nome" placeholder="Digite seu nome"></v-text-field>
    <v-text-field label="Número" placeholder="Digite seu número"></v-text-field>
    <v-text-field label="Email" placeholder="Digite seu email"></v-text-field>
    <ButtonClient TextButton="Confirmar Pré-Cadastro" />
  </div>
</template>

<script>
import ButtonClient from "../components/ButtonClient.vue";

export default {
  name: "Formulario",
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
</style>