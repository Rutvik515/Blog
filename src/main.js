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
import moment from 'moment'
const app  = createApp(App);

app.use(LoadingPlugin)
app.use(Multiselect )
app.use(moment )
app.use(VueDatePicker )
app.use(VueEditor)
app.use(router)
app.use(Toast)
app.mount('#app')