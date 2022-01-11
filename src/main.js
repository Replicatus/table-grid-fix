import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
  vuetify: new Vuetify(
      {
        icons: {
          iconfont: 'mdi',
        },
        theme: {
          themes: {
            light: {
              primary: '#00599B',
              secondary: '#0292e1',
              accent: '#82B1FF',
              error: '#ED393E',
              info: '#618AA7',
              success: '#29A128',
              warning: '#D4990A',
            }
          }
        }
      }
  ),
}).$mount('#app')
