<template>
  <div class="auth-view books-theme">
    <div class="split-layout">
      <!-- Image Side -->
      <div class="auth-image">
        <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1376&auto=format&fit=crop" alt="Auth Background">
        <div class="image-overlay">
          <div class="overlay-content">
            <h2 class="overlay-title">EL CONOCIMIENTO ES TU PODER</h2>
            <p class="overlay-text">Inicia sesión para acceder a tu biblioteca digital y descubrir nuevas fronteras.</p>
          </div>
        </div>
      </div>

      <!-- Form Side -->
      <div class="auth-form-side">
        <div class="form-container">
          <router-link to="/" class="auth-logo" aria-label="Ir al inicio">
            <img src="/img/Logo.png" alt="Logo Comics Onofrietti">
          </router-link>
          <div class="auth-header">
            <h1 class="header-title">BIENVENIDO DE NUEVO</h1>
            <div class="header-line"></div>
          </div>

          <form class="auth-form" @submit.prevent>
            <div class="input-group">
              <label>NOMBRE DE USUARIO O CORREO</label>
              <input v-model.trim="username" type="text" placeholder="Correo electrónico / Usuario">
            </div>
            <div class="input-group">
              <label>CONTRASEÑA</label>
              <input v-model.trim="password" type="password" placeholder="Tu contraseña">
            </div>
            
            <div class="form-footer">
              <button class="auth-btn" type="button" @click="handleLogin">INICIAR SESIÓN</button>
              <div class="auth-links">
                <a href="#" class="forgot-pass">¿Olvidaste tu contraseña?</a>
                <span class="divider">Ó</span>
                <router-link to="/registro" class="create-account">REGÍSTRATE AHORA</router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const handleLogin = () => {
  const name = username.value.trim()
  if (!name) return

  localStorage.setItem('onofrietti_user', JSON.stringify({ name }))
  window.dispatchEvent(new Event('onofrietti-auth'))
  router.push('/')
}
</script>

<style scoped>
.auth-view.books-theme {
  background-color: #f5f5f5;
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: 'Roboto', sans-serif;
}

.split-layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.auth-image {
  flex: 1;
  position: relative;
  background-color: #151515;
  height: 100%;
}

.auth-image img {
  width: 100%; height: 100%; object-fit: cover;
  opacity: 0.8;
}

.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.16);
  padding: 60px;
}

.overlay-content {
  border-left: 4px solid #2563eb;
  padding-left: 20px;
  background: rgba(0, 0, 0, 0.26);
  padding: 18px 18px 18px 20px;
  border-radius: none;
  backdrop-filter: blur(2px);
}

.overlay-title {
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 32px;
  margin-bottom: 10px;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.75);
}

.overlay-text {
  color: rgba(255, 255, 255, 0.92);
  font-size: 17px;
  line-height: 1.45;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.75);
}

.auth-form-side {
  width: 450px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(18px, 4vw, 40px);
  box-shadow: -10px 0 30px rgba(0,0,0,0.05);
  height: 100%;
}

.form-container {
  width: 100%;
  max-width: 350px;
}

.auth-logo {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 18px;
  text-decoration: none;
}

.auth-logo img {
  height: 48px;
  width: auto;
  display: block;
}

.auth-header {
  margin-bottom: 26px;
}

.header-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: clamp(20px, 2.2vw, 24px);
  color: #151515;
  margin-bottom: 15px;
  text-align: left;
}

.header-line {
  width: 40px;
  height: 4px;
  background: #2563eb;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 11px;
  font-weight: 800;
  color: #999;
  letter-spacing: 1px;
}

.input-group input {
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
  transition: border-color 0.2s;
}

.input-group input:focus {
  outline: none;
  border-color: #151515;
}

.auth-btn {
  background: #2563eb;
  color: #fff;
  width: 100%;
  padding: 15px;
  border: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 14px;
  transition: background 0.2s;
}

.auth-btn:hover {
  background: #1d4ed8;
}

.auth-links {
  margin-top: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.forgot-pass, .create-account {
  text-decoration: none;
  color: #151515;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  transition: color 0.2s;
}

.forgot-pass:hover, .create-account:hover {
  color: #2563eb;
}

.divider {
  font-size: 10px;
  color: #ccc;
  font-weight: 800;
}

@media (max-width: 900px) {
  .auth-image {
    display: none;
  }
  .auth-form-side {
    width: 100%;
    box-shadow: none;
  }

  .form-container {
    max-width: 420px;
  }

  .auth-logo {
    justify-content: center;
    width: 100%;
  }

  .header-title {
    text-align: center;
  }

  .header-line {
    margin: 0 auto;
  }
}

@media (max-height: 720px) {
  .auth-logo {
    margin-bottom: 12px;
  }

  .auth-header {
    margin-bottom: 18px;
  }

  .auth-form {
    gap: 14px;
  }

  .auth-links {
    margin-top: 14px;
  }
}
</style>
