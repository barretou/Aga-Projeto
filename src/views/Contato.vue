<template>
  <section class="bg-contato">
    <v-container>
      <v-row style="display:flex; flex-column; justify-content:center; align-items:center; height:80vh">
        <v-col class="bg-white p-5" cols="12jhm,gh" sm="6" md="3"> 
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
  height: 80vh;
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