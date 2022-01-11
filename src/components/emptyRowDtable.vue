<template>
  <div class="table-grid-body-row"
       :style="`grid-column: span ${numCols}; grid-template-columns : repeat(${numCols}, 1fr);
            `"
  >
    <div
        class="table-grid-body-row__cell"
        :style="`grid-column: span ${(numCols )};  min-height: 200px!important;`"
    >
      Нет данных
    </div>
  </div>
</template>

<script>
export default {
  name: "emptyRowDtable",
  props: {
    numCols: {
      type: [Number, String],
      default: 0
    },
  },
}
</script>

<style scoped>

</style>