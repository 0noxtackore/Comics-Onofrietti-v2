<script setup lang="ts">
</script>

<template>
  <div class="hero-section">
    <div class="hero-content">
      <div class="hero-image-container">
        <img src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=2000" alt="Avengers Hero" class="hero-img">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-text-card">
        <div class="text-content">
          <h1 class="hero-title">Avengers: Assemble</h1>
          <p class="hero-description">Los héroes más poderosos de la Tierra deben unirse y aprender a luchar como un equipo si quieren detener al travieso Loki y su ejército alienígena antes de que esclavicen a la humanidad.</p>
          <a href="#" class="onofrietti-button hero-btn">EXPLORAR AHORA</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: var(--onofrietti-black);
  overflow: hidden;
}

.hero-content {
  display: flex;
  height: 100%;
  width: 100%;
}

.hero-image-container {
  position: relative;
  width: 70%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero-image-container:hover .hero-img {
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(21,21,21,0.5) 0%, rgba(21,21,21,0) 50%);
}

.hero-text-card {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 450px;
  background-color: var(--onofrietti-black);
  padding: 40px;
  z-index: 10;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
}

/* Second clip path for a layered look */
.hero-text-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--onofrietti-red);
  z-index: -1;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
}

.hero-title {
  font-size: 48px;
  margin-bottom: 20px;
  line-height: 1;
}

.hero-description {
  font-size: 16px;
  margin-bottom: 30px;
  color: var(--onofrietti-grey);
}

.hero-btn {
  margin-top: 20px;
}

@media (max-width: 1024px) {
  .hero-image-container {
    width: 100%;
    clip-path: none;
  }
  .hero-text-card {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
    clip-path: none;
    background-color: rgba(21, 21, 21, 0.9);
  }
}
</style>
