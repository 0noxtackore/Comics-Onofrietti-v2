<template>
  <!-- Footer Desktop (f1) -->
  <footer v-if="!isLightMode && isDesktop" id="f1">
      <div class="container">
          <table>
        <tbody>
          <tr>
            <!-- Columna 1 - Logo y Copyright -->
            <td class="footer-line-der" style="width: 20%;">
              <div class="logo-section">
                <router-link to="/">
                  <img src="/img/Logo.png" alt="Logo Comics Onofrietti" id="co-logo" :class="{ 'logo-navigating': isNavigating }">
                </router-link>
                <div class="copyright">
                  <span class="copyright-text">© {{ currentYear }} comicsonofrietti.com</span>
                  <p class="copyright-subtitle">Todos los derechos reservados.</p>
                </div>
              </div>
              <div class="social-icons-desktop">
                <a href="#" title="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>
                </a>
                <a href="#" title="Twitch">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M4 3h18v11l-5 5h-4l-2 2H8v-2H5V6L4 3zm2 4v10h3v2h2l2-2h4l3-3V5H6v2zm9 1h2v6h-2V8zm-5 0h2v6h-2V8z"/>
                  </svg>
                </a>
                <a href="#" title="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                </a>
                <a href="#" title="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                </a>
                <a href="#" title="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                </a>
                <a href="#" title="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                </a>
                      </div>
                  </td>
                  
            <!-- Columna 2 - Comics -->
            <td class="footer-line-der" style="width: 20%;">
              <h5 class="footer-title">Comics</h5>
              <ul class="footer-list">
                <li><a href="#">Nuevos Comics</a></li>
                <li><a href="#">Mejores Comics</a></li>
                <li><a href="#">Comics Populares</a></li>
                <li><a href="#">Comics de Acción</a></li>
                <li><a href="#">Comics de Aventura</a></li>
                <li><a href="#">Comics de Superhéroes</a></li>
                <li><a href="#">Comics Independientes</a></li>
                <li><a href="#">Subir Comic</a></li>
                      </ul>
                  </td>
                  
            <!-- Columna 3 - Categorías -->
            <td class="footer-line-der" style="width: 20%;">
              <h5 class="footer-title">Categorías</h5>
              <ul class="footer-list">
                <li><a href="#">Superhéroes</a></li>
                <li><a href="#">Acción</a></li>
                <li><a href="#">Aventura</a></li>
                <li><a href="#">Ciencia Ficción</a></li>
                <li><a href="#">Fantasía</a></li>
                <li><a href="#">Terror</a></li>
                <li><a href="#">Romance</a></li>
                <li><a href="#">Comedia</a></li>
                      </ul>
                  </td>
            
            <!-- Columna 4 - Comunidad -->
            <td class="footer-line-der" style="width: 20%;">
              <h5 class="footer-title">Comunidad</h5>
              <ul class="footer-list">
                <li><a href="#">Foro de Lectores</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Convenciones</a></li>
                <li><a href="#">Rankings</a></li>
                <li><a href="#">Reseñas</a></li>
                <li><a href="#">Discord</a></li>
                      </ul>
                  </td>
            
            <!-- Columna 5 - Empresa -->
            <td style="width: 20%;">
              <h5 class="footer-title">Empresa</h5>
              <ul class="footer-list">
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Términos de Uso</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Política de Cookies</a></li>
                <li><a href="#">Autores</a></li>
                <li><a href="#">Publicidad</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Soporte</a></li>
              </ul>
                  </td>
              </tr>
        </tbody>
          </table>
      </div>
  </footer>

  <!-- Footer Desktop Light (f1-light) -->
  <footer v-if="isLightMode && isDesktop" id="f1-light" class="footer-light">
    <div class="container">
      <table>
        <tbody>
          <tr>
            <td class="footer-line-der" style="width: 20%;">
              <div class="logo-section">
                <router-link to="/">
                  <img src="/img/Logo.png" alt="Logo Comics Onofrietti" id="co-logo">
                </router-link>
                <div class="copyright">
                  <span class="copyright-text">© {{ currentYear }} comicsonofrietti.com</span>
                  <p class="copyright-subtitle">Todos los derechos reservados.</p>
                </div>
              </div>
              <div class="social-icons-desktop">
                <a href="#" title="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>
                </a>
                <a href="#" title="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                </a>
                <a href="#" title="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                </a>
                <a href="#" title="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                </a>
                <a href="#" title="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                </a>
              </div>
            </td>
            <td class="footer-line-der" style="width: 20%;">
              <h5 class="footer-title">Comics</h5>
              <ul class="footer-list">
                <li><a href="#">Nuevos Comics</a></li>
                <li><a href="#">Mejores Comics</a></li>
                <li><a href="#">Comics Populares</a></li>
                <li><a href="#">Comics de Acción</a></li>
                <li><a href="#">Comics de Aventura</a></li>
                <li><a href="#">Comics de Superhéroes</a></li>
                <li><a href="#">Comics Independientes</a></li>
                <li><a href="#">Subir Comic</a></li>
              </ul>
            </td>
            <td class="footer-line-der" style="width: 20%;">
              <h5 class="footer-title">Categorías</h5>
              <ul class="footer-list">
                <li><a href="#">Superhéroes</a></li>
                <li><a href="#">Acción</a></li>
                <li><a href="#">Aventura</a></li>
                <li><a href="#">Ciencia Ficción</a></li>
                <li><a href="#">Fantasía</a></li>
                <li><a href="#">Terror</a></li>
                <li><a href="#">Romance</a></li>
                <li><a href="#">Comedia</a></li>
              </ul>
            </td>
            <td class="footer-line-der" style="width: 20%;">
              <h5 class="footer-title">Comunidad</h5>
              <ul class="footer-list">
                <li><a href="#">Foro de Lectores</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Convenciones</a></li>
                <li><a href="#">Rankings</a></li>
                <li><a href="#">Reseñas</a></li>
                <li><a href="#">Discord</a></li>
              </ul>
            </td>
            <td style="width: 20%;">
              <h5 class="footer-title">Empresa</h5>
              <ul class="footer-list">
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Términos de Uso</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Política de Cookies</a></li>
                <li><a href="#">Autores</a></li>
                <li><a href="#">Publicidad</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Soporte</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </footer>

  <!-- Footer Móvil/Tablet (f2) -->
  <footer v-if="!isLightMode && isMobile" id="f2">
    <div class="container">
      <!-- Logo y Copyright -->
      <div class="mobile-logo-section">
        <router-link to="/">
          <img src="/img/Logo.png" alt="Logo Comics Onofrietti" id="co-logo" :class="{ 'logo-navigating': isNavigating }">
        </router-link>
        <div class="copyright">
          <span class="copyright-text">© {{ currentYear }} comicsonofrietti.com</span>
          <p class="copyright-subtitle">Todos los derechos reservados.</p>
        </div>
      </div>
      <!-- Enlaces principales -->
      <div class="mobile-links">
        <div class="mobile-column">
          <h6 class="footer-title">Comics</h6>
          <ul class="footer-list">
            <li><a href="#">Nuevos</a></li>
            <li><a href="#">Populares</a></li>
            <li><a href="#">Superhéroes</a></li>
            <li><a href="#">Acción</a></li>
          </ul>
        </div>
        <div class="mobile-column">
          <h6 class="footer-title">Categorías</h6>
          <ul class="footer-list">
            <li><a href="#">Aventura</a></li>
            <li><a href="#">Ciencia Ficción</a></li>
            <li><a href="#">Fantasía</a></li>
            <li><a href="#">Terror</a></li>
          </ul>
        </div>
        <div class="mobile-column">
          <h6 class="footer-title">Comunidad</h6>
          <ul class="footer-list">
            <li><a href="#">Foro</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
        <div class="mobile-column">
          <h6 class="footer-title">Empresa</h6>
          <ul class="footer-list">
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Términos</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
      <!-- Redes sociales -->
      <div class="mobile-social">
        <h6 class="footer-title">Síguenos</h6>
        <div class="social-icons">
          <a href="#" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
          </a>
          <a href="#" title="Twitch">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M4 3h18v11l-5 5h-4l-2 2H8v-2H5V6L4 3zm2 4v10h3v2h2l2-2h4l3-3V5H6v2zm9 1h2v6h-2V8zm-5 0h2v6h-2V8z"/>
            </svg>
          </a>
          <a href="#" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </a>
          <a href="#" title="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </a>
          <a href="#" title="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
          </a>
          <a href="#" title="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Footer Móvil/Tablet Light (f2-light) -->
  <footer v-if="isLightMode && isMobile" id="f2-light" class="footer-light">
    <div class="container">
      <div class="mobile-logo-section">
        <router-link to="/">
          <img src="/img/Logo.png" alt="Logo Comics Onofrietti" id="co-logo">
        </router-link>
        <div class="copyright">
          <span class="copyright-text">© {{ currentYear }} comicsonofrietti.com</span>
          <p class="copyright-subtitle">Todos los derechos reservados.</p>
        </div>
      </div>
      <div class="mobile-links">
        <div class="mobile-column">
          <h6 class="footer-title">Comics</h6>
          <ul class="footer-list">
            <li><a href="#">Nuevos</a></li>
            <li><a href="#">Populares</a></li>
            <li><a href="#">Superhéroes</a></li>
            <li><a href="#">Acción</a></li>
          </ul>
        </div>
        <div class="mobile-column">
          <h6 class="footer-title">Categorías</h6>
          <ul class="footer-list">
            <li><a href="#">Aventura</a></li>
            <li><a href="#">Ciencia Ficción</a></li>
            <li><a href="#">Fantasía</a></li>
            <li><a href="#">Terror</a></li>
          </ul>
        </div>
        <div class="mobile-column">
          <h6 class="footer-title">Comunidad</h6>
          <ul class="footer-list">
            <li><a href="#">Foro</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
        <div class="mobile-column">
          <h6 class="footer-title">Empresa</h6>
          <ul class="footer-list">
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Términos</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div class="mobile-social">
        <h6 class="footer-title">Síguenos</h6>
        <div class="social-icons">
          <a href="#" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
          </a>
          <a href="#" title="Twitch">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M4 3h18v11l-5 5h-4l-2 2H8v-2H5V6L4 3zm2 4v10h3v2h2l2-2h4l3-3V5H6v2zm9 1h2v6h-2V8zm-5 0h2v6h-2V8z"/>
            </svg>
          </a>
          <a href="#" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </a>
          <a href="#" title="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </a>
          <a href="#" title="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
          </a>
          <a href="#" title="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Footer Tablet Large (f3) -->
  <footer v-if="!isLightMode && isTablet" id="f3">
    <div class="container">
      <div class="tablet-layout">
        <div class="tablet-left">
          <div class="logo-section">
            <router-link to="/">
              <img src="/img/Logo.png" alt="Logo Comics Onofrietti" id="co-logo" :class="{ 'logo-navigating': isNavigating }">
            </router-link>
            <div class="copyright">
              <span class="copyright-text">© {{ currentYear }} comicsonofrietti.com</span>
              <p class="copyright-subtitle">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
        <div class="tablet-right">
          <div class="tablet-links">
            <div class="tablet-column">
              <h6 class="footer-title">Comics</h6>
              <ul class="footer-list">
                <li><a href="#">Nuevos</a></li>
                <li><a href="#">Populares</a></li>
                <li><a href="#">Superhéroes</a></li>
                <li><a href="#">Acción</a></li>
              </ul>
            </div>
            <div class="tablet-column">
              <h6 class="footer-title">Categorías</h6>
              <ul class="footer-list">
                <li><a href="#">Aventura</a></li>
                <li><a href="#">Ciencia Ficción</a></li>
                <li><a href="#">Fantasía</a></li>
                <li><a href="#">Terror</a></li>
              </ul>
            </div>
            <div class="tablet-column">
              <h6 class="footer-title">Comunidad</h6>
              <ul class="footer-list">
                <li><a href="#">Foro</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Discord</a></li>
              </ul>
            </div>
          </div>
          <div class="social-icons">
            <a href="#" title="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
            <a href="#" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            <a href="#" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
            </a>
            <a href="#" title="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
            </a>
            <a href="#" title="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Footer Tablet Large Light (f3-light) -->
  <footer v-if="isLightMode && isTablet" id="f3-light" class="footer-light">
    <div class="container">
      <div class="tablet-layout">
        <div class="tablet-left">
          <div class="logo-section">
            <router-link to="/">
              <img src="/img/Logo.png" alt="Logo Comics Onofrietti" id="co-logo">
            </router-link>
            <div class="copyright">
              <span class="copyright-text">© {{ currentYear }} comicsonofrietti.com</span>
              <p class="copyright-subtitle">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
        <div class="tablet-right">
          <div class="tablet-links">
            <div class="tablet-column">
              <h6 class="footer-title">Comics</h6>
              <ul class="footer-list">
                <li><a href="#">Nuevos</a></li>
                <li><a href="#">Populares</a></li>
                <li><a href="#">Superhéroes</a></li>
                <li><a href="#">Acción</a></li>
              </ul>
            </div>
            <div class="tablet-column">
              <h6 class="footer-title">Categorías</h6>
              <ul class="footer-list">
                <li><a href="#">Aventura</a></li>
                <li><a href="#">Ciencia Ficción</a></li>
                <li><a href="#">Fantasía</a></li>
                <li><a href="#">Terror</a></li>
              </ul>
            </div>
            <div class="tablet-column">
              <h6 class="footer-title">Comunidad</h6>
              <ul class="footer-list">
                <li><a href="#">Foro</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Discord</a></li>
              </ul>
            </div>
          </div>
          <div class="social-icons">
            <a href="#" title="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
            <a href="#" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            <a href="#" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
            </a>
            <a href="#" title="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
            </a>
            <a href="#" title="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  isLightMode: Boolean
})

const isNavigating = ref(false)
const currentYear = new Date().getFullYear()

// Detectar tipo de dispositivo
const isDesktop = ref(false)
const isTablet = ref(false)
const isMobile = ref(false)

const updateDeviceType = () => {
  const width = window.innerWidth
  isDesktop.value = width > 1024
  isTablet.value = width > 768 && width <= 1024
  isMobile.value = width <= 768
}

onMounted(() => {
  updateDeviceType()
  window.addEventListener('resize', updateDeviceType)
  // Detectar navegación en la página
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .footer-list a')
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      isNavigating.value = true
      setTimeout(() => {
        isNavigating.value = false
      }, 2000) // El efecto dura 2 segundos
    })
  })

  // Detectar scroll para efecto de navegación
  let scrollTimeout
  window.addEventListener('scroll', () => {
    isNavigating.value = true
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      isNavigating.value = false
    }, 1000)
  })
})
</script> 

<style scoped>
/* Estilos específicos del componente Footer */

/* Estilos básicos */
footer {
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  margin: 0;
  width: 100%;
}

footer.light-mode,
footer.light-mode > .container,
footer.light-mode .container,
footer.light-mode table,
footer.light-mode tr,
footer.light-mode td,
footer.light-mode .mobile-logo-section,
footer.light-mode .mobile-links,
footer.light-mode .mobile-social,
footer.light-mode .tablet-layout,
footer.light-mode .tablet-left,
footer.light-mode .tablet-right {
  background: transparent !important;
  background-color: transparent !important;
}
footer.light-mode {
  background: #fff !important;
  background-color: #fff !important;
  color: #111 !important;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08) !important;
}
footer.light-mode .footer-title,
footer.light-mode .copyright-text,
footer.light-mode .copyright-subtitle {
  color: #111 !important;
}
footer.light-mode .footer-list a {
  color: #333 !important;
}
footer.light-mode .footer-list a:hover {
  color: #007bff !important;
}
footer.light-mode .social-icons a, footer.light-mode .social-icons-desktop a {
  background-color: rgba(0,0,0,0.06) !important;
}
footer.light-mode .social-icons svg, footer.light-mode .social-icons-desktop svg {
  color: #111 !important;
}
footer.light-mode .social-icons a:hover svg, footer.light-mode .social-icons-desktop a:hover svg {
  color: #007bff !important;
}
footer.light-mode .footer-list li {
  color: #111 !important;
}
footer.light-mode .mobile-logo-section .copyright-subtitle,
footer.light-mode .tablet-left .copyright-subtitle {
  color: #444 !important;
}
footer.light-mode .footer-list,
footer.light-mode .footer-list * {
  color: #111 !important;
}
footer.light-mode .mobile-social .footer-title,
footer.light-mode .mobile-social .social-icons a,
footer.light-mode .mobile-social .social-icons svg {
  color: #111 !important;
}
footer.light-mode .mobile-social .social-icons a:hover svg {
  color: #007bff !important;
}

/* Contenedor */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Logo y copyright */
.logo-section {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    margin-bottom: 20px !important;
    text-align: center !important;
    width: 100% !important;
}

#co-logo {
    width: 120px !important;
    height: auto !important;
    margin-bottom: 10px !important;
    transition: transform 0.3s ease !important;
}

#co-logo:hover {
    transform: scale(1.05) !important;
}

/* Efecto de recorte durante navegación para footer */
#co-logo.logo-navigating {
    animation: footerNavigateClip 2s ease-in-out infinite !important;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    position: relative !important;
}

#co-logo.logo-navigating::before {
    content: '' !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 212, 255, 0.1)) !important;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
    opacity: 0 !important;
    z-index: -1 !important;
    animation: footerNavigateGlow 2s ease-in-out infinite !important;
}

#co-logo.logo-navigating::after {
    content: '' !important;
    position: absolute !important;
    top: -2px !important;
    left: -2px !important;
    right: -2px !important;
    bottom: -2px !important;
    background: linear-gradient(45deg, #007bff, #00d4ff, #007bff) !important;
    background-size: 200% 200% !important;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
    opacity: 0 !important;
    z-index: -2 !important;
    animation: footerNavigateBorder 2s ease-in-out infinite !important;
}

@keyframes footerNavigateClip {
    0%, 100% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    }
    25% {
        clip-path: polygon(10% 5%, 90% 0%, 95% 95%, 5% 100%) !important;
    }
    50% {
        clip-path: polygon(5% 10%, 95% 5%, 100% 90%, 0% 95%) !important;
    }
    75% {
        clip-path: polygon(0% 15%, 100% 10%, 105% 85%, -5% 90%) !important;
    }
}

@keyframes footerNavigateGlow {
    0%, 100% {
        opacity: 0 !important;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    }
    25% {
        opacity: 1 !important;
        clip-path: polygon(15% 10%, 85% 5%, 90% 90%, 10% 95%) !important;
    }
    50% {
        opacity: 1 !important;
        clip-path: polygon(10% 15%, 90% 10%, 95% 85%, 5% 90%) !important;
    }
    75% {
        opacity: 1 !important;
        clip-path: polygon(5% 20%, 95% 15%, 100% 80%, 0% 85%) !important;
    }
}

@keyframes footerNavigateBorder {
    0%, 100% {
        opacity: 0 !important;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    }
    25% {
        opacity: 1 !important;
        clip-path: polygon(8% 3%, 92% -2%, 97% 97%, 3% 102%) !important;
    }
    50% {
        opacity: 1 !important;
        clip-path: polygon(3% 8%, 97% 3%, 102% 92%, -2% 97%) !important;
    }
    75% {
        opacity: 1 !important;
        clip-path: polygon(-2% 13%, 102% 8%, 107% 83%, -7% 88%) !important;
    }
}

.copyright {
    text-align: center !important;
    width: 100% !important;
}

.copyright-text {
    font-weight: bold !important;
    font-size: 14px !important;
    text-align: center !important;
}

.copyright-subtitle {
    font-size: 12px !important;
    color: #aaa !important;
    margin: 5px 0 0 0 !important;
    text-align: center !important;
}

/* Títulos */
.footer-title {
    font-weight: bold !important;
    font-size: 14px !important;
    margin-bottom: 15px !important;
    text-transform: uppercase !important;
    text-align: center !important;
    color: #fff !important;
}

/* Listas */
.footer-list {
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
    text-align: center !important;
}

.footer-list li {
    margin-bottom: 8px !important;
    transition: all 0.3s ease !important;
    text-align: center !important;
}

.footer-list li:hover {
    transform: translateX(5px) !important;
}

.footer-list a {
    color: #aaa !important;
    text-decoration: none !important;
    font-size: 12px !important;
    transition: color 0.3s ease !important;
    text-align: center !important;
}

.footer-list a:hover {
    color: #fff !important;
}

/* Tabla desktop */
table {
    width: 100% !important;
    border-collapse: collapse !important;
    margin: 0 auto !important;
}

td {
    padding: 15px 10px !important;
    vertical-align: top !important;
    text-align: center !important;
}

/* Primera columna específicamente centrada */
td:first-child {
    text-align: center !important;
}

/* Iconos sociales */
.social-icons, .social-icons-desktop {
    display: flex !important;
    gap: 15px !important;
    justify-content: center !important;
    align-items: center !important;
    margin-top: 15px !important;
    width: 100% !important;
}

.social-icons a, .social-icons-desktop a {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 35px !important;
    height: 35px !important;
    border-radius: 50% !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
    transition: all 0.3s ease !important;
    text-decoration: none !important;
}

.social-icons a:hover, .social-icons-desktop a:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
    transform: translateY(-2px) !important;
}

.social-icons a:hover svg, .social-icons-desktop a:hover svg {
    color: #007bff !important;
}

.social-icons svg, .social-icons-desktop svg {
    width: 18px !important;
    height: 18px !important;
    color: #fff !important;
    transition: color 0.3s ease !important;
}

/* Líneas decorativas suaves */
.footer-line-der {
  position: relative;
}

.footer-line-der:after {
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
  left: 100%;
  top: 0;
  transform: translateX(10px);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
}

/* Layout móvil */
.mobile-logo-section {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
}

.mobile-logo-section:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  bottom: -15px;
  left: 0;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
}

.mobile-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
}

.mobile-links:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  bottom: -15px;
  left: 0;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
}

.mobile-links-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin-top: 30px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
}

.mobile-column {
  text-align: center;
}

.mobile-social {
  text-align: center;
  position: relative;
}

.mobile-social:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  top: -15px;
  left: 0;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
}

/* Layout tablet */
.tablet-layout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.tablet-left {
  flex: 0 0 30%;
  position: relative;
}

.tablet-left:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  bottom: -15px;
  left: 0;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
}

.tablet-right {
  flex: 0 0 65%;
}

.tablet-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.tablet-column {
  text-align: center;
}

/* Responsive */
@media (max-width: 480px) {
  #f1, #f3 { display: none !important; }
  #f2 { display: block !important; }
  
  .container { padding: 0 10px; }
  
  .mobile-logo-section {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
  }
  
  .mobile-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  #co-logo { 
    width: 100px !important;
    margin: 0 auto !important;
    display: block !important;
  }
  
  .footer-title { font-size: 12px; }
  
  .footer-list a { font-size: 11px; }
}

@media (min-width: 481px) and (max-width: 768px) {
  #f1, #f3 { display: none !important; }
  #f2 { display: block !important; }
  
  .container { padding: 0 15px; }
  
  .mobile-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  #co-logo { width: 110px; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  #f1, #f2 { display: none !important; }
  #f3 { display: block !important; }
  
  .container { padding: 0 20px; }
  
  .tablet-layout {
    flex-direction: column;
    gap: 30px;
  }
  
  .tablet-left, .tablet-right {
    flex: none;
    width: 100%;
  }
  
  .tablet-links {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1025px) {
  #f2, #f3 { display: none !important; }
  #f1 { display: block !important; }
  
  .container { padding: 0 30px; }
  
  .logo-section {
    align-items: flex-start;
  }
  
  .footer-title { font-size: 14px; }
  
  .footer-list li { margin-bottom: 10px; }
}

/* Efecto de recorte durante navegación para footer */
#co-logo.logo-navigating {
    animation: footerNavigateClip 2s ease-in-out infinite !important;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    position: relative !important;
}

#co-logo.logo-navigating::before {
    content: '' !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 212, 255, 0.1)) !important;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
    opacity: 0 !important;
    z-index: -1 !important;
    animation: footerNavigateGlow 2s ease-in-out infinite !important;
}

#co-logo.logo-navigating::after {
    content: '' !important;
    position: absolute !important;
    top: -2px !important;
    left: -2px !important;
    right: -2px !important;
    bottom: -2px !important;
    background: linear-gradient(45deg, #007bff, #00d4ff, #007bff) !important;
    background-size: 200% 200% !important;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
    opacity: 0 !important;
    z-index: -2 !important;
    animation: footerNavigateBorder 2s ease-in-out infinite !important;
}

@keyframes footerNavigateClip {
    0%, 100% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    }
    25% {
        clip-path: polygon(10% 5%, 90% 0%, 95% 95%, 5% 100%) !important;
    }
    50% {
        clip-path: polygon(5% 10%, 95% 5%, 100% 90%, 0% 95%) !important;
    }
    75% {
        clip-path: polygon(0% 15%, 100% 10%, 105% 85%, -5% 90%) !important;
    }
}

@keyframes footerNavigateGlow {
    0%, 100% {
        opacity: 0 !important;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    }
    25% {
        opacity: 1 !important;
        clip-path: polygon(15% 10%, 85% 5%, 90% 90%, 10% 95%) !important;
    }
    50% {
        opacity: 1 !important;
        clip-path: polygon(10% 15%, 90% 10%, 95% 85%, 5% 90%) !important;
    }
    75% {
        opacity: 1 !important;
        clip-path: polygon(5% 20%, 95% 15%, 100% 80%, 0% 85%) !important;
    }
}

@keyframes footerNavigateBorder {
    0%, 100% {
        opacity: 0 !important;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
    }
    25% {
        opacity: 1 !important;
        clip-path: polygon(8% 3%, 92% -2%, 97% 97%, 3% 102%) !important;
    }
    50% {
        opacity: 1 !important;
        clip-path: polygon(3% 8%, 97% 3%, 102% 92%, -2% 97%) !important;
    }
    75% {
        opacity: 1 !important;
        clip-path: polygon(-2% 13%, 102% 8%, 107% 83%, -7% 88%) !important;
    }
}

footer.light-mode .container,
footer.light-mode table,
footer.light-mode tr,
footer.light-mode td,
footer.light-mode .mobile-logo-section,
footer.light-mode .mobile-links,
footer.light-mode .mobile-social,
footer.light-mode .tablet-layout,
footer.light-mode .tablet-left {
  background: #fff !important;
  background-color: #fff !important;
}

footer.light-mode .footer-line-der:after,
footer.light-mode .mobile-logo-section:after,
footer.light-mode .mobile-links:after,
footer.light-mode .mobile-social:before,
footer.light-mode .tablet-left:after {
  background: none !important;
  box-shadow: none !important;
}

footer.light-mode > .container {
  background: #fff !important;
  background-color: #fff !important;
}

.footer-light {
  background: #fff !important;
  color: #111 !important;
  width: 100vw;
  min-width: 100vw;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
}
.footer-light .container,
.footer-light table,
.footer-light tr,
.footer-light td {
  background: transparent !important;
  color: #111 !important;
}
.footer-light .footer-title,
.footer-light .copyright-text,
.footer-light .copyright-subtitle {
  color: #111 !important;
}
.footer-light .footer-list a {
  color: #333 !important;
}
.footer-light .footer-list a:hover {
  color: #007bff !important;
}
.footer-light .social-icons a, .footer-light .social-icons-desktop a {
  background-color: rgba(0,0,0,0.06) !important;
}
.footer-light .social-icons svg, .footer-light .social-icons-desktop svg {
  color: #111 !important;
}
.footer-light .social-icons a:hover svg, .footer-light .social-icons-desktop a:hover svg {
  color: #007bff !important;
}
.footer-light .footer-list li {
  color: #111 !important;
}
</style> 