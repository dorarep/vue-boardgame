<template lang="pug">
  transition(
    name="custom-classes-transition"
    enter-active-class="animated bounceInDown"
  )
    img(src="~/assets/barrel.png").fix
</template>

<style scoped>
  .fix {
    width: 20px;
    height: 20px;
  }

</style>
