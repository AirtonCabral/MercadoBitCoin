import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .component('VueDatePicker', VueDatePicker)
  .mount('#app')
