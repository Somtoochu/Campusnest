/* CampusNest — Results Page Logic */

const params = new URLSearchParams(window.location.search);
const axisFilter = params.get("axis") || "";
const budgetFilter = params.get("budget") ? parseInt(params.get("budget"), 10) : null;
const amenitiesFilter = params.get("amenities") ? params.get("amenities").split(",") : [];

function matchesFilters(listing) {
  if (axisFilter && listing.axis !== axisFilter) return false;
  if (budgetFilter && listing.price > budgetFilter) return false;
  if (amenitiesFilter.includes("video") && !listing.videoVerified) return false;
  if (amenitiesFilter.includes("water") && !listing.water.available) return false;
  if (amenitiesFilter.includes("power") && !listing.power.available) return false;
  return true;
}

const filtered = LISTINGS.filter(matchesFilters);

// ---------- Header text ----------
const resultsTitle = document.getElementById("resultsTitle");
const resultsCount = document.getElementById("resultsCount");
resultsTitle.textContent = axisFilter ? `Rooms in ${axisFilter}` : "Rooms across all axes";
resultsCount.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;

// ---------- Render feed ----------
const feed = document.getElementById("feed");
const emptyState = document.getElementById("emptyState");

if (filtered.length === 0) {
  emptyState.classList.remove("hidden");
} else {
  filtered.forEach(listing => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = listing.id;

    card.innerHTML = `
      <div class="card-media">
        ${listing.videoVerified ? `<span class="badge-verified">✓ Video Verified</span>` : ""}
        <img src="${listing.cover}" alt="${listing.name}">
        ${listing.video ? `
          <div class="play-overlay" data-action="play-video" data-id="${listing.id}">
            <div class="play-btn"></div>
          </div>` : ""}
      </div>
      <div class="card-body">
        <div class="card-top">
          <div>
            <div class="card-name">${listing.name}</div>
            <div class="card-axis">${listing.axis} Axis · ${listing.roomType}</div>
          </div>
          <div class="card-price">${formatNaira(listing.price)}<br><small>/ session</small></div>
        </div>
        <div class="icon-row">
          <span class="${listing.water.available ? "" : "muted"}">💧 ${listing.water.available ? "Water OK" : "Limited water"}</span>
          <span class="${listing.power.available ? "" : "muted"}">⚡ ${listing.power.available ? "Power OK" : "Unstable power"}</span>
          <span>🚶 ${listing.walkMinutes} min to gate</span>
        </div>
      </div>
    `;

    // Clicking the card (but not the play overlay) -> detail page
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-action='play-video']")) return;
      window.location.href = `detail.html?id=${listing.id}`;
    });

    feed.appendChild(card);
  });
}

// ---------- Play video overlay -> inline modal ----------
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeVideoModal = document.getElementById("closeVideoModal");

wireModalClose(videoModal, closeVideoModal, () => {
  modalVideo.pause();
  modalVideo.removeAttribute("src");
});

feed.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-action='play-video']");
  if (!trigger) return;
  e.stopPropagation();
  const listing = getListingById(trigger.dataset.id);
  if (listing && listing.video) {
    modalVideo.src = listing.video;
    openModal(videoModal);
    modalVideo.play().catch(() => {});
  }
});

// ---------- Map pins ----------
const mapPins = document.getElementById("mapPins");

filtered.forEach(listing => {
  const pin = document.createElement("div");
  pin.className = "map-pin";
  pin.style.top = listing.lat + "%";
  pin.style.left = listing.lng + "%";
  pin.dataset.id = listing.id;
  pin.innerHTML = `<span class="map-pin-label">${listing.name} — ${formatNaira(listing.price)}</span>`;
  mapPins.appendChild(pin);

  pin.addEventListener("mouseenter", () => highlightCard(listing.id, true));
  pin.addEventListener("mouseleave", () => highlightCard(listing.id, false));
  pin.addEventListener("click", () => {
    window.location.href = `detail.html?id=${listing.id}`;
  });
});

function highlightCard(id, on) {
  const card = feed.querySelector(`.card[data-id="${id}"]`);
  const pin = mapPins.querySelector(`.map-pin[data-id="${id}"]`);
  if (card) card.classList.toggle("highlight", on);
  if (pin) pin.classList.toggle("active", on);
  if (on && card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
