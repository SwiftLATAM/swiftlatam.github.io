document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave al hacer clic en los links del header
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Redirigir desde el logo (HOME)
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "/"; // o el index principal si estás usando GitHub Pages
    });
  }

  // Animación de "clic" en bloques destacados (hundimiento breve)
  const featuredItems = document.querySelectorAll(".featured");
  featuredItems.forEach(item => {
    item.addEventListener("mousedown", () => {
      item.style.transform = "scale(0.93)";
    });
    item.addEventListener("mouseup", () => {
      item.style.transform = "scale(1)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });

    // Redireccionamiento según bloque
    item.addEventListener("click", () => {
      if (item.dataset.target) {
        window.location.href = item.dataset.target;
      }
    });
  });

  // Click en el carrusel → redirige a sección News 4
  const carouselSection = document.querySelector(".carousel-section");
  if (carouselSection) {
    carouselSection.addEventListener("click", () => {
      window.location.href = "#news4"; // O cambiar por una URL real
    });
  }
});
