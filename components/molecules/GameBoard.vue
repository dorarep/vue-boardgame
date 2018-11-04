<template lang="pug">
  div
    .tr(v-for="(row, y) in $store.state.game.board" :key="y")
      cell.td(v-for="(cell, x) in row" @click.native="$store.dispatch('game/onClick', {x, y})" :key="x")
        player(v-if="$store.state.game.player.x === x && $store.state.game.player.y === y")
        enemy(v-if="$store.state.game.enemy.x === x && $store.state.game.enemy.y === y")
        wall(v-if="cell == 1")
</template>

<script>
  import Cell from '~/components/atoms/Cell.vue'
  import Player from '~/components/atoms/Player.vue'
  import Enemy from '~/components/atoms/Enemy.vue'
  import Wall from '~/components/atoms/Wall.vue'

  export default {
    components: {
      Player,
      Enemy,
      Cell,
      Wall
    }
  }
</script>

<style scoped>
  .tr {
    display: table;
  }

  .td {
    display: table-cell;
  }
</style>
