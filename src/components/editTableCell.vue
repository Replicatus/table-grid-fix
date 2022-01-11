<template>
  <v-menu
      v-model="showMenu"
      :close-on-content-click="false"
      :nudge-width="additionalDataActive ? 500 : 250"
      max-width="500"
      offset-y
  ><!--menu.find(el => {return el.dataField === cell.dataField})-->
    <template v-slot:activator="{ on, attrs }">
      <v-progress-circular v-if="loading.value && id === loading.id" color="primary" indeterminate size="20"></v-progress-circular>
      <div
          v-else
          class="blue__v-btn-for-menu"
          v-bind="attrs"
          v-on="on"
          :disabled="disabled"
          @click="showMenu = !showMenu"
      >
        <span v-if="typeof value === 'object' && value"><span style="color: #78909C;">{{value.oldValue}}</span> <span class="ml-3">{{ value.newValue }}</span></span>
        <span v-else>{{value}}</span>
      </div>
    </template>
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  :value="typeof value === 'object' && value ? value.oldValue : value"
                  :label="title + (' текущее значение')"
                  class="mt-2"
                  readonly
                  dense
                  required
              />
              <v-text-field
                  v-model="menuValue"
                  type="Number"
                  :rules="valMenuRules(maxValue,minValue)"
                  :label="title + (' новое значение')"
                  class="mt-2"
                  dense
                  clearable
                  required
              />
            </v-form>
          </v-col>
          <v-col v-if="additionalDataActive">
            <template v-if="loadingAdditionalData.value && id === loadingAdditionalData.id">
              <div class="d-flex fill-height align-center justify-center">
                <v-progress-circular color="primary" class="" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-col>
        </v-row>

      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            class="error__v-btn"
            @click="showMenu = false"
        >
          Отменить
        </v-btn>
        <v-btn
            class="blue__v-btn"
            text
            :loading="loading.value && id === loading.id"
            @click="sendNewValueFromMenu()"
            :disabled="!valid"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "editTableCell",
  props: {
    value: {
      type: [Number, String, Object],
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    maxValue: {
      type: [String, Number]
    },
    minValue: {
      type: [String, Number]
    },
    id: {
      type: [String, Number]
    },
    cell: {
      type: [Object, String]
    },
    row: {
      type: [Object, String],
      validator: (value) =>{
        return ['string', 'object'].includes(typeof value)
      }
    },
    loading: {
      type: [Boolean, Object],
      default: false
    },
    disabled: {
      type: [Boolean, Function],
      default: false
    },
    additionalDataActive: {
      type: Boolean,
      default: false
    },
    additionalData: {
      type: [Object, Array]
    },
    loadingAdditionalData: {
      type: [Boolean, Object],
      default: false
    },
  },
  data() {
    return {
      showMenu: false,
      valid: false,
      menuValue: 0
    }
  },
  watch: {
    showMenu(newValue){
      if (newValue === true){
        this.$emit('get-additional-data', this.row.id)
      }
    },
    loading(newValue, oldValue) {
      if (oldValue.value === true && newValue.value === false)
        this.showMenu = false
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    valMenuRules() {
      return [
        v => !!v || 'введите значение',
      ]
    },
    async sendNewValueFromMenu() {
      await this.validate()
      if (this.valid) {
        this.$emit('component-action', {
          id: this.id,
          value: parseInt(this.menuValue),
          maxValue: this.maxValue,
          row: this.row,
          dataField: this.cell.dataField
        });
        this.showMenu = false;
      }
    },
  }
}
</script>

<style lang="sass">
.blue__v-btn-for-menu
  &.v-btn--disabled
    .v-btn__content
      color: #0D72BD

  .v-progress-circular__overlay
    color: #FFFFFF

  &.theme--light
    background-color: #0D72BD !important

  &.v-btn.v-btn--contained.theme--light.v-size--default
    background-color: #0D72BD !important

  //.v-btn__content
  //  font-size: 14px
  //  line-height: 20px
  //  font-style: normal
  //  font-weight: 600
  //  letter-spacing: 0em
  //  color: #FFFFFF
  //  text-align: center
  //  text-transform: none
  //  padding: 6px 14px
  //border: 1px solid #0D72BD
  //border-radius: 7px
</style>