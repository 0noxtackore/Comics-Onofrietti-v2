<template>
  <div class="issue-view">
    <!-- Marvel-style Hero Section -->
    <header class="issue-hero">
      <div class="hero-background" :style="heroBgStyle"></div>
      <div class="hero-overlay"></div>
      
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-cover">
            <img :src="getImageUrl(issue?.image)" :alt="issueTitle" class="cover-img">
          </div>
          
          <div class="hero-info">
            <nav class="breadcrumb">
              <router-link to="/comics">CÓMICS</router-link>
              <span class="sep">></span>
              <span>{{ issue?.title }}</span>
            </nav>
            
            <h1 class="main-title">
              {{ issue?.title }} ({{ issue?.author || '2024' }}) {{ issue?.issue }}
            </h1>
            
            <div class="hero-meta">
              <div class="meta-item">
                <span class="meta-label">PUBLICADO:</span>
                <span class="meta-value">{{ formattedDate }}</span>
              </div>
            </div>
            
            <p v-if="issueDescription" class="hero-description">{{ issueDescription }}</p>
            
            <div class="hero-creators">
              <div v-for="c in mockCreators.slice(0, 2)" :key="c.name" class="hero-creator">
                <span class="role">{{ c.role.toUpperCase() }}:</span>
                <span class="name">{{ c.name }}</span>
              </div>
            </div>

            <div class="hero-actions">
              <div class="redeem-wrap">
                <input v-model.trim="purchaseCode" class="code-input" type="text" inputmode="text" autocomplete="off" placeholder="INGRESA EL CÓDIGO DE COMPRA">
                <button class="btn-primary" type="button" @click="redeemCode" :disabled="isUnlocked">DESBLOQUEAR</button>
              </div>
            </div>

            <p v-if="redeemError" class="redeem-error">{{ redeemError }}</p>
            <p v-else-if="isUnlocked" class="redeem-success">DESBLOQUEADO. YA PUEDES DESCARGAR ESTE NÚMERO.</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Sticky Sub-Navigation -->
    <nav class="sticky-nav" :class="{ 'is-sticky': isNavSticky }">
      <div class="container">
        <ul class="nav-list">
          <li><a href="#overview" :class="{ active: activeSection === 'overview' }">RESUMEN</a></li>
          <li><a href="#creators" :class="{ active: activeSection === 'creators' }">AUTOR</a></li>
          <li><a href="#characters" :class="{ active: activeSection === 'characters' }">PERSONAJES</a></li>
          <li><a href="#related" :class="{ active: activeSection === 'related' }">EPISODIOS</a></li>
        </ul>
      </div>
    </nav>

    <main class="main-content">
      <!-- Overview Section -->
      <section id="overview" class="content-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">RESUMEN</h2>
            <div class="title-underline"></div>
          </div>
          <div class="overview-body">
            <div class="synopsis">
              <h3 class="subsection-title">SINOPSIS</h3>
              <p>{{ issueDescription }}</p>
              <p class="ext-desc">
                {{ issue?.title }} continúa su viaje épico en este número clave.
                Mientras las sombras se alargan sobre el Universo, los héroes deben levantarse para enfrentar una amenaza ancestral
                que permaneció oculta durante eones. Con el sello clásico de Onofrietti, este número
                promete ser un punto de inflexión para todos los personajes involucrados.
              </p>
            </div>
            <div class="details-panel">
              <h3 class="subsection-title">DETALLES</h3>
              <ul class="details-list">
                <li><span class="k">Serie:</span> <span class="v">{{ issue?.title }}</span></li>
                <li><span class="k">Número:</span> <span class="v">{{ issue?.issue }}</span></li>
                <li><span class="k">Publicado:</span> <span class="v">{{ formattedDate }}</span></li>
                <li><span class="k">Clasificación:</span> <span class="v">T+ (Adolescentes +)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Creators Section -->
      <section id="creators" class="content-section grey-bg">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">AUTOR</h2>
            <div class="title-underline"></div>
          </div>
          <div class="author-layout">
            <div class="creators-grid">
              <div v-for="creator in mockCreators" :key="creator.name" class="creator-card">
                <div class="creator-role">{{ creator.role }}</div>
                <div class="creator-name">{{ creator.name }}</div>
              </div>
            </div>
            <div class="author-bio">
              <h3 class="subsection-title">BIOGRAFÍA</h3>
              <p class="author-bio-text">{{ authorBio }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Characters Section -->
      <section id="characters" class="content-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">PERSONAJES</h2>
            <div class="title-underline"></div>
          </div>
          <div class="characters-grid">
            <div v-for="char in mockCharacters" :key="char.name" class="character-item">
              <router-link :to="{ name: 'PersonajeWiki', params: { slug: slugifyChar(char.name) } }" class="char-thumb" aria-label="Ver personaje">
                <img :src="char.image" :alt="char.name">
              </router-link>
              <div class="char-name">{{ char.name }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Section -->
      <section id="related" class="content-section alt-bg">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">EPISODIOS DEL PERSONAJE ({{ characterName }})</h2>
            <div class="title-underline"></div>
          </div>
          <div class="recommended-carousel">
            <button class="rc-arrow rc-arrow-prev" type="button" aria-label="Anterior" :disabled="!recommendedCanPrev" :class="{ 'is-disabled': !recommendedCanPrev }" @click="scrollRecommended('prev')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
              </svg>
            </button>

            <div ref="recommendedTrackRef" class="recommended-track" role="list">
              <router-link
                v-for="cm in related"
                :key="cm.id"
                :to="{ name: 'ComicIssue', params: { id: cm.id } }"
                class="comic-item"
                role="listitem"
              >
                <div class="comic-image">
                  <img :src="getImageUrl(cm.image)" :alt="cm.title">
                  <div class="episode-overlay">
                    <span class="view-more">VER MÁS</span>
                  </div>
                </div>
                <div class="comic-info">
                  <h4 class="comic-title">{{ cm.title }}</h4>
                  <p class="comic-idx">{{ cm.author }} {{ cm.issue }}</p>
                </div>
              </router-link>
            </div>

            <button class="rc-arrow rc-arrow-next" type="button" aria-label="Siguiente" :disabled="!recommendedCanNext" :class="{ 'is-disabled': !recommendedCanNext }" @click="scrollRecommended('next')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path fill-rule="evenodd" d="M4.646 14.354a.5.5 0 0 1 0-.708L10.293 8 4.646 2.354a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section class="content-section series-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">SERIES RECOMENDADAS</h2>
            <div class="title-underline"></div>
          </div>
          <div class="series-carousel" aria-label="Series del personaje">
            <button v-if="showSeriesArrows" class="sc-arrow sc-arrow-prev" type="button" aria-label="Anterior" :disabled="!seriesCanPrev" :class="{ 'is-disabled': !seriesCanPrev }" @click="scrollSeries('prev')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
              </svg>
            </button>

            <div ref="seriesTrackRef" class="series-track" role="list">
              <router-link
                v-for="s in seriesItems"
                :key="s.slug"
                :to="{ name: 'ComicSeries', params: { slug: s.slug }, query: { name: s.title } }"
                class="series-card"
                role="listitem"
              >
                <div class="series-image">
                  <img :src="s.image" :alt="s.title" draggable="false" />
                  <div class="series-overlay">
                    <span class="view-more">VER MÁS</span>
                  </div>
                </div>
                <div class="series-title">{{ s.title }}</div>
                <div class="series-sub">SERIE</div>
              </router-link>
            </div>

            <button v-if="showSeriesArrows" class="sc-arrow sc-arrow-next" type="button" aria-label="Siguiente" :disabled="!seriesCanNext" :class="{ 'is-disabled': !seriesCanNext }" @click="scrollSeries('next')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path fill-rule="evenodd" d="M4.646 14.354a.5.5 0 0 1 0-.708L10.293 8 4.646 2.354a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>

    <div v-if="isDownloadModalOpen" class="download-modal" role="dialog" aria-modal="true" aria-label="Descarga completada">
      <div class="download-modal-backdrop" @click="closeDownloadModal"></div>
      <div class="download-modal-card">
        <div class="download-modal-title">DESCARGA COMPLETADA</div>
        <div class="download-modal-text">Se descargó {{ issue?.title }} {{ issue?.issue }}.</div>
        <button class="btn-primary" type="button" @click="closeDownloadModal">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { comics, featuredComics } from '../assets/js/slider.js'

const route = useRoute()
const router = useRouter()
const baseUrl = import.meta.env.BASE_URL

const isNavSticky = ref(false)
const activeSection = ref('overview')

const purchaseCode = ref('')
const isUnlocked = ref(false)
const redeemError = ref('')

const isDownloadModalOpen = ref(false)

const recommendedTrackRef = ref<HTMLDivElement | null>(null)
const recommendedCanPrev = ref(false)
const recommendedCanNext = ref(false)

const seriesTrackRef = ref<HTMLDivElement | null>(null)
const seriesCanPrev = ref(false)
const seriesCanNext = ref(false)
const isMobile = ref(false)

type SeriesItem = {
  title: string
  slug: string
  image: string
}

type Comic = {
  id?: string
  title: string
  issue?: string
  author?: string
  publishDate?: string
  rating?: number
  image: string
  price?: string
  category?: string
}

const allComics = computed<Comic[]>(() => {
  const a = (comics || []) as Comic[]
  const b = (featuredComics || []) as Comic[]
  return [...a, ...b]
})

const issue = computed<Comic | undefined>(() => {
  const id = String(route.params.id || '')
  return allComics.value.find((c: any) => String(c.id || '') === id)
})

const getImageUrl = (path: string | undefined) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${baseUrl}${cleanPath}`
}

const issueTitle = computed(() => {
  const c = issue.value
  if (!c) return ''
  return `${c.title} ${c.issue || ''}`.toUpperCase()
})

const formattedDate = computed(() => {
  const date = issue.value?.publishDate
  if (!date) return '01 de enero de 2024'
  try {
    return new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' }).toUpperCase()
  } catch {
    return date.toUpperCase()
  }
})

const issueDescription = computed(() => {
  const c = issue.value
  if (!c) return ''
  return `¡Sé testigo del regreso de la leyenda! En ${c.title} ${c.issue || '#1'}, comienza una nueva era. Mientras el mundo se transforma a su alrededor, nuestros héroes deberán adaptarse a una realidad donde la línea entre amigo y enemigo se vuelve borrosa. Este capítulo cargado de acción trae grandes riesgos, profundidad emocional y revelaciones que sacuden el mundo.`
})

const heroBgStyle = computed(() => {
  const img = getImageUrl(issue.value?.image)
  if (!img) return {}
  return { backgroundImage: `url('${img}')` }
})

const related = computed<Comic[]>(() => {
  const c = issue.value
  if (!c) return []
  const pool = allComics.value.filter((x: any) => x && x.id && String(x.id) !== String(c.id))
  return pool.slice(0, 10) as Comic[]
})

const characterName = computed(() => {
  const c = issue.value
  return String(c?.title || '').toUpperCase()
})

const characterSeries = computed(() => {
  const key = String(issue.value?.title || '').toLowerCase().trim()
  const map: Record<string, string[]> = {
    'spider-man': ['AMAZING SPIDER-MAN', 'SPECTACULAR SPIDER-MAN', 'ULTIMATE SPIDER-MAN'],
    'batman': ['DETECTIVE COMICS', 'BATMAN: GOTHAM KNIGHTS', 'BATMAN & ROBIN'],
    'thor': ['THOR', 'MIGHTY THOR', 'THOR: GOD OF THUNDER'],
    'iron man': ['INVINCIBLE IRON MAN', 'IRON MAN', 'IRON MAN: EXTREMIS'],
    'x-men': ['UNCANNY X-MEN', 'X-MEN', 'ASTONISHING X-MEN'],
    'wonder woman': ['WONDER WOMAN', 'SENSATION COMICS', 'WONDER WOMAN: EARTH ONE'],
  }

  return map[key] || ['SERIE PRINCIPAL', 'ESPECIALES', 'NUEVA SAGA']
})

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')

const slugifyChar = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')

const seriesItems = computed<SeriesItem[]>(() => {
  const base = characterSeries.value
  const pool = related.value.length ? related.value : issue.value ? [issue.value] : []
  return base.map((title, idx) => {
    const rep = pool[idx % Math.max(1, pool.length)]
    return {
      title,
      slug: slugify(title),
      image: getImageUrl(rep?.image) || getImageUrl(issue.value?.image),
    }
  })
})

const showSeriesArrows = computed(() => {
  const count = seriesItems.value.length
  return isMobile.value ? count >= 2 : count >= 4
})

// Mock Data for Marvel Layout
const mockCreators = [
  { role: 'Autor', name: 'Angello Aponte' }
]

const authorBio =
  'Angello Aponte es el fundador de Comics Onofrietti. Creador y narrador apasionado, construye historias originales con una identidad visual marcada, combinando acción, emoción y mitología propia en cada entrega.'

const mockCharacters = [
  { name: 'Cyclops', image: '/img/comic1.jpg' },
  { name: 'Marvel Girl', image: '/img/comic2.jpg' },
  { name: 'Professor X', image: '/img/comic3.jpg' },
  { name: 'Magneto', image: '/img/comic4.jpg' },
  { name: 'Emma Frost', image: '/img/comic5.jpg' },
  { name: 'Beast', image: '/img/comic6.jpg' }
]

const redeemCode = () => {
  redeemError.value = ''
  const code = purchaseCode.value.trim().toUpperCase()
  if (!code) {
    redeemError.value = 'POR FAVOR INGRESA UN CÓDIGO.'
    return
  }

  if (code.length < 6) {
    redeemError.value = 'CÓDIGO INVÁLIDO.'
    return
  }

  isUnlocked.value = true
  downloadComic()
  isDownloadModalOpen.value = true
}

const downloadComic = () => {
  if (!isUnlocked.value) return
  const c = issue.value
  const title = (c?.title || 'Comic').replace(/[^a-z0-9\-\s_]/gi, '').trim() || 'Comic'
  const issueNo = (c?.issue || '').replace(/[^a-z0-9\-\s_]/gi, '').trim()
  const fileName = `${title}${issueNo ? '-' + issueNo : ''}-download.txt`

  const content = [
    'DESCARGA DE CÓMIC (DEMO)',
    `TÍTULO: ${c?.title || ''}`,
    `NÚMERO: ${c?.issue || ''}`,
    `AUTOR: Angello Aponte`,
    `CÓDIGO: ${purchaseCode.value.trim()}`,
  ].join('\n')

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

const closeDownloadModal = () => {
  isDownloadModalOpen.value = false
}

const updateRecommendedArrows = () => {
  const el = recommendedTrackRef.value
  if (!el) {
    recommendedCanPrev.value = false
    recommendedCanNext.value = false
    return
  }

  const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth)
  const epsilon = 6
  const hasOverflow = maxScrollLeft > epsilon
  recommendedCanPrev.value = hasOverflow && el.scrollLeft > epsilon
  recommendedCanNext.value = hasOverflow && el.scrollLeft < maxScrollLeft - epsilon
}

const scrollRecommended = (dir: 'prev' | 'next') => {
  const el = recommendedTrackRef.value
  if (!el) return
  if (dir === 'prev' && !recommendedCanPrev.value) return
  if (dir === 'next' && !recommendedCanNext.value) return
  const amount = Math.max(260, Math.floor(el.clientWidth * 0.85))
  el.scrollBy({ left: dir === 'prev' ? -amount : amount, behavior: 'smooth' })
  window.setTimeout(updateRecommendedArrows, 250)
}

const updateSeriesArrows = () => {
  const el = seriesTrackRef.value
  if (!showSeriesArrows.value) {
    seriesCanPrev.value = false
    seriesCanNext.value = false
    return
  }
  if (!el) {
    seriesCanPrev.value = false
    seriesCanNext.value = false
    return
  }

  const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth)
  const epsilon = 6
  const hasOverflow = maxScrollLeft > epsilon
  seriesCanPrev.value = hasOverflow && el.scrollLeft > epsilon
  seriesCanNext.value = hasOverflow && el.scrollLeft < maxScrollLeft - epsilon
}

const scrollSeries = (dir: 'prev' | 'next') => {
  const el = seriesTrackRef.value
  if (!el) return
  if (dir === 'prev' && !seriesCanPrev.value) return
  if (dir === 'next' && !seriesCanNext.value) return
  const amount = Math.max(260, Math.floor(el.clientWidth * 0.85))
  el.scrollBy({ left: dir === 'prev' ? -amount : amount, behavior: 'smooth' })
  window.setTimeout(updateSeriesArrows, 250)
}

const handleResize = () => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  updateRecommendedArrows()
  updateSeriesArrows()
}

const handleScroll = () => {
  isNavSticky.value = window.scrollY > 500
  
  const sections = ['overview', 'creators', 'characters', 'related']
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
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  window.setTimeout(updateRecommendedArrows, 0)
  window.setTimeout(updateSeriesArrows, 0)
  if (recommendedTrackRef.value) {
    recommendedTrackRef.value.addEventListener('scroll', updateRecommendedArrows, { passive: true })
  }
  if (seriesTrackRef.value) {
    seriesTrackRef.value.addEventListener('scroll', updateSeriesArrows, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  if (recommendedTrackRef.value) {
    recommendedTrackRef.value.removeEventListener('scroll', updateRecommendedArrows)
  }
  if (seriesTrackRef.value) {
    seriesTrackRef.value.removeEventListener('scroll', updateSeriesArrows)
  }
})
</script>

<style scoped>
.issue-view {
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

/* HERO SECTION */
.issue-hero {
  position: relative;
  min-height: 600px;
  background: #151515;
  color: #fff;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 60px;
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  inset: -20px;
  background-size: cover;
  background-position: center;
  filter: blur(25px) brightness(0.4);
  opacity: 0.6;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(21, 21, 21, 0.2) 0%, rgba(21, 21, 21, 0.9) 100%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 60px;
  align-items: flex-start;
}

.hero-cover {
  width: 100%;
  aspect-ratio: 2/3;
  box-shadow: 0 30px 60px rgba(0,0,0,0.8);
  border: 1px solid rgba(255,255,255,0.1);
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  border:none;
  box-shadow:none;
}

.breadcrumb a {
  color: #fff;
  text-decoration: none;
}

.breadcrumb .sep {
  color: #2563eb;
}

.main-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.hero-meta {
  margin-bottom: 30px;
}

.meta-label {
  color: #999;
  font-weight: 700;
  font-size: 12px;
  margin-right: 10px;
}

.meta-value {
  font-weight: 800;
  font-size: 14px;
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 30px;
  max-width: 800px;
}

.hero-creators {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
}

.hero-creator .role {
  display: block;
  font-size: 11px;
  font-weight: 800;
  color: #999;
  letter-spacing: 1px;
}

.hero-creator .name {
  font-weight: 700;
  font-size: 15px;
}

.hero-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
}

.redeem-wrap {
  display: flex;
  gap: 10px;
  flex: 1;
  min-width: 260px;
}

.code-input {
  flex: 1;
  height: 44px;
  padding: 0 14px;
  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.06);
  color: #fff;
  font-weight: 800;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  outline: none;
}

.code-input::placeholder {
  color: rgba(255,255,255,0.55);
}

.btn-primary:disabled,
.btn-secondary:disabled {
  opacity: 0.5;
  cursor: default;
  transform: none;
}

.redeem-error {
  margin: 12px 0 0;
  font-weight: 900;
  letter-spacing: 1px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #ef4444;
  text-transform: uppercase;
}

.redeem-success {
  margin: 12px 0 0;
  font-weight: 900;
  letter-spacing: 1px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #60a5fa;
  text-transform: uppercase;
}

.btn-primary {
  background: #2563eb;
  color: #fff;
  border: none;
  font-weight: 900;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 15px 40px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  transition: transform 0.2s ease;
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-weight: 900;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 15px 40px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  transition: all 0.2s ease;
}

.btn-primary:hover, .btn-secondary:hover {
  transform: translateY(-3px);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
}

.download-modal {
  position: fixed;
  inset: 0;
  z-index: 5000;
  display: grid;
  place-items: center;
}

.download-modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.75);
}

.download-modal-card {
  position: relative;
  width: min(520px, calc(100vw - 40px));
  background: #151515;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.12);
  padding: 22px;
}

.download-modal-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 18px;
  margin-bottom: 10px;
}

.download-modal-text {
  color: rgba(255,255,255,0.86);
  margin-bottom: 16px;
  font-weight: 700;
}

.series-section {
  background: #ffffff;
  color: #151515;
}

.series-carousel {
  background: #ffffff;
  color: #151515;
  border: none;
  margin-top: 24px;
  padding: 18px;
  position: relative;
}

.series-track {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  padding: 6px 2px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.series-track::-webkit-scrollbar {
  display: none;
}

.series-card {
  flex: 0 0 280px;
  min-width: 280px;
  border: 1px solid rgba(0,0,0,0.10);
  border-radius: 0px;
  padding: 14px;
  background: #ffffff;
  scroll-snap-align: start;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.series-card:hover {
  transform: translateY(-10px);
}

.series-image {
  width: 100%;
  height: 120px;
  border-radius: 0px;
  overflow: hidden;
  background: rgba(0,0,0,0.06);
  margin-bottom: 10px;
  position: relative;
}

.series-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.series-card:hover .series-image img {
  transform: scale(1.1);
}

.series-overlay {
  position: absolute;
  inset: 0;
  background: rgba(29, 195, 236, 0.53);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.series-card:hover .series-overlay {
  opacity: 1;
}

.view-more {
  color: white;
  font-weight: 800;
  letter-spacing: 1px;
  border: 2px solid white;
  padding: 8px 16px;
}

@media (min-width: 1024px) {
  .series-card {
    flex: 0 0 340px;
    min-width: 340px;
  }

  .series-image {
    height: 160px;
  }
}

.sc-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 0;
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 5;
}

.sc-arrow:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.sc-arrow.is-disabled,
.sc-arrow:disabled {
  opacity: 0.45;
  cursor: default;
}

.sc-arrow-prev {
  left: 10px;
}

.sc-arrow-next {
  right: 10px;
}

.series-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 16px;
}

.series-sub {
  margin-top: 6px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #111111;
  opacity: 0.75;
}

/* STICKY NAV */
.sticky-nav {
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.is-sticky {
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

.nav-list li a {
  display: block;
  padding: 14px 18px;
  color: #666;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

@media (max-width: 1024px) {
  .nav-list {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .nav-list::-webkit-scrollbar { display: none; }

  .nav-list li { flex: 0 0 auto; }
}

.nav-list li a:hover, .nav-list li a.active {
  color: #2563eb;
}

/* CONTENT SECTIONS */
.content-section {
  padding: 80px 0;
}

.grey-bg { background: #f8f8f8; }
.alt-bg { background: #151515; color: #fff; }

.section-header {
  margin-bottom: 50px;
  position: relative;
}

.section-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}

.title-underline {
  width: 60px;
  height: 4px;
  background: #2563eb;
  margin-top: 10px;
}

.subsection-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 20px;
  color: #2563eb;
}

/* OVERVIEW */
.overview-body {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 80px;
}

.synopsis p {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 20px;
}

.ext-desc {
  font-style: italic;
  opacity: 0.8;
}

.details-list {
  list-style: none;
  padding: 0;
}

.details-list li {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.details-list .k {
  font-weight: 800;
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
}

.details-list .v {
  font-weight: 700;
}

/* CREATORS */
.author-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start;
  margin-top: 30px;
}

.creators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
}

.author-bio {
  margin-top: 0;
}

.author-bio-text {
  margin: 10px 0 0;
  line-height: 1.8;
  color: #333333ff;
}

.creator-card {
  padding: 20px;
}

.creator-role {
  font-size: 10px;
  font-weight: 800;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.creator-name {
  font-weight: 700;
  font-size: 16px;
}

/* CHARACTERS */
.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 30px;
}

.character-item {
  text-align: center;
}

.char-thumb {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 15px;
  overflow: hidden;
  border: 4px solid #fff;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.char-thumb:hover {
  transform: translateY(-6px);
}

.char-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.char-thumb:hover img {
  transform: scale(1.06);
}

.char-name {
  font-weight: 800;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 13px;
}

/* RECOMMENDED */
.recommended-carousel {
  position: relative;
}

.recommended-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 10px 56px 10px;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 56px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.recommended-track::-webkit-scrollbar {
  display: none;
}

.recommended-track .comic-item {
  flex: 0 0 210px;
  min-width: 210px;
  scroll-snap-align: start;
}

.rc-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 0;
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 5;
}

.rc-arrow:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.rc-arrow.is-disabled,
.rc-arrow:disabled {
  opacity: 0.45;
  cursor: default;
}

.rc-arrow-prev {
  left: 10px;
}

.rc-arrow-next {
  right: 10px;
}

.comic-item {
  scroll-snap-align: start;
  flex: 0 0 210px;
  min-width: 210px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.comic-item:hover {
  transform: translateY(-10px);
}

.comic-image {
  aspect-ratio: 2/3;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
}

.comic-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.comic-item:hover .comic-image img {
  transform: scale(1.1);
}

.episode-overlay {
  position: absolute;
  inset: 0;
  background: rgba(29, 195, 236, 0.53);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.comic-item:hover .episode-overlay {
  opacity: 1;
}

.comic-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  margin: 0;
  text-transform: uppercase;
}

.comic-idx {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 280px 1fr;
    gap: 40px;
  }
  
  .recommended-track .comic-item {
    flex-basis: 190px;
    min-width: 190px;
  }
  
  .overview-body {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-cover {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .hero-creators {
    justify-content: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .nav-list li a {
    padding: 12px 14px;
    font-size: 11px;
  }

  .author-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .recommended-track {
    padding-left: 48px;
    padding-right: 48px;
    scroll-padding-inline: 48px;
  }

  .recommended-track .comic-item {
    flex-basis: 170px;
    min-width: 170px;
  }
}
</style>
