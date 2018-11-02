<template lang="pug">
  .cell
    slot
</template>

<style scoped>
  .cell{
    background-image: url('~assets/grass.png');
    height: 32px;
    width: 32px;

    border: ridge 4px #fff;
    border-radius: 2px;
  }
</style>

