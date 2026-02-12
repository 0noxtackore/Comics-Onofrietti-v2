<template>
  <div class="novedad-detalle">
    <!-- Marvel Red Accent -->
    <div class="marvel-red-line"></div>

    <main class="article-wrapper" v-if="article">
      <div class="container">
        <!-- Breadcrumb & Top Metadata -->
        <div class="article-top-meta">
          <nav class="breadcrumb">
            <router-link to="/nuevos">NOTICIAS</router-link>
            <span class="sep">/</span>
            <span class="current-cat">{{ article.category }}</span>
          </nav>
          <div class="meta-date">{{ article.date }}</div>
        </div>

        <!-- Article Header -->
        <header class="article-header">
          <h1 class="article-title">{{ article.title }}</h1>
          <p class="article-subtitle">{{ article.excerpt || article.title }}</p>
          <div class="article-author-info">
            <span class="label">POR</span>
            <span class="author-name">COMICS ONOFRIETTI</span>
          </div>
        </header>

        <!-- Social Share Sidebar (Desktop Only) -->
        <div class="article-layout">
          <aside class="social-sidebar">
            <div class="social-list">
              <button class="social-btn facebook" aria-label="Share on Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </button>
              <button class="social-btn x" aria-label="Ver en X.com">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.244 2H21l-6.6 7.54L22 22h-6.8l-5.3-6.9L4.2 22H2l7.1-8.1L2 2h6.9l4.8 6.2L18.244 2z" />
                </svg>
              </button>
              <button class="social-btn instagram" aria-label="Ver en Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"/>
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                  <path d="M17.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </button>
              <button class="social-btn twitch" aria-label="Ver en Twitch">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M4 3h18v11l-5 5h-4l-2 2H8v-2H5V6L4 3zm2 4v10h3v2h2l2-2h4l3-3V5H6v2zm9 1h2v6h-2V8zm-5 0h2v6h-2V8z"/>
                </svg>
              </button>
              <button class="social-btn youtube" aria-label="Ver en YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19 26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81z"/>
                  <path d="M10 15.5V8.5L16 12l-6 3.5z" fill="#fff"/>
                </svg>
              </button>
              <button class="social-btn link" aria-label="Copy Link">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              </button>
            </div>
          </aside>

          <!-- Main Content Area -->
          <article class="article-content">
            <div class="featured-image-wrapper">
              <img :src="article.image" :alt="article.title" class="featured-image">
            </div>

            <div class="content-body">
              <p class="intro-text">
                {{ article.fullText }}
              </p>

              <div class="marvel-list-section">
                <h3>Nuevos Cómics</h3>
                <ul class="release-list">
                  <li><strong>WADE WILSON: DEADPOOL (2026) #1</strong> - Benjamin Percy & Geoff Shaw</li>
                  <li><strong>CYCLOPS (2026) #1</strong> - Alex Paknadel & Roge Antonio</li>
                  <li><strong>MARC SPECTOR: MOON KNIGHT (2026) #1</strong> - Jed MacKay & Devmalya Pramanik</li>
                  <li><strong>ULTIMATE X-MEN (2024) #24</strong> - Peach Momoko</li>
                  <li><strong>VENOM (2025) #254</strong> - G. Willow Wilson</li>
                </ul>

                <h3>Nuevas Colecciones</h3>
                <ul class="release-list">
                  <li><strong>AMAZING SPIDER-MAN BY ZEB WELLS OMNIBUS VOL. 1</strong></li>
                  <li><strong>DAREDEVIL: BORN AGAIN SEASON 2</strong></li>
                  <li><strong>ONE WORLD UNDER DOOM</strong></li>
                </ul>

                <h3>Onofrietti Unlimited</h3>
                <ul class="release-list">
                  <li><strong>PLANET SHE-HULK (2025) #1</strong></li>
                  <li><strong>ECHO: SEEKER OF TRUTH (2025) #1</strong></li>
                </ul>
              </div>

              <p>
                Puedes encontrar todos estos números en tu tienda de cómics local o leerlos digitalmente a través de nuestra aplicación oficial. ¡No te quedes sin tu copia!
              </p>

              <div class="embedded-image shadow">
                <img src="/img/most2.jpg" alt="Promo image">
                <div class="caption">La batalla final comienza este miércoles. ¿Estás listo?</div>
              </div>
            </div>

            <!-- Tags Section -->
            <footer class="article-footer">
              <div class="tags-row">
                <span class="tag">#Cómics</span>
                <span class="tag">#MarvelStyle</span>
                <span class="tag">#Onofrietti2026</span>
                <span class="tag">#Novedades</span>
              </div>
            </footer>
          </article>

          <!-- The Onofrietti Bugle Side Section (Visible on Desktop) -->
          <aside class="bugle-sidebar">
            <div class="bugle-header">
              <h2 class="bugle-title">¡MÁS NOTICIAS!</h2>
              <p class="bugle-tagline">¡Noticias y actualizaciones imperdibles de todo el universo!</p>
            </div>
            <div class="bugle-list">
              <div v-for="(item, index) in bugleNews" :key="index" class="bugle-item">
                <span class="bugle-category">{{ item.category }}</span>
                <h3 class="bugle-item-title">{{ item.title }}</h3>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>

    <div v-else class="not-found container">
      <h1>ARTÍCULO NO ENCONTRADO</h1>
      <router-link to="/nuevos" class="onofrietti-btn">VOLVER A NOTICIAS</router-link>
    </div>

    <!-- Related Section -->
    <section class="related-articles-section" v-if="article">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">ÚLTIMAS NOTICIAS</h2>
          <div class="section-line"></div>
        </div>
        <div class="related-grid">
          <div v-for="(item, index) in related" :key="index" class="related-card" @click="goToArticle(item)">
            <div class="card-thumb">
              <img :src="item.image" :alt="item.title">
            </div>
            <div class="card-info">
              <span class="card-category">{{ item.category }}</span>
              <h3 class="card-title">{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Data mock (Ideally this would come from a central store or data file)
const allArticles = [
  {
    id: '1',
    title: "EL RENACIMIENTO DE LOS HÉROES: UNA NUEVA ERA COMIENZA",
    category: "CÓMICS",
    date: "10 DE FEBRERO, 2026",
    excerpt: "Explora las historias que cambiarán el rumbo del universo Onofrietti para siempre en este nuevo arco argumental.",
    image: "/img/n2.avif",
    fullText: "El multiverso se encuentra en un punto crítico. Tras los eventos del último crossover, la realidad tal como la conocemos ha comenzado a fragmentarse. En este artículo, desglosamos cada detalle del relanzamiento que promete ser la piedra angular de la próxima década de historias. Desde los nuevos diseños de trajes hasta las alianzas inesperadas, 'El Renacimiento de los Héroes' no es solo un título, es una promesa de renovación total."
  },
  {
    id: '2',
    title: "NUEVO TRÁILER: LA VENGANZA DEL CABALLERO OSCURO",
    category: "YOUTUBE",
    date: "8 DE FEBRERO, 2026",
    image: "/img/most2.jpg",
    fullText: "La espera ha terminado. Onofrietti Studios ha lanzado finalmente el tráiler extendido para la película más esperada del año. Con una estética sombría y una banda sonora que eriza la piel, la visión de este caballero oscuro redefinirá el género de acción y suspenso."
  },
  {
    id: '3',
    title: "TOP 10 CÓMICS QUE DEBES LEER ESTE MES",
    category: "CÓMICS",
    date: "7 DE FEBRERO, 2026",
    image: "/img/n1.jpg",
    fullText: "Nuestros editores han seleccionado cuidadosamente estas piezas maestras para que no te pierdas lo mejor del noveno arte. Desde dramas existenciales hasta acción pura, hay algo para cada tipo de lector en esta lista curada."
  },
  {
    id: '4',
    title: "CONOCE A LOS NUEVOS INTEGRANTES DE LA LEGIÓN",
    category: "PERSONAJES",
    date: "6 DE FEBRERO, 2026",
    image: "/img/photo1.webp",
    fullText: "Nuevas caras, nuevos poderes. La Legión se expande con tres integrantes que traen consigo secretos del pasado que podrían salvar o destruir el futuro de la humanidad. Conoce sus orígenes y motivaciones en este perfil detallado."
  },
  {
    id: '5',
    title: "ENTREVISTA EXCLUSIVA CON EL DIBUJANTE MARCO ROSSI",
    category: "CULTURA",
    date: "5 DE FEBRERO, 2026",
    image: "/img/rafatos.png",
    fullText: "En esta entrevista, el artista Marco Rossi habla sobre su proceso creativo, cómo construye composición y color para el arte digital y qué lo inspira a explorar nuevas técnicas. También comparte consejos para nuevos ilustradores y adelanta detalles de su próximo proyecto."
  },
  {
    id: '6',
    title: "EL FUTURO DE LOS JUEGOS DE ROL DE ONOFRIETTI",
    category: "JUEGOS",
    date: "4 DE FEBRERO, 2026",
    image: "/img/most.jpg",
    fullText: "El rol evoluciona: nuevas herramientas, campañas colaborativas y eventos en vivo. En este análisis repasamos hacia dónde va el ecosistema de juegos de rol de Onofrietti, qué modos se vienen y cómo la comunidad influye en el desarrollo."
  },
  {
    id: '7',
    title: "REVIEW: EL ÚLTIMO NÚMERO DE 'TITANES'",
    category: "RESEÑAS",
    date: "3 DE FEBRERO, 2026",
    image: "/img/comic7.jpg",
    fullText: "Un número cargado de tensión y giros. En esta reseña revisamos el ritmo, el arte, la evolución de personajes y lo que significa este capítulo para el arco actual de 'Titanes'."
  },
  {
    id: '8',
    title: "AVANCE: NUEVA TEMPORADA DE SPIDER-MAN",
    category: "CÓMICS",
    date: "7 DE FEBRERO, 2026",
    image: "/img/comic1.jpg",
    fullText: "Un adelanto de la nueva temporada: villanos clásicos, nuevos aliados y un enfoque más urbano. Te contamos qué esperar, qué pistas dejaron los autores y por qué este arranque promete ser uno de los mejores."
  },
  {
    id: '9',
    title: "ENTREVISTA: DETRÁS DEL ARTE DIGITAL",
    category: "CULTURA",
    date: "6 DE FEBRERO, 2026",
    image: "/img/photo1.webp",
    fullText: "Entramos al estudio: herramientas, flujos de trabajo, pinceles, texturas y cómo se decide la iluminación para cada viñeta. Un vistazo al detrás de escena del arte digital contemporáneo."
  },
  {
    id: '10',
    title: "TOP: CLÁSICOS IMPERDIBLES PARA EMPEZAR",
    category: "CÓMICS",
    date: "5 DE FEBRERO, 2026",
    image: "/img/most.jpg",
    fullText: "Si estás empezando, estos clásicos son la mejor puerta de entrada. Recomendaciones por tono, duración y sagas autoconclusivas para engancharte rápido sin perderte en continuidad."
  },
  {
    id: '11',
    title: "RESEÑA: EL NUEVO NÚMERO DEL MES",
    category: "RESEÑAS",
    date: "4 DE FEBRERO, 2026",
    image: "/img/comic7.jpg",
    fullText: "La edición del mes destaca por su narrativa visual y un cierre contundente. Analizamos puntos fuertes, debilidades y por qué vale la pena leerlo incluso si no sigues la serie regularmente."
  },
  {
    id: '12',
    title: "JUEGOS: EVENTO ESPECIAL DE ROL",
    category: "JUEGOS",
    date: "3 DE FEBRERO, 2026",
    image: "/img/most2.jpg",
    fullText: "Un evento de rol por tiempo limitado con desafíos cooperativos y recompensas exclusivas. Te explicamos reglas, horarios, requisitos y tips para maximizar tu progreso."
  },
  {
    id: '101',
    title: "Jeff the Land Shark llega a 'Onofrietti Strike Force'",
    category: "JUEGOS",
    date: "10 DE FEBRERO, 2026",
    image: "/img/most.jpg",
    fullText: "Jeff llega al roster con habilidades únicas, eventos temporales y recompensas para quienes participen durante la primera semana. Descubre cómo desbloquearlo, qué sinergias tiene con tu escuadrón y por qué podría convertirse en el nuevo favorito de la comunidad."
  },
  {
    id: '102',
    title: "Nuevos trajes clásicos disponibles en 'Universe at War'",
    category: "JUEGOS",
    date: "9 DE FEBRERO, 2026",
    image: "/img/most2.jpg",
    fullText: "La actualización de esta semana añade trajes clásicos inspirados en las portadas más icónicas. Además, llegan desafíos de tiempo limitado para conseguir variantes especiales y cosméticos exclusivos."
  },
  {
    id: '103',
    title: "Avance exclusivo: Onofrietti 1943: Rise of Heroes",
    category: "JUEGOS",
    date: "8 DE FEBRERO, 2026",
    image: "/img/photo1.webp",
    fullText: "Primer vistazo al nuevo título narrativo: escenarios de época, decisiones que cambian la campaña y un sistema de progresión centrado en escuadrones. Te contamos lo más destacado del avance y lo que sabemos del lanzamiento."
  },
  {
    id: '104',
    title: "Marvel Rivals colabora con el Universo Onofrietti",
    category: "JUEGOS",
    date: "7 DE FEBRERO, 2026",
    image: "/img/rafatos.png",
    fullText: "La colaboración trae un evento cruzado con desafíos semanales, recompensas cosméticas y misiones cooperativas. Aquí tienes todo lo que incluye, cómo participar y qué premios puedes conseguir."
  },
  {
    id: 'spider-man-no-way-home',
    title: "Spider-Man: No Way Home - El Epílogo",
    category: "DESTACADO",
    date: "11 DE FEBRERO, 2026",
    image: "/img/comic1.jpg",
    fullText: "Tras los eventos que sacudieron el multiverso, Peter Parker enfrenta su mayor desafío: una vida sin el apoyo de quienes más amaba. Esta historia explora la soledad del héroe y la determinación necesaria para seguir adelante cuando todo parece perdido."
  },
  {
    id: 'batman-dark-knight-returns',
    title: "Batman: The Dark Knight Returns - Edición Especial",
    category: "CLÁSICO",
    date: "11 DE FEBRERO, 2026",
    image: "/img/comic2.jpg",
    fullText: "Regresa a la obra maestra de Frank Miller. Esta edición especial incluye bocetos inéditos, comentarios del autor y una restauración digital que hace que cada panel de Bruce Wayne regresando del retiro se sienta más impactante que nunca."
  },
  {
    id: 'x-men-house-of-x',
    title: "X-Men: House of X - La Revolución Mutante",
    category: "NUEVO",
    date: "11 DE FEBRERO, 2026",
    image: "/img/comic3.jpg",
    fullText: "Krakoa ya no es solo una isla; es una nación. Charles Xavier revela su plan definitivo para la supervivencia de la especie mutante. Descubre cómo los X-Men cambian el juego geopolítico mundial en este número que redefine a los mutantes para siempre."
  }
  ,
  {
    id: 'el-renacimiento-del-comic-independiente',
    title: 'El Renacimiento del Comic Independiente',
    category: 'TENDENCIAS',
    date: '14 DE ENERO DE 2024',
    excerpt: 'Descubre cómo los comics independientes están revolucionando la industria con historias frescas y artistas innovadores. Una mirada profunda a las nuevas voces que están cambiando el panorama del comic moderno.',
    image: '/img/comic1.jpg',
    fullText: 'El boom del cómic independiente no es una moda: es una respuesta creativa a décadas de fórmulas repetidas. Hoy, estudios pequeños y autores emergentes están experimentando con estilos, formatos y narrativas que encuentran su audiencia gracias a comunidades digitales, crowdfunding y ferias especializadas. En este reportaje analizamos los sellos más influyentes, las tendencias visuales del momento y por qué las nuevas voces están marcando el futuro del medio.'
  },
  {
    id: 'guia-completa-como-empezar-a-leer-comics',
    title: 'Guía Completa: Cómo Empezar a Leer Comics',
    category: 'GUÍAS',
    date: '11 DE ENERO DE 2024',
    excerpt: 'Todo lo que necesitas saber para adentrarte en el mundo de los comics. Desde los clásicos hasta las nuevas tendencias, te guiamos paso a paso en tu viaje por el universo del comic.',
    image: '/img/comic2.jpg',
    fullText: 'Si quieres empezar a leer cómics y no sabes por dónde, la clave es elegir una puerta de entrada que se adapte a tu gusto: superhéroes, novela gráfica, manga, independiente o clásicos. Te proponemos rutas simples por autores, sagas cortas y arcos auto-conclusivos. Además, explicamos cómo funcionan los números, los tomos y las reediciones para que no te pierdas en el orden de lectura.'
  },
  {
    id: 'el-legado-de-stan-lee-en-el-universo-onofrietti',
    title: 'El Legado de Stan Lee en el Universo Onofrietti',
    category: 'HISTORIA',
    date: '9 DE ENERO DE 2024',
    excerpt: 'Un homenaje al hombre que creó el universo más grande de superhéroes. Descubre cómo sus ideas revolucionarias cambiaron para siempre la industria del entretenimiento.',
    image: '/img/comic3.jpg',
    fullText: 'Stan Lee no solo popularizó personajes: impulsó una forma de contar historias donde los héroes tenían dudas, problemas cotidianos y contradicciones reales. Su influencia se ve en la estructura moderna de sagas, la forma de construir universos compartidos y el tono cercano al lector. En este artículo repasamos sus aportes clave y cómo ese enfoque narrativo sigue presente en las historias actuales.'
  },
  {
    id: 'batman-vs-superman-el-debate-definitivo',
    title: 'Batman vs Superman: El Debate Definitivo',
    category: 'ANÁLISIS',
    date: '7 DE ENERO DE 2024',
    excerpt: 'Analizamos las fortalezas y debilidades de estos dos iconos.',
    image: '/img/comic4.jpg',
    fullText: 'Más allá de quién “ganaría”, Batman vs Superman representa dos filosofías: estrategia y preparación contra poder y esperanza. Comparando distintos arcos, versiones y autores, revisamos momentos donde cada uno se impone por contexto, inteligencia, moral o sacrificio. Al final, el debate revela algo más interesante: por qué ambos son necesarios en cualquier universo compartido.'
  },
  {
    id: 'los-comics-indie-que-debes-conocer',
    title: 'Los Comics Indie que Debes Conocer',
    category: 'DESCUBRIMIENTOS',
    date: '4 DE ENERO DE 2024',
    excerpt: 'Descubre obras independientes que están revolucionando el medio.',
    image: '/img/comic5.jpg',
    fullText: 'El cómic indie está lleno de joyas: historias de ciencia ficción íntima, fantasía oscura, slice-of-life y experimentación visual. Seleccionamos títulos y autores que vale la pena seguir, explicamos qué los hace diferentes y dónde encontrarlos. Si buscas algo fuera del mainstream, esta lista es tu mejor punto de partida.'
  }
]

const article = computed(() => {
  const id = route.params.id
  return allArticles.find(a => a.id === id)
})

const bugleNews = ref([
  {
    category: "SERIES TV",
    title: "LUCES, CÁMARA, ACCIÓN: CÓMO SE DIO VIDA A 'WONDER MAN'"
  },
  {
    category: "SERIES TV",
    title: "EL REGRESO DE MATT MURDOCK EN EL TRÁILER DE 'DAREDEVIL: BORN AGAIN'"
  },
  {
    category: "SERIES TV",
    title: "CÓMO BEN KINGSLEY LLEVÓ A TREVOR SLATTERY DE VILLANO A ESTRELLA"
  },
  {
    category: "CÓMICS",
    title: "LISTA COMPLETA DE NUEVOS LANZAMIENTOS: 11 DE FEBRERO"
  }
])

const related = computed(() => {
  if (!article.value?.id) return allArticles.slice(0, 3)
  return allArticles.filter(a => a.id !== article.value?.id).slice(0, 3)
})

const goToArticle = (item: any) => {
  router.push({ name: 'NovedadDetalle', params: { id: item.id } })
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.novedad-detalle {
  background-color: #fff;
  color: #151515;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  text-transform: none;
}

.marvel-red-line {
  height: 4px;
  background-color: #2563eb;
  width: 100%;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-wrapper {
  padding-top: 40px;
}

.article-top-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
}

.breadcrumb {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: none;
  text-shadow: none;
}

.breadcrumb * {
  box-shadow: none;
  text-shadow: none;
}

.breadcrumb a {
  color: #151515;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: #2563eb;
}

.breadcrumb .sep {
  margin: 0 10px;
  color: #999;
}

.breadcrumb .current-cat {
  color: #2563eb;
}

.meta-date {
  font-size: 14px;
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  margin-left: auto;
  padding-left: 36px;
  border-left: 1px solid #e5e5e5;
}

.article-header {
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 40px;
}

.article-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: clamp(32px, 5vw, 60px);
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin: 0 0 20px;
}

.article-subtitle {
  font-size: 20px;
  color: #666;
  font-style: italic;
  margin-bottom: 25px;
  line-height: 1.4;
  max-width: 900px;
}

.article-author-info {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 800;
}

.article-author-info .label {
  color: #999;
  margin-right: 8px;
}

.article-author-info .author-name {
  color: #151515;
}

/* Layout */
.article-layout {
  display: flex;
  gap: 40px;
  position: relative;
}

.social-sidebar {
  width: 60px;
  position: sticky;
  top: 100px;
  height: fit-content;
}

.social-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.social-btn:hover {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(37, 99, 235, 0.35);
}

.social-btn:active {
  transform: translateY(0);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);
}

.article-content {
  flex: 1;
  max-width: 800px;
}

.featured-image-wrapper {
  margin-bottom: 40px;
}

.featured-image {
  width: 100%;
  display: block;
  border-radius: 4px;
}

.content-body {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
}

.intro-text {
  font-size: 20px;
  font-weight: 600;
  color: #151515;
  margin-bottom: 30px;
}

.content-body h3, .content-body h4 {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  margin: 40px 0 20px;
  color: #151515;
}

.content-body p {
  margin-bottom: 25px;
}

.embedded-image {
  margin: 40px -20px;
  background: #151515;
}

.embedded-image img {
  width: 100%;
  display: block;
}

.embedded-image.shadow {
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
}

.embedded-image .caption {
  font-size: 14px;
  color: #999;
  padding: 15px 20px;
  font-style: italic;
  text-align: center;
}

.content-body ul {
  padding-left: 20px;
  margin-bottom: 30px;
}

.content-body li {
  margin-bottom: 12px;
  position: relative;
}

.content-body li::before {
  content: '•';
  color: #2563eb;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* Footer Tag Row */
.article-footer {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: #f4f4f4;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #666;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.tag:hover {
  background: #2563eb;
  color: #fff;
}

/* Related Section */
.related-articles-section {
  padding: 80px 0;
  background-color: #f9f9f9;
  margin-top: 80px;
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
  font-weight: 900;
  text-transform: uppercase;
  white-space: nowrap;
}

.section-line {
  height: 2px;
  background: #151515;
  flex: 1;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.related-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.related-card:hover {
  transform: translateY(-5px);
}

.card-thumb {
  aspect-ratio: 16/9;
  overflow: hidden;
  margin-bottom: 15px;
  border-bottom: 4px solid #2563eb;
}

.card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.related-card:hover .card-thumb img {
  transform: scale(1.05);
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-category {
  color: #2563eb;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.card-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: #151515;
}

.onofrietti-btn {
  background: #151515;
  color: #fff;
  padding: 15px 30px;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
}

.marvel-list-section h3 {
  border-bottom: 2px solid #2563eb;
  display: inline-block;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.release-list {
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
}

.release-list li {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #151515;
}

.release-list li strong {
  color: #2563eb;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
}

.release-list li::before {
  display: none !important;
}

/* Bugle Sidebar Styles */
.bugle-sidebar {
  width: 320px;
  margin-top: 0;
}

.bugle-header {
  border-bottom: 2px solid #151515;
  padding-bottom: 15px;
  margin-bottom: 25px;
}

.bugle-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 22px;
  font-weight: 900;
  margin: 0 0 5px;
  letter-spacing: 0.5px;
}

.bugle-tagline {
  font-size: 13px;
  color: #666;
  margin: 0;
  font-style: italic;
  line-height: 1.3;
}

.bugle-list {
  display: flex;
  flex-direction: column;
}

.bugle-item {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: opacity 0.2s;
}

.bugle-item:hover {
  opacity: 0.7;
}

.bugle-category {
  display: block;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  font-weight: 800;
  color: #2563eb;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.bugle-item-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  color: #151515;
  margin: 0;
}

@media (max-width: 1024px) {
  .social-sidebar, .bugle-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
  
  .article-title {
    font-size: 32px;
  }
}
</style>
