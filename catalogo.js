/* =====================
   DATA
===================== */
const products = {
  mechanical: [
    { name: "Bearings", image: "images/bearings.jpeg" },
    { name: "Mounting Bearings", image: "images/mounting-bearings.jpeg" },
    { name: "Pulleys & Belts", image: "images/pulleys.jpeg" },
    { name: "Chain & Sprockets", image: "images/chain.jpeg" },
    { name: "Couplings", image: "images/couplings.jpeg" },
    { name: "Wheels", image: "images/idlers.jpeg" }
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

/* =====================
   BRANDS
===================== */
const brands = {
  "Bearings": ["NACHI","NSK","KOYO","NTN","TIMKEN","SKF","MRC","IKO","INA","TORRINGTON","REXROTH","MC GILL"],
  "Mounting Bearings": ["PTI","BROWNING","DODGE","FYH","LINK BELT","MOLINE","REXNORD","SEALMASTER","SKF","NSK","NTN"],
  "Oil Seals": ["NATIONAL","TCM","CR","HARWAL"],
  "Pulleys & Belts": ["DODGE","MASKA","MASTERDRIVE","BANDO","BESTORQ","BROWNING","JASON INDUSTRIAL","MEGADYNE"],
  "Chain & Sprockets": ["HITACHI SENQCIA","ALLIED","BROWNING","DIAMOND","LINK BELT","MARTIN","UNI-CHAIN","UST SUBAKI"],
  "Couplings": ["DODGE","FALK","GUARDIANS","MARTIN","MASTERDRIVE","REXNORD"],
  "Mechanical Seals": ["ARMSTRONG","DEVIS EMUS","KSB","FLYGT","US SEALS","APEX SEAL","GADDIS SEAL"],
  "Lighting": ["SATCO"],
  "Conveyor Belt": ["BELTSERVICE","LUFF INDUSTRIES"],
  "Motors": ["CENTURY","FASCO","TECHTOP","MARATHON","LEESON","LINCOLN","BALDOR","NORTH AMERICAN","RELIANCE","US"],
  "Pool & Spa Motors": ["REGAL BELOIT","CENTURY"],
  "Reducer & Gearmotors": ["HUB CITY","GROOVE GEAR","LEESON","NORD","REXNORD","STERLING","EURODRIVE","BODINE","BALDOR","DODGE"],
  "Electric & Industrial Controls": ["VFD","CAPACITORS","CONTACTORS","TRANSFORMERS","RELAYS","MOTOR STARTERS","SOFT STARTERS","SAFETY SWITCHES"],
  "HVAC Control System": ["SOLER & PALAU","EXHAUST FAN","BLOWER ASSEMBLY","FAN BLADES"],
  "Magnet Wire & Rewinding Materials": ["AVAILABLE"],
  "Wheels": ["GOLDEN CASTERS"]
};

/* =====================
   HELPERS
===================== */
function goToProduct(name) {
  window.location.href = `product.html?product=${encodeURIComponent(name)}`;
}

/* 🔥 CONTROL DE TAMAÑO DE IMÁGENES */
function getImageClass(name) {
  const small = [
    "Motors",
    "Pool & Spa Motors",
    "Reducer & Gearmotors",
    "Oil Seals",
    "Mechanical Seals",
    "Electric & Industrial Controls",
    "HVAC Control System",
    "Lighting",
    "Magnet Wire & Rewinding Materials",
    "Conveyor Belt"
  ];

  return small.includes(name) ? "img-small" : "";
}

/* =====================
   PRODUCTS PAGE
===================== */
const list = document.getElementById("productList");
const search = document.getElementById("search");

if (list) {
  const all = Object.values(products).flat();
  render(all);

  if (search) {
    search.addEventListener("input", () => {
      const filtered = all.filter(p =>
        p.name.toLowerCase().includes(search.value.toLowerCase())
      );
      render(filtered);
    });
  }

  function render(arr) {
    list.innerHTML = "";
    arr.forEach(p => {
      list.innerHTML += `
        <div class="card" onclick="goToProduct('${p.name}')">
          <img class="${getImageClass(p.name)}" src="${p.image}">
          <h3>${p.name}</h3>
        </div>
      `;
    });
  }
}

/* =====================
   CATEGORY PAGE
===================== */
const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

const cList = document.getElementById("categoryList");
const cTitle = document.getElementById("categoryTitle");

if (cat && products[cat] && cList && cTitle) {
  cTitle.innerText = cat.toUpperCase();
  cList.innerHTML = "";

  products[cat].forEach(p => {
    cList.innerHTML += `
      <div class="card" onclick="goToProduct('${p.name}')">
        <img class="${getImageClass(p.name)}" src="${p.image}">
        <h3>${p.name}</h3>
      </div>
    `;
  });
}

/* =====================
   PRODUCT PAGE
===================== */
const productParams = new URLSearchParams(window.location.search);
const productName = productParams.get("product");

const brandList = document.getElementById("brandList");
const productTitle = document.getElementById("productTitle");

if (productName && brands[productName] && brandList && productTitle) {
  productTitle.innerText = productName;
  brandList.innerHTML = "";

  brands[productName].forEach(b => {
    brandList.innerHTML += `
      <div class="card">
        <h3>${b}</h3>
      </div>
    `;
  });
}