<template lang="pug">
  section#container
    system-frame ゲームスクリーン
</template>

<script>
import SystemFrame from '~/components/atoms/SystemFrame.vue'

export default {
  components: {
    SystemFrame
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

