import { ref } from 'vue'

// Slider headlines data
export const slides = [
  {
    title: "Ultimate Spider-Man 2024",
    subtitle: "Nueva Saga del Hombre Araña",
    buttonText: "Leer Ahora",
    image: "/img/slide1.png",
    colors: {
      primary: "#e91e63", // Rosa
      secondary: "#2196f3", // Azul
      gradient: "linear-gradient(135deg, #e91e63 0%, #9c27b0 50%, #2196f3 100%)"
    }
  },
  {
    title: "Batman: Gotham Knights",
    subtitle: "Batman: La Noche Más Oscura",
    buttonText: "Explorar",
    image: "/img/slide2.png",
    colors: {
      primary: "#2196f3", // Azul
      secondary: "#4caf50", // Verde
      gradient: "linear-gradient(135deg, #2196f3 0%, #00bcd4 50%, #4caf50 100%)"
    }
  },
  {
    title: "X-Men: Evolution",
    subtitle: "X-Men: Evolución del Mutante",
    buttonText: "Descubrir",
    image: "/img/slide3.png",
    colors: {
      primary: "#ff9800", // Naranja
      secondary: "#ffeb3b", // Amarillo
      gradient: "linear-gradient(135deg, #ff9800 0%, #ff5722 50%, #ffeb3b 100%)"
    }
  },
  {
    title: "Wonder Woman: Legacy",
    subtitle: "La Princesa Guerrera",
    buttonText: "Ver Ahora",
    image: "/img/slide1.png",
    colors: {
      primary: "#e91e63", // Rosa
      secondary: "#ffc107", // Mostaza
      gradient: "linear-gradient(135deg, #e91e63 0%, #ff5722 50%, #ffc107 100%)"
    }
  }
]

// Comics data
export const comics = [
  {
    id: 'spider-man-1',
    title: "Spider-Man",
    issue: "#1",
    author: "2025",
    publishDate: "2024-01-15",
    rating: 5,
    image: "/img/comic1.jpg",
    price: "$12.99",
    category: "Superhéroes"
  },
  {
    id: 'batman-1',
    title: "Batman",
    issue: "#1",
    author: "2026",
    publishDate: "2024-01-12",
    rating: 4,
    image: "/img/comic2.jpg",
    price: "$15.99",
    category: "Superhéroes"
  },
  {
    id: 'x-men-1',
    title: "X-Men",
    issue: "#1",
    author: "2025",
    publishDate: "2024-01-10",
    rating: 5,
    image: "/img/comic3.jpg",
    price: "$13.99",
    category: "Superhéroes"
  },
  {
    id: 'wonder-woman-1',
    title: "Wonder Woman",
    issue: "#1",
    author: "2026",
    publishDate: "2024-01-08",
    rating: 3,
    image: "/img/comic4.jpg",
    price: "$11.99",
    category: "Superhéroes"
  },
  {
    id: 'iron-man-1',
    title: "Iron Man",
    issue: "#1",
    author: "2025",
    publishDate: "2024-01-05",
    rating: 4,
    image: "/img/comic5.jpg",
    price: "$14.99",
    category: "Superhéroes"
  },
  {
    id: 'captain-america-1',
    title: "Captain America",
    issue: "#1",
    author: "2026",
    publishDate: "2024-01-03",
    rating: 5,
    image: "/img/comic6.jpg",
    price: "$12.99",
    category: "Superhéroes"
  },
  {
    id: 'thor-1',
    title: "Thor",
    issue: "#1",
    author: "2025",
    publishDate: "2024-01-01",
    rating: 4,
    image: "/img/comic7.jpg",
    price: "$13.99",
    category: "Superhéroes"
  },
  {
    id: 'black-panther-1',
    title: "Black Panther",
    issue: "#1",
    author: "2026",
    publishDate: "2023-12-28",
    rating: 3,
    image: "/img/comic1.jpg",
    price: "$11.99",
    category: "Superhéroes"
  },
  {
    id: 'doctor-strange-1',
    title: "Doctor Strange",
    issue: "#1",
    author: "2025",
    publishDate: "2023-12-25",
    rating: 4,
    image: "/img/comic2.jpg",
    price: "$12.99",
    category: "Superhéroes"
  },
  {
    id: 'the-flash-1',
    title: "The Flash",
    issue: "#1",
    author: "2026",
    publishDate: "2023-12-22",
    rating: 5,
    image: "/img/comic3.jpg",
    price: "$13.99",
    category: "Superhéroes"
  },
  {
    id: 'green-lantern-1',
    title: "Green Lantern",
    issue: "#1",
    author: "2025",
    publishDate: "2023-12-20",
    rating: 4,
    image: "/img/comic4.jpg",
    price: "$12.99",
    category: "Superhéroes"
  },
  {
    id: 'aquaman-1',
    title: "Aquaman",
    issue: "#1",
    author: "2026",
    publishDate: "2023-12-18",
    rating: 3,
    image: "/img/comic5.jpg",
    price: "$11.99",
    category: "Superhéroes"
  }
]

// Featured Comics (Destacados)
export const featuredComics = [
  {
    id: 'spider-man-no-way-home',
    title: "Spider-Man: No Way Home",
    author: "Onofrietti Comics",
    rating: 4.9,
    image: "/img/comic1.jpg",
    price: "$19.99",
    originalPrice: "$24.99",
    discount: "20%",
    category: "Destacado",
    description: "La saga más épica del Hombre Araña llega a su fin"
  },
  {
    id: 'batman-dark-knight-returns',
    title: "Batman: The Dark Knight Returns",
    author: "DC Comics",
    rating: 5.0,
    image: "/img/comic2.jpg",
    price: "$22.99",
    originalPrice: "$29.99",
    discount: "23%",
    category: "Clásico",
    description: "La obra maestra de Frank Miller que redefinió Batman"
  },
  {
    id: 'x-men-house-of-x',
    title: "X-Men: House of X",
    author: "Onofrietti Comics",
    rating: 4.8,
    image: "/img/comic3.jpg",
    price: "$18.99",
    originalPrice: "$24.99",
    discount: "24%",
    category: "Nuevo",
    description: "La nueva era de los X-Men comienza aquí"
  }
]

// Blog Posts
export const blogPosts = [
  {
    id: 'el-renacimiento-del-comic-independiente',
    title: "El Renacimiento del Comic Independiente",
    excerpt: "Descubre cómo los comics independientes están revolucionando la industria con historias frescas y artistas innovadores. Una mirada profunda a las nuevas voces que están cambiando el panorama del comic moderno.",
    author: "María García",
    date: "2024-01-15",
    readTime: "12 min",
    image: "/img/comic1.jpg",
    category: "Tendencias",
    views: 15420,
    likes: 892
  },
  {
    id: 'guia-completa-como-empezar-a-leer-comics',
    title: "Guía Completa: Cómo Empezar a Leer Comics",
    excerpt: "Todo lo que necesitas saber para adentrarte en el mundo de los comics. Desde los clásicos hasta las nuevas tendencias, te guiamos paso a paso en tu viaje por el universo del comic.",
    author: "Carlos Rodríguez",
    date: "2024-01-12",
    readTime: "12 min",
    image: "/img/comic2.jpg",
    category: "Guías",
    views: 12350,
    likes: 756
  },
  {
    id: 'el-legado-de-stan-lee-en-el-universo-onofrietti',
    title: "El Legado de Stan Lee en el Universo Onofrietti",
    excerpt: "Un homenaje al hombre que creó el universo más grande de superhéroes. Descubre cómo sus ideas revolucionarias cambiaron para siempre la industria del entretenimiento.",
    author: "Luis Martínez",
    date: "2024-01-10",
    readTime: "15 min",
    image: "/img/comic3.jpg",
    category: "Historia",
    views: 9870,
    likes: 634
  },
  {
    id: 'batman-vs-superman-el-debate-definitivo',
    title: "Batman vs Superman: El Debate Definitivo",
    excerpt: "Analizamos las fortalezas y debilidades de estos dos iconos",
    author: "Ana López",
    date: "2024-01-08",
    readTime: "10 min",
    image: "/img/comic4.jpg",
    category: "Análisis",
    views: 11200,
    likes: 445
  },
  {
    id: 'los-comics-indie-que-debes-conocer',
    title: "Los Comics Indie que Debes Conocer",
    excerpt: "Descubre obras independientes que están revolucionando el medio",
    author: "Diego Sánchez",
    date: "2024-01-05",
    readTime: "14 min",
    image: "/img/comic5.jpg",
    category: "Descubrimientos",
    views: 8760,
    likes: 523
  },
  {
    title: "El Futuro de los Comics Digitales",
    excerpt: "Cómo la tecnología está transformando la industria del comic",
    author: "Sofia Torres",
    date: "2024-01-03",
    readTime: "11 min",
    image: "/img/comic6.jpg",
    category: "Tecnología",
    views: 7650,
    likes: 398
  },
  {
    title: "Los Mejores Villanos de la Historia del Comic",
    excerpt: "Un ranking de los antagonistas más memorables y complejos",
    author: "Roberto Jiménez",
    date: "2024-01-01",
    readTime: "13 min",
    image: "/img/comic7.jpg",
    category: "Ranking",
    views: 8920,
    likes: 567
  },
  {
    title: "El Arte de la Narrativa Visual en Comics",
    excerpt: "Cómo los artistas cuentan historias sin palabras",
    author: "Carmen Vega",
    date: "2023-12-28",
    readTime: "16 min",
    image: "/img/n1.jpg",
    category: "Arte",
    views: 6540,
    likes: 432
  },
  {
    title: "Comics y Películas: Adaptaciones Exitosas",
    excerpt: "Las mejores adaptaciones del papel a la pantalla grande",
    author: "Miguel Ángel Ruiz",
    date: "2023-12-25",
    readTime: "14 min",
    image: "/img/n2.avif",
    category: "Cine",
    views: 11230,
    likes: 789
  },
  {
    title: "El Impacto de los Comics en la Cultura Popular",
    excerpt: "Cómo los superhéroes han moldeado nuestra sociedad",
    author: "Isabel Moreno",
    date: "2023-12-22",
    readTime: "17 min",
    image: "/img/photo1.webp",
    category: "Cultura",
    views: 5430,
    likes: 321
  },
  {
    title: "Guía de Coleccionismo: Ediciones Especiales",
    excerpt: "Todo sobre las ediciones más valiosas para coleccionistas",
    author: "Fernando Castro",
    date: "2023-12-20",
    readTime: "12 min",
    image: "/img/most.jpg",
    category: "Coleccionismo",
    views: 9870,
    likes: 654
  },
  {
    title: "Los Comics que Definen una Generación",
    excerpt: "Obras que marcaron época y cambiaron el medio",
    author: "Patricia López",
    date: "2023-12-18",
    readTime: "15 min",
    image: "/img/most2.jpg",
    category: "Historia",
    views: 7650,
    likes: 445
  },
  {
    title: "El Rol de la Mujer en la Industria del Comic",
    excerpt: "Celebrando las contribuciones femeninas al medio",
    author: "Laura Sánchez",
    date: "2023-12-15",
    readTime: "13 min",
    image: "/img/register.jpg",
    category: "Diversidad",
    views: 6780,
    likes: 523
  },
  {
    title: "Técnicas de Dibujo Digital para Comics",
    excerpt: "Herramientas y métodos modernos para crear comics",
    author: "David Morales",
    date: "2023-12-12",
    readTime: "18 min",
    image: "/img/slide1.png",
    category: "Tutorial",
    views: 5430,
    likes: 398
  },
  {
    title: "El Universo Expandido de Star Wars en Comics",
    excerpt: "Explorando las historias más allá de las películas",
    author: "Alejandra Torres",
    date: "2023-12-10",
    readTime: "11 min",
    image: "/img/slide2.png",
    category: "Star Wars",
    views: 8900,
    likes: 612
  },
  {
    title: "Comics de Terror: Los Mejores del Género",
    excerpt: "Las historias más escalofriantes del medio",
    author: "Ricardo Flores",
    date: "2023-12-08",
    readTime: "14 min",
    image: "/img/slide3.png",
    category: "Terror",
    views: 4320,
    likes: 287
  },
  {
    title: "El Legado de Jack Kirby en el Comic Moderno",
    excerpt: "El Rey del Comic y su influencia duradera",
    author: "Mónica Herrera",
    date: "2023-12-05",
    readTime: "16 min",
    image: "/img/rafatos.png",
    category: "Biografía",
    views: 6540,
    likes: 456
  }
]

// Videos
export const videos = [
  {
    title: "Reseña: Spider-Man No Way Home",
    channel: "ComicsOnofrietti",
    duration: "12:34",
    views: "45.2K",
    uploadDate: "2 días",
    thumbnail: "/img/comic1.jpg",
    description: "Análisis completo del último cómic de Spider-Man"
  },
  {
    title: "Top 10 Mejores Momentos de Batman",
    channel: "ComicsOnofrietti",
    duration: "18:45",
    views: "32.1K",
    uploadDate: "1 semana",
    thumbnail: "/img/comic2.jpg",
    description: "Los momentos más épicos del Caballero Oscuro"
  },
  {
    title: "Guía: Cómo Dibujar Superhéroes",
    channel: "ComicsOnofrietti",
    duration: "25:12",
    views: "28.7K",
    uploadDate: "2 semanas",
    thumbnail: "/img/comic3.jpg",
    description: "Tutorial paso a paso para dibujar superhéroes"
  },
  {
    title: "Historia Completa de los X-Men",
    channel: "ComicsOnofrietti",
    duration: "42:18",
    views: "56.3K",
    uploadDate: "3 semanas",
    thumbnail: "/img/comic4.jpg",
    description: "La evolución completa de los mutantes más famosos"
  },
  {
    title: "Unboxing: Edición Coleccionista Wonder Woman",
    channel: "ComicsOnofrietti",
    duration: "15:30",
    views: "19.8K",
    uploadDate: "1 mes",
    thumbnail: "/img/comic5.jpg",
    description: "Descubriendo la edición más exclusiva de Wonder Woman"
  },
  {
    title: "Debate: Onofrietti vs DC",
    channel: "ComicsOnofrietti",
    duration: "35:45",
    views: "67.2K",
    uploadDate: "1 mes",
    thumbnail: "/img/comic6.jpg",
    description: "El debate definitivo entre las dos grandes editoriales"
  }
]

// Games - Cyberpunk Edition
export const games = [
  {
    slug: 'neural-spider-man-web-matrix',
    title: "Neural Spider-Man: Web Matrix",
    description: "Inmersión neural completa: balancea por la ciudad cyberpunk como Spider-Man y hackea el sistema de vigilancia",
    players: "1-2",
    difficulty: "Medio",
    image: "/img/comic1.jpg",
    category: "Neural",
    rating: 4.8,
    playCount: 15420,
    platform: "Neural Link"
  },
  {
    slug: 'batman-gotham-neural-protocol',
    title: "Batman: Gotham Neural Protocol",
    description: "Protocolo de seguridad neural: protege Gotham City del caos digital como Batman",
    players: "1-4",
    difficulty: "Difícil",
    image: "/img/comic2.jpg",
    category: "Protocol",
    rating: 4.7,
    playCount: 12350,
    platform: "Neural Link"
  },
  {
    slug: 'x-men-mutant-neural-network',
    title: "X-Men: Mutant Neural Network",
    description: "Red neural mutante: lucha junto a los X-Men en el ciberespacio contra Magneto",
    players: "2-6",
    difficulty: "Medio",
    image: "/img/comic3.jpg",
    category: "Network",
    rating: 4.6,
    playCount: 8760,
    platform: "Neural Link"
  },
  {
    slug: 'jokers-digital-chaos',
    title: "Joker's Digital Chaos",
    description: "Caos digital: hackea la reality como el Joker y siembra el caos en el sistema neural",
    players: "1-3",
    difficulty: "Difícil",
    image: "/img/comic4.jpg",
    category: "Chaos",
    rating: 4.5,
    playCount: 9870,
    platform: "Neural Link"
  },
  {
    slug: 'avengers-earths-neural-defense',
    title: "Avengers: Earth's Neural Defense",
    description: "Defensa neural terrestre: únete a los Vengadores para proteger la red global de amenazas digitales",
    players: "1-8",
    difficulty: "Medio",
    image: "/img/comic5.jpg",
    category: "Defense",
    rating: 4.9,
    playCount: 11200,
    platform: "Neural Link"
  },
  {
    slug: 'venom-symbiote-neural-virus',
    title: "Venom: Symbiote Neural Virus",
    description: "Virus neural simbionte: controla el poder del simbionte Venom para corromper sistemas digitales",
    players: "1-2",
    difficulty: "Difícil",
    image: "/img/comic6.jpg",
    category: "Virus",
    rating: 4.4,
    playCount: 7650,
    platform: "Neural Link"
  }
]



// Newsletter
export const newsletterData = {
  title: "¡Únete a la Comunidad!",
  subtitle: "Recibe las últimas noticias, ofertas exclusivas y contenido especial",
  benefits: [
    "Ofertas exclusivas en comics",
    "Reseñas antes que nadie",
    "Contenido especial de creadores",
    "Acceso anticipado a eventos"
  ]
}

// Slider functions
export const useSlider = () => {
  const currentSlideIndex = ref(0)
  let slideInterval

  const goToSlide = (idx) => {
    currentSlideIndex.value = idx
  }

  const startAutoSlide = () => {
    slideInterval = setInterval(() => {
      currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length
    }, 5000)
  }

  const stopAutoSlide = () => {
    clearInterval(slideInterval)
  }

  return {
    currentSlideIndex,
    goToSlide,
    startAutoSlide,
    stopAutoSlide
  }
}

// Carousel functions
export const useCarousel = () => {
  const activeComic = ref(0)
  const currentSlide = ref(0)
  const comicsPerView = ref(4)
  const isDragging = ref(false)
  const startX = ref(0)
  const startY = ref(0)
  const currentX = ref(0)
  const dragDistance = ref(0)
  const isMobile = ref(false)

  const setActiveComic = (index) => {
    activeComic.value = index
    currentSlide.value = Math.floor(index / comicsPerView.value)
  }

  const nextSlide = () => {
    const maxSlides = Math.ceil(comics.length / comicsPerView.value)
    currentSlide.value = (currentSlide.value + 1) % maxSlides
    activeComic.value = currentSlide.value * comicsPerView.value
  }

  const prevSlide = () => {
    const maxSlides = Math.ceil(comics.length / comicsPerView.value)
    currentSlide.value = currentSlide.value === 0 ? maxSlides - 1 : currentSlide.value - 1
    activeComic.value = currentSlide.value * comicsPerView.value
  }

  const updateComicsPerView = () => {
    comicsPerView.value = comics.length
    isMobile.value = window.innerWidth <= 768
  }

  const scrollLeft = () => {
    const carouselTrack = document.querySelector('.carousel-track')
    if (carouselTrack) {
      carouselTrack.scrollBy({
        left: -400,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    const carouselTrack = document.querySelector('.carousel-track')
    if (carouselTrack) {
      carouselTrack.scrollBy({
        left: 400,
        behavior: 'smooth'
      })
    }
  }

  // Drag/swipe functions
  const startDrag = (event) => {
    if (!isMobile.value) return

    isDragging.value = true
    const touch = event.touches ? event.touches[0] : event
    startX.value = touch.clientX
    startY.value = touch.clientY
    currentX.value = touch.clientX
    dragDistance.value = 0

    const carouselTrack = document.querySelector('.carousel-track')
    if (carouselTrack) {
      carouselTrack.classList.add('dragging')
    }

    event.preventDefault()
  }

  const onDrag = (event) => {
    if (!isDragging.value || !isMobile.value) return

    const touch = event.touches ? event.touches[0] : event
    currentX.value = touch.clientX
    dragDistance.value = currentX.value - startX.value

    const carouselTrack = document.querySelector('.carousel-track')
    if (carouselTrack) {
      carouselTrack.scrollLeft -= dragDistance.value * 0.5
    }

    event.preventDefault()
  }

  const endDrag = () => {
    if (!isDragging.value || !isMobile.value) return

    const carouselTrack = document.querySelector('.carousel-track')
    if (carouselTrack) {
      carouselTrack.classList.remove('dragging')
    }

    isDragging.value = false
    dragDistance.value = 0
  }

  const selectComic = (comic) => {
    console.log('Comic seleccionado:', comic.title)
  }

  return {
    activeComic,
    currentSlide,
    comicsPerView,
    isDragging,
    startX,
    startY,
    currentX,
    dragDistance,
    isMobile,
    setActiveComic,
    nextSlide,
    prevSlide,
    updateComicsPerView,
    scrollLeft,
    scrollRight,
    startDrag,
    onDrag,
    endDrag,
    selectComic
  }
}

// Touch handlers for mobile
export const setupTouchHandlers = () => {
  const comicHolograms = document.querySelectorAll('.comic-hologram')
  const hologramBtns = document.querySelectorAll('.hologram-btn')
  const carouselBtns = document.querySelectorAll('.carousel-btn')
  const navDots = document.querySelectorAll('.nav-dot')

  const handleComicTouch = (element) => {
    element.addEventListener('touchstart', (e) => {
      e.preventDefault()
      element.classList.add('touch-active')
    })

    element.addEventListener('touchend', () => {
      setTimeout(() => {
        element.classList.remove('touch-active')
      }, 150)
    })

    element.addEventListener('touchcancel', () => {
      element.classList.remove('touch-active')
    })
  }

  const handleButtonTouch = (element) => {
    element.addEventListener('touchstart', (e) => {
      e.preventDefault()
      element.classList.add('touch-active')
    })

    element.addEventListener('touchend', () => {
      setTimeout(() => {
        element.classList.remove('touch-active')
      }, 100)
    })

    element.addEventListener('touchcancel', () => {
      element.classList.remove('touch-active')
    })
  }

  comicHolograms.forEach(handleComicTouch)
  hologramBtns.forEach(handleButtonTouch)
  carouselBtns.forEach(handleButtonTouch)
  navDots.forEach(handleButtonTouch)
}

// Carousel event listeners
export const setupCarouselListeners = (startDrag, onDrag, endDrag) => {
  const carouselTrack = document.querySelector('.carousel-track')
  if (carouselTrack) {
    carouselTrack.addEventListener('touchstart', startDrag, { passive: false })
    carouselTrack.addEventListener('touchmove', onDrag, { passive: false })
    carouselTrack.addEventListener('touchend', endDrag, { passive: false })
    carouselTrack.addEventListener('mousedown', startDrag)
    carouselTrack.addEventListener('mousemove', onDrag)
    carouselTrack.addEventListener('mouseup', endDrag)
    carouselTrack.addEventListener('mouseleave', endDrag)
  }
}

export const cleanupCarouselListeners = (startDrag, onDrag, endDrag) => {
  const carouselTrack = document.querySelector('.carousel-track')
  if (carouselTrack) {
    carouselTrack.removeEventListener('touchstart', startDrag)
    carouselTrack.removeEventListener('touchmove', onDrag)
    carouselTrack.removeEventListener('touchend', endDrag)
    carouselTrack.removeEventListener('mousedown', startDrag)
    carouselTrack.removeEventListener('mousemove', onDrag)
    carouselTrack.removeEventListener('mouseup', endDrag)
    carouselTrack.removeEventListener('mouseleave', endDrag)
  }
} 