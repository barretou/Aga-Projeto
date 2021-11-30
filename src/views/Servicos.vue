<template>
  <section>
 
    <v-banner class="banner-servicos w-100">
      <div class="banner-text-servicos">
        <h2 class="fw-bold text-white text-center w-50">
          Otimize seu fluxo de caixa antecipando seus recebíveis para
          pagar seus fornecedores à vista, gerando diferencial competitivo
          e aumento da liquidez.
        </h2>
      </div>
    </v-banner>

    <v-container class="d-flex align-center p-0 p-lg-5">
      <v-row class="d-flex justify-content-center align-center p-5">
        <v-col cols="12" lg="6" class="d-flex align-center px-5">
          <v-card elevation="5" class="d-flex flex-column justify-content-center">
            <v-card-subtitle class="fw-bold azul-title d-flex flex-start"
              ><p class="fs-5">Nossos Serviços</p> 
            </v-card-subtitle>
            <v-card-title class="fw-bold fs-4 dark-azul-title">
              Antecipação de Recebíveis
            </v-card-title>
            <v-card-text class="mt-3 text-start">              
              Otimize seu fluxo de caixa antecipando seus recebíveis para pagar
              seus fornecedores à vista, gerando diferencial competitivo e
              aumento da liquidez.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="d-flex align-center px-5">
          <v-card-text class="mt-3 text-center fw-bold azul-title d-flex flex-column justify-content-center">
            <h4>
            Otimize seu fluxo de caixa antecipando seus recebíveis para pagar
            seus fornecedores à vista, gerando diferencial competitivo e aumento
            da liquidez.
            </h4>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style  scoped>
.banner-servicos {
  background-image: url("../assets/banner-servicos.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 40vh;
}
.banner-text-servicos {
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

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

@media screen and (max-width: 600px) {
  .banner-servicos {
    height: 80vh;
  }
  .banner-text-servicos {
    height: 80vh;
  }
}
</style>
    
