import './assets/main.css'
import './assets/style/global-fixes.css'
import './assets/style/responsive.css'
import './assets/style/footer.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
})
