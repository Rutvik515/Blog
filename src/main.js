import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const app  = createApp(App);

app.use(LoadingPlugin)
app.use(router)
app.use(Toast)
app.mount('#app')
