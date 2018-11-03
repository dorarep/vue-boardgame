<template lang="pug">
  transition(
    v-on:before-enter="beforeEnter"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave"
  )
    slot
</template>

<script>
  let previousPosition = {}

  export default {
    props: {
      uuid: { type:String, default: null },
      duration: { type:Number, default: 300 }
    },
    data: () => {
      return {
        prev: null
      }
    },
    methods: {
      beforeLeave (el) {
        previousPosition[this.uuid] = el.getBoundingClientRect()
      },
      beforeEnter (el) {
        el.hidden = true
      },
      afterEnter (el) {
        el.hidden = false

        if (!previousPosition[this.uuid]) return
        this.move(previousPosition[this.uuid], el.getBoundingClientRect())
      },
      move (previous, current) {
        this.$el.animate([
          { transform: `translate(${previous.x - current.x}px, ${previous.y - current.y}px)` },
          { transform: 'translate(0, 0)' }
        ], { duration: this.duration })
      }
    }
  }
</script>
