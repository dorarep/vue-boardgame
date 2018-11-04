<template lang="pug">
  system-frame
    game-board
    p(v-if="$store.state.game.loser === null") 樽で囲ってペンギンを捕まえろ！
    template(v-else)
      p(v-if="$store.state.game.loser === 'enemy'") ペンギンが捕まった、ヒヨコの勝ち！
      p(v-else) ヒヨコが捕まった、ペンギンの勝ち！
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
