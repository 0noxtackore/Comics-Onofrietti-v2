<template>
  <div class="search-view">
    <!-- Big Search Input -->
    <section class="search-masthead">
      <div class="container">
        <div class="search-input-wrapper">
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input 
            type="text" 
            placeholder="BUSCAR CÓMICS, PERSONAJES Y MÁS..." 
            v-model="query"
            @keyup.enter="performSearch"
            class="big-input"
          >
        </div>
      </div>
    </section>

    <!-- Search Tabs -->
    <section class="search-tabs">
      <div class="container">
        <div class="tabs-container">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="tab-btn"
            :class="{ 'active': activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="results-section">
      <div class="container">
        <div class="results-header">
          <h2 class="results-title">RESULTADOS PARA "{{ query || '...' }}"</h2>
          <span class="results-count">{{ results.length }} ENCONTRADOS</span>
        </div>

        <div v-if="results.length > 0" class="results-grid">
          <div v-for="(item, index) in results" :key="index" class="result-card">
            <div class="result-thumb">
              <img :src="item.image" :alt="item.name">
            </div>
            <div class="result-content">
              <span class="result-category">{{ item.type }}</span>
              <h3 class="result-name">{{ item.name }}</h3>
              <p class="result-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
        
        <div v-else class="empty-results">
          <p>NO SE ENCONTRARON RESULTADOS. PRUEBA CON OTROS TÉRMINOS.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
const activeTab = ref('all')

const tabs = [
  { id: 'all', label: 'TODO' },
  { id: 'comics', label: 'CÓMICS' },
  { id: 'chars', label: 'PERSONAJES' },
  { id: 'articles', label: 'NOTICIAS' }
]

const results = ref([
  {
    name: "LEGENDS OF ONOFRIETTI",
    type: "SERIE DE CÓMICS",
    desc: "La saga épica que lo comenzó todo.",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "ABYSS",
    type: "PERSONAJE",
    desc: "El guardián de las profundidades estelares.",
    image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1480&auto=format&fit=crop"
  },
  {
    name: "EL RENACIMIENTO",
    type: "ARTÍCULO",
    desc: "Una nueva era para nuestros héroes.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1376&auto=format&fit=crop"
  }
])

const performSearch = () => {
  console.log('Searching for:', query.value)
}
</script>

<style scoped>
.search-view {
  background-color: #fff;
  color: #151515;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

/* MASTHEAD */
.search-masthead {
  padding: 80px 0 40px;
  background-color: #f8f8f8;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid #151515;
  padding-bottom: 20px;
}

.search-icon {
  color: #999;
}

.big-input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: #151515;
  text-transform: uppercase;
}

.big-input:focus {
  outline: none;
}

.big-input::placeholder {
  color: #ccc;
}

/* TABS */
.search-tabs {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 10;
}

.tabs-container {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.tab-btn {
  background: none;
  border: none;
  padding: 20px 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.tab-btn:hover, .tab-btn.active {
  color: #151515;
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; width: 100%; height: 4px;
  background: #2563eb;
}

/* RESULTS */
.results-section {
  padding: 60px 0;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
}

.results-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
}

.results-count {
  font-size: 12px;
  font-weight: 800;
  color: #999;
}

.results-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.result-card {
  display: flex;
  gap: 30px;
  cursor: pointer;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}

.result-thumb {
  width: 250px;
  aspect-ratio: 16/9;
  background: #f0f0f0;
  flex-shrink: 0;
}

.result-thumb img {
  width: 100%; height: 100%; object-fit: cover;
}

.result-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-category {
  color: #2563eb;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.result-name {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 10px;
}

.result-desc {
  font-size: 16px;
  color: #666;
  max-width: 600px;
}

.empty-results {
  text-align: center;
  padding: 100px 0;
  color: #999;
  font-weight: 800;
}

@media (max-width: 768px) {
  .big-input {
    font-size: 24px;
  }
  .result-card {
    flex-direction: column;
    gap: 15px;
  }
  .result-thumb {
    width: 100%;
  }
}
</style>
