// navbar js
  let homeCards = [
      {
        img_card: "images_src/cups/cup1.webp",
        desc: "Cups",
        p_1: 250,
        p_2: 150,
        href:"glass.html"
      },
      {
        img_card: "images_src/cups/cup2.webp",
        desc: "Cups",
        p_1: 300,
        p_2: 220,
        href:"glass.html"
      },
      {
        img_card: "images_src/cups/cup2.webp",
        desc: "jars",
        p_1: 350,
        p_2: 250,
        href:"glass.html"
      },
      {
        img_card: "images_src/jars/jar1.jpg",
        desc: "jars",
        p_1: 399,
        p_2: 249,
        href:"jar.html"
      },
      {
        img_card: "images_src/jars/jar2.jpg",
        desc: "5 LBS Jar",
        p_1: 850,
        p_2: 650,
         href:"jar.html"
      },
      {
        img_card: "images_src/jars/jar3.jpg",
        desc: "Round Jar Small",
        p_1: 500,
        p_2: 399,
         href:"jar.html"
      },
      {
        img_card: "images_src/bottles/bottles1.jpg",
        desc: "Round Jar Medium ",
        p_1: 649,
        p_2: 549,
         href:"bottles.html"
      },
      {
        img_card: "images_src/bottles/bottles5.jpg",
        desc: "Round Jar Long",
        p_1: 700,
        p_2: 550,
         href:"bottles.html"
      }
    ];
    document.addEventListener("DOMContentLoaded", function () {
      let card_display = document.getElementById("card_display");
      let container = document.getElementById("contain_card");
      card_data = "";
      homeCards.forEach(i => {
        card_data += `
              <div class="col-lg-3 col-md-4 col-12 p-0">
        <div class="home-card">
          <a href="${i.href}"><img class="home-card-img" src="${i.img_card}" alt=""> </a>
          <p class="home-card-descrip">${i.desc}</p>
        </div>
      </div>
        `
      })
      card_display.innerHTML = card_data;
    });
    window.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.home-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show');
        }, index * 200); // staggered effect
      });
    });

    // crousel script 
    var carousel = document.querySelector('#glassesCarousel');
    var dots = document.querySelectorAll('.control-dot');

    carousel.addEventListener('slid.bs.carousel', function (event) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[event.to].classList.add('active');
    });
  // end
         // overlap images
  const img1 = document.querySelector(".hero-img-1");
  const img2 = document.querySelector(".hero-img-2");

  img1.addEventListener("click", () => {
    img1.style.zIndex = 2;
    img2.style.zIndex = 1;

    img1.classList.add("active");
    img2.classList.remove("active");
  });

  img2.addEventListener("click", () => {
    img2.style.zIndex = 2;
    img1.style.zIndex = 1;

    img2.classList.add("active");
    img1.classList.remove("active");
  });
  // end
  // faqs css
      function toggleFaq(element) {
            const faqItem = element.parentElement;
            const isOpen = faqItem.classList.contains('open');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
            });
            
            // Toggle current FAQ
            if (!isOpen) {
                faqItem.classList.add('open');
            }
        }
        function showCategory(category) {
            // Hide all containers
            document.querySelectorAll('.faq-container').forEach(container => {
                container.classList.remove('active');
            });
            
            // Remove active class from all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected container
            document.getElementById(category).classList.add('active');
            
            // Add active class to clicked button
            event.target.classList.add('active');
            
            // Close all open FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
            });
        }
        // ends