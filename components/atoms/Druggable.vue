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
      mousedown: function(e) {
        this.cursorOffset.x = e.pageX;
        this.cursorOffset.y = e.pageY;
        this.cursorStartPos = {x: this.x, y: this.y};
        document.addEventListener("mousemove", this.mousemove)
        document.addEventListener("mouseup", this.mouseup)
        this.$store.dispatch('moveWndToTop', {wndID: this.wndID});
      },
      mousemove: function(e) {
        this.x = this.cursorStartPos.x + (e.pageX - this.cursorOffset.x);
        this.y = this.cursorStartPos.y + (e.pageY - this.cursorOffset.y);
      },
      mouseup: function(e) {
        this.cursorStartPos = null;
        document.removeEventListener("mousemove", this.mousemove)
        document.removeEventListener("mouseup", this.mouseup)
      },
    }
  }
</script>
