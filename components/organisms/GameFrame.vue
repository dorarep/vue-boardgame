<template lang="pug">
  system-frame
    game-board
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
