<template>
<div>

  <GridTable
      :data-rows="serverData"
      :headers="headers.massive"
      :headers-for-rows="headersForRows"
      :loading-data="loadingData"
      :num-cols="headers.countCells"
      :max-table-height="maxTableHeight"
      ref="npg-table"
  >
    <!--  v-if="!changingHeaders"  :key='' когда меняется хедер проверить    -->
    <template #header-npg>
      <div style="min-width: 80px">1</div><div>2</div>
    </template>
    <template #npg="{row}">
      <template v-if="row.uslName">
        <div class="font-weight-bold font-size-medium ">
          {{row.uslName[0].toUpperCase()+ row.uslName.slice(1) }}
        </div>
      </template>
      <template v-else>
        <div style="">
          {{row.sprSpec ? row.sprSpec.kodSpec  : row.sprKcpGroup.code }}
        </div>
        <div class="ml-3">
          {{row.sprSpec ?  row.sprSpec.name : row.sprKcpGroup.name}}
        </div>
      </template>
    </template>
    <template #qkcpo18Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpv18Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpz18Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpo19Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpv19Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpz19Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpo20Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpv20Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpz20Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpo21Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpv21Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
    <template #qkcpz21Mon="{row,cell}">
      <edit-table-cell v-bind="cell.props(row,cell, loadingMenu)" @component-action="saveValue($event)"></edit-table-cell>
    </template>
  </GridTable>
</div>
</template>

<script>
import GridTable from "@/components/GridTable";
import form506 from "@/helpers/form5-06";
import EditTableCell from "@/components/editTableCell";
import {getFormData} from "@/API/form5";
export default {
  name: "form6",
  // eslint-disable-next-line vue/no-unused-components
  components: {EditTableCell,  GridTable},
  data() {
    return {
      serverData: [],
      loadingData: false,
      changingHeaders: false,
      headers: form506,
      loadingMenu: {value: false, id: ''},
    }
  },
  created() {
      this.loadingDataTable();
  },

  computed: {
     maxTableHeight(){
      return window.screen.availHeight - 350 + 'px'
    },
    headersForRows(){
      return this.headers.massive.filter(el => el.variable).map(el =>{
        return {...el,
          styles: (row) => {
            if (el.dataField !== 'npg')
              return row.uslName ? 'display: none;' : 'justify-content: unset; text-align: center; '
            else
              return ''
          },
          colsDataCalc: (row) => {
            if (el.dataField !== 'npg')
              return 1;
            else
              return row.uslName ? 13 : 1;
          },
          props: (row, cell, loading) => {
            return {
              value: row[cell.dataField],
              title: '',
              cell: cell,
              id: row.id,
              row: row,
              loading: loading,
            }
          }
        }
      })
    },
  },
  methods: {
    async loadingDataTable() {
      this.loadingData  = true;
      try{
        const res = await getFormData('getPart6', true);
        console.log(res.length)
        this.serverData = res.slice(0,450);
        // setTimeout(() =>{
        //   this.serverData.push(...res.slice(50,100))
        // }, 5000);
        // setTimeout(() =>{
        //   this.serverData.push(...res.slice(100,150))
        // }, 10000);
        // setTimeout(() =>{
        //   this.serverData.push(...res.slice(150,200))
        // }, 15000);
        // setTimeout(() =>{
        //   this.serverData.push(...res.slice(200,250))
        // }, 20000);
        // setTimeout(() =>{
        //   this.serverData.push(...res.slice(250,300))
        // }, 25000);
        // setTimeout(() =>{
        //   this.serverData.push(...res.slice(300,350))
        // }, 30000);
        // setTimeout(() =>{
        //   this.serverData.push(...res.slice(350,400))
        // }, 35000);
        this.loadingData = false;
      }catch (e) {
        this.loadingData = false;
      }
    },
    saveValue(e){
      const item = this.serverData.find(el => el.id === e.id );
      item[e.dataField] = {oldValue: item[e.dataField], newValue: e.value};
    }
  },
}
</script>

<style scoped>

</style>