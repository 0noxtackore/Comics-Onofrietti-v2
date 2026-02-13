import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nuevos from '../views/Nuevos.vue'
import Comics from '../views/Comics.vue'
import Personajes from '../views/Personajes.vue'
import PersonajeWiki from '../views/PersonajeWiki.vue'
import ComicIssue from '../views/ComicIssue.vue'
import ComicSeries from '../views/ComicSeries.vue'
import Juegos from '../views/Juegos.vue'
import JuegoWiki from '../views/JuegoWiki.vue'
import Mas from '../views/Mas.vue'
import Registro from '../views/Registro.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'

import NovedadDetalle from '../views/NovedadDetalle.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/nuevos', name: 'Nuevos', component: Nuevos },
  { path: '/nuevos/:id', name: 'NovedadDetalle', component: NovedadDetalle },
  { path: '/comics', name: 'Comics', component: Comics },
  { path: '/comics/issue/:id', name: 'ComicIssue', component: ComicIssue, alias: '/comics/:id' },
  { path: '/comics/series/:slug', name: 'ComicSeries', component: ComicSeries },
  { path: '/personajes', name: 'Personajes', component: Personajes },
  { path: '/personajes/:slug', name: 'PersonajeWiki', component: PersonajeWiki },
  { path: '/juegos', name: 'Juegos', component: Juegos },
  { path: '/juegos/:slug', name: 'JuegoWiki', component: JuegoWiki },
  { path: '/mas', name: 'Mas', component: Mas },
  { path: '/registro', name: 'Registro', component: Registro, meta: { hideChrome: true } },
  { path: '/login', name: 'Login', component: Login, meta: { hideChrome: true } },
  { path: '/buscar', name: 'Search', component: Search },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
})

// Force scroll to top on every navigation to resolve common SPA scroll maintenance issues
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  // Use multiple frames to ensure the DOM has rendered and browser scroll maintenance is overridden
  window.scrollTo(0, 0)
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, 0)
})

export default router