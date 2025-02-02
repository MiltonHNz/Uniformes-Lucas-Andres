function navigateTo(section) {
    window.location.href = section + ".html";
}

// Función para cerrar el mensaje emergente
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Mostrar el mensaje emergente al cargar la página
window.onload = function() {
    let popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "block";
    }
};
