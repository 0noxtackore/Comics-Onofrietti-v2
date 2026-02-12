export type Game = {
  title: string
  image: string
  platforms: string[]
  genre: string
  rating: number
  releaseYear: number
  description: string
  featured?: boolean
  slug: string
  trailerUrl?: string
  gallery?: string[]
  highlights?: string[]
}

export const slugifyGameTitle = (title: string) =>
  title
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const games: Game[] = [
  {
    title: 'LEGENDS: ARENA OF HEROES',
    image: '/img/most2.jpg',
    platforms: ['PC', 'PS5'],
    genre: 'Acción',
    rating: 4.7,
    releaseYear: 2026,
    description: 'Forma tu escuadrón, domina habilidades y conquista arenas en tiempo real.',
    featured: true,
    slug: slugifyGameTitle('LEGENDS: ARENA OF HEROES'),
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: ['/img/most.jpg', '/img/photo1.webp', '/img/n1.jpg'],
    highlights: ['Arena PvP', 'Cooperativo', 'Eventos semanales', 'Progresión de héroes'],
  },
  {
    title: 'COSMIC FLIGHT VR',
    image: '/img/m.webp',
    platforms: ['VR', 'PC'],
    genre: 'Aventura',
    rating: 4.5,
    releaseYear: 2026,
    description: 'Pilota naves a través de anomalías espaciales en una experiencia inmersiva.',
    featured: true,
    slug: slugifyGameTitle('COSMIC FLIGHT VR'),
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: ['/img/m.webp', '/img/most2.jpg', '/img/n2.avif'],
    highlights: ['Soporte VR', 'Modo historia', 'Exploración', 'Combate espacial'],
  },
  {
    title: 'STREET JUSTICE: REMASTERED',
    image: '/img/comic7.jpg',
    platforms: ['Switch', 'PS5', 'XBS'],
    genre: "Beat'em up",
    rating: 4.2,
    releaseYear: 2025,
    description: 'Combos, cooperativo y un arte renovado para la edición definitiva.',
    slug: slugifyGameTitle('STREET JUSTICE: REMASTERED'),
    gallery: ['/img/comic7.jpg', '/img/comic6.jpg', '/img/comic5.jpg'],
    highlights: ['Cooperativo local', 'Modo arcade', 'Combos', 'Remaster HD'],
  },
  {
    title: 'SHADOW OPS: REBORN',
    image: '/img/rafatos.png',
    platforms: ['Mobile'],
    genre: 'Estrategia',
    rating: 4.0,
    releaseYear: 2024,
    description: 'Misiones rápidas, progresión profunda y eventos semanales.',
    slug: slugifyGameTitle('SHADOW OPS: REBORN'),
    gallery: ['/img/rafatos.png', '/img/most.jpg', '/img/photo1.webp'],
    highlights: ['Misiones rápidas', 'Eventos', 'Ranking', 'Progresión'],
  },
  {
    title: 'NEON CIRCUIT: RUSH',
    image: '/img/n2.avif',
    platforms: ['PC', 'XBS'],
    genre: 'Carreras',
    rating: 4.6,
    releaseYear: 2025,
    description: 'Circuitos futuristas, personalización extrema y modo historia.',
    featured: true,
    slug: slugifyGameTitle('NEON CIRCUIT: RUSH'),
    gallery: ['/img/n2.avif', '/img/n1.jpg', '/img/most2.jpg'],
    highlights: ['Modo historia', 'Online', 'Personalización', 'Circuitos neon'],
  },
  {
    title: 'TACTICAL FRONTIER',
    image: '/img/photo1.webp',
    platforms: ['PS5', 'XBS'],
    genre: 'Táctico',
    rating: 4.3,
    releaseYear: 2024,
    description: 'Decisiones milimétricas y un escuadrón que evoluciona contigo.',
    slug: slugifyGameTitle('TACTICAL FRONTIER'),
    gallery: ['/img/photo1.webp', '/img/most.jpg', '/img/m.webp'],
    highlights: ['Estrategia por turnos', 'Dificultad', 'Builds', 'Tácticas'],
  },
  {
    title: 'NEXUS: STEEL DAWN',
    image: '/img/n1.jpg',
    platforms: ['PC'],
    genre: 'Acción',
    rating: 4.1,
    releaseYear: 2026,
    description: 'Explora ciudades verticales, domina gadgets y derrota facciones rivales en misiones de alto riesgo.',
    slug: slugifyGameTitle('NEXUS: STEEL DAWN'),
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: ['/img/n1.jpg', '/img/most2.jpg', '/img/photo1.webp'],
    highlights: ['Campaña', 'Desafíos', 'Gadgets', 'Cooperativo'],
  },
  {
    slug: 'neural-spider-man-web-matrix',
    title: "Neural Spider-Man: Web Matrix",
    description: "Inmersión neural completa: balancea por la ciudad cyberpunk como Spider-Man y hackea el sistema de vigilancia",
    releaseYear: 2026,
    genre: "Acción / Neural",
    rating: 4.8,
    platforms: ["PC", "Neural Link"],
    image: "/img/comic1.jpg",
  },
  {
    slug: 'batman-gotham-neural-protocol',
    title: "Batman: Gotham Neural Protocol",
    description: "Protocolo de seguridad neural: protege Gotham City del caos digital como Batman",
    releaseYear: 2026,
    genre: "Estrategia / Protocol",
    rating: 4.7,
    platforms: ["PC", "Neural Link"],
    image: "/img/comic2.jpg",
  },
  {
    slug: 'x-men-mutant-neural-network',
    title: "X-Men: Mutant Neural Network",
    description: "Red neural mutante: lucha junto a los X-Men en el ciberespacio contra Magneto",
    releaseYear: 2026,
    genre: "RPG / Network",
    rating: 4.6,
    platforms: ["PC", "Neural Link"],
    image: "/img/comic3.jpg",
  },
  {
    slug: 'jokers-digital-chaos',
    title: "Joker's Digital Chaos",
    description: "Caos digital: hackea la reality como el Joker y siembra el caos en el sistema neural",
    releaseYear: 2026,
    genre: "Aventura / Chaos",
    rating: 4.5,
    platforms: ["PC", "Neural Link"],
    image: "/img/comic4.jpg",
  },
  {
    slug: 'avengers-earths-neural-defense',
    title: "Avengers: Earth's Neural Defense",
    description: "Defensa neural terrestre: únete a los Vengadores para proteger la red global de amenazas digitales",
    releaseYear: 2026,
    genre: "Defensa / Neural",
    rating: 4.9,
    platforms: ["PC", "Neural Link"],
    image: "/img/comic5.jpg",
  },
  {
    slug: 'venom-symbiote-neural-virus',
    title: "Venom: Symbiote Neural Virus",
    description: "Virus neural simbionte: controla el poder del simbionte Venom para corromper sistemas digitales",
    releaseYear: 2026,
    genre: "Acción / Virus",
    rating: 4.4,
    platforms: ["PC", "Neural Link"],
    image: "/img/comic6.jpg",
  },
]

export const getGameBySlug = (slug: string) => games.find((g) => g.slug === slug)

export const getRelatedGames = (slug: string, limit = 6) => {
  const current = getGameBySlug(slug)
  if (!current) return games.slice(0, limit)

  const pool = games.filter((g) => g.slug !== slug)
  const sameGenre = pool.filter((g) => g.genre === current.genre)
  const base = (sameGenre.length ? sameGenre : pool).slice(0, limit)
  return base
}
