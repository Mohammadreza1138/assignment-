<template>
  <div class="section yellow" id="third">
    <v-sheet elevation="0" height="35px" color="#d3d3d3" v-on:mousedown="drag" v-on:mousemove="dragging"
             v-on:mouseup="dragEnd" v-on:mouseleave="dragEnd" class="titleBar"></v-sheet>
  </div>
</template>

<script>
export default {
  name: "third",
  methods: {
    drag(event) {
      this.$emit('draggable', event)
    },
    dragEnd(event) {
      this.$emit("dragEnd", event)
    },
    dragging(event) {
      this.$emit("dragging", event)
    }
  }
}
</script>

<style scoped>

</style>
