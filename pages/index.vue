<template lang="pug">
  section#container
    game-frame
</template>

<script>
  import GameFrame from '~/components/organisms/GameFrame.vue'

  export default {
    components: {
      GameFrame
    }
  }
</script>

<style>
  #container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url('~assets/background.png');
    background-size: cover;
  }
</style>

