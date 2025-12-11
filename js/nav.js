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