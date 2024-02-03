import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { VueEditor } from "vue3-editor";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Multiselect from '@vueform/multiselect'
import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import moment from 'moment'

import './registerServiceWorker';
import '../src/css/Index.css'
const app  = createApp(App);

app.use(LoadingPlugin)
app.use(Multiselect )
app.use(moment )
app.use(VueDatePicker )
app.use(VueEditor)
app.use(router)
app.use(Toast)
app.use(BootstrapVueNext)
app.mount('#app')