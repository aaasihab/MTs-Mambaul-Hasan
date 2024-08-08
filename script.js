document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu");
  var overlay = document.getElementById("overlay");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.remove("max-h-0");
      menu.classList.add("max-h-screen");
      overlay.classList.remove("hidden");
      overlay.classList.add("opacity-100");
    }, 10); // Small delay to ensure smooth transition
  } else {
    menu.classList.add("max-h-0");
    menu.classList.remove("max-h-screen");
    overlay.classList.remove("opacity-100");
    setTimeout(() => {
      menu.classList.add("hidden");
      overlay.classList.add("hidden");
    }, 300); // Match the duration of the transition
  }
});

document.getElementById("overlay").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu");
  var overlay = document.getElementById("overlay");
  menu.classList.add("max-h-0");
  menu.classList.remove("max-h-screen");
  overlay.classList.remove("opacity-100");
  setTimeout(() => {
    menu.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 300); // Match the duration of the transition
});

// Script for the submenu on mobile
document
  .getElementById("about-us-mobile")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var submenu = document.getElementById("about-submenu");
    if (submenu.classList.contains("hidden")) {
      submenu.classList.remove("hidden");
    } else {
      submenu.classList.add("hidden");
    }
  });

// Mendapatkan elemen tombol scroll to top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Fungsi untuk menampilkan atau menyembunyikan tombol berdasarkan posisi scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

// Fungsi untuk menggulir ke atas saat tombol diklik
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Menambahkan animasi smooth
  });
});

// untuk aninimasi section 1
document.addEventListener("DOMContentLoaded", function () {
  const fadeInSection = document.querySelector(".fade-in");
  fadeInSection.classList.add("visible");
});

// untuk animasi section q & a
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  content.classList.toggle("show");
}
// animasi q and a end

// animasi galery index

let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;
  currentSlide = (currentSlide + step + totalSlides) % totalSlides;
  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-wrapper"
  ).style.transform = `translateX(${offset}%)`;
}

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  content.classList.toggle("show");
}

// animasi biodata guru

// Animasi saat di-scroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-animation");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("opacity-100", "translate-y-0");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("opacity-100", "translate-y-0");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  handleScrollAnimation(); // Run on page load
});

// animasi biodata guru end
