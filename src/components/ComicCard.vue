<script setup lang="ts">
defineProps<{
  id: number;
  title: string;
  image: string;
  year: string;
}>();
</script>

<template>
  <div class="comic-card">
    <div class="card-image-wrapper">
      <img :src="image" :alt="title" class="card-image" loading="lazy">
      <div class="card-overlay">
        <span class="view-more">VER MÁS</span>
      </div>
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-year">{{ year }}</p>
    </div>
  </div>
</template>

<style scoped>
.comic-card {
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.comic-card:hover {
  transform: translateY(-10px);
}

.card-image-wrapper {
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  box-shadow: none;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.comic-card:hover .card-image {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(236, 29, 36, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.comic-card:hover .card-overlay {
  opacity: 1;
}

.view-more {
  color: white;
  font-weight: 800;
  letter-spacing: 1px;
  border: 2px solid white;
  padding: 8px 16px;
}

.card-info {
  margin-top: 15px;
  text-align: left;
}

.card-title {
  font-size: 16px;
  color: var(--onofrietti-white);
  transition: color 0.3s ease;
}

.comic-card:hover .card-title {
  color: var(--onofrietti-red);
}

.card-year {
  font-size: 12px;
  color: var(--onofrietti-grey);
  margin-top: 5px;
}
</style>
