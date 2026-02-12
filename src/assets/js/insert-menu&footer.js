document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar un archivo HTML en un contenedor y luego inicializar eventos
    function loadHTML(containerId, filePath, callback) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = data;
                    if (callback) {
                        callback(); // Ejecutar el callback para inicializar eventos
                    }
                }
            })
            .catch(error => console.error(`Error al cargar ${filePath}:`, error));
    }

    // Inicializar eventos para menubar
    function inicializarMenubarEventos() {
        // Aquí puedes inicializar eventos específicos para el menubar
        const menuToggle = document.getElementById("menu-toggle");
        const exitToggle = document.getElementById("exit");
        const menu = document.querySelector(".show-menu");

        menuToggle.addEventListener("click", function() {
            menu.classList.toggle("active"); // Alterna la clase active para mostrar/ocultar el menú
        });

        exitToggle.addEventListener("click", function() {
            menu.classList.remove("active"); // Elimina la clase active para cerrar el menú
        });

        // Otros eventos para íconos de registro y login
        function toggleMessage(iconId, messageId, displayState) {
            document.getElementById(iconId).addEventListener("mouseover", function() {
                document.getElementById(messageId).style.display = displayState;
            });
            document.getElementById(iconId).addEventListener("mouseout", function() {
                document.getElementById(messageId).style.display = "none";
            });
        }

        toggleMessage("register-icon", "register-message", "block");
        toggleMessage("login-icon", "login-message", "block");
        toggleMessage("search-icon", "search-message", "block");
    }

    // Cargar menubar, footer y archivo JavaScript adicional
    loadHTML('menubar-container', 'menubar.html', inicializarMenubarEventos);
    loadHTML('footer-container', 'footer.html');
});
