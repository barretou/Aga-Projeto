<template>
<div >
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
</div>
</template>

<script>
import ButtonStyle from './ButtonStyle.vue'

export default {
    name: 'Formulario',
    components: {
        ButtonStyle
    }
}
</script>

<style lang="scss" scoped>

</style>