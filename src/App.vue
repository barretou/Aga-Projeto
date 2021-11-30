<template>
  <div id="app" data-app>
    <ResponsiveBar class="d-block d-lg-none"/>
    <Navbar class="d-none d-lg-block"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ResponsiveBar from './components/ResponsiveBar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ResponsiveBar
  }
}
</script>

<style>

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  height: 100vh;
}

a {
  text-decoration: none;
}

.text-white{
  color: #fff !important;
}

.theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper {
    border-bottom:0px !important;
}

.v-list-item {
    align-items: center;
    display: flex;
    flex: 1 1 100%;
    letter-spacing: normal;
    outline: none;
    padding: 10px 16px;
    min-height: unset;
    position: relative;
    text-decoration: none;
}

</style>
