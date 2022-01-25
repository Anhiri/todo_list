
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas)

const app = createApp(App).use(router);
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')
