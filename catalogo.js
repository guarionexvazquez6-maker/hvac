const products = {
  mechanical: [
    { name: "Bearings", image: "images/bearings.jpeg" },
    { name: "Mounting Bearings", image: "images/mounting-bearings.jpeg" },
    { name: "Pulleys & Belts", image: "images/pulleys.jpeg" },
    { name: "Chain & Sprockets", image: "images/chain.jpeg" },
    { name: "Couplings", image: "images/couplings.jpeg" },
    { name: "Idlers & Wheels", image: "images/idlers.jpeg" }
  ],

  sealing: [
    { name: "Oil Seals", image: "images/oil-seals.jpeg" },
    { name: "Mechanical Seals", image: "images/mechanical-seals.jpeg" }
  ],

  motors: [
    { name: "Motors", image: "images/motors.jpeg" },
    { name: "Pool & Spa Motors", image: "images/pool-motors.jpeg" },
    { name: "Reducer & Gearmotors", image: "images/gearmotors.jpeg" }
  ],

  electrical: [
    { name: "Electric & Industrial Controls", image: "images/controls.jpeg" },
    { name: "HVAC Control System", image: "images/hvac-control.jpeg" },
    { name: "Lighting", image: "images/lighting.jpeg" }
  ],

  materials: [
    { name: "Magnet Wire & Rewinding Materials", image: "images/wire.jpeg" },
    { name: "Conveyor Belt", image: "images/conveyor.jpeg" }
  ]
};

const list = document.getElementById("productList");
const search = document.getElementById("search");

if (list) {
  let all = Object.values(products).flat();

  render(all);

  search.addEventListener("input", () => {
    const filtered = all.filter(p =>
      p.name.toLowerCase().includes(search.value.toLowerCase())
    );
    render(filtered);
  });

  function render(arr) {
    list.innerHTML = "";
    arr.forEach(p => {
      list.innerHTML += `
        <div class="card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
        </div>
      `;
    });
  }
}

/* CATEGORY PAGE */
const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

if (cat && products[cat]) {
  document.getElementById("categoryTitle").innerText = cat.toUpperCase();
  const cList = document.getElementById("categoryList");

  products[cat].forEach(p => {
    cList.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
      </div>
    `;
  });
}