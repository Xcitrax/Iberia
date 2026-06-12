const packages = [
  // WEAPONS
  {
    id: 1,
    cat: "weapons",
    title: "Revolver",
    desc: "კლასიკური დასავლური რევოლვერი. სწრაფი და სანდო.",
    price: 10,
    featured: false,
    emoji: "🔫",
  },
  {
    id: 2,
    cat: "weapons",
    title: "Rifle",
    desc: "გრძელი დიაპაზონის შაშხანა სიზუსტითა და სიმძლავრით.",
    price: 15,
    featured: false,
    emoji: "🎯",
  },
  {
    id: 3,
    cat: "weapons",
    title: "Shotgun",
    desc: "ახლო მანძილზე განადგურების იდეალური იარაღი.",
    price: 12,
    featured: false,
    emoji: "💥",
  },
  {
    id: 4,
    cat: "weapons",
    title: "Ammo Pack",
    desc: "ყველა ტიპის საბრძოლო მასალის სრული კომპლექტი.",
    price: 8,
    featured: false,
    emoji: "📦",
  },
  {
    id: 5,
    cat: "weapons",
    title: "Legendary Weapon",
    desc: "ლეგენდარული იარაღი — მსოფლიოში მხოლოდ რამდენიმეა.",
    price: 50,
    featured: true,
    emoji: "⚔️",
  },
  // HORSES
  {
    id: 6,
    cat: "horses",
    title: "Arabian Horse",
    desc: "ყველაზე სწრაფი ცხენი — ნამდვილი ლეგენდა.",
    price: 25,
    featured: true,
    emoji: "🐴",
  },
  {
    id: 7,
    cat: "horses",
    title: "Mustang Horse",
    desc: "გამძლე და ველური, ყველა ტერიტორიაზე გამართული.",
    price: 20,
    featured: false,
    emoji: "🐎",
  },
  {
    id: 8,
    cat: "horses",
    title: "War Horse",
    desc: "ბრძოლისთვის მომზადებული ძლიერი ცხენი.",
    price: 30,
    featured: false,
    emoji: "🗡️",
  },
  {
    id: 9,
    cat: "horses",
    title: "Racing Horse",
    desc: "რბოლებში გამარჯვებისთვის შექმნილი სპეციალური ჯიში.",
    price: 22,
    featured: false,
    emoji: "🏁",
  },
  {
    id: 10,
    cat: "horses",
    title: "Premium Saddle",
    desc: "ოქროთი მოჩარჩოებული უნაგირი — სტატუსის სიმბოლო.",
    price: 15,
    featured: false,
    emoji: "🥇",
  },
  // WAGONS
  {
    id: 11,
    cat: "wagons",
    title: "Small Wagon",
    desc: "მსუბუქი ვაგონი მარტივი გადაზიდვისთვის.",
    price: 10,
    featured: false,
    emoji: "🪵",
  },
  {
    id: 12,
    cat: "wagons",
    title: "Cargo Wagon",
    desc: "დიდი სათავსოთი — ვაჭრობისთვის იდეალური.",
    price: 18,
    featured: false,
    emoji: "📦",
  },
  {
    id: 13,
    cat: "wagons",
    title: "Trading Wagon",
    desc: "სავაჭრო მარშრუტებისთვის სპეციალურად მოწყობილი.",
    price: 22,
    featured: true,
    emoji: "💰",
  },
  {
    id: 14,
    cat: "wagons",
    title: "Luxury Wagon",
    desc: "ოქროს დეკორით — მდიდართა ტრანსპორტი.",
    price: 35,
    featured: false,
    emoji: "✨",
  },
  {
    id: 15,
    cat: "wagons",
    title: "Armored Wagon",
    desc: "ჯავშანი დამცველი — ყაჩაღებისთვის საშინელება.",
    price: 40,
    featured: false,
    emoji: "🛡️",
  },
  // ANIMALS
  {
    id: 16,
    cat: "animals",
    title: "Hunting Dog",
    desc: "ერთგული ნადირობის თანამგზავრი.",
    price: 10,
    featured: false,
    emoji: "🐕",
  },
  {
    id: 17,
    cat: "animals",
    title: "Wolf Companion",
    desc: "მგელი — ბუნების ძალა შენს გვერდით.",
    price: 20,
    featured: true,
    emoji: "🐺",
  },
  {
    id: 18,
    cat: "animals",
    title: "Deer Companion",
    desc: "მშვიდი ირემი — ფერმისა და ტყის მეგობარი.",
    price: 12,
    featured: false,
    emoji: "🦌",
  },
  {
    id: 19,
    cat: "animals",
    title: "Farm Animals",
    desc: "ფერმის ცხოველთა ნაკრები — ეკონომიკური სარგებელი.",
    price: 15,
    featured: false,
    emoji: "🐄",
  },
  {
    id: 20,
    cat: "animals",
    title: "Exotic Animals",
    desc: "იშვიათი და ეგზოტიკური ცხოველები სპეციალური თვისებებით.",
    price: 45,
    featured: false,
    emoji: "🦅",
  },
  // BALLOONS
  {
    id: 21,
    cat: "balloons",
    title: "Standard Balloon",
    desc: "სტანდარტული ბალონი — მოედნის ზემოდან დათვალიერება.",
    price: 20,
    featured: false,
    emoji: "🎈",
  },
  {
    id: 22,
    cat: "balloons",
    title: "Luxury Balloon",
    desc: "ფუფუნების ბალონი ოქროს ელემენტებით.",
    price: 35,
    featured: true,
    emoji: "✨",
  },
  {
    id: 23,
    cat: "balloons",
    title: "Cargo Balloon",
    desc: "ტვირთის გადასაზიდი სპეციალური ბალონი.",
    price: 28,
    featured: false,
    emoji: "📦",
  },
  {
    id: 24,
    cat: "balloons",
    title: "Fast Balloon",
    desc: "გაძლიერებული ძრავით — ყველაზე სწრაფი გადაადგილება.",
    price: 30,
    featured: false,
    emoji: "💨",
  },
  {
    id: 25,
    cat: "balloons",
    title: "VIP Balloon",
    desc: "VIP სივრცე — განსაკუთრებული სტატუსი ცაში.",
    price: 60,
    featured: false,
    emoji: "👑",
  },
];

const catMeta = {
  all: { title: "All Packages", sub: "Browse all available donation packages" },
  weapons: {
    title: "Weapons",
    sub: "Arm yourself with the finest iron in the West",
  },
  horses: { title: "Horses", sub: "Find the perfect steed for every trail" },
  wagons: { title: "Wagons", sub: "Haul more, travel farther, trade better" },
  animals: {
    title: "Animal Companions",
    sub: "Loyal partners for every adventure",
  },
  balloons: { title: "Air Balloons", sub: "Rise above the frontier in style" },
};

// ── STATE ──────────────────────────────────────────────────
const state = {
  cat: "all",
  search: "",
  sort: "default",
  featured: false,
  maxPrice: 999,
};

// ── ELEMENTS ───────────────────────────────────────────────
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const priceSelect = document.getElementById("priceSelect");

const resetBtn = document.getElementById("resetFilters");
const emptyResetBtn = document.getElementById("emptyReset");
const cardsWrapper = document.getElementById("cardsWrapper");
const emptyState = document.getElementById("emptyState");
const activeFilters = document.getElementById("activeFilters");
const catBannerTitle = document.getElementById("catBannerTitle");
const catBannerSub = document.getElementById("catBannerSub");

// ── EVENTS ─────────────────────────────────────────────────
searchInput.addEventListener("input", () => {
  state.search = searchInput.value.toLowerCase().trim();
  render();
});

// sortSelect.addEventListener("change", () => {
//   state.sort = sortSelect.value;
//   render();
// });

// priceSelect.addEventListener("change", () => {
//   state.maxPrice = parseFloat(priceSelect.value);
//   render();
// });

// resetBtn.addEventListener("click", resetAll);
// if (emptyResetBtn) emptyResetBtn.addEventListener("click", resetAll);

document.getElementById("catNav").addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;
  document
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  state.cat = btn.dataset.cat;
  const meta = catMeta[state.cat];
  catBannerTitle.textContent = meta.title;
  catBannerSub.textContent = meta.sub;
  render();
});

// ── RESET ──────────────────────────────────────────────────
// function resetAll() {
//   state.cat = "all";
//   state.search = "";
//   state.sort = "default";
//   state.featured = false;
//   state.maxPrice = 999;

//   searchInput.value = "";

//   priceSelect.value = "999";
//   feat
// uredToggle.classList.remove("active");

//   document
//     .querySelectorAll(".cat-btn")
//     .forEach((b) => b.classList.remove("active"));
//   document.querySelector('[data-cat="all"]').classList.add("active");

//   catBannerTitle.textContent = catMeta.all.title;
//   catBannerSub.textContent = catMeta.all.sub;

//   render();
// }

// ── FILTER & SORT ──────────────────────────────────────────
function getFiltered() {
  let list = packages.filter((p) => {
    if (state.cat !== "all" && p.cat !== state.cat) return false;
    if (
      state.search &&
      !p.title.toLowerCase().includes(state.search) &&
      !p.desc.toLowerCase().includes(state.search)
    )
      return false;
    if (state.featured && !p.featured) return false;
    if (p.price > state.maxPrice) return false;
    return true;
  });

  if (state.sort === "price-asc")
    list = list.slice().sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc")
    list = list.slice().sort((a, b) => b.price - a.price);

  return list;
}

// ── CHIPS ──────────────────────────────────────────────────
function renderChips() {
  activeFilters.innerHTML = "";

  if (state.sort !== "default") {
    addChip(state.sort === "price-asc" ? "Price ↑" : "Price ↓", () => {
      state.sort = "default";
      sortSelect.value = "default";
      render();
    });
  }

  if (state.maxPrice < 999) {
    addChip("Max $" + state.maxPrice, () => {
      state.maxPrice = 999;
      priceSelect.value = "999";
      render();
    });
  }
  if (state.search) {
    addChip("Search: " + state.search, () => {
      state.search = "";
      searchInput.value = "";
      render();
    });
  }
}

function addChip(label, onRemove) {
  const chip = document.createElement("div");
  chip.className = "filter-chip";
  chip.innerHTML = label + '<button aria-label="Remove filter">×</button>';
  chip.querySelector("button").addEventListener("click", onRemove);
  activeFilters.appendChild(chip);
}

// ── BUILD CARD ─────────────────────────────────────────────
function buildCard(pkg) {
  const card = document.createElement("div");
  card.className = "card" + (pkg.featured ? " featured" : "");
  card.innerHTML = `
    ${pkg.featured ? '<div class="featured-badge">⭐ Featured</div>' : ""}
    <div class="card-img-emoji">${pkg.emoji}</div>
    <div class="card-body">
      <h3 class="card-title">${pkg.title}</h3>
      <p class="card-desc">${pkg.desc}</p>
      <p class="card-price">$${pkg.price.toFixed(2)}</p>
      <button class="btn-buy">Buy Now</button>
    </div>
  `;
  return card;
}

// ── RENDER ─────────────────────────────────────────────────
function render() {
  const filtered = getFiltered();

  renderChips();

  if (filtered.length === 0) {
    cardsWrapper.innerHTML = "";
    emptyState.style.display = "flex";

    return;
  }

  emptyState.style.display = "none";

  filtered.length + (filtered.length === 1 ? " Package" : " Packages");

  cardsWrapper.innerHTML = "";
  filtered.forEach((pkg, i) => {
    const card = buildCard(pkg);
    card.style.animationDelay = i * 30 + "ms";
    cardsWrapper.appendChild(card);
  });
}

// ── INIT ───────────────────────────────────────────────────
render();
