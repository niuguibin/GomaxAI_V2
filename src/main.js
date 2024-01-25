import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import QrcodeVue from "qrcode.vue";
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import {icons} from "@element-plus/icons-vue/global";

const app = createApp(App)

app.use(createPinia())
app.use(router)
Object.keys(icons).forEach(key => {
    app.component(key,icons[key])
})
app.use(QrcodeVue)
app.use(ElementPlus)
app.mount('#app')
