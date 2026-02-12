<template>
  <div class="game-wiki">
    <!-- Marvel Blade-style Hero Section -->
    <header class="game-hero">
      <div class="game-hero-bg" :style="heroBgStyle"></div>
      <div class="game-hero-overlay"></div>

      <div class="container hero-container">
        <div v-if="game" class="hero-content">
          <div class="hero-labels">
            <span class="eyebrow" @click="router.push({ name: 'Juegos' })">JUEGOS ONOFRIETTI</span>
            <span class="separator">|</span>
            <span class="status-label">EN DESARROLLO</span>
          </div>
          
          <h1 class="main-title">{{ game.title }}</h1>
          
          <div class="hero-actions">
            <button class="marvel-btn primary" type="button">JUGAR AHORA</button>
            <button v-if="game.trailerUrl" class="marvel-btn secondary" type="button" @click="window.open(game.trailerUrl, '_blank')">
              VER TRÁILER
            </button>
          </div>

          <p class="hero-desc">{{ game.description }}</p>
        </div>

        <div v-else class="not-found">
          <h1 class="nf-title">JUEGO NO ENCONTRADO</h1>
          <button class="marvel-btn primary" @click="router.push({ name: 'Juegos' })">IR A JUEGOS</button>
        </div>
      </div>
    </header>

    <!-- Sticky Subnav -->
    <nav class="sticky-nav" v-if="game">
      <div class="container nav-content">
        <a href="#overview" class="nav-link" :class="{ active: activeSection === 'overview' }">OVERVIEW</a>
        <a href="#galeria" class="nav-link" :class="{ active: activeSection === 'galeria' }">GALERÍA</a>
        <a href="#noticias" class="nav-link" :class="{ active: activeSection === 'noticias' }">NOTICIAS</a>
      </div>
    </nav>

    <main v-if="game" class="main-content">
      <!-- Media/Overview Section -->
      <section id="overview" class="section overview-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">OVERVIEW</h2>
            <div class="section-line"></div>
          </div>
          
          <div class="overview-grid">
            <div class="overview-video-panel">
              <div class="video-placeholder">
                <img :src="game.image" :alt="game.title">
                <div class="play-overlay">
                  <svg viewBox="0 0 24 24" width="60" height="60" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <p class="video-caption">Announcement Trailer - Universe at War 2026</p>
            </div>

            <div class="overview-details">
              <div class="detail-card">
                <h3 class="detail-label">DETALLES</h3>
                <div class="metadata-grid">
                  <div class="meta-item"><span class="mk">GÉNERO</span><span class="mv">{{ game.genre }}</span></div>
                  <div class="meta-item"><span class="mk">RESTRICCIÓN</span><span class="mv">T (TEEN)</span></div>
                  <div class="meta-item"><span class="mk">LANZAMIENTO</span><span class="mv">{{ game.releaseYear }}</span></div>
                  <div class="meta-item"><span class="mk">PLATAFORMAS</span><span class="mv">{{ game.platforms.join(', ') }}</span></div>
                </div>
              </div>
            </div>
          </div>

          <div class="game-full-description" v-if="game.description">
            <h3 class="desc-title">DESCRIPCIÓN DEL JUEGO</h3>
            <p>{{ game.description }}</p>
            <p class="long-text">
              Sumérgete en una historia épica donde cada elección cuenta. Con un sistema de combate revolucionario y una narrativa que redefine el género, {{ game.title }} te llevará a través de paisajes impresionantes y desafíos inolvidables. Prepárate para experimentar el próximo capítulo en el universo Onofrietti Interactive.
            </p>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section id="galeria" class="section gallery-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">CONCEPT ART & GALERÍA</h2>
            <div class="section-line"></div>
          </div>
          <div class="gallery-grid">
            <div v-for="(img, idx) in gallery" :key="idx" class="gallery-item" @click="openGallery(idx)">
              <img :src="img" :alt="game.title" loading="lazy">
              <div class="zoom-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest News Section -->
      <section id="noticias" class="section news-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">ÚLTIMAS NOTICIAS</h2>
            <div class="section-line"></div>
          </div>
          <div class="news-list">
            <button
              v-for="item in latestNews"
              :key="item.id"
              type="button"
              class="news-item"
              @click="goToNews(item.id)"
            >
              <div class="news-thumb">
                <img :src="item.image" :alt="item.title">
              </div>
              <div class="news-body">
                <span class="news-category">JUEGOS</span>
                <h3 class="news-header">{{ item.title }}</h3>
              </div>
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Lightbox -->
    <div v-if="galleryIndex !== null" class="lightbox" @click.self="closeGallery">
      <div class="lightbox-content">
        <button class="close-btn" @click="closeGallery">×</button>
        <img :src="gallery[galleryIndex]" :alt="game.title">
        <div class="lightbox-nav">
          <button @click="prevGallery">‹</button>
          <span>{{ galleryIndex + 1 }} / {{ gallery.length }}</span>
          <button @click="nextGallery">›</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getGameBySlug } from '../data/games'

const route = useRoute()
const router = useRouter()
const activeSection = ref('overview')

const game = computed(() => {
  const slug = String(route.params.slug || '')
  return getGameBySlug(slug)
})

const gallery = computed(() => game.value?.gallery?.length ? game.value.gallery : [game.value?.image].filter(Boolean) as string[])

const heroBgStyle = computed(() => {
  const img = game.value?.image
  if (!img) return {}
  return { backgroundImage: `url('${img}')` }
})

const latestNews = computed(() => {
  const title = game.value?.title || 'el juego'
  return [
    {
      id: '101',
      title: `Actualización: novedades de contenido para ${title}`,
      image: game.value?.image || '/img/most.jpg',
    },
    {
      id: '102',
      title: `Nuevos trajes y recompensas llegan a ${title}`,
      image: '/img/most2.jpg',
    },
    {
      id: '103',
      title: `Avance exclusivo: lo que viene en ${title}`,
      image: '/img/photo1.webp',
    },
  ]
})

const goToNews = (id: string) => {
  router.push({ name: 'NovedadDetalle', params: { id } })
  window.scrollTo(0, 0)
}

const galleryIndex = ref<number | null>(null)
const openGallery = (idx: number) => galleryIndex.value = idx
const closeGallery = () => galleryIndex.value = null
const nextGallery = () => galleryIndex.value = (galleryIndex.value! + 1) % gallery.value.length
const prevGallery = () => galleryIndex.value = (galleryIndex.value! - 1 + gallery.value.length) % gallery.value.length

const handleScroll = () => {
  const sections = ['overview', 'galeria', 'noticias']
  for (const s of sections) {
    const el = document.getElementById(s)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = s
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.scrollTo(0, 0)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.game-wiki {
  background-color: #ffffff;
  color: #151515;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

/* BLADE-STYLE HERO */
.game-hero {
  position: relative;
  height: 90vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.game-hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.game-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.72) 45%, rgba(255, 255, 255, 0.12) 100%),
              linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 55%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-content {
  max-width: 700px;
}

.hero-labels {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.eyebrow {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
  color: #2563eb;
  cursor: pointer;
}

.separator {
  color: #7a7a7a;
}

.status-label {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  color: #4b4b4b;
}

.main-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: clamp(40px, 8vw, 100px);
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 30px;
  letter-spacing: -2px;
  color: #151515;
  text-shadow: 0 2px 24px rgba(255,255,255,0.55);
}

.hero-actions {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.hero-desc {
  font-size: 18px;
  line-height: 1.6;
  color: #2a2a2a;
  max-width: 550px;
  font-style: italic;
}

/* MARVEL BUTTONS (REUSED FROM JUEGOS.VUE) */
.marvel-btn {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 14px;
  padding: 16px 36px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
}

.marvel-btn.primary {
  background-color: #2563eb;
  color: #fff;
}

.marvel-btn.primary:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}

.marvel-btn.secondary {
  background-color: transparent;
  color: #151515;
  border: 2px solid #151515;
  clip-path: none;
  padding: 14px 34px;
}

.marvel-btn.secondary:hover {
  background-color: #151515;
  color: #ffffff;
}

/* STICKY NAV */
.sticky-nav {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 100;
}

.nav-content {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.nav-link {
  padding: 20px 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 13px;
  color: #4b4b4b;
  text-decoration: none;
  letter-spacing: 2px;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.nav-link:hover, .nav-link.active {
  color: #151515;
  border-bottom-color: #2563eb;
}

/* SECTIONS */
.section {
  padding: 80px 0;
}

.overview-section {
  background-color: #fff;
  color: #151515;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
}

.overview-section .section-title {
  color: #151515;
}

.section-line {
  height: 2px;
  background-color: #e5e5e5;
  flex: 1;
}

.overview-section .section-line {
  background-color: #e5e5e5;
}

/* OVERVIEW GRID */
.overview-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
}

.video-placeholder {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  background-color: #000;
  border: 1px solid #e5e5e5;
}

.video-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.play-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-caption {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
  font-weight: 700;
}

.overview-section .video-caption {
  color: #888;
}

.detail-card {
  background-color: #f9f9f9;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.overview-section .detail-card {
  background-color: #f9f9f9;
  border: 1px solid #eee;
}

.detail-label {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  font-weight: 900;
  color: #2563eb;
  margin-bottom: 20px;
}

.metadata-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.meta-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.overview-section .meta-item {
  border-bottom-color: #eee;
}

.mk {
  font-size: 11px;
  font-weight: 900;
  color: #666;
}

.mv {
  font-size: 13px;
  font-weight: 800;
}

.overview-section .mv {
  color: #151515;
}

.game-full-description {
  margin-top: 60px;
  max-width: 850px;
}

.desc-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 14px;
  font-size: 16px;
  color: #151515;
}

.game-full-description p {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 20px;
  font-weight: 400;
  color: #333;
}

.game-full-description .long-text {
  font-size: 16px;
  color: #666;
}

/* GALLERY GRID */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.zoom-icon {
  position: absolute;
  inset: 0;
  background-color: rgba(37, 99, 235, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .zoom-icon {
  opacity: 1;
}

/* NEWS LIST */
.news-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.news-item {
  display: flex;
  gap: 30px;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #333;
  cursor: pointer;
}

.news-thumb {
  width: 200px;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.news-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-category {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 12px;
  color: #2563eb;
  margin-bottom: 10px;
  display: block;
}

.news-header {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 22px;
  line-height: 1.2;
}

.news-item:hover .news-header {
  color: #2563eb;
}

/* LIGHTBOX */
.lightbox {
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox-content {
  position: relative;
  max-width: 100%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  box-shadow: 0 0 50px rgba(0,0,0,1);
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  font-size: 40px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
}

.lightbox-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
}

.lightbox-nav button {
  background: none;
  border: 1px solid #fff;
  color: #fff;
  font-size: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .news-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .news-thumb {
    width: 100%;
  }

  .main-title {
    font-size: 48px;
  }
}
</style>
