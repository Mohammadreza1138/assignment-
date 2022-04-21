<template>
  <v-container>
    <first @draggable="drag($event)" @dragEnd="dragEnd" @dragging="dragging"/>
    <second @draggable="drag($event)" @dragEnd="dragEnd" @dragging="dragging"/>
    <third @draggable="drag($event)" @dragEnd="dragEnd" @dragging="dragging"/>
    <fourth @draggable="drag($event)" @dragEnd="dragEnd" @dragging="dragging"/>
    <fiveth @draggable="drag($event)" @dragEnd="dragEnd" @dragging="dragging"/>
  </v-container>
</template>

<script>
import First from "~/components/desktop/first";
import Second from "~/components/desktop/second";
import Third from "~/components/desktop/third";
import Fourth from "~/components/desktop/fourth";
import Fiveth from "~/components/desktop/fiveth";

export default {
  name: "windows",
  components: {Fiveth, Fourth, Third, Second, First},
  data() {
    return {
      el: null,
      pickEl: false,
      titleBars: null,
    }
  },
  methods: {
    drag(el) {
      this.titleBars = document.getElementsByClassName('titleBar')
      for (const titleBarElement of this.titleBars) {
        titleBarElement.classList.add('is-dragging');
      }
      this.el = document.getElementById(el.target.parentElement.id);
      this.pickEl = true
      let elements = document.getElementsByClassName('section')
      for (const element of elements) {
        element.classList.remove('z-index');
      }
      this.el.classList.add('z-index')
    },
    dragEnd() {
      if (this.pickEl === true){
        for (const titleBar of this.titleBars) {
          titleBar.classList.remove('is-dragging')
        }
        this.el.classList.add('z-index')
        this.pickEl = false
      }

    },
    dragging(event) {
      if (this.pickEl === true) {
        this.el.classList.add("z-index", "position-ab")
        this.el.style.left = `${event.clientX - 150}px`
        this.el.style.top = `${event.clientY - 20}px`
      }
    },
  }
}
</script>

<style scoped>

</style>
