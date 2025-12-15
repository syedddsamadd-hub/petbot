// navbar js
let toggleBtn = document.getElementById("toggleBtn");
        let sidebar = document.getElementById("sidebar");
        let overlay = document.getElementById("overlay");
        let sidebarClose = document.getElementById("sidebarClose");

        toggleBtn.addEventListener("click", () => {
            sidebar.classList.add("active");
            overlay.classList.add("active");
        });

        sidebarClose.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.filter = "none";
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
        function openSearch() {
    document.getElementById("searchOverlay").classList.add("active");
}

function closeSearch() {
    document.getElementById("searchOverlay").classList.remove("active");
}
document.addEventListener('DOMContentLoaded', function() {
    // Sirf desktop ke liye
    if (window.innerWidth > 991) {
        const dropdowns = document.querySelectorAll('.navbar .dropdown');

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function() {
                const menu = dropdown.querySelector('.dropdown-menu');
                const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(dropdown.querySelector('.nav-link'));
                bsDropdown.show();
            });

            dropdown.addEventListener('mouseleave', function() {
                const menu = dropdown.querySelector('.dropdown-menu');
                const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(dropdown.querySelector('.nav-link'));
                bsDropdown.hide();
            });
        });
    }
});
// navbar js end