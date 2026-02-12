<template>
  <div class="home-view">
    <!-- Main Slider Section -->
    <section class="main-slider-section">
      <div class="main-slider">
        <div class="main-slider-track" ref="mainSliderTrack">
          <div 
            v-for="(post, index) in sliderPosts" 
            :key="index"
            class="main-slide"
            :class="{ 'active': currentMainSlideIndex === index }"
          >
            <!-- Background Image -->
            <div class="main-slide-image">
              <img :src="post.image" :alt="post.title" loading="lazy">
            </div>
            
            <!-- Content Overlay -->
            <div class="main-slide-overlay">
              <div class="container">
                <div class="main-slide-content">
                  <h1 class="main-slide-title">{{ post.title }}</h1>
                  <p class="main-slide-excerpt">{{ post.excerpt }}</p>
                  <button class="onofrietti-btn">LEER MÁS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- News Ticker / Tab Navigation -->
      <div class="news-slider-container">
        <div class="container">
          <div class="news-slider-track">
            <div 
              v-for="(post, index) in sliderPosts" 
              :key="index"
              class="news-slide-item"
              :class="{ 'active': currentMainSlideIndex === index }"
              @click="goToMainSlide(index)"
            >
              <span class="news-category">NOTICIA</span>
              <h3 class="news-slide-title">{{ post.title }}</h3>
              <div class="news-progress-bar" v-if="currentMainSlideIndex === index">
                <div class="news-progress"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NUEVO EN ONOFRIETTI UNLIMITED -->
    <OnofriettiSection 
      title="DISPONIBLE AHORA | NUEVO EN ONOFRIETTI UNLIMITED"
      subtitle="Lee estos y más de 30.000+ cómics digitales por $9.99 al mes."
      :comics="comics"
    />

    <!-- Content Module / Video Section (GeneralContainer Video fullModule) -->
    <section class="onofrietti-section light-module"> 
      <div class="container">
        <div class="full-module-header">
           <h2 class="module-title-dark">VIDEOS RECIENTES</h2>
           <div class="module-line"></div>
           <a href="#" class="module-link-dark">CANAL DE YOUTUBE</a>
        </div>

        <div class="video-grid-module">
          <!-- Featured Large Video -->
          <div class="featured-video-wrapper" @click="playVideo(youtubeVideos[0])">
             <img :src="youtubeVideos[0].thumbnail" alt="Featured Video" class="featured-video-thumb" loading="lazy">
             <div class="featured-video-overlay">
                <div class="play-btn-large">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                   <span>VER AHORA</span>
                </div>
                <div class="featured-video-info">
                   <span class="video-tag">DESTACADO</span>
                   <h3 class="featured-video-title">{{ youtubeVideos[0].title }}</h3>
                </div>
             </div>
          </div>

          <!-- Side List Videos -->
          <div class="video-list-sidebar">
             <div 
               v-for="(video, index) in youtubeVideos.slice(1, 5)" 
               :key="index"
               class="sidebar-video-item"
               @click="playVideo(video)"
             >
               <div class="sidebar-video-thumb">
                 <img :src="video.thumbnail" :alt="video.title" loading="lazy">
                 <span class="sidebar-duration">{{ video.duration }}</span>
               </div>
               <div class="sidebar-video-info">
                 <span class="sidebar-overline">VIDEO</span>
                 <h4 class="sidebar-video-title">{{ video.title }}</h4>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section (Refactored to match TwoColumn Onofrietti div structure) -->
    <section class="onofrietti-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">ÚLTIMAS NOTICIAS</h2>
          <a href="#" class="section-link">BLOG COMPLETO</a>
        </div>
        
        <!-- TwoColumn Structure -->
        <div class="TwoColumn">
           <!-- GridItem (Left Column / Large Featured) -->
           <div class="GridItem featured-item">
              <div class="card-large" @click="selectBlog(blogPosts[0])">
                 <div class="card-image-box">
                    <img :src="blogPosts[0].image" :alt="blogPosts[0].title" loading="lazy">
                 </div>
                 <div class="card-content-box">
                    <span class="card-category">{{ blogPosts[0].category.toUpperCase() }}</span>
                    <h3 class="card-title-large">{{ blogPosts[0].title }}</h3>
                    <p class="card-excerpt">{{ blogPosts[0].excerpt }}</p>
                    <span class="card-date">{{ formatDate(blogPosts[0].date) }}</span>
                 </div>
              </div>
           </div>
           
           <!-- GridItem (Right Column / Vertical List) -->
           <div class="GridItem list-item">
              <div class="news-list">
                 <div 
                   v-for="(post, index) in blogPosts.slice(1, 5)" 
                   :key="index"
                   class="news-list-entry"
                   @click="selectBlog(post)"
                 >
                   <div class="entry-image">
                      <img :src="post.image" :alt="post.title" loading="lazy">
                   </div>
                   <div class="entry-content">
                      <span class="entry-category">{{ post.category.toUpperCase() }}</span>
                      <h4 class="entry-title">{{ post.title }}</h4>
                      <span class="entry-date">{{ formatDate(post.date) }}</span>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- MOST POPULAR SECTION -->
    <OnofriettiSection 
      variant="dark"
      carouselSurfaceVariant="dark"
      bottomBandVariant="dark"
      title="MÁS POPULARES | CLÁSICOS IMPERDIBLES"
      subtitle="Comienza tu viaje por el universo de Onofrietti con estos grandes éxitos."
      :comics="comics.slice(0, 12)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import OnofriettiSection from '../components/OnofriettiSection.vue'
import { 
  comics,
  blogPosts,
  videos,
  setupCarouselListeners, 
  cleanupCarouselListeners 
} from '../assets/js/slider.js'

// Simple formatter
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('es-ES', options).toUpperCase()
}

// Data
const currentMainSlideIndex = ref(0)
const router = useRouter()
const sliderPosts = ref([
  {
    title: blogPosts[0].title,
    excerpt: blogPosts[0].excerpt,
    image: "/img/slide1.png"
  },
  {
    title: blogPosts[1].title,
    excerpt: blogPosts[1].excerpt,
    image: "/img/slide2.png"
  },
  {
    title: blogPosts[2].title,
    excerpt: blogPosts[2].excerpt,
    image: "/img/slide3.png"
  }
])

// Videos
const youtubeVideos = ref(videos)

// Functions
const goToMainSlide = (index) => {
  currentMainSlideIndex.value = index
}

const nextMainSlide = () => {
  currentMainSlideIndex.value = (currentMainSlideIndex.value + 1) % sliderPosts.value.length
}

let mainSliderInterval = null

const startMainSliderAutoSlide = () => {
  mainSliderInterval = setInterval(nextMainSlide, 5000)
}

const stopMainSliderAutoSlide = () => {
  if (mainSliderInterval) clearInterval(mainSliderInterval)
}

const selectComic = (comic) => {
  console.log('Comic selected:', comic.title)
}

const playVideo = (video) => {
  console.log('Play video:', video.title)
}

const selectBlog = (post) => {
  if (!post?.id) return
  router.push({ name: 'NovedadDetalle', params: { id: post.id } })
}

onMounted(() => {
  startMainSliderAutoSlide()
})

onUnmounted(() => {
  stopMainSliderAutoSlide()
})
</script>

<style scoped>
/* GLOBAL & LAYOUT match Onofrietti.com exactly */
.home-view {
  background-color: #202020;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ONOFRIETTI BUTTON */
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
  letter-spacing: 1px;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  transition: all 0.3s ease;
}

.onofrietti-btn:hover {
  background: #1d4ed8;
}

.onofrietti-btn.outline {
  background: transparent;
  border: 1px solid #fff;
  clip-path: none;
}
.onofrietti-btn.outline:hover {
  background: rgba(255,255,255,0.1);
}

/* MAIN SLIDER */
.main-slider-section {
  position: relative;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.main-slider {
  height: 420px;
  position: relative;
  overflow: hidden;
  background: #000;
}

.main-slide {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.main-slide.active {
  opacity: 1;
  z-index: 1;
}

.main-slide-image {
  width: 100%;
  height: 100%;
}

.main-slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-slide-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(90deg, #151515 0%, rgba(21,21,21,0.8) 40%, rgba(21,21,21,0) 100%);
  display: flex;
  align-items: center;
}

.main-slide-content {
  max-width: 500px;
  padding-left: 20px;
}

.main-slide-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 15px;
}

.main-slide-excerpt {
  font-size: 16px;
  margin-bottom: 30px;
  color: #ccc;
}

/* NEWS SLIDER / TABS */
.news-slider-container {
  background: #fff;
  border-bottom: 1px solid #333;
  width: 100%;
}

.news-slider-track {
  display: flex;
  justify-content: center;
}

.news-slide-item {
  flex: 1;
  padding: 20px;
  border-left: 1px solid #eee;
  cursor: pointer;
  max-width: 250px;
  position: relative;
  transition: background 0.2s;
}

.news-slide-item:last-child {
  border-right: 1px solid #eee;
}

.news-slide-item.active {
  background: #fff;
}
.news-slide-item.active::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 4px;
  background: #2563eb;
}

.news-category {
  font-size: 11px;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  display: block;
  margin-bottom: 5px;
}

.news-slide-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #151515;
  margin: 0;
  line-height: 1.2;
}

/* SECTIONS */
.onofrietti-section {
  padding: 60px 0;
  background-color: #202020;
}

/* Light module for Videos */
.onofrietti-section.light-module {
  background-color: #fff; /* White background for videos as requested */
  color: #151515;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}

.section-header {
  border-bottom: 1px solid #444;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.section-header::after {
  content: none;
}

.section-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 26px;
  font-weight: 800;
  text-transform: uppercase;
  color: #fff;
  padding-bottom: 10px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 22px;
  }
}

.section-link {
  font-size: 12px;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 10px;
}
.section-link:hover {
  color: #2563eb;
}

/* COMICS MASTHEAD CAROUSEL (Replica of MastheadLOB__Cards) */
.masthead-carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.masthead-carousel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 0;
  /* Hide scrollbar */
  scrollbar-width: none; 
  -ms-overflow-style: none;
}
.masthead-carousel::-webkit-scrollbar {
  display: none;
}

.masthead-card {
  min-width: 170px;
  max-width: 170px;
  cursor: pointer;
  transition: transform 0.3s;
}

.masthead-card:hover {
  transform: translateY(-5px);
}

.masthead-image {
  aspect-ratio: 2/3;
  margin-bottom: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
.masthead-image img { width: 100%; height: 100%; object-fit: cover; }
.masthead-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
  color: #fff;
}
.masthead-card:hover .masthead-title {
  color: #2563eb;
}
.masthead-subtitle {
  font-size: 12px;
  color: #999;
}

/* CAROUSEL ARROWS */
.arrow-btn {
  background: #2563eb;
  border: 1px solid #2563eb;
  color: #ffffff;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
}
.arrow-btn:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}
.arrow-btn.prev {
  left: -50px;
}
.arrow-btn.next {
  right: -50px;
}
/* On mobile, arrows might need adjustment or be hidden */
@media (max-width: 768px) {
  .arrow-btn { display: none; }
  .masthead-carousel-wrapper { overflow-x: auto; }
}

/* VIDEO MODULE (GeneralContainer Video fullModule light) */
.full-module-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
}
.module-title-dark {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  color: #151515; /* Dark text for light module */
}
.module-line {
  flex-grow: 1;
  height: 1px;
  background: #e5e5e5;
}
.module-link-dark {
  font-size: 12px;
  font-weight: 700;
  color: #999;
  text-decoration: none;
}

.video-grid-module {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.featured-video-wrapper {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #000;
  cursor: pointer;
}
.featured-video-thumb {
  width: 100%; height: 100%; object-fit: cover; opacity: 0.9;
  transition: opacity 0.3s;
}
.featured-video-wrapper:hover .featured-video-thumb {
  opacity: 0.6;
}
.featured-video-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  pointer-events: none; /* Let clicks pass to wrapper */
}

.featured-video-overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%);
  pointer-events: none;
}

.play-btn-large {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  padding: 0;
  background: #2563eb;
  color: #fff;
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 0;
  clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.featured-video-wrapper:hover .play-btn-large {
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 22px 55px rgba(37, 99, 235, 0.35);
  background: #1d4ed8;
}

.featured-video-wrapper:active .play-btn-large {
  transform: translate(-50%, -50%) scale(0.98);
}

.play-btn-large span {
  display: none;
}

.play-btn-large svg {
  width: 28px;
  height: 28px;
}

.featured-video-info {
  position: relative;
  z-index: 1;
  color: #fff;
  text-shadow: 0 2px 6px rgba(0,0,0,0.85);
  max-width: 80%;
}
.video-tag {
  background: #2563eb;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 10px;
  display: inline-block;
}
.featured-video-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .featured-video-overlay {
    padding: 22px;
  }

  .featured-video-info {
    max-width: 100%;
  }

  .featured-video-title {
    font-size: 22px;
  }

  .video-tag {
    display: none;
  }

  .featured-video-title {
    display: none;
  }

  .play-btn-large {
    width: 64px;
    height: 64px;
  }

  .play-btn-large svg {
    width: 24px;
    height: 24px;
  }
}

/* Sidebar Video List */
.sidebar-video-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
.sidebar-video-item:last-child {
  border-bottom: none;
}
.sidebar-video-thumb {
  width: 120px;
  aspect-ratio: 16/9;
  position: relative;
}
.sidebar-video-thumb img { width: 100%; height: 100%; object-fit: cover; }
.sidebar-duration {
  position: absolute; bottom: 5px; right: 5px;
  background: #000; color: #fff; font-size: 10px; padding: 2px 4px;
}
.sidebar-overline {
  font-size: 10px; color: #999; font-weight: 700; text-transform: uppercase;
  display: block; margin-bottom: 4px;
}
.sidebar-video-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #151515;
  line-height: 1.2;
}
.sidebar-video-item:hover .sidebar-video-title {
  color: #2563eb;
}

/* TWO COLUMN BLOG */
.TwoColumn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.card-large {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.card-image-box {
  aspect-ratio: 16/9;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
}
.card-image-box img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.3s;
}
.card-large:hover .card-image-box img {
    transform: scale(1.05);
}

.card-content-box {
    padding-right: 15px;
}

.card-category {
  font-size: 12px;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 10px;
  display: block;
}

.card-title-large {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 15px;
    color: #fff;
    transition: color 0.3s;
}
.card-large:hover .card-title-large {
    color: #ccc;
}
.card-excerpt {
    color: #ccc;
    font-size: 15px;
    margin-bottom: 15px;
    line-height: 1.5;
}
.card-date {
    font-size: 11px;
    color: #999;
}

/* News List Right Column */
.news-list-entry {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #333;
    cursor: pointer;
}
.news-list-entry:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}
.entry-image {
    width: 170px;
    aspect-ratio: 16/9;
    flex-shrink: 0;
    overflow: hidden;
}
.entry-image img { width: 100%; height: 100%; object-fit: cover; }
.entry-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.entry-category {
  font-size: 11px;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 5px;
}
.entry-title {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2;
    color: #fff;
    margin-bottom: 5px;
}
.news-list-entry:hover .entry-title {
  color: #2563eb;
}
.entry-date {
    font-size: 11px;
    color: #999;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .onofrietti-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .blog-grid, .video-grid-module, .TwoColumn {
    grid-template-columns: 1fr;
  }
  .arrow-btn {
    display: none; /* Hide arrows on mobile */
  }
}

@media (max-width: 1024px) {
  .main-slider {
    height: min(60vh, 420px);
  }

  .main-slide-title {
    font-size: 38px;
  }

  .main-slide-excerpt {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .main-slider {
    height: auto;
  }

  .main-slider-track {
    position: relative;
    height: auto;
  }

  .main-slide {
    position: relative;
    height: auto;
    top: auto;
    left: auto;
    opacity: 1;
    display: none;
    transition: none;
  }

  .main-slide.active {
    display: block;
  }

  .main-slide-image {
    height: 220px;
  }

  .main-slide-overlay {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    height: auto;
    background: #151515;
    padding: 18px 0 22px;
    display: block;
  }

  .main-slide-content {
    max-width: 100%;
    padding-left: 0;
    text-align: center;
  }

  .main-slide-title {
    font-size: 28px;
  }

  .main-slide-excerpt {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .news-slider-track {
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .news-slider-track::-webkit-scrollbar {
    display: none;
  }

  .news-slide-item {
    flex: 0 0 auto;
    min-width: 220px;
    max-width: 240px;
    padding: 16px;
    scroll-snap-align: start;
  }

  .news-slider-container {
    display: none;
  }
}

@media (max-width: 480px) {
  .main-slider {
    height: auto;
  }

  .main-slide-image {
    height: 200px;
  }

  .main-slide-title {
    font-size: 24px;
  }
}

</style>