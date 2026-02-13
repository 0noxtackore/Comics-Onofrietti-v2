<template>
  <div class="series-view">
    <section class="series-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/comics" class="bc-link">COMICS</router-link>
          <span class="bc-sep">/</span>
          <span class="bc-current">{{ seriesName }}</span>
        </div>

        <h1 class="series-title">{{ seriesName }}</h1>
        <div class="title-underline"></div>

        <div v-if="heroImage" class="series-hero-image" aria-label="Imagen de la serie">
          <img :src="heroImage" :alt="seriesName" draggable="false" />
        </div>
      </div>
    </section>

    <section class="series-content">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">CAPÍTULOS</h2>
          <div class="title-underline"></div>
        </div>

        <div class="chapters-grid" role="list">
          <router-link
            v-for="ch in chapters"
            :key="ch.key"
            :to="ch.to"
            class="chapter-card"
            role="listitem"
          >
            <div class="chapter-image-wrapper">
              <img :src="ch.image" :alt="ch.title" class="chapter-image" draggable="false" />
              <div class="chapter-overlay">
                <span class="view-more">VER MÁS</span>
              </div>
            </div>
            <div class="chapter-info">
              <div class="chapter-title">{{ ch.title }}</div>
              <div class="chapter-sub">Angello Aponte</div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { comics, featuredComics } from '../assets/js/slider.js'

type Comic = {
  id?: string
  title: string
  issue?: string
  image: string
}

const route = useRoute()
const baseUrl = import.meta.env.BASE_URL

const getImageUrl = (path: string | undefined) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${baseUrl}${cleanPath}`
}

const seriesName = computed(() => {
  const q = String(route.query.name || '').trim()
  if (q) return q
  const slug = String(route.params.slug || '')
  return decodeURIComponent(slug).replace(/-/g, ' ').toUpperCase()
})

const allComics = computed<Comic[]>(() => {
  const a = (comics || []) as Comic[]
  const b = (featuredComics || []) as Comic[]
  return [...a, ...b]
})

const chapters = computed(() => {
  const name = seriesName.value
  const pool = allComics.value

  const total = Math.max(6, Math.min(10, pool.length || 6))
  const safePool = pool.length ? pool : ([{ id: '1', title: name, image: '' }] as Comic[])

  return Array.from({ length: total }).map((_, idx) => {
    const rep = safePool[idx % safePool.length]
    const id = String(rep?.id || '')

    return {
      key: `${name}-${idx + 1}`,
      title: `${name} #${idx + 1}`,
      image: getImageUrl(rep?.image),
      to: { name: 'ComicIssue', params: { id: id || '1' } },
    }
  })
})

const heroImage = computed(() => chapters.value[0]?.image || '')
</script>

<style scoped>
.series-view {
  background: #ffffff;
  color: #151515;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.series-hero {
  padding: 90px 0 40px;
  background: #151515;
  color: #ffffff;
}

.series-hero-image {
  margin-top: 22px;
  width: 100%;
  max-width: 860px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(255,255,255,0.06);
}

.series-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.breadcrumb {
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
}

.bc-link {
  color: #ffffff;
  text-decoration: none;
}

.bc-link:hover {
  text-decoration: underline;
}

.bc-sep {
  opacity: 0.6;
}

.bc-current {
  opacity: 0.95;
}

.series-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 42px;
  margin: 0;
}

.title-underline {
  width: 120px;
  height: 4px;
  background: #2563eb;
  margin-top: 14px;
}

.series-content {
  padding: 60px 0 90px;
}

.section-header {
  margin-bottom: 18px;
}

.section-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  font-size: 26px;
}

.chapters-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.chapter-card {
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #ffffff;
  border-radius: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.chapter-card:hover {
  transform: translateY(-10px);
}

.chapter-image-wrapper {
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.06);
}

.chapter-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.chapter-card:hover .chapter-image {
  transform: scale(1.1);
}

.chapter-overlay {
  position: absolute;
  inset: 0;
  background: rgba(29, 195, 236, 0.53);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chapter-card:hover .chapter-overlay {
  opacity: 1;
}

.view-more {
  color: white;
  font-weight: 800;
  letter-spacing: 1px;
  border: 2px solid white;
  padding: 8px 16px;
}

.chapter-info {
  padding: 14px;
}

.chapter-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 16px;
}

.chapter-sub {
  margin-top: 6px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
  opacity: 0.75;
}

@media (max-width: 1024px) {
  .chapters-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .series-title {
    font-size: 30px;
  }

  .chapters-grid {
    grid-template-columns: 1fr;
  }
}
</style>
