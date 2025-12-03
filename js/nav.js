document.addEventListener('DOMContentLoaded', function () {
      const navbar = document.querySelector('.navbar');
      const navLinks = document.querySelectorAll('.navlinks');
      const toggleBtn = document.querySelector('.navbar-toggler');
      const navItems = document.querySelector('.items');
      const dropdownToggle = document.querySelector('.dropdown-toggle');
      const dropdown = document.querySelector('.dropdown');

      // Navbar scroll effect
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
      });

      // Toggle mobile menu
      toggleBtn.addEventListener('click', function () {
        navItems.classList.toggle('active');
        this.classList.toggle('active');
      });

      // Mobile dropdown functionality
      if (window.innerWidth <= 992) {
        dropdownToggle.addEventListener('click', function (e) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        });
      }

      // Update active nav link on click
      navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          // Close mobile menu if open
          if (window.innerWidth <= 992) {
            navItems.classList.remove('active');
            toggleBtn.classList.remove('active');
          }

          // Remove active class from all links
          navLinks.forEach(l => l.classList.remove('active'));

          // Add active class to clicked link
          this.classList.add('active');
        });
      });

      // Function to update active nav link based on scroll position
      function updateActiveNavLink() {
        let fromTop = window.scrollY + 100;

        navLinks.forEach(link => {
          let section = document.querySelector(link.hash);

          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }

      // Initialize active state
      updateActiveNavLink();
    });