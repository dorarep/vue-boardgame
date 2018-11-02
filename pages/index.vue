<template lang="pug">
  section#container
    system-frame
      game-board
    system-frame(v-if="$store.state.game.loser !== null")
      p(v-if="$store.state.game.loser === 'enemy'") プレイヤーの勝ち！
      p(v-else) エネミーの勝ち！
</template>

<script>
  import SystemFrame from '~/components/atoms/SystemFrame.vue'
  import GameBoard from '~/components/molecules/GameBoard.vue'

  export default {
    components: {
      SystemFrame,
      GameBoard
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

