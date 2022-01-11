<template>
  <div class="table-grid table-grid__container" :ref="'grid-table' + idTable"
       :style="`grid-template-columns : repeat(${numCols}, 1fr); max-height: ${maxTableHeight};`"
  >
<!--    <div-->
<!--        class="table-grid__container"-->
<!--        :style="`grid-template-columns : repeat(${numCols}, 1fr); max-height: ${maxTableHeight};`"-->
<!--    >-->
      <!--       header -->
<!--      <div-->
<!--          class="table-grid-header-row"-->
<!--          :style="`grid-column: span ${numCols}; grid-template-columns : repeat(${numCols}, 1fr )`"-->
<!--          ref="table-grid-header-row"-->
<!--      >-->
<!--        <template v-if="!loading">-->
          <slot name="defaultHeader" :headers="localHeaders">

            <div
                v-for="(item, i) in localHeaders"
                :key="item.dataField + i"
                class="table-grid-header__cell"
                :class="item.headerClass"
                :ref="'table-grid-header__cell-'+item.dataField"
                :style="`grid-column: span ${item.cols };top: ${topFixedPositionForHeaderCell(item).offsetTop}px;  grid-row: span ${item.rows};
              ${item.headerStyles}`"
            >
<!--  top: ${topFixedPositionForHeaderCell(item).offsetTop}px;              -->
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
            </div>
          </slot>
<!--        </template>-->
        <slot name="customHeader" :headers="headers">

        </slot>
<!--      </div>-->
      <!--        body-->
      <loading-dtable v-if="loadingData || loading" :num-cols="numCols" :loader-color="loaderColor"></loading-dtable>
      <empty-row-dtable :num-cols="numCols" v-else-if="dataRows.length === 0" ></empty-row-dtable>
      <template v-else>
<!--        <div class="table-grid-body-row"-->
<!--             v-for="(row, j) in dataRows"-->
<!--             :key="(row.id != null ? row.id : j)"-->
<!--             :style="`grid-column: span ${numCols}; grid-template-columns : repeat(${numCols}, 1fr)`"-->
<!--             @click="rowAction($event,row)"-->
<!--             :ref="'table-grid-body-row__'+(row.id != null ? row.id : j)"-->
<!--        >-->
<!--          <div-->
<!--              class="table-grid-body-row__cell"-->
<!--              v-for="(cell) in headersForRows"-->
<!--              :key="cell.dataField"-->
<!--              :class="[cell.class, painCell(row, cell)]"-->
<!--              :style="`${typeof cell.styles === 'function' ? cell.styles(row) : cell.styles};` + `grid-column: span ${cell.colsDataCalc ? cell.colsDataCalc(row) : cell.cols}; grid-row: span ${cell.rowsDataCalc ? cell.rowsDataCalc(row) : cell.rowsData};`"-->
<!--          >-->
<!--            &lt;!&ndash;           grid-template-columns: minmax(200px, ${(numCols )}fr); &ndash;&gt;-->
<!--            <slot :name="cell.dataField" :row="row" :id="row.id != null ? cell.dataField + row.id : cell.dataField + j" :cell="cell">-->
<!--              <template>-->
<!--                <span v-html="cellData(row, cell)"></span>-->
<!--              </template>-->
<!--            </slot>-->
<!--          </div>-->
<!--        </div>-->
        <row-dtable
             v-for="(row, j) in dataRows"
             :key="(row.id != null ? row.id : j)"
             :row="row"
             :num-cols="numCols"
             :headers-for-rows="headersForRows"
             :index="j"
             @row-action="rowAction($event)"
             :ref="'table-grid-body-row__'+(row.id != null ? row.id : j)"
        >
<!--          <slot name="row" :row="row" :headers="headersForRows" :id="row.id != null ? row.id : j">-->

<!--          </slot>-->
<!--     :key="(row.id != null ? row.id : j)"      @click="rowAction($event,row)"    :ref="'table-grid-body-row__'+(row.id != null ? row.id : j)"   :style="`grid-column: span ${numCols}; grid-template-columns : repeat(${numCols}, 1fr)`"     -->
        </row-dtable>
      </template>
    </div>
<!--  </div>-->
</template>

<script>

import LoadingDtable from "@/components/loadingDtable";
import EmptyRowDtable from "@/components/emptyRowDtable";
import RowDtable from "@/components/rowDtable";
export default {
  name: "GridTable",
  // eslint-disable-next-line vue/no-unused-components
  components: {RowDtable, EmptyRowDtable, LoadingDtable},
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
    loaderColor:{
      type: String,
      default: '#00599b'
    }
  },
  computed: {
    tableWidth(){
      return this.$refs['grid-table' + this.idTable]?.clientWidth ?? 0;
    },
    length(){
      return this.dataRows.length
    },
    slots(){
      return this.$slots
    }
  },
  data() {
    return {
      localHeaders: this.headers,
      loading: false,
      sort: {header: null, type: 'asc'}
    }
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
    length(a){
      if (a !== 0)
        setTimeout(() => {this.setTopPositions()}, 2000)
    }
  },
  mounted() {

    // window.addEventListener('resize', this.setTopPositions)
    // console.log("!!",this.$refs['grid-table' + this.idTable].clientWidth);
    // this.$refs['grid-table' + this.idTable].addEventListener('resize', this.setTopPositions);
    // this.setTopPositions();
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.setTopPositions)
    // this.$refs['grid-table' + this.idTable].removeEventListener('resize', this.setTopPositions)
  },
  methods: {
    rowAction(e) {
      // console.log('row-action', e)
      this.$emit('row-action', {e: e.e, row: e.row})
    },
    cellData(row, cell) {
      return cell.template ? cell.template(row) : row[cell.dataField]
    },
    clickSort(e, type = null, typeCell) {
      console.log(e, ' - ', type);
      this.sort = {header: e.dataField, type: type ?? 'asc'};
      const directions = {
        asc: 1,
        desc: -1
      };
      const direction = directions[type] ?? 1;
      switch (typeCell) {
        case 'number':
          if (e.template)
            this.dataRows.sort((a, b) => direction * (e.template(a) - e.template(b)));
          else
            this.dataRows.sort((a, b) => direction * (a[e.dataField] - b[e.dataField]));
          break;
        case 'string': {
          if (e.template)
            this.dataRows.sort((a, b) => direction * e.template(a).localeCompare(e.template(b), ["ru", 'en'], {caseFirst: 'upper'}));
          else
            this.dataRows.sort((a, b) => direction * a[e.dataField].localeCompare(b[e.dataField], ["ru", 'en'], {caseFirst: 'upper'}));
          break;
        }
        default: {
          if (e.template)
            this.dataRows.sort((a, b) => direction * e.template(a).localeCompare(e.template(b), ["ru", 'en'], {caseFirst: 'upper'}));
          else
            this.dataRows.sort((a, b) => direction * a[e.dataField].localeCompare(b[e.dataField], ["ru", 'en'], {caseFirst: 'upper'}));
          break;
        }
      }
    },
    async setTopPositions() {
      console.error(11)
      this.localHeaders = await Promise.all(
          this.localHeaders.map(async el => {
            const offsetHeight = this.$refs['table-grid-header__cell-' + el.dataField] ? this.$refs['table-grid-header__cell-' + el.dataField][0]?.offsetHeight : '';
            const offsetTop = this.$refs['table-grid-header__cell-' + el.dataField] ? this.$refs['table-grid-header__cell-' + el.dataField][0]?.offsetTop : '';
            const clientHeight = this.$refs['table-grid-header__cell-' + el.dataField] ? this.$refs['table-grid-header__cell-' + el.dataField][0]?.clientHeight : '';
            const clientWidth = this.$refs['table-grid-header__cell-' + el.dataField] ? this.$refs['table-grid-header__cell-' + el.dataField][0]?.clientWidth : '';
            return {
              ...el,
              offsetHeight: offsetHeight,
              offsetTop: offsetTop - 2,
              clientHeight: clientHeight,
              clientWidth: clientWidth
            }
          })

      )
    },
    calcStylesForRowCell(row,cell){
      return `${typeof cell.styles === 'function' ? cell.styles(row) : cell.styles};` +`grid-column: span ${cell.colsDataCalc ? cell.colsDataCalc(row) : cell.cols}; grid-row: span ${cell.rowsDataCalc ? cell.rowsDataCalc(row) : cell.rowsData};`
    },
    topFixedPositionForHeaderCell(cell) {
      return this.localHeaders.length > 0 ? this.localHeaders.find(el => el.dataField === cell.dataField) : ''
    },
    // eslint-disable-next-line no-unused-vars
    painCell(row, cell) {
      if (this.paintBackground(row))
        return this.paintBackground(row)();
    }
  },
}
</script>

<style lang="sass">
.table-grid
  scrollbar-width: thin!important
  scrollbar-color: #00599B  #CFE0EC
  ::-webkit-scrollbar
    width: 4px
    height: 8px
  ::-webkit-scrollbar-track
    box-shadow: inset 0 0 3px #CFE0EC
  ::-webkit-scrollbar-thumb
    background-color: #00599B
    border-radius: 10px
  &__container
    display: grid
    gap: 0
    width: 100%
    border-top: 2px solid #CFD8DC
    overflow-x: auto
    grid-auto-rows: minmax(30px, auto)
    grid-auto-flow: dense
    position: relative
    z-index: 1
    overflow-y: auto
    max-height: 550px
  .virtual-scroll-dtable
    //gap: 0
    //display: grid
    .vue-recycle-scroller__item-wrapper
      //display: grid
      //gap: 0
      //width: 100%
      .vue-recycle-scroller__item-view
        gap: 0
        display: contents
  &-header-row
    gap: 0
    display: contents
  &-header__cell
    border-bottom: 2px solid #CFD8DC
    border-left: 1px solid #CFD8DC
    padding: 5px
    display: grid
    //top: 0
    position: sticky
    position: -webkit-sticky
    justify-content: center
    align-items: center
    font-size: 16px
    font-weight: 500
    color: #89A0B0
    z-index: 2
    background-color: #FFFFFF
    text-align: center
    &:first-child
      border-left: 0
      text-align: left
      justify-content: flex-start
  &-body-row
    border-bottom: 1px solid #CFD8DC
    gap: 0
    display: contents
    &:hover
      cursor: pointer
      >.table-grid-body-row__cell
        background-color: #F5FAFD
        color: #00599B
    //font-weight: 500
    //transform: translateY(-3px)
    //box-shadow: 0 2px 4px rgba(14, 21, 47, 0.1), 0 -2px 4px rgba(14, 21, 47, 0.02)
    //transition: 0.1s
    //transition: all 0.1s ease
    &__cell
      border-bottom: 1px solid #CFD8DC
      border-left: 1px solid #CFD8DC
      display: grid
      padding: 5px
      font-size: 14px
      justify-content: center
      align-items: center
      color: #455A64
      &:first-child
        border-left: 0
</style>