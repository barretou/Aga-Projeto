<template>
  <div class="banner-quem-somos">
    <div class="row h-100">
      <div class="col-lg-12 col-12 d-flex justify-content-center h-100">
        <v-banner class="px-0 px-lg-5">
          <div class="card-wrapper">
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

  .card-wrapper{
    display: flex;
    justify-content: center;
  }

  .banner-quem-somos{
    padding: 10rem;
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
     padding: 0;
    }
  }
    
</style>