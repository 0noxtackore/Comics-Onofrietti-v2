<template>
  <div class="other-view">
    <div class="container mx-auto text-center py-16">
      <h1 class="text-4xl font-bold mb-8">Otra Página</h1>
      <p class="text-lg">Esta es otra página de la aplicación.</p>
    </div>
  </div>
</template>

<script setup>
// No necesitamos importar MenuBar y Footer aquí ya que están en App.vue
</script>

<style scoped>
.other-view {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style> 