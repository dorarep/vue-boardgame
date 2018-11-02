<template lang="pug">
  section#container
    game-frame
    system-frame(v-if="$store.state.game.loser !== null")
      p(v-if="$store.state.game.loser === 'enemy'") プレイヤーの勝ち！
      p(v-else) エネミーの勝ち！
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

