<template>

    <v-banner class="banner">
      <div
        class="
          banner-text
          d-flex
          flex-column
          justify-content-center
          align-items-center p-5
          text-center
        "
      >
        <h6 class="azul-title">AGA CAPITAL</h6>
        <h1 class="text-white fw-bold mt-2">
          Serviços de Antecipação de Recebíveis
        </h1>
        <h6 class="text-white mt-2 mb-5">
          Para alavancar sua empresas e dar sustentabilidade no seu capital
          de giro
        </h6>
        <ButtonStyle textButton="Fazer Pré-Cadastro" />
      </div>
    </v-banner>
</template>

<script>
import ButtonStyle from "../components/ButtonStyle.vue";
export default {
  name: "Banner",
  components: {
    ButtonStyle,
  },
};
</script>

<style scoped>
.banner {
  height: 90vh;
  background-image: url("../assets/banner.png");
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
}

.azul-title {
  color: #40baee;
}

.banner-text {
  height: 80vh;
}
</style>