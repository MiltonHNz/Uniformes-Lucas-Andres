function navigateTo(section) {
    window.location.href = section + ".html";
}

function openContact() {
    alert("Formulario de contacto próximamente disponible.");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.onload = function() {
    let popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "block";
    }
};
