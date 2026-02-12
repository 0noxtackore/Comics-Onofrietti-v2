<script setup lang="ts">
import ComicCard from './ComicCard.vue';

const comics = [
  { id: 1, title: "THE AMAZING SPIDER-MAN #1", year: "2024", image: "https://i.ebayimg.com/images/g/H0YAAOSwSGBiS~-q/s-l1200.jpg" },
  { id: 2, title: "AVENGERS ASSEMBLE #5", year: "2024", image: "https://m.media-amazon.com/images/I/81P2h0T8nDL._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, title: "BLACK WIDOW: DEADLY ORIGIN", year: "2023", image: "https://m.media-amazon.com/images/I/91pYI19T0pL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, title: "IRON MAN: EXTREMIS", year: "2024", image: "https://m.media-amazon.com/images/I/91-l13P4DYL._AC_UF1000,1000_QL80_.jpg" },
  { id: 5, title: "THOR: LOVE AND THUNDER", year: "2023", image: "https://m.media-amazon.com/images/I/91tM-vP4dFL._AC_UF1000,1000_QL80_.jpg" },
  { id: 6, title: "CAPTAIN AMERICA #1", year: "2024", image: "https://m.media-amazon.com/images/I/91zX2t9nQ-L._AC_UF1000,1000_QL80_.jpg" },
];
</script>

<template>
  <section class="card-container-section">
    <div class="section-header">
      <h2 class="section-title">ÚLTIMOS CÓMICS</h2>
      <div class="title-underline"></div>
    </div>
    <div class="grid-container">
      <ComicCard 
        v-for="comic in comics" 
        :key="comic.id"
        :id="comic.id"
        :title="comic.title"
        :year="comic.year"
        :image="comic.image"
      />
    </div>
    <div class="load-more">
      <a href="#" class="onofrietti-button">CARGAR MÁS</a>
    </div>
  </section>
</template>

<style scoped>
.card-container-section {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
}

.section-header {
  margin-bottom: 40px;
  position: relative;
}

.section-title {
  font-size: 28px;
  margin-bottom: 15px;
}

.title-underline {
  width: 100px;
  height: 4px;
  background-color: var(--onofrietti-red);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 30px;
}

.load-more {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}
</style>
