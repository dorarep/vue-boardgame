<template lang="pug">
  .frame-wrapper
    slot
</template>

<style scoped>
  .frame-wrapper {
    padding: 15px;
    margin: 30px 0;
    border: ridge 4px #fff;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);

    color: white;
    text-shadow: #000 1px 1px 0;
  }
</style>

