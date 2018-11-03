<template lang="pug">
  smoothly-movable(uuid="player")
    img(src="~/assets/player.gif").fix
</template>

<script>
  import SmoothlyMovable from '~/components/atoms/SmoothlyMovable.vue'

  export default {
    components: {
      SmoothlyMovable
    }
  }
</script>

<style scoped>
  .fix {
    width: 20px;
    height: 20px;
  }
</style>
