<template>
  <div class="section green" id="fifth">
    <v-sheet elevation="0" height="35px" color="#d3d3d3" v-on:mousedown="drag" v-on:mousemove="dragging"
             v-on:mouseup="dragEnd" v-on:mouseleave="dragEnd" class="titleBar"></v-sheet>
  </div>
</template>

<script>
export default {

  methods: {
    drag(event) {
      this.$emit('draggable', event)
    },
    dragEnd(result) {
      this.$emit("dragEnd", result)
    },
    dragging(result) {
      this.$emit("dragging", result)
    }
  }
}
</script>

<style scoped>

</style>
