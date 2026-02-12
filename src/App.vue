<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import MenuBar from './components/MenuBar.vue'
import Footer from './components/Footer.vue'

const isLightMode = ref(false)

const route = useRoute()
const hideChrome = computed(() => {
  if (route.meta?.hideChrome) return true
  const name = String(route.name || '')
  if (name === 'Login' || name === 'Registro') return true
  const path = String(route.path || '')
  if (path.startsWith('/login') || path.startsWith('/registro')) return true
  return false
})
</script>

<template>
  <div id="app">
    <MenuBar v-if="!hideChrome" :isLightMode="isLightMode" />
    <main class="content-wrapper">
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :isLightMode="isLightMode" @update:isLightMode="isLightMode = $event" />
      </router-view>
    </main>
    <Footer v-if="!hideChrome" :isLightMode="isLightMode" />
  </div>
</template>

<style>
/* Importar fuentes primero */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Estilos globales para tu aplicación */
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.content-wrapper {
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
