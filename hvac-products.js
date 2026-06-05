const productCards = Array.from(document.querySelectorAll(".product-card"));
const searchInput = document.querySelector("#catalogSearch");
const topSearch = document.querySelector("#topSearch");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const params = new URLSearchParams(window.location.search);
let activeFilter = params.get("category") || "all";

function setActiveFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === activeFilter);
  });
  filterCatalog();
}

function filterCatalog() {
  const query = searchInput.value.trim().toLowerCase();
  productCards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;
    const matchesText = !query || name.includes(query);
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    card.classList.toggle("hidden", !(matchesText && matchesFilter));
  });
}

searchInput.addEventListener("input", filterCatalog);
filterButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
});

const initialQuery = params.get("q") || "";
if (initialQuery) {
  searchInput.value = initialQuery;
  topSearch.value = initialQuery;
}

setActiveFilter(activeFilter);
