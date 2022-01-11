<template>
  <div
      class="table-grid-body-row"
      :style="`grid-column: span ${numCols}; grid-template-columns : repeat(${numCols}, 1fr)`"
      @click="rowAction($event,row)"
  >
<!--    <slot name="row" :row="row" :headers="headersForRows" :id="row.id != null ? row.id : index">-->
    <div
        v-for="cell in headersForRows"
        class="table-grid-body-row__cell"
        :key="cell.dataField + index"
        :class="[cell.class, painCell(row, cell)]"
        :style="calcStylesForRowCell(row,cell)"
    >
<!--                  grid-template-columns: minmax(200px, ${(numCols )}fr); -->
      <slot :name="cell.dataField" :row="row" :id="row.id != null ? row.id + index : index" :cell="cell">
        <template>
          <span v-html="cellData(row, cell)"></span>
        </template>
      </slot>
<!--      <template v-for="(_, slot) in slots">-->
<!--        <template :slot="slot">-->
<!--          <slot :name="cell.dataField"  :row="row" :id="row.id != null ? row.id : index" :cell="cell"></slot>-->
<!--        </template>-->
<!--      </template>-->
    </div>
<!--    </slot>-->
  </div>
</template>

<script>
export default {
  name: "rowDtable",
  props: {
    numCols: {
      type: [Number, String],
      default: 0
    },
    index: {
      type: [Number, String],
      default: 0
    },
    row: {
      type: [Object],
      default: () => {
      }
    },
    headersForRows: {
      type: Array,
      default: () => []
    },
    paintBackground: {
      type: [Function],
      default: () => {
      }
    },
  },
  methods: {
    rowAction(e, row) {
      this.$emit('row-action', {e: e, row: row});
    },
    cellData(row, cell) {
      return cell.template ? cell.template(row) : row[cell.dataField]
    },
    painCell(row) {
      if (this.paintBackground(row))
        return this.paintBackground(row)();
    },
    calcStylesForRowCell(row, cell) {
      return `${typeof cell.styles === 'function' ? cell.styles(row) : cell.styles};` + `grid-column: span ${cell.colsDataCalc ? cell.colsDataCalc(row) : cell.cols}; grid-row: span ${cell.rowsDataCalc ? cell.rowsDataCalc(row) : cell.rowsData};`
    },
  },
}
</script>

<style scoped>

</style>