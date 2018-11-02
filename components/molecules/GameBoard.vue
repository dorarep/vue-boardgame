<template lang="pug">
  transition-group(name="list-complete" tag="div")
    .tr(v-for="(row, y) in $store.state.game.board" :key="y")
      cell.td(v-for="(cell, x) in row" @click.native="$store.dispatch('game/onClick', {x, y})" :key="x")
        player(key="p" v-if="$store.state.game.player.x === x && $store.state.game.player.y === y && $store.state.game.loser !== 'player'")
        enemy(key="e" v-if="$store.state.game.enemy.x === x && $store.state.game.enemy.y === y && $store.state.game.loser !== 'enemy'")
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

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>
