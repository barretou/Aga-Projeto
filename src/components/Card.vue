<template>
    <v-card elevation="5" class="px-5 card">
      <v-card-subtitle class="fw-bold azul-title d-flex flex-start"
        >QUEM SOMOS</v-card-subtitle
      >
      <v-card-title class="fw-bold fs-4 dark-azul-title">
        Somos especialistas em soluções de fluxo de caixa
      </v-card-title
      >
      <v-card-text class="mt-3 text-start">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </v-card-text>
      <v-card-text class="mt-1 text-start">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="css" scoped>
.azul-title {
  color: #00aeef !important;
}

.dark-azul-title {
  color: #0d4685 !important;
  font-weight: 600 !important;
}

.v-card__text {
  font-size: 1.2rem;
}

.card{
  width: 50% !important;
}

@media screen and (max-width: 600px) {
  .card{
    width: 100% !important;
  }
}
  
</style>