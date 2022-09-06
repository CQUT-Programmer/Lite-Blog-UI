import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import router from './router/router'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import * as ElIcons from "@element-plus/icons"

import './assets/css/common.css'
const app = createApp(App)
/*for (const name in ElIcons) {
    app.component(name, (ElIcons as never)[name])
}*/
// app.use(ElementPlus)
app.use(router).use(createPinia()).mount('#app')
