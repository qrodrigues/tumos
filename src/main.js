import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Maintenance from './Maintenance.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse)

const app = createApp(Maintenance)
app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
