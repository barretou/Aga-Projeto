<template>
<div>
  <section class="bg-contato">
    <v-container>
      <v-row style="display:flex; flex-column; justify-content:center; align-items:center; height:80vh">
        <v-col class="bg-white p-5" cols="12" sm="6" md="3"> 
          <Formulario/>
        </v-col>
        <div>
          <h5 class="text-white text-center">
            Você também pode tirar suas dúvidas pelo nosso <span>Whatsapp</span>
          </h5>
        </div>
      </v-row>
    </v-container>
  </section>
  <section class="py-5">
    <v-container>
      <v-row>
        <h1 class="dark-azul-title fw-bold text-center mb-5">Somos Associados</h1>
        <v-col cols="12" lg="6" class="d-flex justify-content-center">
          <img src="../assets/patrocinador-1.png" alt="">
        </v-col>
        <v-col cols="12" lg="6" class="d-flex justify-content-center">
          <img src="../assets/patrocinador-2.png" alt="">
        </v-col>
      </v-row>
    </v-container>
  </section>
  </div>
</template>

<script>
import Formulario from '../components/Formulario.vue'
export default {
  components: {
    Formulario
  }
};
</script>

<style lang="css" scoped>
.bg-contato {
  background-image: url("../assets/bg-cadastro.png");
  background-size: cover;
  object-fit: cover;
}

.dark-azul-title {
  color: #0d4685 !important;
  font-weight: 600 !important;
}

.bg-white {
    border-radius: 10px !important;
}

.form-button{
    background-color: rgb(20,84,145) !important;
    background-color: radial-gradient(circle, rgba(20,84,145,1) 0%, rgba(28,122,180,1) 25%, rgba(35,159,213,1) 100%) !important;
    color: #fff !important;
    border-radius: 10px;
}
</style>