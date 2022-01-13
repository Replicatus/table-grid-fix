<template>
  <table  
      :style="`grid-template-columns : repeat(${numCols}, 1fr); max-height: ${maxTableHeight};`">
    <thead>
    <tr>
      <th
          v-for="(item, i) in localHeaders"
          :key="item.dataField + i"
          class=""
          :class="item.headerClass"
          :ref="'table-grid-header__cell-'+item.dataField"
          :colspan="item.cols"
          :rowspan="item.rows"
      >
        <!--  :style="`grid-column: span ${item.cols };top: ${topFixedPositionForHeaderCell(item).offsetTop}px;  grid-row: span ${item.rows}; ${item.headerStyles}`"       -->
        <slot :name="'header-'+item.dataField" :item="item">
          <span>{{ item.text }}</span>
          <v-tooltip
              top
              v-if="item.headerTooltip != null && item.headerTooltip"
              :color="loaderColor"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                  :size="15"
                  class="btn__icon grey-light-color__important"
                  v-bind="attrs"
                  v-on="on"
              >
                mdi-information
              </v-icon>
            </template>
            <p class="white--text" v-html="item.headerTooltipText()"></p>
          </v-tooltip>
          <span
              class="d-flex align-center justify-center"
              v-if="item.sortable"
          >
                <template v-if="sort.header === item.dataField">
                  <v-btn
                      icon
                      @click="clickSort(item, sort.type ==='asc'? 'desc' : null, item.typeCell)"
                  >
                     <v-icon :size="24" :color="loaderColor" class="btn__icon"
                             v-if="sort.type === 'desc'"> mdi-menu-down</v-icon>
                     <v-icon :size="24" :color="loaderColor" class="btn__icon" v-else> mdi-menu-up</v-icon>
                  </v-btn>
                </template>
                <template v-else>
                    <v-btn
                        icon
                        @click="clickSort(item, null, item.typeCell)"
                    >
                       <v-icon :size="24" :color="loaderColor"> mdi-menu-swap</v-icon>
                    </v-btn>
                </template>
          </span>
        </slot>
      </th>
    </tr>
    </thead>
    <tbody>
    <template v-if="loadingData || loading">
      <tr>
        <td :colspan="numCols">
          <loading-dtable  :num-cols="numCols" :loader-color="loaderColor"></loading-dtable>
        </td>
      </tr>
    </template>
    <template v-else-if="dataRows.length === 0">
      <empty-row-dtable :num-cols="numCols"  ></empty-row-dtable>
    </template>
    <template v-else>
      <tr
          v-for="(row, j) in dataRows"
          :key="(row.id != null ? row.id : j)"
          @click="rowAction($event,row)"
      >
        <td
            v-for="(cell) in headersForRows"
            :key="cell.dataField"
            :colspan="cell.colsDataCalc ? cell.colsDataCalc(row) : cell.cols"
            :rowspan="cell.rowsDataCalc ? cell.rowsDataCalc(row) : cell.rowsData"
        >
          <slot
              :name="cell.dataField"
              :row="row"
              :id="row.id != null ? cell.dataField + row.id : cell.dataField + j"
              :cell="cell"
          >
            <template>
              <span v-html="cellData(row, cell)"></span>
            </template>
          </slot>
        </td>
      </tr>

    </template>
    </tbody>
  </table>
</template>

<script>
import LoadingDtable from "@/components/loadingDtable";
import EmptyRowDtable from "@/components/emptyRowDtable";
export default {
  name: "newTable",
  components: {EmptyRowDtable, LoadingDtable},
  props: {
    headers: {
      type: [Array],
      default: () => []
    },
    idTable: {
      type: String,
      default: ''
    },
    numCols: {
      type: [Number, String],
      default: 0
    },
    headersForRows: {
      type: [Array],
      default: () => []
    },
    maxTableHeight: {
      type: [String, Number],
      default: '550px',
    },
    loadingData: {
      type: Boolean,
      default: false
    },
    dataRows: {
      type: Array,
      default: () => []
    },
    paintBackground: {
      type: [Function],
      default: () => {
      }
    },
    importsComponents: {
      type: [Array, Object]
    },
    loaderColor: {
      type: String,
      default: '#00599b'
    }
  },
  data() {
    return {
      localHeaders: this.headers,
      loading: false,
      sort: {header: null, type: 'asc'}
    }
  },
  computed: {
    tableWidth() {
      return this.$refs['grid-table' + this.idTable]?.clientWidth ?? 0;
    },
    length() {
      return this.dataRows.length
    },
  },
  watch: {
    async headers(newValue) {
      // console.log(this.$refs['grid-table'])
      // await this.$refs['grid-table'].scrollIntoView({block: "start", inline: "nearest"});
      this.loading = true;
      this.localHeaders = newValue;
      // await this.setTopPositions();
      this.loading = false;
    },
  },
  methods: {
    rowAction(e) {
      // console.log('row-action', e)
      this.$emit('row-action', {e: e.e, row: e.row})
    },
    cellData(row, cell) {
      return cell.template ? cell.template(row) : row[cell.dataField]
    },
  }
}
</script>

<style lang="sass" >

table 
  min-width: 100vw
  width: auto
  flex: 1
  display: grid
  border-collapse: collapse
  /* These are just initial values which are overriden using JavaScript when a column is resized */
  //grid-template-columns:
  //  minmax(150px, 1fr)
  //  minmax(150px, 1.67fr)
  //  minmax(150px, 1.67fr)
  //  minmax(150px, 1.67fr)
  //  minmax(150px, 3.33fr)
  //  minmax(150px, 1.67fr)
  //  minmax(150px, 3.33fr)
  //  minmax(150px, 1.67fr)


thead,
tbody,
tr 
  display: contents


th,
td 
  padding: 10px
  //overflow: hidden
  //text-overflow: ellipsis
  //white-space: nowrap


th 
  position: sticky
  top: 0
  background: #6c7ae0
  text-align: left
  font-weight: normal
  font-size: 1.1rem
  color: white
  position: relative


th:last-child 
  border: 0


.resize-handle 
  position: absolute
  top: 0
  right: 0
  bottom: 0
  background: black
  opacity: 0
  width: 3px
  cursor: col-resize


.resize-handle:hover,
  /* The following selector is needed so the handle is visible during resize even if the mouse isn't over the handle anymore */
.header--being-resized .resize-handle 
  opacity: 0.5


th:hover .resize-handle 
  opacity: 0.3


td 
  padding-top: 10px
  padding-bottom: 10px
  color: #808080


//tr:nth-child(even) td
//  background: #f8f6ff

</style>