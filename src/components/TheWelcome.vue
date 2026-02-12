<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentación</template>

    La
    <a href="https://vuejs.org/" target="_blank" rel="noopener">documentación oficial</a>
    de Vue te brinda toda la información que necesitas para comenzar.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Herramientas</template>

    Este proyecto se sirve y se empaqueta con
    <a href="https://vite.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    La configuración de IDE recomendada es
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>
    +
    <a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener">Vue - Official</a>. If
    necesitas probar tus componentes y páginas web, revisa
    <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a>
    y
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
    /
    <a href="https://playwright.dev/" target="_blank" rel="noopener">Playwright</a>.

    <br />

    Más instrucciones están disponibles en
    <a href="javascript:void(0)" @click="openReadmeInEditor"><code>README.md</code></a
    >.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosistema</template>

    Obtén herramientas y librerías oficiales para tu proyecto:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. Si
    necesitas más recursos, te sugerimos visitar
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    .
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Comunidad</template>

    ¿Te trabaste? Haz tu pregunta en
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
    (el servidor oficial de Discord), o en
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also follow the official
    <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">@vuejs.org</a>
    en Bluesky o
    <a href="https://x.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    en X para enterarte de las últimas novedades del mundo Vue.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Apoya a Vue</template>

    Como proyecto independiente, Vue depende del apoyo de la comunidad para su sostenibilidad.
    Puedes ayudar
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">convirtiéndote en patrocinador</a>.
  </WelcomeItem>
</template>
