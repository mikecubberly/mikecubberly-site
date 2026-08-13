document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});
