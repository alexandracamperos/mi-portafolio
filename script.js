document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let responseMessage = document.getElementById("responseMessage");

    if (name && email) {
        responseMessage.textContent = "¡Mensaje enviado con éxito!";
        responseMessage.style.color = "green";
        responseMessage.style.opacity = "1"; // Hace que aparezca suavemente
        setTimeout(() => {
            responseMessage.style.opacity = "0"; // Desaparece después de 3 segundos
        }, 3000);
        this.reset(); // Limpia el formulario
    } else {
        responseMessage.textContent = "Por favor, completa todos los campos.";
        responseMessage.style.color = "red";
        responseMessage.style.opacity = "1";
    }
});
// Función para mostrar las secciones con animación
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in');

    const showOnScroll = () => {
        let scrollY = window.scrollY;
        sections.forEach(section => {
            if (section.offsetTop < scrollY + window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Para animar las secciones visibles al cargar
});
