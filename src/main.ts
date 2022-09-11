import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import router from './router/router'

import * as ElIcons from "@element-plus/icons"
import './assets/css/index.scss'
const app = createApp(App)
for (const name in ElIcons) {
    app.component(name, (ElIcons as never)[name])
}

app.use(router).use(createPinia()).mount('#app')
