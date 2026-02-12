<template>
  <div class="games-view">
    <!-- Marvel-style Hero Section -->
    <section class="games-hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" alt="Universe at War">
      </div>
      <div class="hero-overlay"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-top-tag">ONOFRIETTI INTERACTIVE</div>
          <h1 class="hero-title">UNIVERSE <br> AT WAR</h1>
          <p class="hero-description">
            Experimenta la batalla definitiva por el control de la galaxia. 
            Forja alianzas, entrena héroes y domina el campo de batalla en el juego de estrategia más ambicioso hasta la fecha.
          </p>
          <div class="hero-actions">
            <button class="marvel-btn primary">JUGAR AHORA</button>
            <button class="marvel-btn secondary">VER TRÁILER</button>
          </div>
        </div>
      </div>
    </section>

    <section class="rankings-strip">
      <div class="container">
        <div class="rankings-head">
          <h2 class="rankings-title">RANKING | MEJORES JUEGOS</h2>
          <div class="rankings-line"></div>
        </div>

        <div class="rankings-chart">
          <div class="rankings-axis" aria-hidden="true">
            <span class="axis-tick">TOP</span>
            <span class="axis-tick">5</span>
            <span class="axis-tick">4</span>
            <span class="axis-tick">3</span>
            <span class="axis-tick">2</span>
            <span class="axis-tick">1</span>
          </div>

          <div class="rankings-grid" role="list">
            <button
              v-for="(game, idx) in topRankedGames"
              :key="game.slug"
              class="rank-card"
              :class="{ 'is-top': idx === 0, 'is-1': idx === 0, 'is-2': idx === 1, 'is-3': idx === 2 }"
              type="button"
              role="listitem"
              @click="openGame(game.slug)"
              :style="{ 
                '--cs': idx === 0 ? 1.06 : idx === 1 ? 1.01 : idx === 2 ? 0.97 : idx === 3 ? 0.93 : idx === 4 ? 0.90 : 0.88, 
                '--thumb': idx === 0 ? 100 : idx === 1 ? 95 : idx === 2 ? 90 : idx === 3 ? 85 : idx === 4 ? 80 : 75 
              }"
            >
              <div class="rank-cap">
                <span class="rank-medal" :class="{ 'is-1': idx === 0, 'is-2': idx === 1, 'is-3': idx === 2 }" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.2V22l3-2 3 2v-8.8c1.8-1.1 3-3 3-5.2a6 6 0 0 0-6-6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
                  </svg>
                </span>
                <span class="rank-cap-num">#{{ idx + 1 }}</span>
                <span v-if="idx === 0" class="rank-cap-top">MEJOR</span>
              </div>

              <div class="rank-media">
                <img :src="game.image" :alt="game.title">
              </div>
              <div class="rank-info">
                <div class="rank-name">{{ game.title }}</div>
                <div class="rank-role">RATING {{ game.rating }}</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Game News Segment (Marvel Style) -->
    <section class="latest-news">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">ÚLTIMAS NOTICIAS DE JUEGOS</h2>
          <div class="section-line"></div>
        </div>
        <div class="news-carousel">
          <button class="carousel-arrow prev" type="button" :disabled="!newsCanPrev" @click="scrollNews('prev')" aria-label="Anterior">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M15.4 7.4 10.8 12l4.6 4.6-1.4 1.4L8 12l6-6 1.4 1.4z"/></svg>
          </button>

          <div ref="newsTrackRef" class="news-track" @scroll.passive="onNewsScroll">
            <div v-for="news in gameNews" :key="news.id" class="news-card" @click="goToNews(news)">
              <div class="news-thumb">
                <img :src="news.image" :alt="news.title">
              </div>
              <div class="news-info">
                <span class="news-cat">JUEGOS</span>
                <h3 class="news-title">{{ news.title }}</h3>
              </div>
            </div>
          </div>

          <button class="carousel-arrow next" type="button" :disabled="!newsCanNext" @click="scrollNews('next')" aria-label="Siguiente">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6-1.4-1.4z"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- All Games Section (Poster Grid) -->
    <section class="all-games-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">TODOS LOS JUEGOS</h2>
        </div>

        <!-- Filter Controls -->
        <div class="game-controls">
          <div class="alphabet-links">
            <button class="letter-btn" :class="{ active: selectedLetter === 'TODOS' }" @click="selectedLetter = 'TODOS'">
              TODOS
            </button>
            <button v-for="letter in alphabet" :key="letter" class="letter-btn" :class="{ active: selectedLetter === letter }" @click="selectedLetter = letter">
              {{ letter }}
            </button>
          </div>
          <div class="search-box">
            <input v-model="query" type="text" placeholder="BUSCAR JUEGOS...">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
        </div>

        <div class="games-poster-grid">
          <div 
            v-for="game in filteredGames" 
            :key="game.slug" 
            class="poster-card"
            @click="openGame(game.slug)"
          >
            <div class="poster-media">
              <img :src="game.image" :alt="game.title">
              <div class="poster-overlay">
                <div class="poster-platforms">
                  <span v-for="os in osTags" :key="os.key" class="p-tag">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                      <path :d="os.path" />
                    </svg>
                    <span class="p-tag-text">{{ os.label }}</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="poster-info">
              <h3 class="poster-title">{{ game.title }}</h3>
              <p class="poster-year">{{ game.releaseYear }}</p>
            </div>
          </div>
        </div>

        <div v-if="filteredGames.length === 0" class="no-results">
          <h3>SIN RESULTADOS</h3>
          <p>No encontramos juegos que coincidan con tu búsqueda.</p>
          <button @click="resetControls" class="marvel-btn secondary">REINICIAR FILTROS</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { games } from '../data/games'

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const selectedLetter = ref('TODOS')

const query = ref('')
const platformFilter = ref('')
const router = useRouter()

const isMobileDevice = ref(false)

const newsTrackRef = ref<HTMLDivElement | null>(null)
const newsCanPrev = ref(false)
const newsCanNext = ref(false)

const gameNews = ref([
  {
    id: '101',
    title: "Jeff the Land Shark llega a 'Onofrietti Strike Force'",
    image: "/img/most.jpg"
  },
  {
    id: '102',
    title: "Nuevos trajes clásicos disponibles en 'Universe at War'",
    image: "/img/most2.jpg"
  },
  {
    id: '103',
    title: "Avance exclusivo: Onofrietti 1943: Rise of Heroes",
    image: "/img/photo1.webp"
  },
  {
    id: '104',
    title: "Marvel Rivals colabora con el Universo Onofrietti",
    image: "/img/rafatos.png"
  }
])

const updateNewsArrows = () => {
  const el = newsTrackRef.value
  if (!el) {
    newsCanPrev.value = false
    newsCanNext.value = false
    return
  }

  const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth)
  const epsilon = 6
  const hasOverflow = maxScrollLeft > epsilon
  newsCanPrev.value = hasOverflow && el.scrollLeft > epsilon
  newsCanNext.value = hasOverflow && el.scrollLeft < maxScrollLeft - epsilon
}

const onNewsScroll = () => {
  updateNewsArrows()
}

const scrollNews = (dir: 'prev' | 'next') => {
  const el = newsTrackRef.value
  if (!el) return
  if (dir === 'prev' && !newsCanPrev.value) return
  if (dir === 'next' && !newsCanNext.value) return
  const amount = Math.max(260, Math.floor(el.clientWidth * 0.9))
  el.scrollBy({ left: dir === 'prev' ? -amount : amount, behavior: 'smooth' })
  window.setTimeout(updateNewsArrows, 250)
}

const goToNews = (news: { id: string }) => {
  router.push({ name: 'NovedadDetalle', params: { id: news.id } })
}

const hasGamesForPlatform = (platform: string) => games.some((g) => g.platforms.includes(platform))

const platformLabel = (platform: string) => {
  if (platform === 'PC') return 'ESCRITORIO'
  if (platform === 'Mobile') return 'MOBILE'
  return platform
}

const platforms = computed(() => {
  if (isMobileDevice.value) return ['Mobile']
  if (hasGamesForPlatform('PC')) return ['PC']
  return []
})

const osTags = computed(() => {
  if (isMobileDevice.value) {
    return [
      { key: 'android', label: 'Android', path: 'M7.5 7.2l-1.2-2a.8.8 0 0 1 1.4-.8l1.1 1.9A7.7 7.7 0 0 1 12 5.6c1.2 0 2.4.3 3.4.8l1.1-1.9a.8.8 0 1 1 1.4.8l-1.2 2A7.6 7.6 0 0 1 19 13v5a2 2 0 0 1-2 2h-1v-4H8v4H7a2 2 0 0 1-2-2v-5a7.6 7.6 0 0 1 2.5-5.8z' },
      { key: 'ios', label: 'iOS', path: 'M16.7 13.6c0 2.7 2.4 3.6 2.5 3.6-.1.3-.4 1.1-.9 1.9-.6.9-1.2 1.8-2.2 1.8-1 0-1.3-.6-2.5-.6-1.2 0-1.6.6-2.6.6-1 0-1.7-1-2.3-1.9-1.3-2-2.3-5.6-1-8 .6-1.1 1.8-1.8 3-1.8 1 0 1.8.7 2.5.7.7 0 1.8-.8 3-.7.5 0 1.9.2 2.8 1.5-.1.1-1.7 1-1.7 2.9z' },
    ]
  }

  return [
    { key: 'windows', label: 'Windows', path: 'M3 5l8-1v8H3V5zm10-1l8-1v9h-8V4zM3 13h8v8l-8-1v-7zm10 0h8v9l-8-1v-8z' },
    { key: 'linux', label: 'Linux', path: 'M12 2c2.2 0 3.7 2.2 3.7 4.9 0 1.6-.5 2.9-1.4 3.9.9.9 1.7 2.2 1.7 3.6v1.7c0 1-.8 2-2 2h-4c-1.2 0-2-1-2-2v-1.7c0-1.4.8-2.7 1.7-3.6-.9-1-1.4-2.3-1.4-3.9C8.3 4.2 9.8 2 12 2zm-1.8 4.6a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm3.6 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z' },
    { key: 'mac', label: 'macOS', path: 'M15.3 2.6c-1 .1-2.2.8-2.9 1.7-.7.9-1.2 2.1-1 3.2 1.1.1 2.2-.6 3-1.5.7-.9 1.2-2.1.9-3.4zM19 17.4c-.5 1.2-1.1 2.3-2 3.4-.8 1-1.6 2-2.9 2-1.2 0-1.6-.7-3-.7s-1.8.7-3 .7c-1.2 0-2-1-2.9-2-1.6-2-2.8-5.7-1.2-8.2.8-1.3 2.2-2.1 3.7-2.1 1.2 0 2.2.8 3 .8s2-.9 3.4-.8c.6 0 2.4.2 3.6 1.8-2.2 1.2-1.9 4.4.3 5.1z' },
  ]
})

const topRankedGames = computed(() => {
  const list = [...games]
  list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
  return list.slice(0, 7)
})

const filteredGames = computed(() => {
  const q = query.value.trim().toLowerCase()
  const pf = platformFilter.value
  const letter = selectedLetter.value

  return games.filter((g) => {
    const matchesQuery = !q || g.title.toLowerCase().includes(q)
    const matchesPlatform = !pf || g.platforms.includes(pf)
    const matchesLetter = letter === 'TODOS' ? true : g.title.toUpperCase().startsWith(letter)
    return matchesQuery && matchesPlatform && matchesLetter
  })
})

const openGame = (slug: string) => {
  if (!slug) return
  router.push({ name: 'JuegoWiki', params: { slug } })
}

const resetControls = () => {
  query.value = ''
  platformFilter.value = platforms.value[0] || ''
}

const applyDevice = () => {
  isMobileDevice.value = window.matchMedia('(max-width: 768px)').matches
  platformFilter.value = platforms.value[0] || ''
}

onMounted(() => {
  window.scrollTo(0, 0)
  applyDevice()
  window.addEventListener('resize', applyDevice)

  nextTick(() => {
    updateNewsArrows()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', applyDevice)
})
</script>

<style scoped>
.games-view {
  background-color: #151515;
  color: #fff;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

/* MARVEL HERO SECTION */
.games-hero {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.8) 30%, transparent 100%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 650px;
}

.hero-top-tag {
  color: #2563eb;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.hero-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: clamp(48px, 10vw, 90px);
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 25px;
  letter-spacing: -2px;
}

.hero-description {
  font-size: 18px;
  line-height: 1.5;
  color: #ccc;
  margin-bottom: 35px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.rankings-strip {
  padding: 22px 0 54px;
  background:
    radial-gradient(ellipse at 30% 0%, rgba(37, 99, 235, 0.22) 0%, rgba(0,0,0,0) 55%),
    #151515;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  overflow-x: hidden;
}

.rankings-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 12px;
}

.rankings-title {
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  font-size: 16px;
}

.rankings-line {
  height: 2px;
  flex: 1;
  background: linear-gradient(90deg, rgba(37,99,235,0.95), rgba(37,99,235,0));
  border-radius: 999px;
}

.rankings-chart {
  position: relative;
  padding-left: 52px;
  margin-top: 6px;
}

.rankings-chart::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      to top,
      rgba(255,255,255,0.06) 0,
      rgba(255,255,255,0.06) 1px,
      transparent 1px,
      transparent 52px
    );
  pointer-events: none;
  opacity: 0.9;
}

.rankings-chart::after {
  content: '';
  position: absolute;
  left: 52px;
  right: 0;
  bottom: 18px;
  height: 2px;
  background: linear-gradient(90deg, rgba(37,99,235,0.95), rgba(37,99,235,0));
  pointer-events: none;
}

.rankings-axis {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 18px;
  width: 52px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px 2px 0;
}

.axis-tick {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 11px;
  color: rgba(255,255,255,0.62);
}

.rankings-grid {
  display: flex;
  gap: 12px;
  align-items: flex-end;
  overflow-x: auto;
  padding: 8px 2px 18px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.rankings-grid::-webkit-scrollbar {
  display: none;
}

.rank-card {
  appearance: none;
  border: 1px solid rgba(37,99,235,0.35);
  background:
    linear-gradient(180deg, rgba(37,99,235,0.18) 0%, rgba(3, 7, 18, 0.55) 60%, rgba(0,0,0,0.35) 100%);
  color: inherit;
  font: inherit;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0;
  text-align: left;
  position: relative;
  width: calc(175px * var(--cs));
  flex: 0 0 auto;
  height: calc(235px * var(--cs));
  --cs: 1;
  --thumb: 78;
  transition: transform 0.18s ease, border-color 0.18s ease;
}

.rank-card:hover {
  border-color: rgba(37,99,235,0.85);
  transform: translateY(-3px);
}

.rank-card.is-top {
  border-color: rgba(37,99,235,0.75);
  box-shadow: 0 30px 70px rgba(37, 99, 235, 0.18);
}

.rank-card.is-1 {
  border-color: rgba(255, 215, 0, 0.55);
  background:
    linear-gradient(180deg, rgba(255, 215, 0, 0.22) 0%, rgba(38, 28, 0, 0.70) 62%, rgba(0,0,0,0.35) 100%);
  box-shadow: 0 30px 70px rgba(255, 215, 0, 0.12);
}

.rank-card.is-2 {
  border-color: rgba(226, 232, 240, 0.45);
  background:
    linear-gradient(180deg, rgba(226, 232, 240, 0.18) 0%, rgba(2, 6, 23, 0.68) 62%, rgba(0,0,0,0.35) 100%);
  box-shadow: 0 30px 70px rgba(148, 163, 184, 0.10);
}

.rank-card.is-3 {
  border-color: rgba(180, 83, 9, 0.55);
  background:
    linear-gradient(180deg, rgba(180, 83, 9, 0.22) 0%, rgba(20, 10, 5, 0.72) 62%, rgba(0,0,0,0.35) 100%);
  box-shadow: 0 30px 70px rgba(180, 83, 9, 0.10);
}

.rank-cap {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 8px;
}

.rank-medal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.75);
  filter: drop-shadow(0 10px 18px rgba(0,0,0,0.45));
}

.rank-medal.is-1 {
  color: rgba(255, 215, 0, 0.95);
  border-color: rgba(255, 215, 0, 0.35);
}

.rank-medal.is-2 {
  color: rgba(226, 232, 240, 0.95);
  border-color: rgba(226, 232, 240, 0.28);
}

.rank-medal.is-3 {
  color: rgba(180, 83, 9, 0.95);
  border-color: rgba(180, 83, 9, 0.28);
}

.rank-cap-num {
  display: inline-flex;
  padding: 6px 10px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(0,0,0,0.55);
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 12px;
}

.rank-cap-top {
  display: inline-flex;
  padding: 6px 10px;
  border: 1px solid rgba(37,99,235,0.65);
  background: rgba(37,99,235,0.16);
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 11px;
  text-transform: uppercase;
}

.rank-media {
  position: relative;
  z-index: 3;
  margin: 40px 10px 10px;
  height: calc(var(--thumb) * 1px);
  background: #2a2a2a;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
}

.rank-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.9);
}

.rank-info {
  position: relative;
  z-index: 3;
  padding: 6px 10px 12px;
}

.rank-name {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 13px;
}

.rank-role {
  margin-top: 6px;
  color: rgba(255,255,255,0.72);
  font-size: 11px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
}

/* MARVEL BUTTONS */
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
  display: inline-block;
  text-align: center;
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
  color: #fff;
  border: 2px solid #fff;
  clip-path: none;
  padding: 14px 34px;
}

.marvel-btn.secondary:hover {
  background-color: #fff;
  color: #151515;
}

/* LATEST NEWS */
.latest-news {
  padding: 60px 0;
  background-color: #151515;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  white-space: nowrap;
}

.section-line {
  height: 2px;
  background: #333;
  flex: 1;
}

.news-carousel {
  position: relative;
}

.news-track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 320px);
  gap: 22px;
  overflow-x: auto;
  padding: 4px 44px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.news-track::-webkit-scrollbar {
  height: 8px;
}

.news-track::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 999px;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 0;
  background: #2563eb;
  border: 1px solid #2563eb;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, opacity 0.15s ease;
  z-index: 2;
}

.carousel-arrow:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
  transform: translateY(-50%) scale(1.05);
}

.carousel-arrow:disabled {
  opacity: 0.45;
  cursor: default;
  transform: translateY(-50%);
}

.carousel-arrow.prev {
  left: 0;
}

.carousel-arrow.next {
  right: 0;
}

/* News Cards */
.news-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-thumb {
  aspect-ratio: 16/9;
  overflow: hidden;
  margin-bottom: 15px;
  border-bottom: 3px solid #2563eb;
}

.news-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.news-card:hover .news-thumb img {
  transform: scale(1.05);
}

.news-info {
  display: flex;
  flex-direction: column;
}

.news-cat {
  color: #2563eb;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
}

.news-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: #fff;
}

.all-games-section {
  padding: 80px 0;
  background-color: #fff;
  color: #151515;
}

.all-games-section .section-line {
  background: #151515;
}

.all-games-section .section-title {
  color: #151515;
}

.game-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
}

.filter-group {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 5px;
}

.alphabet-links {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding: 6px 2px;
  flex: 1;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.alphabet-links::-webkit-scrollbar {
  display: none;
}

.letter-btn {
  background: #f6f6f6;
  border: 1px solid #eaeaea;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: #151515;
  cursor: pointer;
  padding: 7px 12px;
  border-radius: 999px;
  transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  line-height: 1;
  white-space: nowrap;
}

.letter-btn:hover {
  background: #ffffff;
  transform: translateY(-1px);
  border-color: rgba(37,99,235,0.35);
}

.letter-btn.active {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
}

.filter-btn {
  background: transparent;
  color: #999;
  border: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 13px;
  text-transform: uppercase;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.all-games-section .filter-btn {
  color: #111827;
  border: 1px solid #d1d5db;
}

.filter-btn.active {
  color: #fff;
  border-bottom: 2px solid #2563eb;
}

.all-games-section .filter-btn.active {
  background: #2563eb;
  border-color: #2563eb;
  border-bottom-color: #2563eb;
}

.all-games-section .filter-btn:hover {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff;
}

.search-box {
  position: relative;
  width: 320px;
  flex: 0 0 320px;
}

.search-box input {
  width: 100%;
  background: #151515;
  border: 1px solid #333;
  color: #fff;
  padding: 12px 15px 12px 40px; /* espacio a la izquierda para el ícono */
  border-radius: 4px;
  font-family: inherit;
  outline: none;
}

.all-games-section .search-box input {
  background: #f3f4f6;
  border-color: #d1d5db;
  color: #111827;
}

.search-box svg {
  position: absolute;
  left: 12px; /* ícono a la izquierda */
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.all-games-section .search-box svg {
  color: #6b7280;
}

.games-poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
}

.poster-card {
  cursor: pointer;
}

.poster-media {
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
  background-color: #151515;
  margin-bottom: 12px;
  transition: box-shadow 0.3s;
}

.poster-card:hover .poster-media {
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.poster-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.poster-card:hover .poster-media img {
  transform: scale(1.05);
}

.poster-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%);
  display: flex;
  align-items: flex-end;
  padding: 15px;
  opacity: 0;
  transition: opacity 0.3s;
}

.poster-card:hover .poster-overlay {
  opacity: 1;
}

.poster-platforms {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.p-tag {
  font-size: 10px;
  font-weight: 900;
  background: #2563eb;
  color: #fff;
  padding: 2px 6px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.p-tag-text {
  line-height: 1;
}

.poster-info {
  text-align: center;
}

.poster-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 4px;
  color: #fff;
}

.all-games-section .poster-title {
  color: #151515;
}

.poster-year {
  font-size: 12px;
  color: #999;
  font-weight: 700;
}

.all-games-section .poster-year {
  color: #6b7280;
}

.no-results {
  text-align: center;
  padding: 60px 0;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .game-controls {
    flex-direction: column;
    align-items: stretch;
    padding-left: 10px;
    padding-right: 10px;
  }

  .alphabet-links {
    width: 100%;
    flex: 1 1 auto;
    padding: 6px 10px;
  }

  .search-box {
    width: 100%;
    flex: 1 1 auto;
    margin: 0 auto;
    max-width: 520px;
    box-sizing: border-box;
  }

  .games-poster-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 600px) {
  .rankings-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    overflow: visible;
    padding: 0;
    align-items: stretch;
  }

  .rankings-chart {
    padding-left: 0;
  }

  .rankings-axis {
    display: none;
  }

  .rankings-chart::before,
  .rankings-chart::after {
    display: none;
  }

  .rank-card {
    width: 100%;
    height: 205px;
    transform: none;
  }
}

@media (max-width: 480px) {
  .all-games-section {
    padding: 48px 0;
  }

  .games-poster-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
}

@media (max-width: 360px) {
  .games-poster-grid {
    grid-template-columns: 1fr;
  }
}
</style>
