<script setup lang="ts">
</script>

<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-logo-section">
        <div class="footer-logo">ONOFRIETTI</div>
      </div>
      <div class="footer-links">
        <div class="link-column">
          <h4>SOBRE ONOFRIETTI</h4>
          <ul>
            <li><a href="#">SOBRE ONOFRIETTI</a></li>
            <li><a href="#">AYUDA / PREGUNTAS FRECUENTES</a></li>
            <li><a href="#">TRABAJA CON NOSOTROS</a></li>
            <li><a href="#">PASANTÍAS</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h4>PUBLICIDAD</h4>
          <ul>
            <li><a href="#">ONOFRIETTI INSIDER</a></li>
            <li><a href="#">ONOFRIETTI UNLIMITED</a></li>
            <li><a href="#">TIENDA ONOFRIETTI</a></li>
            <li><a href="#">CÓMICS DIGITALES</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-social">
        <h4>SIGUE A ONOFRIETTI</h4>
        <div class="social-icons">
          <!-- Simplified icons for demo -->
          <div class="social-icon">FB</div>
          <div class="social-icon">TW</div>
          <div class="social-icon">IG</div>
          <div class="social-icon">YT</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 ONOFRIETTI. TODOS LOS DERECHOS RESERVADOS.</p>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: var(--onofrietti-black);
  padding: 80px 0 40px;
  border-top: 1px solid var(--onofrietti-dark-grey);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  padding: 0 20px;
}

.footer-logo {
  font-size: 80px;
  font-weight: 900;
  color: #202020;
  line-height: 1;
  letter-spacing: -5px;
  user-select: none;
}

.footer-links {
  display: flex;
  gap: 60px;
}

h4 {
  font-size: 14px;
  margin-bottom: 25px;
  color: var(--onofrietti-white);
}

ul li {
  margin-bottom: 12px;
}

ul li a {
  font-size: 13px;
  color: var(--onofrietti-grey);
  transition: color 0.2s;
}

ul li a:hover {
  color: var(--onofrietti-white);
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: #333;
  border-radius: 50%;
  transition: background-color 0.2s;
  cursor: pointer;
}

.social-icon:hover {
  background-color: var(--onofrietti-red);
}

.footer-bottom {
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 20px;
  border-top: 1px solid #333;
  text-align: center;
}

.footer-bottom p {
  font-size: 11px;
  color: var(--onofrietti-grey);
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-links {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  .footer-logo-section {
    display: none;
  }
}
</style>
