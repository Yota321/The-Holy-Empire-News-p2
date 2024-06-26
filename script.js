document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector('.hamburger-menu');

    function toggleMenu() {
        if (toggle.checked) {
            menu.classList.add("show");
        } else {
            menu.classList.remove("show");
        }
    }

    toggle.addEventListener("change", toggleMenu);

    // Ensure menu is hidden when the page loads
    menu.classList.remove("show");

    // Handle clicks on the menu items
    menu.addEventListener("click", function() {
        toggle.checked = false;
        toggleMenu();
    });

    // Optional: Animate hamburger lines
    hamburger.addEventListener("click", function() {
        this.class
