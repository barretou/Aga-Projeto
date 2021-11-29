<template>
  <div class="container-fluid bg-contato">
    <div class="container">
      <div class="row">
        <div
          class="
            col-lg-12 col-12
            d-flex
            justify-content-center
            align-items-center           
          "
        >
          <v-col class=" bg-white p-5" cols="12" sm="6" md="3">
            <v-text-field
              label="Nome"
              placeholder="Digite seu nome"
            ></v-text-field>
            <v-text-field
              label="Número"
              placeholder="Digite seu número"
            ></v-text-field>
            <v-text-field
              label="Email"
              placeholder="Digite seu email"
            ></v-text-field>
             <ButtonStyle textButton='Confirmar Pré-Cadastro'/>
          </v-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonStyle from '../components/ButtonStyle.vue'
export default {
    components: {
        ButtonStyle
    }
};
</script>

<style lang="css" scoped>
.bg-contato {
  background-image: url("../assets/bg-cadastro.png");
  background-size: cover;
  object-fit: cover;
  height: 90vh;
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