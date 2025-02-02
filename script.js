function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function navigateTo(section) {
    window.location.href = section + ".html";
}
function toggleMenu() {
    document.getElementById("menuOverlay").classList.toggle("show");
}
function toggleMenu() {
    var menu = document.getElementById("menu");

    if (menu.classList.contains("show")) {
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-10px)";
        setTimeout(() => {
            menu.classList.remove("show");
        }, 400);
    } else {
        menu.classList.add("show");
        menu.style.opacity = "1";
        menu.style.transform = "translateY(0)";
    }
}

// Cierra el menú si se toca fuera de él
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-10px)";
        setTimeout(() => {
            menu.classList.remove("show");
        }, 400);
    }
});
