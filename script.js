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
    }, 10); // Small delay to ensure transition effect
  } else {
    menu.classList.add("max-h-0");
    menu.classList.remove("max-h-screen");
    overlay.classList.remove("opacity-100");
    setTimeout(() => {
      menu.classList.add("hidden");
      overlay.classList.add("hidden");
    }, 350); // Match the duration of the transition
  }
});

document.getElementById("overlay").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu");
  menu.classList.add("max-h-0");
  menu.classList.remove("max-h-screen");
  overlay.classList.remove("opacity-100");
  setTimeout(() => {
    menu.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 300); // Match the duration of the transition
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
    content.classList.toggle('open');
}


// animasi q and a end