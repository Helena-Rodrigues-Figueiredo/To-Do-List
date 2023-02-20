import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRightFromBracket, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faRightFromBracket, faEdit, faTrash)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(bootstrap).use(router).mount('#app')
