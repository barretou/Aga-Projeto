<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-12">
        <v-banner class="banner-quem-somos w-100">
          <div class="banner-text d-flex justify-content-center">
            <Card/>
          </div>
        </v-banner>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      
    }
  },
  // methods: {
  //   scrollMeTo(ref) {
  //     this.$refs[ref].scrollIntoView({behavior: 'smooth'})
  //   }
  // }
}
</script>


<style lang="css">

  .banner-quem-somos{
    height: 100vh;  
    background-image: url('../assets/bg-quem-somos.png');
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
}

  .banner-button{
    background-color: rgb(20,84,145) !important;
    background-color: radial-gradient(circle, rgba(20,84,145,1) 0%, rgba(28,122,180,1) 25%, rgba(35,159,213,1) 100%) !important;
    color: #fff !important;
    border-radius: 10px;
  }

  .v-banner__wrapper{
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    .banner-quem-somos{

      height: auto;
    }
  }
    
</style>