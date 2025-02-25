document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let responseMessage = document.getElementById("responseMessage");

    console.log("Nombre capturado:", name);
    console.log("Email capturado:", email);

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
