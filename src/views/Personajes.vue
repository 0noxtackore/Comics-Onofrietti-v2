<template>
  <div class="characters-view">
    <!-- Hero Banner -->
    <section class="characters-hero">
      <div class="container">
        <h1 class="hero-title">PERSONAJES DE ONOFRIETTI</h1>
        <p class="hero-subtitle">Conoce a los héroes, villanos y aliados que habitan nuestra creciente galería de leyendas.</p>
      </div>
    </section>

    <!-- Rankings (Top) -->
    <section class="rankings-strip">
      <div class="container">
        <div class="rankings-head">
          <h2 class="rankings-title">RANKINGS | MEJORES PERSONAJES</h2>
          <div class="rankings-line"></div>
        </div>

        <div class="rankings-chart">
          <div class="rankings-axis" aria-hidden="true">
            <span class="axis-tick">TOP</span>
            <span class="axis-tick">4</span>
            <span class="axis-tick">3</span>
            <span class="axis-tick">2</span>
            <span class="axis-tick">1</span>
          </div>

          <div class="rankings-grid" role="list">
            <button
              v-for="(char, idx) in topRanked"
              :key="char.slug"
              class="rank-card"
              :class="{ 'is-top': idx === 0, 'is-1': idx === 0, 'is-2': idx === 1, 'is-3': idx === 2 }"
              type="button"
              role="listitem"
              @click="openCharacter(char)"
              :style="{ '--cs': idx === 0 ? 1.06 : idx === 1 ? 1.01 : idx === 2 ? 0.97 : idx === 3 ? 0.93 : idx === 4 ? 0.90 : 0.88, '--thumb': idx === 0 ? 88 : idx === 1 ? 84 : idx === 2 ? 80 : idx === 3 ? 76 : idx === 4 ? 72 : 68 }"
            >
              <div class="rank-cap">
                <span class="rank-medal" :class="{ 'is-1': idx === 0, 'is-2': idx === 1, 'is-3': idx === 2 }" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.2V22l3-2 3 2v-8.8c1.8-1.1 3-3 3-5.2a6 6 0 0 0-6-6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
                  </svg>
                </span>
                <span class="rank-cap-num">#{{ char.rank ?? (idx + 1) }}</span>
                <span v-if="idx === 0" class="rank-cap-top">MEJOR</span>
              </div>

              <div class="rank-media">
                <img :src="getImageUrl(char.image)" :alt="char.name">
              </div>
              <div class="rank-info">
                <div class="rank-name">{{ char.name }}</div>
                <div class="rank-role">{{ roleLabel(char.role) }}</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Alphabet Bar -->
    <section class="alphabet-bar">
      <div class="container">
        <div class="alphabet-controls">
          <div class="alphabet-links">
            <button class="letter-btn" :class="{ 'active': selectedLetter === 'TODOS' }" @click="selectedLetter = 'TODOS'">
              TODOS
            </button>
            <button v-for="letter in alphabet" :key="letter" class="letter-btn" :class="{ 'active': selectedLetter === letter }" @click="selectedLetter = letter">
              {{ letter }}
            </button>
          </div>

          <div class="search-wrap">
            <input v-model="searchQuery" class="search-input" type="text" placeholder="Buscar personaje…" aria-label="Buscar personaje">
          </div>
        </div>
      </div>
    </section>

    <section class="alphabet-carousel">
      <div class="container">
        <div class="ac-head">
          <div class="ac-kicker">¡HÉROES EXTRA!</div>
          <div class="ac-sub">DISPONIBLE AHORA | LOS MÁS VALIENTES DE ONOFRIETTI UNLIMITED</div>
        </div>
        <div class="ac-carousel">
          <button
            class="ac-arrow ac-arrow-prev"
            type="button"
            aria-label="Anterior"
            :disabled="!heroesAcCanPrev"
            :class="{ 'is-disabled': !heroesAcCanPrev }"
            @click="scrollHeroesCarousel('prev')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </button>

          <div ref="heroesCarouselTrackRef" class="ac-track" role="list">
            <button
              v-for="(char, index) in heroes"
              :key="char.slug + '-h-' + index"
              class="character-card ac-item"
              type="button"
              role="listitem"
              @click="openCharacter(char)"
            >
              <div class="character-image">
                <img :src="getImageUrl(char.image)" :alt="char.name" loading="lazy">
              </div>
              <div class="card-info">
                <div class="card-top">
                  <span class="role-badge">{{ roleLabel(char.role) }}</span>
                </div>
                <div class="card-name">{{ char.name }}</div>
              </div>
            </button>
          </div>

          <button
            class="ac-arrow ac-arrow-next"
            type="button"
            aria-label="Siguiente"
            :disabled="!heroesAcCanNext"
            :class="{ 'is-disabled': !heroesAcCanNext }"
            @click="scrollHeroesCarousel('next')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M4.646 14.354a.5.5 0 0 1 0-.708L10.293 8 4.646 2.354a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section class="alphabet-carousel">
      <div class="container">
        <div class="ac-head">
          <div class="ac-kicker">¡VILLANOS EXTRA!</div>
          <div class="ac-sub">DISPONIBLE AHORA | LAS SOMBRAS MÁS PELIGROSAS DE ONOFRIETTI UNLIMITED</div>
        </div>
        <div class="ac-carousel">
          <button
            class="ac-arrow ac-arrow-prev"
            type="button"
            aria-label="Anterior"
            :disabled="!villainsAcCanPrev"
            :class="{ 'is-disabled': !villainsAcCanPrev }"
            @click="scrollVillainsCarousel('prev')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </button>

          <div ref="villainsCarouselTrackRef" class="ac-track" role="list">
            <button
              v-for="(char, index) in villains"
              :key="char.slug + '-v-' + index"
              class="character-card ac-item"
              type="button"
              role="listitem"
              @click="openCharacter(char)"
            >
              <div class="character-image">
                <img :src="getImageUrl(char.image)" :alt="char.name" loading="lazy">
              </div>
              <div class="card-info">
                <div class="card-top">
                  <span class="role-badge">{{ roleLabel(char.role) }}</span>
                </div>
                <div class="card-name">{{ char.name }}</div>
              </div>
            </button>
          </div>

          <button
            class="ac-arrow ac-arrow-next"
            type="button"
            aria-label="Siguiente"
            :disabled="!villainsAcCanNext"
            :class="{ 'is-disabled': !villainsAcCanNext }"
            @click="scrollVillainsCarousel('next')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M4.646 14.354a.5.5 0 0 1 0-.708L10.293 8 4.646 2.354a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section class="alphabet-carousel">
      <div class="container">
        <div class="ac-head">
          <div class="ac-kicker">¡SECUNDARIOS EXTRA!</div>
          <div class="ac-sub">DISPONIBLE AHORA | ALIADOS Y LEYENDAS QUE COMPLETAN ONOFRIETTI UNLIMITED</div>
        </div>
        <div class="ac-carousel">
          <button
            class="ac-arrow ac-arrow-prev"
            type="button"
            aria-label="Anterior"
            :disabled="!supportsAcCanPrev"
            :class="{ 'is-disabled': !supportsAcCanPrev }"
            @click="scrollSupportsCarousel('prev')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </button>

          <div ref="supportsCarouselTrackRef" class="ac-track" role="list">
            <button
              v-for="(char, index) in supports"
              :key="char.slug + '-s-' + index"
              class="character-card ac-item"
              type="button"
              role="listitem"
              @click="openCharacter(char)"
            >
              <div class="character-image">
                <img :src="getImageUrl(char.image)" :alt="char.name" loading="lazy">
              </div>
              <div class="card-info">
                <div class="card-top">
                  <span class="role-badge">{{ roleLabel(char.role) }}</span>
                </div>
                <div class="card-name">{{ char.name }}</div>
              </div>
            </button>
          </div>

          <button
            class="ac-arrow ac-arrow-next"
            type="button"
            aria-label="Siguiente"
            :disabled="!supportsAcCanNext"
            :class="{ 'is-disabled': !supportsAcCanNext }"
            @click="scrollSupportsCarousel('next')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M4.646 14.354a.5.5 0 0 1 0-.708L10.293 8 4.646 2.354a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Characters Grid -->
    <section class="characters-grid-section">
      <div class="container">
        <div v-if="heroes.length || villains.length || supports.length" class="carousels">
          <div v-if="heroes.length" class="carousel-block">
            <div class="carousel-head">
              <!-- <h2 class="carousel-title">HÉROES</h2> -->
              <div class="carousel-line"></div>
            </div>

            <div class="pc-grid" role="list">
              <button v-for="(char, index) in heroes" :key="char.slug + index" class="character-card" type="button" role="listitem" @click="openCharacter(char)">
                <div class="character-image">
                  <img :src="getImageUrl(char.image)" :alt="char.name" loading="lazy">
                </div>
                <div class="card-info">
                  <div class="card-top">
                    <span class="role-badge">{{ roleLabel(char.role) }}</span>
                  </div>
                  <div class="card-name">{{ char.name }}</div>
                </div>
              </button>
            </div>
          </div>

          <div v-if="villains.length" class="carousel-block">
            <div class="carousel-head">
              <!-- <h2 class="carousel-title">VILLANOS</h2> -->
              <div class="carousel-line"></div>
            </div>

            <div class="pc-grid" role="list">
              <button v-for="(char, index) in villains" :key="char.slug + index" class="character-card" type="button" role="listitem" @click="openCharacter(char)">
                <div class="character-image">
                  <img :src="getImageUrl(char.image)" :alt="char.name" loading="lazy">
                </div>
                <div class="card-info">
                  <div class="card-top">
                    <span class="role-badge">{{ roleLabel(char.role) }}</span>
                  </div>
                  <div class="card-name">{{ char.name }}</div>
                </div>
              </button>
            </div>
          </div>

          <div v-if="supports.length" class="carousel-block">
            <div class="carousel-head">
              <!-- <h2 class="carousel-title">SECUNDARIOS</h2> -->
              <div class="carousel-line"></div>
            </div>

            <div class="pc-grid" role="list">
              <button v-for="(char, index) in supports" :key="char.slug + index" class="character-card" type="button" role="listitem" @click="openCharacter(char)">
                <div class="character-image">
                  <img :src="getImageUrl(char.image)" :alt="char.name" loading="lazy">
                </div>
                <div class="card-info">
                  <div class="card-top">
                    <span class="role-badge">{{ roleLabel(char.role) }}</span>
                  </div>
                  <div class="card-name">{{ char.name }}</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div v-else class="empty-state">
          <h2 class="empty-title">Sin resultados</h2>
          <p class="empty-text">Prueba con otra letra o una búsqueda diferente.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { characters, type Character } from '../data/characters'

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const selectedLetter = ref('TODOS')
const searchQuery = ref('')

const router = useRouter()
const baseUrl = import.meta.env.BASE_URL

const getImageUrl = (path: string) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${baseUrl}${cleanPath}`
}

const openCharacter = (char: Character) => {
  router.push({ name: 'PersonajeWiki', params: { slug: char.slug } })
}

const roleLabel = (role?: Character['role']) => {
  if (role === 'hero') return 'HÉROE'
  if (role === 'villain') return 'VILLANO'
  return 'SECUNDARIO'
}

const filteredCharacters = computed(() => {
  const q = searchQuery.value.trim().toUpperCase()
  return characters.filter((c) => {
    const matchesLetter = selectedLetter.value === 'TODOS' ? true : c.name.startsWith(selectedLetter.value)
    const matchesQuery = q ? c.name.includes(q) : true
    return matchesLetter && matchesQuery
  })
})

const heroesCarouselTrackRef = ref<HTMLDivElement | null>(null)
const villainsCarouselTrackRef = ref<HTMLDivElement | null>(null)
const supportsCarouselTrackRef = ref<HTMLDivElement | null>(null)

const heroesAcCanPrev = ref(false)
const heroesAcCanNext = ref(false)
const villainsAcCanPrev = ref(false)
const villainsAcCanNext = ref(false)
const supportsAcCanPrev = ref(false)
const supportsAcCanNext = ref(false)

const updateCarouselArrows = (
  el: HTMLDivElement | null,
  canPrev: { value: boolean },
  canNext: { value: boolean }
) => {
  if (!el) {
    canPrev.value = false
    canNext.value = false
    return
  }

  const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth)
  const epsilon = 6
  const hasOverflow = maxScrollLeft > epsilon
  canPrev.value = hasOverflow && el.scrollLeft > epsilon
  canNext.value = hasOverflow && el.scrollLeft < maxScrollLeft - epsilon
}

const updateAllCarousels = () => {
  updateCarouselArrows(heroesCarouselTrackRef.value, heroesAcCanPrev, heroesAcCanNext)
  updateCarouselArrows(villainsCarouselTrackRef.value, villainsAcCanPrev, villainsAcCanNext)
  updateCarouselArrows(supportsCarouselTrackRef.value, supportsAcCanPrev, supportsAcCanNext)
}

const scrollCarousel = (
  el: HTMLDivElement | null,
  canPrev: { value: boolean },
  canNext: { value: boolean },
  dir: 'prev' | 'next'
) => {
  if (!el) return
  if (dir === 'prev' && !canPrev.value) return
  if (dir === 'next' && !canNext.value) return
  const amount = Math.max(260, Math.floor(el.clientWidth * 0.85))
  el.scrollBy({ left: dir === 'prev' ? -amount : amount, behavior: 'smooth' })
  window.setTimeout(updateAllCarousels, 250)
}

const scrollHeroesCarousel = (dir: 'prev' | 'next') =>
  scrollCarousel(heroesCarouselTrackRef.value, heroesAcCanPrev, heroesAcCanNext, dir)

const scrollVillainsCarousel = (dir: 'prev' | 'next') =>
  scrollCarousel(villainsCarouselTrackRef.value, villainsAcCanPrev, villainsAcCanNext, dir)

const scrollSupportsCarousel = (dir: 'prev' | 'next') =>
  scrollCarousel(supportsCarouselTrackRef.value, supportsAcCanPrev, supportsAcCanNext, dir)

const heroes = computed(() => filteredCharacters.value.filter((c) => (c.role || 'support') === 'hero'))
const villains = computed(() => filteredCharacters.value.filter((c) => (c.role || 'support') === 'villain'))
const supports = computed(() => filteredCharacters.value.filter((c) => (c.role || 'support') === 'support'))

const topRanked = computed(() => {
  const list = [...characters]
  list.sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999))
  return list.slice(0, 6)
})

onMounted(() => {
  window.addEventListener('resize', updateAllCarousels)
  window.setTimeout(updateAllCarousels, 0)

  if (heroesCarouselTrackRef.value) {
    heroesCarouselTrackRef.value.addEventListener('scroll', updateAllCarousels, { passive: true })
  }
  if (villainsCarouselTrackRef.value) {
    villainsCarouselTrackRef.value.addEventListener('scroll', updateAllCarousels, { passive: true })
  }
  if (supportsCarouselTrackRef.value) {
    supportsCarouselTrackRef.value.addEventListener('scroll', updateAllCarousels, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateAllCarousels)
  if (heroesCarouselTrackRef.value) {
    heroesCarouselTrackRef.value.removeEventListener('scroll', updateAllCarousels)
  }
  if (villainsCarouselTrackRef.value) {
    villainsCarouselTrackRef.value.removeEventListener('scroll', updateAllCarousels)
  }
  if (supportsCarouselTrackRef.value) {
    supportsCarouselTrackRef.value.removeEventListener('scroll', updateAllCarousels)
  }
})

</script>

<style scoped>
.characters-view {
  background-color: #151515;
  color: #fff;
  min-height: 100vh;
}

/* RANKINGS */
.rankings-strip {
  padding: 22px 0 54px;
  background:
    radial-gradient(ellipse at 30% 0%, rgba(37, 99, 235, 0.22) 0%, rgba(0,0,0,0) 55%),
    linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 100%);
  border-bottom: 1px solid rgba(255,255,255,0.08);
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
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 16px;
}

.rankings-line {
  height: 2px;
  flex: 1;
  background: linear-gradient(90deg, rgba(37,99,235,0.95), rgba(37,99,235,0));
  border-radius: 999px;
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

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

/* HERO */
.characters-hero {
  padding: 60px 0;
  text-align: center;
  background-image: linear-gradient(rgba(21, 21, 21, 0.55), rgba(21, 21, 21, 1)), url('/img/m.webp');
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 9999px rgba(0,0,0,0.1);
}

.hero-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.hero-subtitle {
  font-size: 18px;
  color: #ccc;
  max-width: 700px;
  margin: 0 auto;
}

/* ALPHABET */
.alphabet-bar {
  background: #fff;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid #2563eb;
}

.alphabet-carousel {
  padding: 18px 0 12px;
  background: #151515;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.ac-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 10px;
}

.ac-kicker {
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 16px;
  color: #ffffff;
}

.ac-sub {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
  color: rgba(255,255,255,0.72);
}

.ac-carousel {
  position: relative;
}

.ac-track {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  padding: 10px 56px;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 56px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.ac-track::-webkit-scrollbar {
  display: none;
}

.ac-item {
  flex: 0 0 170px;
  min-width: 170px;
}

.ac-arrow {
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
  z-index: 3;
}

.ac-arrow:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.ac-arrow.is-disabled,
.ac-arrow:disabled {
  opacity: 0.45;
  cursor: default;
}

.ac-arrow-prev {
  left: 10px;
}

.ac-arrow-next {
  right: 10px;
}

.alphabet-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
}

.alphabet-links {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding: 6px 2px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.alphabet-links::-webkit-scrollbar {
  display: none;
}

.search-wrap {
  flex: 0 0 320px;
  display: flex;
  justify-content: flex-end;
}

.search-input {
  width: 100%;
  max-width: 320px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 11px 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  outline: none;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.06);
  color: #151515;
  text-transform: uppercase;
}

.search-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.18);
}

.letter-btn {
  background: #f6f6f6;
  border: 1px solid #eaeaea;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: #151515;
  cursor: pointer;
  padding: 7px 12px;
  border-radius: 999px;
  transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  line-height: 1;
  white-space: nowrap;
}

.letter-btn:hover, .letter-btn.active {
  border-color: rgba(37,99,235,0.35);
}

.letter-btn:hover {
  background: #ffffff;
  transform: translateY(-1px);
}

.letter-btn.active {
  background: #2563eb;
  border-color: #2563eb;
  color: #ffffff;
}

/* GRID */
.characters-grid-section {
  padding: 60px 0;
}

.carousels {
  display: grid;
  gap: 34px;
}

.carousel-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 14px;
}

.carousel-title {
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 18px;
}

.carousel-line {
  height: 2px;
  flex: 1;
  background: linear-gradient(90deg, rgba(37,99,235,0.95), rgba(37,99,235,0));
  border-radius: 999px;
}


.pc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
}

.character-card {
  appearance: none;
  position: relative;
  background: #ffffff;
  color: #151515;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  text-align: left;
  font: inherit;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
}

.character-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
  border-color: #2563eb;
}

.character-image {
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: #f5f5f5;
  border-bottom: 4px solid transparent;
  transition: border-color 0.3s ease;
}

.character-card:hover .character-image {
  border-bottom-color: #2563eb;
}

.character-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}


.card-info {
  flex: 1;
  padding: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.rank-cap {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.role-badge {
  display: inline-flex;
  padding: 3px 8px;
  background: rgba(37, 99, 235, 0.08);
  color: #2563eb;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  letter-spacing: 1.5px;
  font-size: 9px;
  text-transform: uppercase;
  border: 1px solid rgba(37, 99, 235, 0.2);
  clip-path: polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px);
}

.rank-badge {
  display: inline-flex;
  padding: 6px 10px;
  border: 1px solid rgba(37,99,235,0.65);
  background: rgba(37,99,235,0.14);
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 11px;
  text-transform: uppercase;
}

.card-name {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #151515;
  margin-top: 4px;
}

.character-card:hover .character-image img {
  transform: scale(1.1);
}

.empty-state {
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 28px;
  text-align: center;
  background: rgba(255,255,255,0.02);
}

.empty-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 10px;
}

.empty-text {
  margin: 0;
  color: #cfcfcf;
}

@media (max-width: 1024px) {
  .pc-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }

  .alphabet-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .search-wrap {
    flex: 1;
    justify-content: center;
  }

  .search-input {
    max-width: 520px;
  }
}

@media (max-width: 600px) {
  .rankings-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    overflow: visible;
    padding: 0;
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

  .rank-card:hover {
    transform: translateY(-2px);
  }

  .carousel-head {
    gap: 10px;
  }

  .carousel-title {
    font-size: 16px;
  }

  .pc-grid {
    grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
    gap: 10px;
  }
  .hero-title {
    font-size: 32px;
  }

  .letter-btn {
    font-size: 14px;
  }

  .alphabet-bar {
    padding: 12px 0;
  }

  .ac-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .ac-track {
    padding-left: 48px;
    padding-right: 48px;
    scroll-padding-inline: 48px;
  }

  .ac-item {
    flex-basis: 155px;
    min-width: 155px;
  }

  .search-wrap {
    flex: 1;
    justify-content: stretch;
  }

  .search-input {
    max-width: 100%;
  }
}
</style>
