<template>
    <section>
        <v-banner  class="banner">
            <div class="banner-text d-flex flex-column justify-content-center align-items-center">
                <h6 class="azul-title">AGA CAPITAL</h6>
                <h1 class="text-white fw-bold mt-2">Serviços de Antecipação de Recebíveis</h1>
                <h6 class="text-white mt-2">Para alavancar sua empresas e dar sustentabilidade no seu capital de giro</h6>
                <v-btn class="mt-5 banner-button" elevation="2" x-large>Fazer Pré-Cadastro</v-btn>
            </div>
        </v-banner>
    </section>
</template>

<script>
    export default {
        name: 'Banner',
    }
</script>

<style scoped>
    .banner{
        height: 90vh;
        background-image: url('../assets/banner.png');
        background-size: cover;
        object-fit: cover;
        background-repeat: no-repeat;
    }

    .azul-title{
        color: #40BAEE;
    }

    .banner-text{
        height: 80vh;
    }

    .banner-button{
        background-color: rgb(20,84,145) !important;
        background-color: radial-gradient(circle, rgba(20,84,145,1) 0%, rgba(28,122,180,1) 25%, rgba(35,159,213,1) 100%) !important;
        color: #fff !important;
        border-radius: 10px;
    }
</style>