document.querySelectorAll(".nav-item").forEach((item) => {
  const hasMenu = item.querySelector(".mega-menu");
  if (!hasMenu) return;

  item.addEventListener("mouseenter", () => item.classList.add("open"));
  item.addEventListener("mouseleave", () => item.classList.remove("open"));
  item.addEventListener("focusin", () => item.classList.add("open"));
  item.addEventListener("focusout", () => item.classList.remove("open"));
});
