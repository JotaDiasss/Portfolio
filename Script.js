document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".fade-scale-img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.1
  });

  imagens.forEach(img => {
    observer.observe(img);
  });
});
