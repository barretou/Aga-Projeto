<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-12">
        <v-banner class="banner-servicos w-100">
          <div class="banner-text-servicos">
            <h1 class="fw-bold text-white text-center w-50">
              Otimize seu fluxo de caixa antecipando seus recebíveis para pagar
              seus fornecedores à vista, gerando diferencial competitivo e
              aumento da liquidez.
            </h1>
          </div>
        </v-banner>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5 d-flex align-items-center">
        <div class="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-start">
          <v-card elevation="5" class="w-75">
            <v-card-subtitle class="fw-bold azul-title d-flex flex-start"
              >Nossos Serviços</v-card-subtitle
            >
            <v-card-title class="fw-bold fs-4 dark-azul-title">
              Antecipação de Recebíveis
            </v-card-title>
            <v-card-text class="mt-3 text-start">
              Otimize seu fluxo de caixa antecipando seus recebíveis para pagar
              seus fornecedores à vista, gerando diferencial competitivo e
              aumento da liquidez.
            </v-card-text>
          </v-card>
        </div>
        <div class="col-lg-6 col-12 h-100 d-flex justify-content-center align-items-center">

            <v-card-text class="mt-3 text-center fw-bold azul-title h-100">
              Otimize seu fluxo de caixa antecipando seus recebíveis para pagar
              seus fornecedores à vista, gerando diferencial competitivo e
              aumento da liquidez.
            </v-card-text>

        </div>
      </div>
    </div>
  </div>
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
    
