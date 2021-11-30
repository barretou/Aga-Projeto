<template>
  <div>
    <img :src=picture_src />
    <div class="pic_sub">{{pic_desc}}</div>
  </div>
</template>
<script>
export default {
  name: 'Logo',
  props: {
    picture_src: '../assets/logo-aga.svg',
    pic_desc: String
  }
}
</script>

<style lang="css" scoped>
@media screen and (max-width: 726px) {
  .img-logo {
    width: 8rem;
  }
}
</style>