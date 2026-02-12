<template>
  <!-- Header Desktop -->
  <header :class="['menu-one', { 'light-mode': isLightMode }]">
    <div class="header-container">
      <!-- Contenedor específico para el logo -->
      <div class="logo-container">
        <div class="header-left">
          <div v-if="userName" class="user-badge" aria-label="Usuario">
            <span class="user-circle">{{ userInitial }}</span>
            <span class="user-name">{{ userName }}</span>
            <button class="user-logout" type="button" @click="logout" aria-label="Cerrar sesión">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2h1v2h6V2H7v2H6V2z"/>
                <path d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
              </svg>
            </button>
          </div>

          <div v-else class="auth-buttons">
            <router-link to="/registro" class="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
              </svg>
              <span class="tooltip">Regístrate</span>
            </router-link>
            <span class="separator">/</span>
            <router-link to="/login" class="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 0 1 .858.514"/>
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
              </svg>
              <span class="tooltip">Inicia sesión</span>
            </router-link>
          </div>
        </div>
        <router-link to="/" class="header-center">
          <span class="logo-draw" :class="{ 'is-navigating': isNavigating }" aria-hidden="true">
            <img src="/img/Logo.png" class="logo" alt="">
            <img src="/img/Logo.png" class="logo logo-glow" alt="">
          </span>
          <img src="/img/Logo.png" class="logo sr-only-logo" :class="{ 'logo-navigating': isNavigating }" alt="Logo Comics Onofrietti">
        </router-link>
        <div class="header-right">
          <router-link to="/buscar" class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <span class="tooltip">Buscar</span>
          </router-link>
        </div>
      </div>
      <nav class="desktop-nav">
        <div class="nav-item" @mouseleave="hideMegaMenu">
          <router-link to="/nuevos" class="nav-link" @mouseenter="showMegaMenu('nuevos')" @click="hideMegaMenuImmediate">Nuevos</router-link>
        </div>
        <div class="nav-item" @mouseleave="hideMegaMenu">
          <router-link to="/comics" class="nav-link" @mouseenter="showMegaMenu('comics')" @click="hideMegaMenuImmediate">Comics</router-link>
        </div>
        <div class="nav-item" @mouseleave="hideMegaMenu">
          <router-link to="/personajes" class="nav-link" @mouseenter="showMegaMenu('personajes')" @click="hideMegaMenuImmediate">Personajes</router-link>
        </div>
        <div class="nav-item" @mouseleave="hideMegaMenu">
          <router-link to="/juegos" class="nav-link" @mouseenter="showMegaMenu('juegos')" @click="hideMegaMenuImmediate">Juegos</router-link>
        </div>
        <div class="nav-item" @mouseleave="hideMegaMenu">
          <!-- <router-link to="/mas" class="nav-link" @mouseenter="showMegaMenu('mas')" @click="hideMegaMenuImmediate">Más</router-link> -->
        </div>
      </nav>
    </div>

    <!-- Mega Menu Dropdown -->
    <transition name="mega-fade">
      <div 
        v-if="activeMegaMenu && megaMenuData[activeMegaMenu]" 
        :class="['mega-panel', activeMegaMenu]" 
        @mouseenter="cancelHideMegaMenu"
        @mouseleave="hideMegaMenuImmediate"
      >
        <div class="mega-container">
          <div class="mega-header">
            <span class="mega-title">{{ megaMenuData[activeMegaMenu].title }}</span>
            <router-link :to="'/' + activeMegaMenu" class="mega-view-all">VER TODO</router-link>
          </div>
          <div class="mega-grid">
            <router-link 
              v-for="item in megaMenuData[activeMegaMenu].items" 
              :key="item.title" 
              :to="item.link"
              class="mega-item"
              @click="hideMegaMenuImmediate"
            >
              <div class="mega-img-wrap">
                <img :src="getImageUrl(item.image)" :alt="item.title">
              </div>
              <div class="mega-item-info">
                <span class="mega-item-title">{{ item.title }}</span>
                <span class="mega-item-subtitle">{{ item.subtitle }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </transition>

    <!-- Mega Menu Overlay -->
    <transition name="fade">
      <div v-if="activeMegaMenu" class="mega-overlay" @mouseenter="hideMegaMenu"></div>
    </transition>
  </header>

  <!-- Header Mobile/Tablet -->
  <header :class="['menu-two', { 'light-mode': isLightMode }]">
    <div class="mobile-container">
      <div class="mobile-header">
        <div class="mobile-left">
          <router-link to="/buscar" class="mobile-search" aria-label="Buscar">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </router-link>
        </div>
        <router-link to="/" class="mobile-logo">
          <img src="/img/Logo.png" class="logo-mobile" :class="{ 'logo-navigating': isNavigating }" alt="Logo Comics Onofrietti">
        </router-link>
        <div class="mobile-menu-toggle" @click="toggleMenu(true)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="currentColor">
            <g fill-rule="evenodd">
              <path d="M0 14h24v2H0zM0 8h24v2H0zM0 2h24v2H0z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Menú móvil desplegable -->
    <div :class="['mobile-overlay', { 'active': isMenuOpen }]" @click="toggleMenu(false)"></div>
    <div :class="['mobile-menu', { 'active': isMenuOpen }]">
      <div class="mobile-menu-header">
        <img src="/img/Logo.png" class="mobile-menu-logo" alt="Logo Comics Onofrietti">
        <div v-if="userName" class="mobile-user-badge mobile-user-badge--menu" aria-label="Usuario">
          <span class="mobile-user-circle">{{ userInitial }}</span>
          <button class="mobile-user-logout" type="button" @click="logout" aria-label="Cerrar sesión">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2h1v2h6V2H7v2H6V2z"/>
              <path d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg>
          </button>
        </div>
        <button class="mobile-menu-close" @click="toggleMenu(false)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
      </div>
      <nav class="mobile-nav">
        <router-link to="/nuevos" class="mobile-nav-link" @click="toggleMenu(false)">Nuevos</router-link>
        <router-link to="/comics" class="mobile-nav-link" @click="toggleMenu(false)">Comics</router-link>
        <router-link to="/personajes" class="mobile-nav-link" @click="toggleMenu(false)">Personajes</router-link>
        <router-link to="/juegos" class="mobile-nav-link" @click="toggleMenu(false)">Juegos</router-link>
        <!-- <router-link to="/mas" class="mobile-nav-link" @click="toggleMenu(false)">Más</router-link> -->
        <template v-if="userName">
          <button class="mobile-nav-link mobile-nav-logout" type="button" @click="logout">Cerrar sesión</button>
        </template>
        <template v-else>
          <router-link to="/login" class="mobile-nav-link" @click="toggleMenu(false)">Iniciar sesión</router-link>
          <router-link to="/registro" class="mobile-nav-link" @click="toggleMenu(false)">Regístrate</router-link>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { comics, featuredComics, games } from '../assets/js/slider.js'
import { characters } from '../data/characters'

defineProps({
  isLightMode: Boolean
})

const baseUrl = import.meta.env.BASE_URL
const isNavigating = ref(false)
const isMenuOpen = ref(false)
const activeMegaMenu = ref(null)
const megaMenuTimer = ref(null)

const userName = ref('')
const userInitial = computed(() => (userName.value || '').trim().slice(0, 1).toUpperCase())

const loadUser = () => {
  try {
    const raw = localStorage.getItem('onofrietti_user')
    if (!raw) {
      userName.value = ''
      return
    }
    const parsed = JSON.parse(raw)
    userName.value = String(parsed?.name || '').trim()
  } catch {
    userName.value = ''
  }
}

const logout = () => {
  localStorage.removeItem('onofrietti_user')
  loadUser()
  window.dispatchEvent(new Event('onofrietti-auth'))
}

const toggleMenu = (open) => {
  isMenuOpen.value = open
}

const getImageUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${baseUrl}${cleanPath}`
}

// Mega Menu Data
const megaMenuData = computed(() => ({
  nuevos: {
    title: 'LO ÚLTIMO',
    items: featuredComics.slice(0, 4).map(c => ({
      title: c.title,
      subtitle: c.category,
      image: c.image,
      link: `/nuevos/${c.id}`
    }))
  },
  comics: {
    title: 'COMICS DESTACADOS',
    items: comics.slice(0, 4).map(c => ({
      title: c.title,
      subtitle: `Issue #${c.issue}`,
      image: c.image,
      link: `/comics/issue/${c.id}`
    }))
  },
  personajes: {
    title: 'HÉROES Y VILLANOS',
    items: characters.filter(c => c.role === 'hero' || c.role === 'villain').slice(0, 4).map(c => ({
      title: c.name,
      subtitle: c.role?.toUpperCase(),
      image: c.image,
      link: `/personajes/${c.slug}`
    }))
  },
  juegos: {
    title: 'JUEGOS RECOMENDADOS',
    items: games.slice(0, 4).map(g => ({
      title: g.title,
      subtitle: g.category,
      image: g.image,
      link: `/juegos/${g.slug}`
    }))
  },
  mas: {
    title: 'EXPLORA MÁS',
    items: [
      { title: 'NEWS', subtitle: 'Últimas novedades', image: '/img/slide1.png', link: '/mas' },
      { title: 'VIDEOS', subtitle: 'Contenido exclusivo', image: '/img/comic1.jpg', link: '/mas' },
      { title: 'OFERTAS', subtitle: 'Limited time!', image: '/img/most.jpg', link: '/mas' },
      { title: 'CULTURA', subtitle: 'Pop Universe', image: '/img/photo1.webp', link: '/mas' }
    ]
  }
}))

const showMegaMenu = (menu) => {
  if (megaMenuTimer.value) {
    clearTimeout(megaMenuTimer.value)
    megaMenuTimer.value = null
  }
  activeMegaMenu.value = menu
}

const cancelHideMegaMenu = () => {
  if (megaMenuTimer.value) {
    clearTimeout(megaMenuTimer.value)
    megaMenuTimer.value = null
  }
}

const hideMegaMenu = () => {
  megaMenuTimer.value = setTimeout(() => {
    activeMegaMenu.value = null
  }, 80) // Small delay to allow bridge movement
}

const hideMegaMenuImmediate = () => {
  if (megaMenuTimer.value) clearTimeout(megaMenuTimer.value)
  activeMegaMenu.value = null
}

onMounted(() => {
  loadUser()
  window.addEventListener('storage', loadUser)
  window.addEventListener('onofrietti-auth', loadUser)
  // Detectar navegación en la página para efecto de brillo en logo
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      isNavigating.value = true
      setTimeout(() => {
        isNavigating.value = false
      }, 2000)
    })
  })

  // Detectar scroll para efecto de navegación
  let scrollTimeout
  window.addEventListener('scroll', () => {
    isNavigating.value = true
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      isNavigating.value = false
    }, 1000)
  })
})

onUnmounted(() => {
  window.removeEventListener('storage', loadUser)
  window.removeEventListener('onofrietti-auth', loadUser)
})
</script>

<style scoped>
/* Estilos del menubar */

/* Header Desktop */
.menu-one {
  display: block;
  width: 100%;
  background: #202020;
  color: #fff;
  padding: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #333;
  position: relative;
  z-index: 100;
}

.header-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px 0;
}

.header-left, .header-right {
  flex: 1;
  display: flex;
  align-items: center;
}

.header-left {
  justify-content: flex-start;
}

.header-right {
  justify-content: flex-end;
}

.header-center {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.user-circle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 1px;
}

.user-name {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-logout {
  width: 34px;
  height: 34px;
  border-radius: 0;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.user-logout:hover {
  background: rgba(255, 255, 255, 0.1);
}

.separator {
  color: #666;
  font-weight: 300;
}

.logo {
  height: 50px;
  width: auto;
}

.sr-only-logo {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.logo-draw {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.logo-draw .logo {
  display: block;
  clip-path: none;
}

.logo-draw .logo-glow {
  position: absolute;
  inset: 0;
  height: 50px;
  width: auto;
  opacity: 0;
  filter: drop-shadow(0 0 6px rgba(37, 99, 235, 0.95)) drop-shadow(0 0 14px rgba(37, 99, 235, 0.55));
  animation: logoSweep 2.6s ease-in-out infinite;
  clip-path: inset(0 100% 0 0);
}

.logo-draw.is-navigating .logo-glow {
  animation: none;
  clip-path: none;
  opacity: 1;
}

@keyframes logoSweep {
  0% { opacity: 0; clip-path: inset(0 100% 0 0); }
  12% { opacity: 0.85; }
  55% { opacity: 0.85; clip-path: inset(0 0 0 0); }
  80% { opacity: 0; clip-path: inset(0 0 0 100%); }
  100% { opacity: 0; clip-path: inset(0 0 0 100%); }
}

.logo-navigating {
  filter: brightness(1.2);
}

.svg-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.svg-container:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.svg-container svg {
  width: 18px;
  height: 18px;
  color: #fff;
  transition: all 0.3s ease;
}

.svg-container:hover svg {
  color: #2563eb;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  padding: 5px 10px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;
  margin-top: 10px;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  border: 1px solid #333;
}

.svg-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.desktop-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #202020;
  border-top: 1px solid #333;
  position: relative;
  height: 52px;
  overflow: hidden;
  box-shadow:none;
}

.nav-item {
  display: flex;
  height: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  padding: 0 25px;
  font-family: 'Roboto Condensed', sans-serif;
  box-shadow: inset 0 -2px 0 transparent;
}

.nav-link:hover {
  color: #fff;
  background: #333;
  box-shadow: inset 0 -2px 0 #2563eb;
}

/* MEGA MENU STYLES */
.mega-panel {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  color: #111111;
  border-bottom: 3px solid #2563eb;
  z-index: 200;
  box-shadow: none;
  padding: 25px 0; /* Reduced from 40px */
}

/* Specific Themes */
.mega-panel.personajes { border-bottom-color: #2563eb; }
.mega-panel.juegos { border-bottom-color: #0084ff; }
.mega-panel.mas { border-bottom-color: #ff9900; }
.mega-panel.comics { border-bottom-color: #2563eb; }
.mega-panel.nuevos { border-bottom-color: #2563eb; }

.mega-overlay {
  position: fixed;
  top: 112px; /* logo 60 + nav 52 */
  left: 0;
  width: 100%;
  height: calc(100vh - 112px);
  background: rgba(0,0,0,0.7);
  z-index: 150;
  backdrop-filter: blur(4px);
}

.mega-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 40px;
}

.mega-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  padding-bottom: 15px;
}

.mega-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  font-weight: 900;
  color: #111111;
  letter-spacing: 1px;
}

.mega-view-all {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  font-weight: 900;
  color: #2563eb;
  text-decoration: none;
  letter-spacing: 1px;
}

.mega-view-all:hover {
  text-decoration: underline;
}

.mega-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* Reduced gap */
}

.mega-item {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease;
}

.mega-item:hover {
  transform: translateY(-5px);
}

.mega-img-wrap {
  aspect-ratio: 16/9; /* More panoramic/compact default */
  background: #f2f2f2;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}

/* Adjust aspect ratio for comics */
.mega-panel.comics .mega-img-wrap {
  aspect-ratio: 2/3;
  width: 65%; /* Reduced from 85% */
  margin: 0 auto;
  border: 1px solid rgba(0,0,0,0.12);
}

.mega-panel.personajes .mega-img-wrap {
  aspect-ratio: 1/1;
  width: 90%;
  margin: 0 auto;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
  border-left: 3px solid #2563eb;
}

.mega-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.mega-item:hover .mega-img-wrap img {
  transform: scale(1.1);
}

.mega-item-info {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center text for the more compact look */
  text-align: center;
}

.mega-item-title {
  color: #111111;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 13px; /* Slightly smaller */
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  transition: color 0.3s ease;
}

.mega-item-subtitle {
  color: #555555;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}

/* Hover Themed Colors */
.mega-panel.personajes .mega-item:hover .mega-item-title { color: #2563eb; }
.mega-panel.comics .mega-item:hover .mega-item-title { color: #2563eb; }
.mega-panel.juegos .mega-item:hover .mega-item-title { color: #0084ff; }
.mega-panel.nuevos .mega-item:hover .mega-item-title { color: #2563eb; }

/* TRANSITIONS */
.mega-fade-enter-active, .mega-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.mega-fade-enter-from, .mega-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Header Mobile/Tablet */
.menu-two {
  display: none;
  width: 100%;
  background: #202020;
  color: #fff;
  padding: 10px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid #333;
  position: relative;
  z-index: 100;
}

.mobile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 50px;
}

.mobile-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
}

.mobile-left {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.mobile-user-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  max-width: 180px;
}

.mobile-user-badge--menu {
  margin-left: auto;
}

.mobile-user-circle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 1px;
}

.mobile-user-name {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  max-width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: none;
}

.mobile-user-logout {
  width: 34px;
  height: 34px;
  border-radius: 0;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.mobile-user-logout:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-nav-logout {
  background: transparent;
  border: none;
  text-align: left;
  padding: 0;
  cursor: pointer;
}

.mobile-search {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #fff;
  text-decoration: none;
}

.mobile-search svg {
  width: 18px;
  height: 18px;
}

.logo-mobile {
  height: 40px;
  width: auto;
}

.mobile-menu-toggle {
  cursor: pointer;
  padding: 8px;
  background: transparent;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.mobile-menu-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #444;
}

.mobile-menu-toggle svg {
  color: #fff;
}

/* Menú móvil desplegable */
.mobile-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.8);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  backdrop-filter: blur(2px);
}
.mobile-overlay.active {
  opacity: 1; visibility: visible;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%; /* Slide from left */
  width: min(320px, 85vw);
  height: 100dvh;
  background: #151515;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 25px rgba(0,0,0,0.7);
  border-right: 1px solid #333;
}

@media (max-width: 768px) {
  .mobile-menu {
    width: 100vw;
  }
}

@media (max-width: 1024px) {
  .menu-one {
    display: none;
  }

  .menu-two {
    display: block;
  }

  .nav-link {
    padding: 12px 16px;
    font-size: 13px;
  }
}

@media (min-width: 1025px) {
  .menu-one {
    display: block;
  }

  .menu-two {
    display: none;
  }
}

@media (max-width: 480px) {
  .mobile-header {
    height: 50px;
  }
}

.mobile-menu.active {
  left: 0;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #202020;
  border-bottom: 1px solid #333;
}

.mobile-menu-logo {
  height: 40px;
  width: auto;
  display: block;
  image-rendering: -webkit-optimize-contrast; /* mejora nitidez en navegadores WebKit */
  image-rendering: crisp-edges;               /* fuerza bordes más definidos */
  -ms-interpolation-mode: bicubic;            /* suavizado en IE */
}

.mobile-menu-title {
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: 1px;
}

.mobile-menu-close {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-close svg {
  width: 24px;
  height: 24px;
}

.mobile-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-y: auto;
  background:#151514;
}

.mobile-nav-link {
  display: block;
  padding: 18px 25px;
  color: #ccc;
  background:#151515;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  border-bottom: 1px solid #222;
  font-family: 'Roboto Condensed', sans-serif;
}

.mobile-nav-link:hover {
  background: #222;
  color: #2563eb;
  padding-left: 35px;
}

.mobile-divider {
  height: 20px;
  background: #000;
  border-bottom: 1px solid #333;
  border-top: 1px solid #333;
}

/* Light Mode Styles override */
.light-mode {
  /* Ensure light mode doesn't break the layout but respects user preference if really needed. 
     However, user asked for MenuBar background match. 
     We will keep light mode strictly to text/inner elements if toggled. */
}
</style>
