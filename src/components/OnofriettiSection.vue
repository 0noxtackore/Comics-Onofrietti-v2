<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  title: string;
  subtitle: string;
  comics: Array<{
    id?: string;
    sourceId?: string;
    title: string;
    image: string;
    author?: string;
    series?: string;
    issue?: string;
  }>;
  heroImage?: string;
  variant?: 'dark' | 'light';
  carouselSurfaceVariant?: 'light' | 'dark';
  bottomBandVariant?: 'light' | 'dark';
  heroSide?: 'left' | 'right';
}>();

const router = useRouter()

const trackRef = ref<HTMLDivElement | null>(null)

const startSentinelRef = ref<HTMLDivElement | null>(null)
const endSentinelRef = ref<HTMLDivElement | null>(null)

let edgeObserver: IntersectionObserver | null = null

const canScrollPrev = ref(false)
const canScrollNext = ref(false)

const heroImageSrc = computed(() => props.heroImage || props.comics?.[0]?.image || '')

const heroSideClass = computed(() => (props.heroSide === 'left' ? 'is-hero-left' : 'is-hero-right'))

const carouselSurfaceClass = computed(() => {
  const v = props.carouselSurfaceVariant || 'light'
  return v === 'dark' ? 'is-dark' : 'is-light'
})

const bottomBandClass = computed(() => {
  const v = props.bottomBandVariant || 'light'
  return v === 'dark' ? 'is-dark' : 'is-light'
})

const updateArrowState = () => {
  const trackEl = trackRef.value
  if (!trackEl) {
    canScrollPrev.value = false
    canScrollNext.value = false
    return
  }

  const maxScrollLeft = Math.max(0, trackEl.scrollWidth - trackEl.clientWidth)
  if (maxScrollLeft <= 2) {
    canScrollPrev.value = false
    canScrollNext.value = false
  }
}

const scrollTrack = (direction: 'prev' | 'next') => {
  if (!trackRef.value) return
  const el = trackRef.value
  if (direction === 'prev' && !canScrollPrev.value) return
  if (direction === 'next' && !canScrollNext.value) return
  const amount = Math.max(260, Math.floor(el.clientWidth * 0.9))
  el.scrollBy({ left: direction === 'prev' ? -amount : amount, behavior: 'smooth' })

  window.setTimeout(updateArrowState, 350)
}

const openComic = (comic: (typeof props.comics)[number]) => {
  const id = comic.sourceId || comic.id
  if (!id) return
  router.push({ name: 'ComicIssue', params: { id } })
}

onMounted(async () => {
  await nextTick()

  if (trackRef.value) {
    trackRef.value.scrollLeft = 0
  }

  const trackEl = trackRef.value
  const startEl = startSentinelRef.value
  const endEl = endSentinelRef.value

  if (edgeObserver) {
    edgeObserver.disconnect()
    edgeObserver = null
  }

  if (trackEl && startEl && endEl) {
    edgeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === startEl) {
            canScrollPrev.value = !entry.isIntersecting
          }
          if (entry.target === endEl) {
            canScrollNext.value = !entry.isIntersecting
          }
        }
      },
      {
        root: trackEl,
        threshold: 1,
      },
    )

    edgeObserver.observe(startEl)
    edgeObserver.observe(endEl)
  } else {
    updateArrowState()
  }

  window.addEventListener('resize', updateArrowState)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateArrowState)
  if (edgeObserver) {
    edgeObserver.disconnect()
    edgeObserver = null
  }
})
</script>

<template>
  <section :class="['mu-section', heroSideClass, props.variant === 'light' ? 'is-light' : '']">
    <div v-if="heroImageSrc" class="mu-hero">
      <img :src="heroImageSrc" alt="Onofrietti Unlimited" loading="lazy">
    </div>

    <div class="container">
      <div class="mu-top">
        <!-- Header Section -->
        <div class="mu-header">
          <div class="mu-logo-wrapper">
            <span class="mu-brand">¡COMICS EXTRA!</span>
          </div>
          <h2 class="mu-title">
            {{ title }}
          </h2>
          <p class="mu-text-cta">
            {{ subtitle }}
          </p>
          <button class="mu-btn-cta">ÚNETE AHORA</button>
        </div>
      </div>

      <!-- Comics Carousel -->
      <div :class="['mu-carousel-surface', carouselSurfaceClass]">
        <div class="mu-carousel">
          <button class="mu-arrow mu-arrow-prev" type="button" aria-label="Anterior" :disabled="!canScrollPrev" :class="{ 'is-disabled': !canScrollPrev }" @click="scrollTrack('prev')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </button>

          <div class="mu-track" ref="trackRef">
            <div ref="startSentinelRef" class="mu-sentinel"></div>
            <button
              v-for="(comic, index) in comics"
              :key="index"
              class="mu-card"
              type="button"
              @click="openComic(comic)"
            >
              <div class="mu-card-image">
                <img :src="comic.image" :alt="comic.title" loading="lazy">
                <div class="mu-card-overlay">
                  <span class="read-now">LEER AHORA</span>
                </div>
              </div>
              <div class="mu-card-info">
                <h3 class="mu-comic-title">{{ comic.title }}</h3>
                <p class="mu-comic-meta">
                  {{ comic.author || (comic.issue ? `NÚMERO #${comic.issue}` : '2024') }}
                </p>
              </div>
            </button>
            <div ref="endSentinelRef" class="mu-sentinel"></div>
          </div>

          <button class="mu-arrow mu-arrow-next" type="button" aria-label="Siguiente" :disabled="!canScrollNext" :class="{ 'is-disabled': !canScrollNext }" @click="scrollTrack('next')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M4.646 14.354a.5.5 0 0 1 0-.708L10.293 8 4.646 2.354a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="['mu-bottom-band', bottomBandClass]"></div>
  </section>
</template>

<style scoped>
.mu-section {
  background-color: #151515;
  padding: 60px 0 0;
  border-bottom: 1px solid #393939;
  position: relative;
  overflow: hidden;
}

/* Background Pattern (Subtle) */
.mu-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: 
    linear-gradient(rgba(21, 21, 21, 0.95), rgba(21, 21, 21, 0.95)),
    url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23282828' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.mu-section.is-light {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.mu-section.is-light::before {
  background-image: none;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* HEADER STYLES */
.mu-top {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 220px;
  margin-bottom: 56px;
  position: relative;
  z-index: 2; /* Content above background */
}

.mu-header {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  max-width: 600px;
  position: relative;
  border-right: none;
}

/* ONOFRIETTI MASTHEAD BACKGROUND STYLE ("sets half") */
.mu-hero {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 55%; /* sets half */
  z-index: 0; /* Background layer */
  overflow: hidden;
  display: flex;
  align-items: flex-start;
}

.mu-section.is-hero-left .mu-hero {
  left: 0;
  right: auto;
}

.mu-section.is-hero-left .mu-top {
  justify-content: flex-end;
}

.mu-section.is-hero-left .mu-header {
  margin-left: auto;
  text-align: right;
  align-items: flex-end;
}

/* Replicating 'Masthead__Background__Built__Image' */
.mu-hero img {
  width: 100%;
  height: auto;
  max-height: 50%;
  display: block;
  object-fit: cover;
  object-position: center top;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  border-radius: 0;
  box-shadow: none;
  border: none;
}

.mu-section.is-hero-left .mu-hero img {
  clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
}

/* Overlay gradient */
.mu-hero::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.8) 15%, rgba(21, 21, 21, 0) 50%);
  z-index: 1;
}

.mu-section.is-hero-left .mu-hero::after {
  background: linear-gradient(270deg, #151515 0%, rgba(21, 21, 21, 0.8) 15%, rgba(21, 21, 21, 0) 50%);
}

.mu-section.is-light .mu-hero::after {
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 15%, rgba(255, 255, 255, 0) 50%);
}

.mu-section.is-hero-left.is-light .mu-hero::after {
  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 15%, rgba(255, 255, 255, 0) 50%);
}

@media (min-width: 1200px) {
  /* Adjustments for large screens if needed */
}

/* MOBILE RESPONSIVENESS UPDATE */
@media (max-width: 768px) {
  .mu-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
    min-height: auto;
    margin-bottom: 30px;
  }

  .mu-header {
    width: 100%;
    max-width: 100%;
    padding-right: 0;
    margin-bottom: 20px;
    align-items: center;
    text-align: center;
  }

  .mu-section.is-hero-left .mu-top {
    justify-content: center;
  }

  .mu-section.is-hero-left .mu-header {
    margin-left: 0;
    text-align: center;
    align-items: center;
  }

  /* Reset masthead background for mobile stack */
  .mu-hero {
    position: relative;
    width: 100%;
    height: 250px;
    clip-path: none;
    order: -1; /* Move image above content visually if flex container was used, but here its absolute desktop, relative mobile */
    margin-bottom: 20px;
    right: auto; top: auto; bottom: auto;
    /* Ensure it spans full width on mobile */
    margin-left: -20px; /* Counteract container padding if needed, but its out of container now? No, wait. */
    /* Since its out of container, width 100% is fine, but we need to put it back in flow or handle positioning */
  }
  
  /* Wait, if I moved .mu-hero out of container, on mobile it will be above container by default in DOM order (top of section). 
     But section has padding 60px 0. 
     If I want it inside the flow on mobile, absolute positioning is tricky.
     Let's style it to be 'relative' on mobile, effectively placing it at the very top of the section (background-like) or just a block.
  */
  .mu-hero {
    position: relative; 
    width: 100vw; /* Full viewport width */
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: -60px; /* Counteract section padding top */
    margin-bottom: 30px;
    height: 170px;
  }

  .mu-section.is-hero-left .mu-hero {
    left: 50%;
    right: 50%;
  }

  .mu-hero img {
    clip-path: none; 
    object-position: center top;
    max-height: none;
    height: 100%;
  }

  .mu-hero::after {
    background: linear-gradient(180deg, rgba(21,21,21,0) 0%, #151515 100%); /* Fade to bottom on mobile */
  }
  
  .mu-section.is-light .mu-hero::after {
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #ffffff 100%);
  }

  .mu-title,
  .mu-text-cta {
    text-align: center;
    justify-content: center;
  }
}

.mu-logo-wrapper {
  margin-bottom: 15px;
}

.mu-brand {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  color: #2563eb;
  border: 1px solid #2563eb;
  padding: 4px 8px;
  display: inline-block;
}

.mu-section.is-light .mu-brand {
  color: #111827;
  border-color: #111827;
}

.mu-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 1px;
  line-height: 1;
  margin-bottom: 15px;
}

.mu-section.is-light .mu-title {
  color: #111827;
}

.mu-text-cta {
  font-family: 'Roboto', sans-serif;
  font-size: 18px; 
  color: #ccc;
  margin-bottom: 25px;
  font-weight: 400;
}

.mu-section.is-light .mu-text-cta {
  color: #374151;
}

.mu-btn-cta {
  background-color: transparent;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 12px 30px;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
}

.mu-section.is-light .mu-btn-cta {
  color: #111827;
  border-color: #111827;
}

.mu-btn-cta:hover {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
  transform: translateY(-2px);
}

/* CAROUSEL LAYOUT */
.mu-carousel-surface {
  padding: 18px 18px;
}

.mu-carousel-surface.is-light {
  background: #ffffff;
}

.mu-carousel-surface.is-dark {
  background: #151515;
}

.mu-carousel-surface.is-light .mu-comic-title {
  color: #111827;
}

.mu-carousel-surface.is-light .mu-comic-meta {
  color: #6b7280;
}

.mu-carousel-surface.is-dark .mu-comic-title {
  color: #ffffff;
}

.mu-carousel-surface.is-dark .mu-comic-meta {
  color: #ffffff;
}

.mu-section.is-light .mu-carousel-surface.is-dark .mu-comic-title {
  color: #ffffff;
}

.mu-section.is-light .mu-carousel-surface.is-dark .mu-comic-meta {
  color: #ffffff;
}

.mu-carousel {
  position: relative;
}

.mu-bottom-band {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 110px;
}

.mu-bottom-band.is-light {
  background: #ffffff;
}

.mu-bottom-band.is-dark {
  background: #151515;
}

.mu-track {
  display: flex;
  gap: 25px;
  overflow-x: auto;
  padding: 8px 4px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.mu-track::-webkit-scrollbar {
  display: none;
}

.mu-sentinel {
  flex: 0 0 1px;
  width: 1px;
  height: 1px;
}

.mu-card {
  flex: 0 0 auto;
  width: 210px;
  scroll-snap-align: start;
  appearance: none;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  text-align: left;
  color: inherit;
  font: inherit;
}

.mu-arrow {
  position: absolute;
  top: 38%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 0;
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  z-index: 2;
}

.mu-arrow.is-disabled {
  opacity: 0;
  pointer-events: none;
}

.mu-section.is-light .mu-arrow {
  border-color: #2563eb;
  background: #2563eb;
  color: #ffffff;
}

.mu-arrow:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.mu-section.is-light .mu-arrow:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.mu-arrow-prev {
  left: -10px;
}

.mu-arrow-next {
  right: -10px;
}

/* Old responsive block removed */

@media (max-width: 480px) {
  .mu-card { width: 165px; }
}

/* CARD STYLES */
.mu-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  group: hover; /* for tailwind habits, but here using css */
}

.mu-card-image {
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  margin-bottom: 15px;
  border-bottom: 4px solid transparent; /* Prepare for hover effect */
  transition: all 0.3s ease;
}

.mu-section.is-light .mu-card-image {
  box-shadow: 0 10px 30px rgba(0,0,0,0.18);
}

.mu-card:hover .mu-card-image {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(37, 99, 235, 0.25);
  border-bottom-color: #2563eb;
}

.mu-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.mu-card:hover .mu-card-image img {
  transform: scale(1.05);
}

/* OVERLAY */
.mu-card-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(21, 21, 21, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mu-section.is-light .mu-card-overlay {
  background: rgba(17, 24, 39, 0.55);
}

.mu-card:hover .mu-card-overlay {
  opacity: 1;
}

.read-now {
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  border: 2px solid #fff;
  padding: 8px 16px;
  letter-spacing: 1px;
}

.mu-comic-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 5px;
  transition: color 0.3s;
}

.mu-section.is-light .mu-comic-title {
  color: #111827;
}

.mu-card:hover .mu-comic-title {
  color: #2563eb;
}

.mu-comic-meta {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #999;
  font-weight: 500;
  text-transform: uppercase;
}

.mu-section.is-light .mu-comic-meta {
  color: #6b7280;
}
</style>
