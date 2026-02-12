import { onMounted } from 'vue'

export function useMenu() {
  onMounted(() => {
    // Inicializar eventos para menubar
    const menuToggle = document.getElementById("menu-toggle");
    const exitToggle = document.getElementById("exit");
    const menu = document.querySelector(".show-menu");

    if (menuToggle && menu) {
      menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
      });
    }

    if (exitToggle && menu) {
      exitToggle.addEventListener("click", function() {
        menu.classList.remove("active");
      });
    }

    // Eventos para íconos de registro y login
    function toggleMessage(iconId, messageId, displayState) {
      const icon = document.getElementById(iconId);
      const message = document.getElementById(messageId);
      
      if (icon && message) {
        icon.addEventListener("mouseover", function() {
          message.style.display = displayState;
        });
        icon.addEventListener("mouseout", function() {
          message.style.display = "none";
        });
      }
    }

    toggleMessage("register-icon", "register-message", "block");
    toggleMessage("login-icon", "login-message", "block");
    toggleMessage("search-icon", "search-message", "block");
  });
} 