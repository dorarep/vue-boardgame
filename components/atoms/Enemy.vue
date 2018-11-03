<template lang="pug">
  smoothly-movable(uuid="enemy")
    img(src="~/assets/enemy.gif").fix
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
