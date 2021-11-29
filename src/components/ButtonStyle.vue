<template>
    <div>
        <v-btn class="mt-5 form-button buttonStyled w-100" elevation="2" x-large>{{textButton}}</v-btn>
    </div>
</template>

<script>
    export default {
        name: 'buttonStyled',
        props: {
            textButton:String,
        }
    }
</script>

<style lang="css" scoped>

.buttonStyled {
    background-color: rgb(20,84,145) !important;
    background-color: radial-gradient(circle, rgba(20,84,145,1) 0%, rgba(28,122,180,1) 25%, rgba(35,159,213,1) 100%) !important;
    color: #fff !important;
    border-radius: 10px;
}

</style>