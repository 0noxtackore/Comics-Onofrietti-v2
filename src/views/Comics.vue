<template>
  <div class="comics-view">
    <!-- Featured Section -->
    <section class="featured-comics">
      <div class="hero-bg">
        <img src="/img/m.webp" alt="Lanzamientos de la semana" loading="lazy" decoding="async">
      </div>
      <div class="hero-overlay"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-top-tag">LANZAMIENTOS DE LA SEMANA</div>
          <h1 class="hero-title">LO MEJOR DE ESTE MIÉRCOLES</h1>
          <p class="hero-description">Descubre los nuevos capítulos de tus sagas favoritas. Disponibles ahora en digital y tiendas físicas.</p>
          <div class="hero-actions">
            <button class="marvel-btn secondary" type="button">EXPLORAR</button>
          </div>
        </div>
      </div>
    </section>

    <section class="comics-ranking">
      <div class="container">
        <div class="rankings-head">
          <h2 class="rankings-title">RANKING | MEJORES CÓMICS</h2>
          <div class="rankings-line"></div>
        </div>

        <div class="ranking-carousel-wrap">
          <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :spaceBetween="0"
            :loop="true"
            :coverflowEffect="{
              rotate: 35,
              stretch: 50,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            }"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="comics-ranking-swiper"
            @swiper="onRankingSwiper"
            @slideChange="onRankingSlideChange"
          >
            <swiper-slide
              v-for="(cm, idx) in topRankedComics"
              :key="cm.id"
              class="ranking-slide"
            >
              <div class="ranking-item" @click="openComic(cm)">
                <div class="ranking-media">
                  <div class="ranking-cover">
                    <img :src="cm.image" :alt="cm.title" loading="lazy" decoding="async" fetchpriority="low">
                  </div>
                  <div class="ranking-bag"></div>
                  <div class="ranking-media-overlay">
                    <span class="view-details">VER DETALLES</span>
                  </div>
                  <div class="rank-cap">
                    <span class="rank-medal" :class="{ 'is-1': idx === 0, 'is-2': idx === 1, 'is-3': idx === 2 }" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 2a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.2V22l3-2 3 2v-8.8c1.8-1.1 3-3 3-5.2a6 6 0 0 0-6-6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
                      </svg>
                    </span>
                    <span class="rank-cap-num">#{{ idx + 1 }}</span>
                  </div>
                </div>

                <div
                  class="ranking-card"
                  :class="{ 'is-1': idx === 0, 'is-2': idx === 1, 'is-3': idx === 2 }"
                >
                  <div class="ranking-info">
                    <div class="ranking-name">{{ cm.title }} {{ cm.issue }}</div>
                    <div class="ranking-meta">RATING {{ cm.rating }}</div>
                    <div class="ranking-stars">
                      <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= Math.floor(cm.rating / 2) }">★</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <button class="ranking-arrow prev" type="button" aria-label="Anterior" :disabled="!isMobile && rankingActiveIndex === 0" @click="rankingPrev">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M15.4 7.4 10.8 12l4.6 4.6-1.4 1.4L8 12l6-6 1.4 1.4z"/></svg>
          </button>
          <button class="ranking-arrow next" type="button" aria-label="Siguiente" :disabled="!isMobile && rankingActiveIndex === rankingMaxIndex" @click="rankingNext">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6-1.4-1.4z"/></svg>
          </button>
        </div>
      </div>
    </section>

    <OnofriettiSection
      v-for="group in heroCarouselsOrdered"
      :key="group.key"
      :title="group.title"
      :subtitle="group.subtitle"
      :comics="group.comics"
      :variant="group.variant"
      :carouselSurfaceVariant="group.carouselSurfaceVariant"
      :bottomBandVariant="group.bottomBandVariant"
      :heroSide="group.heroSide"
    />
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import OnofriettiSection from '../components/OnofriettiSection.vue'
import { comics } from '../assets/js/slider.js'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const router = useRouter()
const modules = [EffectCoverflow, Pagination]

const openComic = (comic) => {
  if (!comic?.id) return
  router.push({ name: 'ComicIssue', params: { id: comic.id } })
}

const topRankedComics = computed(() => {
  const list = [...comics]
  list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
  return list.slice(0, 10)
})

const rankingSwiper = ref(null)
const rankingActiveIndex = ref(0)
const rankingMaxIndex = computed(() => Math.max(0, topRankedComics.value.length - 1))

const onRankingSwiper = (swiper) => {
  rankingSwiper.value = swiper
  rankingActiveIndex.value = swiper?.realIndex ?? 0
}

const onRankingSlideChange = (swiper) => {
  rankingActiveIndex.value = swiper?.realIndex ?? 0
}

const rankingPrev = () => {
  if (rankingActiveIndex.value <= 0) return
  rankingSwiper.value?.slidePrev?.()
}

const rankingNext = () => {
  if (rankingActiveIndex.value >= rankingMaxIndex.value) return
  rankingSwiper.value?.slideNext?.()
}

const isMobile = ref(false)
const updateMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  updateMobile()
  window.addEventListener('resize', updateMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMobile)
})

const heroCarousels = computed(() => {
  const heroSeries = ['Spider-Man', 'Iron Man', 'Batman', 'X-Men', 'Wonder Woman']

  return heroSeries.slice(0, 5).map((hero, idx) => {
    const isDark = idx % 2 === 1
    const heroSide = idx % 2 === 0 ? 'right' : 'left'
    const seasons = Array.from({ length: 5 }).map((_, i) => {
      const base = comics[i % comics.length]
      return {
        ...base,
        sourceId: base.id,
        title: `${hero} | Temporada ${i + 1}`,
        issue: `#${i + 1}`,
        author: base.author,
        image: base.image,
      }
    })

    return {
      key: hero,
      title: `${hero.toUpperCase()} | TEMPORADAS`,
      subtitle: `Explora las temporadas más importantes de ${hero}.`,
      comics: seasons,
      variant: isDark ? 'dark' : 'light',
      carouselSurfaceVariant: isDark ? 'dark' : 'light',
      bottomBandVariant: isDark ? 'dark' : 'light',
      heroSide,
    }
  })
})

const heroCarouselsOrdered = computed(() => {
  const base = heroCarousels.value
  const iron = base.find(g => g.key === 'Iron Man')
  if (!iron) return base

  const flash = {
    ...iron,
    key: 'Flash',
    title: 'FLASH | TEMPORADAS',
    subtitle: 'Explora las temporadas más importantes de Flash.',
  }

  const idxSpider = base.findIndex(g => g.key === 'Spider-Man')
  const withoutFlash = base.filter(g => g.key !== 'Flash')

  if (idxSpider === -1) {
    return [flash, ...withoutFlash]
  }

  return [
    ...withoutFlash.slice(0, idxSpider),
    flash,
    ...withoutFlash.slice(idxSpider),
  ]
})

// (Ranking carousel uses Swiper; arrow actions are clamped to avoid wrapping with arrows.)
</script>

<style scoped>
.comics-view {
  background-color: #151515;
  color: #fff;
  min-height: 100vh;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

/* FEATURED */
.featured-comics {
  padding: 0;
  margin: 0;
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #151515;
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
  color: #fff;
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

.marvel-btn {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 12px 30px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0;
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
  padding: 14px 34px;
}

.marvel-btn.secondary:hover {
  background-color: #fff;
  color: #151515;
}

.comics-ranking {
  padding: 40px 0 60px;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  overflow: hidden;
}

.rankings-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
}

.rankings-title {
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #111111;
  font-size: 20px;
}

.rankings-line {
  height: 2px;
  flex: 1;
  background: linear-gradient(90deg, #2563eb, transparent);
  border-radius: 999px;
  opacity: 0.9;
}

.ranking-carousel-wrap {
  position: relative;
  padding: 20px 0 40px;
}

.comics-ranking-swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.ranking-slide {
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 280px;
  height: auto;
  filter: blur(1px) brightness(0.92);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.ranking-item {
  width: 100%;
  cursor: pointer;
}

.swiper-slide-active.ranking-slide {
  filter: blur(0) brightness(1);
  z-index: 10;
}

.ranking-card {
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 0; /* Full rounded as it's more independent now */
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-top: -40px; /* Increased overlap for visual depth */
  padding-top: 30px; /* Spacing for the overlap */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.ranking-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 25% 20%, rgba(37, 99, 235, 0.12), rgba(255,255,255,0) 60%),
    linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.06) 100%);
  opacity: 0.9;
  pointer-events: none;
  z-index: 1;
}

.ranking-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.16) 45%, rgba(255,255,255,0) 70%);
  transform: translateX(-120%);
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}

.ranking-item:hover .ranking-media {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.ranking-item:hover .ranking-card {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.ranking-card.is-1 {
  border-color: rgba(255, 215, 0, 0.85);
  background: #ffffff;
}

.ranking-card.is-1::before {
  background:
    radial-gradient(circle at 25% 20%, rgba(255, 215, 0, 0.22), rgba(255,255,255,0) 60%),
    linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.06) 100%);
}

.ranking-item:hover .ranking-card.is-1 {
  border-color: rgba(255, 215, 0, 0.95);
  box-shadow: 0 30px 60px rgba(255, 215, 0, 0.18);
}

.ranking-item:hover .ranking-card.is-2 {
  border-color: rgba(148, 163, 184, 0.95);
  box-shadow: 0 30px 60px rgba(148, 163, 184, 0.18);
}

.ranking-item:hover .ranking-card.is-2::before {
  background:
    radial-gradient(circle at 25% 20%, rgba(148, 163, 184, 0.18), rgba(255,255,255,0) 60%),
    linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%);
}

.ranking-item:hover .ranking-card.is-3 {
  border-color: rgba(180, 83, 9, 0.95);
  box-shadow: 0 30px 60px rgba(180, 83, 9, 0.18);
}

.ranking-item:hover .ranking-card.is-3::before {
  background:
    radial-gradient(circle at 25% 20%, rgba(180, 83, 9, 0.18), rgba(255,255,255,0) 60%),
    linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%);
}

.rank-cap {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 15;
  display: flex;
  align-items: center;
  gap: 8px;
}

.rank-medal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.12);
  color: #111111;
}

.rank-medal.is-1 { color: #ffd700; border-color: #ffd700; box-shadow: 0 0 15px rgba(255, 215, 0, 0.3); }
.rank-medal.is-2 { color: #e2e8f0; border-color: #e2e8f0; box-shadow: 0 0 15px rgba(226, 232, 240, 0.3); }
.rank-medal.is-3 { color: #b45309; border-color: #b45309; box-shadow: 0 0 15px rgba(180, 83, 9, 0.3); }

.rank-cap-num {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 14px;
  background: #2563eb;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 1px;
}

.ranking-media {
  position: relative;
  width: 220px; /* Reduced width */
  height: 360px; /* Reduced height */
  margin: 0 auto; /* Center it */
  overflow: hidden;
  border-radius: 4px;
  transition: transform 0.4s ease;
  z-index: 10;
  background: transparent;
}

.ranking-bag {
  position: absolute;
  left: 50%;
  top: 6%;
  width: 92%;
  height: calc(88% + 5px);
  transform: translateX(-50%);
  background-image: url('/img/bag/bag.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
  pointer-events: none;
  opacity: 1;
  mix-blend-mode: normal;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.35);
}

.ranking-cover {
  position: absolute;
  left: 50%;
  top: 54%;
  width: 88%;
  aspect-ratio: 2 / 3;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.ranking-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  mix-blend-mode: multiply;
}

.ranking-media-overlay {
  position: absolute;
  inset: 0;
  background: rgba(37, 99, 235, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 5;
}

.ranking-item:hover .ranking-media-overlay {
  opacity: 1;
}

.view-details {
  border: 2px solid #fff;
  padding: 8px 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: #fff;
  letter-spacing: 1px;
}

.ranking-info {
  padding: 24px 15px 15px;
  background: #ffffff;
  position: relative;
  z-index: 5;
}

.ranking-name {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #111111;
  text-transform: uppercase;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ranking-meta {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #2563eb;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.ranking-stars {
  display: flex;
  gap: 2px;
}

.star {
  color: rgba(0, 0, 0, 0.18);
  font-size: 14px;
}

.star.filled {
  color: #ffd700;
}

.ranking-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 0;
  background: #2563eb;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.ranking-arrow:hover {
  background: #1d4ed8;
  transform: translateY(-50%) scale(1.05);
}

.ranking-arrow:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.ranking-arrow:disabled:hover {
  background: #2563eb;
  transform: translateY(-50%);
}

.ranking-arrow.is-disabled, 
.swiper-button-disabled {
  opacity: 0.3 !important;
  pointer-events: none;
}

.ranking-arrow.prev { left: -60px; }
.ranking-arrow.next { right: -60px; }

@media (max-width: 1400px) {
  .ranking-arrow.prev { left: 20px; }
  .ranking-arrow.next { right: 20px; }
}

@media (max-width: 768px) {
  .comics-ranking { padding: 28px 0 32px; }
  .ranking-carousel-wrap { padding: 10px 0 18px; }
  .comics-ranking-swiper { padding-top: 22px; padding-bottom: 26px; }

  .ranking-slide { width: 220px; }
  .ranking-slide { filter: none; }
  .ranking-media { width: 180px; height: 280px; }
  .ranking-card { margin-top: -30px; padding-top: 25px; }
  .ranking-info { padding: 20px 12px 12px; }
  .ranking-name { font-size: 14px; }
  .ranking-arrow {
    width: 38px;
    height: 38px;
    top: 55%;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  }

  .ranking-arrow.prev { left: 10px; }
  .ranking-arrow.next { right: 10px; }
  .rank-medal { width: 28px; height: 28px; }
  .rank-cap-num { font-size: 12px; padding: 3px 10px; }
}

@media (max-width: 480px) {
  .comics-ranking { padding: 24px 0 28px; }
  .ranking-carousel-wrap { padding: 8px 0 14px; }
  .comics-ranking-swiper { padding-top: 18px; padding-bottom: 22px; }

  .ranking-slide { width: 180px; }
  .ranking-media { width: 150px; height: 240px; }
  .ranking-card { margin-top: -25px; padding-top: 20px; }
  .ranking-info { padding: 15px 10px 10px; }
  .ranking-name { font-size: 13px; }
  .rank-medal { width: 24px; height: 24px; }
  .rank-cap-num { font-size: 11px; padding: 2px 8px; }
}

:deep(.swiper-pagination-bullet) {
  background: rgba(0, 0, 0, 0.25);
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #2563eb;
  width: 25px;
  border-radius: 10px;
  transition: width 0.3s ease;
}


.featured-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%);
  z-index: 0;
}

.featured-banner::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%);
  z-index: 0;
  pointer-events: none;
}

.featured-content {
  position: relative;
  z-index: 1;
  padding: 0 20px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.85);
}

.eyebrow {
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 5px;
  display: block;
}

.main-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.description {
  font-size: 18px;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 600px) {
  .main-title {
    font-size: 32px;
  }

  .featured-comics {
    min-height: 520px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
