document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    toggle.addEventListener("change", function() {
        if (toggle.checked) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });
});
