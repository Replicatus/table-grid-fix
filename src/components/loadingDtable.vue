<template>
  <div class="d-flex flex-row align-center" :style="`grid-column: span ${numCols}; min-height: 200px;`">
    <v-progress-linear indeterminate :color="loaderColor"></v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "loadingDtable",
  props: {
    loaderColor:{
      type: String,
      default: '#00599b'
    },
    numCols: {
      type: [Number, String],
      default: 0
    },
  },
}
</script>

<style scoped>

</style>