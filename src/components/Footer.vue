<template>
    <div class="container-fluid">
        <div class="container my-5">
            <div class="row">
                <div class="col-lg-3 col-12 d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                    <img class="w-50" src="../assets/logo-aga.svg" alt="">
                </div>
                <div class="col-lg-3 col-12 text-center text-lg-start">
                    <h4 class="dark-azul-title">Endereço</h4>
                    <p><i class="fas fa-map-marker-alt azul-title"></i> Rua dos Mundurucus, 3100. Ed. Metropolitan, Sala 1102. <br> CEP 66040-033 Belém-PA</p>
                </div>
                <div class="col-lg-3 col-12 text-center text-lg-start">
                    <h4 class="dark-azul-title">Contato</h4>
                    <p><i class="fas fa-envelope azul-title"></i> agafactoring@agafactoring.com.br</p>
                    <p><i class="fas fa-phone azul-title"></i> (91) 3201-9999</p>
                </div>
                <div class="col-lg-3 col-12 d-flex justify-content-center justify-content-lg-start align-items-center mb-4 mb-lg-0">
                    <ButtonClient/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonClient from './ButtonClient.vue'
    export default {
        name: 'Footer',
        components: {
            ButtonClient
        }

    }
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