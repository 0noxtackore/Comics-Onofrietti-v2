<template>
  <div class="articles-view">
    <!-- Featured Hero Article -->
    <section class="hero-article">
      <div class="hero-bg">
        <img :src="featuredBanner.image" :alt="featuredBanner.title" loading="lazy" decoding="async">
      </div>
      <div class="hero-overlay"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-top-tag">{{ featuredBanner.category }}</div>
          <h1 class="hero-title">{{ featuredBanner.title }}</h1>
          <p class="hero-description">{{ featuredBanner.excerpt }}</p>
          <div class="hero-actions">
            <button class="marvel-btn primary" type="button" @click="goToArticle(featuredBanner.id)">LEER MÁS</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="articles-grid-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">ÚLTIMAS NOTICIAS</h2>
          <div class="section-line"></div>
        </div>

        <div class="section-header compact">
          <h2 class="section-title">TENDENCIAS</h2>
          <div class="section-line"></div>
        </div>

        <div class="trending-row" aria-label="Tendencias">
          <div v-for="(item, index) in trending" :key="index" class="trending-card" @click="goToArticle(item.id)">
            <div class="trending-thumb">
              <img :src="item.image" :alt="item.title" loading="lazy">
            </div>
            <div class="trending-info">
              <span class="trending-category">{{ item.category }}</span>
              <h3 class="trending-title">{{ item.title }}</h3>
            </div>
          </div>
        </div>

        <div class="section-header">
          <h2 class="section-title">POR CATEGORÍAS</h2>
          <div class="section-line"></div>
        </div>

        <div class="category-grid">
          <div v-for="(group, index) in categoryGroups" :key="index" class="category-block">
            <div class="category-head">
              <h3 class="category-title">{{ group.category }}</h3>
              <span class="category-count">{{ group.items.length }} notas</span>
            </div>

            <div class="category-body">
              <div class="category-feature">
                <div class="category-feature-thumb">
                  <img :src="group.items[0].image" :alt="group.items[0].title" loading="lazy" @click="goToArticle(group.items[0].id)">
                </div>
                <div class="category-feature-info">
                  <span class="article-date">{{ group.items[0].date }}</span>
                  <h4 class="category-feature-title" @click="goToArticle(group.items[0].id)">{{ group.items[0].title }}</h4>
                </div>
              </div>

              <div class="category-list">
                <div v-for="(it, i) in group.items.slice(1, 4)" :key="i" class="category-list-item">
                  <span class="category-list-date">{{ it.date }}</span>
                  <span class="category-list-title" @click="goToArticle(it.id)">{{ it.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="articles-grid">
          <div v-for="(article, index) in articles" :key="index" class="article-card" @click="goToArticle(article.id)">
            <div class="article-thumb">
              <img :src="article.image" :alt="article.title">
            </div>
            <div class="article-info">
              <span class="article-category">{{ article.category }}</span>
              <h3 class="article-title">{{ article.title }}</h3>
              <span class="article-date">{{ article.date }}</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const featuredBanner = ref({
  id: '1',
  category: 'CÓMICS',
  title: 'EL RENACIMIENTO DE LOS HÉROES: UNA NUEVA ERA COMIENZA',
  excerpt:
    'Explora las historias que cambiarán el rumbo del universo Onofrietti para siempre en este nuevo arco argumental.',
  image: '/img/n2.avif',
})

const articles = ref([
  {
    id: '2',
    title: "NUEVO TRÁILER: LA VENGANZA DEL CABALLERO OSCURO",
    category: "YOUTUBE",
    date: "8 DE FEBRERO, 2026",
    image: "/img/most2.jpg"
  },
  {
    id: '3',
    title: "TOP 10 CÓMICS QUE DEBES LEER ESTE MES",
    category: "CÓMICS",
    date: "7 DE FEBRERO, 2026",
    image: "/img/n1.jpg"
  },
  {
    id: '4',
    title: "CONOCE A LOS NUEVOS INTEGRANTES DE LA LEGIÓN",
    category: "PERSONAJES",
    date: "6 DE FEBRERO, 2026",
    image: "/img/photo1.webp"
  },
  {
    id: '5',
    title: "ENTREVISTA EXCLUSIVA CON EL DIBUJANTE MARCO ROSSI",
    category: "CULTURA",
    date: "5 DE FEBRERO, 2026",
    image: "/img/rafatos.png"
  },
  {
    id: '6',
    title: "EL FUTURO DE LOS JUEGOS DE ROL DE ONOFRIETTI",
    category: "JUEGOS",
    date: "4 DE FEBRERO, 2026",
    image: "/img/most.jpg"
  },
  {
    id: '7',
    title: "REVIEW: EL ÚLTIMO NÚMERO DE 'TITANES'",
    category: "RESEÑAS",
    date: "3 DE FEBRERO, 2026",
    image: "/img/comic7.jpg"
  }
])

const trending = ref([
  {
    id: '8',
    title: "AVANCE: NUEVA TEMPORADA DE SPIDER-MAN",
    category: "CÓMICS",
    image: "/img/comic1.jpg",
  },
  {
    id: '9',
    title: "ENTREVISTA: DETRÁS DEL ARTE DIGITAL",
    category: "CULTURA",
    image: "/img/photo1.webp",
  },
  {
    id: '10',
    title: "TOP: CLÁSICOS IMPERDIBLES PARA EMPEZAR",
    category: "CÓMICS",
    image: "/img/most.jpg",
  },
  {
    id: '11',
    title: "RESEÑA: EL NUEVO NÚMERO DEL MES",
    category: "RESEÑAS",
    image: "/img/comic7.jpg",
  },
  {
    id: '12',
    title: "JUEGOS: EVENTO ESPECIAL DE ROL",
    category: "JUEGOS",
    image: "/img/most2.jpg",
  },
])

const goToArticle = (id: string) => {
  router.push({ name: 'NovedadDetalle', params: { id } })
}

const categoryGroups = computed(() => {
  const categories = ['CÓMICS', 'YOUTUBE', 'JUEGOS', 'RESEÑAS']
  return categories.map((category) => {
    const items = articles.value.filter((a) => a.category === category)
    return { category, items: items.length ? items : articles.value.slice(0, 4) }
  })
})
</script>

<style scoped>
.articles-view {
  background-color: #fff;
  color: #151515;
  min-height: 100vh;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

/* HERO ARTICLE */
.hero-article {
  padding: 0;
  margin: 0;
  position: relative;
  background-color: #151515;
  overflow: hidden;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
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
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.hero-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: clamp(48px, 10vw, 90px);
  font-weight: 900;
  color: #fff;
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

@media (max-width: 768px) {
  .hero-title { font-size: 48px; }
  .hero-actions { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 480px) {
  .hero-article { min-height: 520px; }
}

/* ARTICLES GRID */
.articles-grid-section {
  padding: 60px 0;
}

.section-header.compact {
  margin-bottom: 18px;
}

.trending-row {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 4px 2px 18px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

.trending-row::-webkit-scrollbar {
  display: none;
}

.trending-card {
  flex: 0 0 auto;
  width: 260px;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  scroll-snap-align: start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.trending-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.14);
}

.trending-thumb {
  height: 150px;
  background: #f0f0f0;
}

.trending-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trending-info {
  padding: 14px 14px 16px;
}

.trending-category {
  color: #2563eb;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
}

.trending-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 1.2;
  margin: 0;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px 22px;
  margin-bottom: 44px;
}

.category-block {
  border: 1px solid #eaeaea;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.category-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 16px 18px;
  border-bottom: 1px solid #efefef;
}

.category-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
  margin: 0;
}

.category-count {
  font-size: 12px;
  color: #666;
}

.category-body {
  display: grid;
  grid-template-columns: 1fr;
}

.category-feature {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 14px;
  padding: 16px 18px;
  align-items: center;
}

.category-feature-thumb {
  height: 96px;
  border-radius: 10px;
  overflow: hidden;
  background: #f0f0f0;
}

.category-feature-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-feature-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 1.25;
  margin: 6px 0 0;
}

.category-list {
  border-top: 1px solid #efefef;
  padding: 12px 18px 16px;
}

.category-list-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  padding: 10px 0;
}

.category-list-item + .category-list-item {
  border-top: 1px dashed #ededed;
}

.category-list-date {
  font-size: 11px;
  color: #999;
  text-transform: uppercase;
}

.category-list-title {
  font-size: 12px;
  font-weight: 700;
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
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  white-space: nowrap;
}

.section-line {
  height: 1px;
  background: #e5e5e5;
  flex: 1;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
}

.article-card {
  cursor: pointer;
}

.article-thumb {
  aspect-ratio: 16/9;
  overflow: hidden;
  margin-bottom: 15px;
  background: #f0f0f0;
  border-radius: 10px;
}

.article-thumb img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-thumb img {
  transform: scale(1.05);
}

.article-card:hover .article-thumb {
  box-shadow: 0 18px 40px rgba(0,0,0,0.18);
}

.article-info {
  display: flex;
  flex-direction: column;
}

.article-category {
  color: #2563eb;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.article-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;
  color: #151515;
  transition: color 0.2s;
}

.article-card:hover .article-title {
  color: #2563eb;
}

.article-date {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

/* REUSABLE BTN */
.onofrietti-btn {
  background: #2563eb;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 14px;
  padding: 15px 35px;
  border: none;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 1.5px;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  transition: background 0.2s;
}

.onofrietti-btn:hover {
  background: #1d4ed8;
}

.onofrietti-btn.outline {
  background: transparent;
  border: 2px solid #151515;
  color: #151515;
  clip-path: none;
}

.onofrietti-btn.outline:hover {
  background: #151515;
  color: #fff;
}

@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .category-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }

  .hero-banner {
    height: 340px;
  }

  .hero-banner-overlay {
    align-items: flex-end;
    background:
      radial-gradient(900px 420px at 20% 90%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.1) 100%),
      linear-gradient(90deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%);
  }

  .hero-banner-content {
    padding-bottom: 22px;
  }

  .hero-banner-title {
    font-size: 34px;
    line-height: 0.95;
  }

  .hero-banner-excerpt {
    font-size: 15px;
    margin-bottom: 18px;
  }

  .trending-card {
    width: 230px;
  }

  .category-feature {
    grid-template-columns: 1fr;
  }

  .category-feature-thumb {
    height: 140px;
  }

  .category-list-item {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
</style>
