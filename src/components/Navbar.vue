<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="navbar" :class="{ 'sticky': isSticky }">
    <div class="navbar-top">
      <div class="nav-container">
        <div class="nav-left">
          <a href="#" class="nav-link">INICIAR SESIÓN / ÚNETE</a>
        </div>
        <div class="nav-center">
          <a href="/" class="logo">
            <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg" class="onofrietti-logo-svg">
              <rect fill="#2563eb" width="36" height="52"/>
              <path fill="#FFF" d="M31.139 25.122c0 .245-.23.447-.514.447h-1.042c-.284 0-.514-.202-.514-.447V7.15c0-.245.23-.447.514-.447h1.042c.284 0 .514.202.514.447v17.972zM27.203 25.122c0 .245-.23.447-.514.447H25.65c-.284 0-.514-.202-.514-.447V7.15c0-.245.23-.447.514-.447H26.69c.284 0 .514.202.514.447v17.972zM15.421 21.056c0 .245-.23.447-.514.447h-.514s-.514-.202-.514-.447l-.001-3.136h-.409l-.001 3.136c0 .245-.231.447-.514.447h-.515c-.283 0-.514-.202-.514-.447V7.15c0-.245.231-.447.514-.447h3.003c.283 0 .514.202.514.447v13.906h-.001zm-1.542-6.526V9.453c0-.245-.23-.447-.514-.447h-.514c-.284 0-.514.202-.514.447v5.077c0 .245.23.447.514.447h.514c.284 0 .514-.202.514-.447zM20.25 21.056c0 .245-.23.447-.514.447h-.514c-.284 0-.514-.202-.514-.447V7.15c0-.245.23-.447.514-.447h.514c.284 0 .514.202.514.447v13.906zM9.914 21.056c0 .245-.23.447-.514.447H8.358c-.284 0-.514-.202-.514-.447V7.15c0-.245.23-.447.514-.447h.514c.284 0 .514.202.514.447v7.501h1.765V7.15c0-.245.231-.447.514-.447h.515c.284 0 .514.202.514.447v13.906c0 .245-.23.447-.514.447h-.515c-.283 0-.514-.202-.514-.447v-3.763H9.914v3.763z"/>
            </svg>
            <span class="logo-text">ONOFRIETTI</span>
          </a>
        </div>
        <div class="nav-right">
          <a href="#" class="nav-link">ONOFRIETTI INSIDER</a>
        </div>
      </div>
    </div>
    <div class="navbar-bottom">
      <ul class="nav-menu">
        <li><a href="#" class="menu-item active">NOTICIAS</a></li>
        <li><a href="#" class="menu-item">COMICS</a></li>
        <li><a href="#" class="menu-item">PERSONAJES</a></li>
        <li><a href="#" class="menu-item">PELÍCULAS</a></li>
        <li><a href="#" class="menu-item">SERIES</a></li>
        <li><a href="#" class="menu-item">JUEGOS</a></li>
        <li><a href="#" class="menu-item">VIDEOS</a></li>
        <li><a href="#" class="menu-item">MÁS</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: var(--onofrietti-black);
  border-bottom: 1px solid var(--onofrietti-dark-grey);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.sticky {
  position: fixed;
  top: 0;
  left: 0;
}

.navbar-top {
  height: 52px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--onofrietti-dark-grey);
}

.nav-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.nav-left, .nav-right {
  flex: 1;
}

.nav-right {
  text-align: right;
}

.nav-link {
  font-size: 12px;
  font-weight: 700;
  color: var(--onofrietti-white);
  letter-spacing: 0.5px;
}

.nav-center {
  display: flex;
  justify-content: center;
}

.logo {
  display: flex;
  align-items: center;
  height: 52px;
  background-color: var(--onofrietti-red);
  padding: 0 15px;
  position: relative;
}

.logo-text {
  font-size: 32px;
  font-weight: 900;
  color: white;
  letter-spacing: -2px;
  line-height: 1;
  transform: scaleY(1.5);
  margin-left: 5px;
}

.onofrietti-logo-svg {
  height: 52px;
  display: none; /* We use text with scaleY for that condensed look or svg */
}

/* Redesigning logo to look more like the real one */
.logo {
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  color: white;
  background-color: #2563eb;
  font-size: 40px;
  font-weight: 800;
  padding: 0 10px;
  line-height: 52px;
  height: 52px;
  display: block;
}

.navbar-bottom {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-menu {
  display: flex;
  gap: 25px;
}

.menu-item {
  font-size: 13px;
  font-weight: 700;
  padding: 10px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.menu-item:hover, .menu-item.active {
  color: var(--onofrietti-red);
  border-bottom-color: var(--onofrietti-red);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>
