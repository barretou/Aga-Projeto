<template>
    <button>{{TextButton}}</button>
</template>

<script>
export default {
  name: "ButtonClient",
  props: {
      TextButton: String,    
  },
};
</script>

<style lang="css" scoped>
button {
 position: relative;
 display: inline-block;
 padding: 8px 20px;
 text-align: center;
 text-transform: uppercase;
 font-size: 18px;
 letter-spacing: 1px;
 text-decoration: none;
 color: #239dd3;
 background: transparent;
 cursor: pointer;
 transition: ease-out 0.5s;
 border-radius: 30px;
 border: 2px solid #239dd3;
 border-radius: 10px;
 box-shadow: inset 0 0 0 0 #239dd3;
}

button:hover {
 color: white;
 box-shadow: inset 0 -100px 0 0 #239dd3;
}

button:active {
 transform: scale(0.9);
}
</style>