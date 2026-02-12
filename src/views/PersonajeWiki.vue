<template>
  <div class="wiki-view">
    <!-- Marvel-style Hero Section -->
    <header class="char-hero" :class="{ 'has-char': !!character }">
      <div class="hero-bg-outer" :data-name="character?.name">
        <div class="hero-bg-inner" :style="heroBgStyle"></div>
        <div class="hero-bg-overlay"></div>
      </div>

      <div class="container hero-container">
        <div v-if="character" class="hero-grid">
          <div class="hero-info">
            <div class="hero-kicker">ONOFRIETTI UNLIMITED</div>
            <h1 class="hero-name">{{ character.name }}</h1>
            <p v-if="character.description" class="hero-desc">
              {{ character.description }}
            </p>
          </div>
          <div class="hero-portrait-container">
            <img :src="heroPortraitSrc" :alt="character.name" class="hero-portrait">
          </div>
        </div>
      </div>
      
      <!-- Skewed Hero Clip -->
      <div class="hero-skew"></div>
    </header>

    <!-- Sticky Sub-Navigation -->
    <nav v-if="character" class="sticky-nav" :class="{ 'is-sticky': isNavSticky }">
      <div class="container">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.id">
            <a 
              :href="'#' + link.id" 
              :class="{ active: activeSection === link.id }"
              @click.prevent="scrollToSection(link.id)"
            >{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <main v-if="character" class="main-content">
      <!-- Overview -->
      <section id="overview" class="content-section section-overview">
        <div class="container">
          <div class="section-top-label">MARVEL UNLIMITED</div>
          <h2 class="section-main-title">{{ character.name }}</h2>
          
          <div class="overview-layout">
            <div class="overview-body">
              <p class="bio-intro">{{ character.description }}</p>
              
              <div v-if="descriptionImages.length" class="comic-panels">
                <div v-for="(img, idx) in descriptionImages" :key="idx" class="panel-item">
                  <img :src="getImageUrl(img)" :alt="character.name + ' action ' + idx">
                </div>
              </div>

              <div class="bio-full">
                <p>
                  {{ character.name }} serves as a cornerstone of the Onofrietti Universe. 
                  Originally designed as an advanced tactical assistant, they have evolved 
                  into a hero of legend, navigating complex moral landscapes and 
                  participating in the most significant events of the era.
                </p>
              </div>
            </div>

            <aside class="bio-sidebar">
              <div class="sidebar-block">
                <h3 class="sidebar-title">BIO DETAILS</h3>
                <ul class="details-list">
                  <li><span class="label">REAL NAME</span><span class="value">{{ character.realName || 'Unknown' }}</span></li>
                  <li><span class="label">ALIASES</span><span class="value">{{ character.aliases?.join(', ') || 'None' }}</span></li>
                  <li><span class="label">IDENTITY</span><span class="value">Publicly Known</span></li>
                  <li><span class="label">CITIZENSHIP</span><span class="value">Various / Multiversal</span></li>
                  <li><span class="label">OCCUPATION</span><span class="value">Hero / Guardian</span></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- Power Grid -->
      <section id="stats" class="content-section section-stats">
        <div class="container">
          <div class="marvel-grid-header">
            <div class="slash-blue"></div>
            <h2 class="stats-title">POWER GRID</h2>
          </div>
          
          <div class="power-grid-container">
            <div class="power-stats-group">
              <div v-for="stat in powerStats.slice(0, 3)" :key="stat.label" class="power-item">
                <div class="power-label">{{ stat.label }}</div>
                <div class="power-segments">
                  <div v-for="i in 7" :key="i" class="segment" :class="{ filled: i <= stat.value }"></div>
                </div>
                <div class="power-value">{{ stat.value }}</div>
              </div>
            </div>

            <div class="power-center-media">
              <div class="power-image-wrapper">
                <img :src="getImageUrl(character.image)" :alt="character.name + ' stat image'" class="stat-main-img">
                <div class="img-corner-label">LEVEL {{ character.rank || 'N/A' }}</div>
              </div>
            </div>

            <div class="power-stats-group">
              <div v-for="stat in powerStats.slice(3, 6)" :key="stat.label" class="power-item">
                <div class="power-label">{{ stat.label }}</div>
                <div class="power-segments">
                  <div v-for="i in 7" :key="i" class="segment" :class="{ filled: i <= stat.value }"></div>
                </div>
                <div class="power-value">{{ stat.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Profile/Powers -->
      <section id="profile" class="content-section section-profile">
        <div class="container">
          <div class="profile-layout">
            <div class="powers-block">
              <h3 class="section-sub-title">POWERS & ABILITIES</h3>
              <div class="power-tags">
                <span v-for="power in character.powers" :key="power" class="power-tag">{{ power }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Appearances -->
      <section id="appearances" class="content-section section-appearances">
        <div class="container">
          <div class="marvel-grid-header">
            <div class="slash-blue"></div>
            <h2 class="stats-title">COMICS</h2>
          </div>
          
          <div class="comics-carousel">
            <div ref="carouselTrack" class="comics-track">
              <router-link 
                v-for="cm in characterComics" 
                :key="cm.id" 
                :to="{ name: 'ComicIssue', params: { id: cm.id } }"
                class="comic-card-mini"
              >
                <div class="card-img-outer">
                  <img :src="getImageUrl(cm.image)" :alt="cm.title">
                </div>
                <div class="card-info">
                  <span class="card-series">{{ cm.title }}</span>
                  <span class="card-vol">{{ cm.author }} #{{ cm.issue }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCharacterBySlug } from '../data/characters'
import { comics } from '../assets/js/slider.js'

const route = useRoute()
const baseUrl = import.meta.env.BASE_URL

const isNavSticky = ref(false)
const activeSection = ref('overview')
const carouselTrack = ref<HTMLElement | null>(null)

const navLinks = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'stats', label: 'POWER GRID' },
  { id: 'profile', label: 'IN COMICS PROFILE' },
  { id: 'appearances', label: 'COMICS' }
]

const character = computed(() => {
  const slug = String(route.params.slug || '')
  return getCharacterBySlug(slug)
})

const getImageUrl = (path: string | undefined) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${baseUrl}${cleanPath}`
}

const heroPortraitSrc = computed(() => {
  const c = character.value
  const gallery = ((c as any)?.gallery || []) as string[]
  const differentFromBg = gallery.find((p) => p && p !== c?.image)
  const portraitCandidate = (c as any)?.portraitImage || (c as any)?.portrait || differentFromBg || gallery[0] || c?.image
  return getImageUrl(portraitCandidate)
})

const heroBgSrc = computed(() => {
  const c = character.value
  const gallery = ((c as any)?.gallery || []) as string[]
  const portraitRaw = (c as any)?.portraitImage || (c as any)?.portrait
  const portraitCandidate = portraitRaw || gallery.find((p) => p && p !== c?.image) || gallery[0] || c?.image

  const differentFromPortrait = gallery.find((p) => p && p !== portraitCandidate)
  return getImageUrl(differentFromPortrait || c?.image)
})

const heroBgStyle = computed(() => {
  const img = heroBgSrc.value
  if (!img) return {}
  return { backgroundImage: `url('${img}')` }
})

const descriptionImages = computed(() => {
  const c = character.value
  if (!c) return [] as string[]
  const gallery = (c.gallery || []).filter(Boolean)
  return gallery.slice(0, 3)
})

const characterComics = computed(() => {
  const c = character.value
  if (!c?.appearances?.comics?.length) return []
  const allowed = new Set(c.appearances.comics.map((t) => t.toUpperCase()))
  return comics.filter((cm: any) => allowed.has(String(cm.title).toUpperCase()))
})

const powerStats = computed(() => [
  { label: 'DURABILITY', value: character.value?.rank === 1 ? 7 : 4 },
  { label: 'ENERGY', value: 3 },
  { label: 'FIGHTING SKILLS', value: 5 },
  { label: 'INTELLIGENCE', value: 6 },
  { label: 'SPEED', value: 4 },
  { label: 'STRENGTH', value: 2 }
])

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const yOffset = -70
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  isNavSticky.value = window.scrollY > 400
  const sections = navLinks.map(l => l.id)
  for (const s of sections) {
    const el = document.getElementById(s)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = s
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:wght@400;500;700&display=swap');

.wiki-view {
  background: #ffffff;
  color: #151515;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 40px;
}

/* MARVEL HERO SECTION */
.char-hero {
  position: relative;
  height: clamp(500px, 70vh, 700px);
  background: #151515;
  color: #fff;
  display: flex;
  align-items: center;
  z-index: 1;
}

.hero-bg-outer {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: #151515;
  overflow: hidden;
}

.hero-bg-inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  height: 100%;
  background-size: cover;
  background-position: center;
  /* Marvel often uses a high-contrast but slightly dark color tint */
  filter: brightness(0.6) saturate(1.2) contrast(1.1);
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #151515 0%, #151515 40%, rgba(21, 21, 21, 0.7) 60%, rgba(21, 21, 21, 0) 100%);
}

.hero-bg-outer::after {
  content: attr(data-name);
  position: absolute;
  bottom: -10%;
  left: -2%;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 30vw;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.02);
  line-height: 0.8;
  white-space: nowrap;
  pointer-events: none;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 420px;
  align-items: center;
  gap: 60px;
  position: relative;
  height: 100%;
}

.hero-info {
  z-index: 3;
}

.hero-kicker {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
  color: #2563eb;
  margin-bottom: 10px;
  display: inline-block;
  border-bottom: 3px solid #2563eb;
  padding-bottom: 4px;
}

.hero-name {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: clamp(60px, 10vw, 120px);
  font-weight: 900;
  line-height: 0.85;
  text-transform: uppercase;
  margin: 0 0 25px;
  letter-spacing: -2px;
}

.hero-desc {
  font-size: 20px;
  line-height: 1.4;
  color: #fff;
  max-width: 500px;
  opacity: 0.9;
}

.hero-portrait-container {
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

.hero-portrait {
  width: auto;
  height: auto;
  max-height: 420px;
  max-width: 320px;
  object-fit: contain;
  filter: none;
  transform: translateY(0);
  z-index: 10;
}

.hero-skew {
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  height: 100px;
  background: #fff;
  clip-path: polygon(0 40%, 100% 0, 100% 100%, 0% 100%);
  z-index: 5;
}

/* ONOFRIETTI STICKY NAV */
.sticky-nav {
  background: #fff;
  border-bottom: 1px solid #e2e2e2;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 52px;
  box-shadow: none;
  overflow: hidden;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  height: 100%;
}

.nav-list li a {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  color: #151515;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 1.5px;
  transition: all 0.2s ease;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.nav-list li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #2563eb;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
  pointer-events: none;
}

.nav-list li a:hover {
  color: #2563eb;
}

.nav-list li a:hover::after {
  transform: scaleX(1);
}

.nav-list li a.active::after {
  transform: scaleX(1);
}

/* CONTENT SECTIONS */
.content-section {
  padding: 100px 0;
}

.section-overview {
  background: #fff;
}

.section-top-label {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 12px;
  color: #2563eb;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.section-main-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 50px;
}

.overview-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 80px;
}

.bio-intro {
  font-size: 20px;
  line-height: 1.6;
  font-weight: 700;
  margin-bottom: 40px;
  color: #333;
}

.comic-panels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 50px;
}

.panel-item {
  aspect-ratio: 16/10;
  background: #eee;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.panel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bio-full {
  font-size: 17px;
  line-height: 1.7;
  color: #666;
}

.bio-sidebar {
  border-left: 1px solid #e2e2e2;
  padding-left: 40px;
}

.sidebar-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 30px;
}

.details-list {
  list-style: none;
  padding: 0;
}

.details-list li {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
}

.details-list .label {
  font-size: 11px;
  font-weight: 900;
  color: #999;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.details-list .value {
  font-size: 15px;
  font-weight: 700;
  color: #151515;
}

/* MARVEL POWER GRID STYLE */
.section-stats {
  background: #f8f8f8;
}

.marvel-grid-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
}

.slash-blue {
  width: 60px;
  height: 4px;
  background: #2563eb;
}

.stats-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 26px;
  letter-spacing: 1px;
}

.power-grid-container {
  display: grid;
  grid-template-columns: 1fr 340px 1fr;
  gap: 60px;
  align-items: center;
}

.power-stats-group {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.power-item {
  width: 100%;
}

.power-center-media {
  display: flex;
  justify-content: center;
}

.power-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1.2;
  border: none;
  box-shadow: none;
  overflow: hidden;
  background: #000;
}

.stat-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.1) brightness(0.9);
}

.img-corner-label {
  display: none;
}

.power-label {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 1px;
  margin-bottom: 12px;
  color: #151515;
}

.power-segments {
  display: flex;
  gap: 4px;
  margin-bottom: 10px;
}

.segment {
  height: 18px;
  flex: 1;
  background: #e2e2e2;
}

.segment.filled {
  background: #2563eb;
}

.power-value {
  font-weight: 900;
  font-size: 14px;
  color: #2563eb;
}

/* PROFILE / TAGS */
.section-profile {
  background: #fff;
}

.section-sub-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 30px;
}

.power-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.power-tag {
  background: #f4f4f4;
  color: #151515;
  padding: 10px 20px;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
}

/* APPEARANCES */
.section-appearances {
  background: #151515;
  color: #fff;
}

.comics-carousel {
  width: 100%;
}

.comics-track {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 20px 0;
  scrollbar-width: none;
}

.comics-track::-webkit-scrollbar {
  display: none;
}

.comic-card-mini {
  flex: 0 0 170px;
  text-decoration: none;
  color: inherit;
}

.card-img-outer {
  aspect-ratio: 2/3;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  margin-bottom: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.comic-card-mini:hover .card-img-outer {
  transform: translateY(-10px);
}

.card-img-outer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-series {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 14px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-vol {
  font-size: 11px;
  color: #999;
  font-weight: 700;
}

@media (max-width: 1100px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 40px;
  }
  
  .hero-info {
    order: 2;
  }
  
  .hero-portrait-container {
    order: 1;
    height: 300px;
  }
  
  .hero-portrait {
    max-height: 280px;
    max-width: 240px;
    transform: translateY(0);
  }
  
  .overview-layout {
    grid-template-columns: 1fr;
  }
  
  .bio-sidebar {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid #e2e2e2;
    padding-top: 40px;
  }

  .power-grid-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .power-center-media {
    order: -1; /* Move image to top on medium screens and below */
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-name {
    font-size: 60px;
  }

  .power-grid-container {
    gap: 30px;
  }
  
  .comic-panels {
    grid-template-columns: 1fr;
  }
  
  .power-item {
    flex: 0 0 100%;
  }
}
</style>
