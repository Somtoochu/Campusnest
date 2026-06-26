/* CampusNest — Detail Page Logic */

const detailParams = new URLSearchParams(window.location.search);
const listingId = detailParams.get("id");
const listing = getListingById(listingId) || LISTINGS[0];
const landlord = LANDLORDS[listing.id];

document.title = `${listing.name} — CampusNest`;
document.getElementById("propName").textContent = listing.name;
document.getElementById("propMeta").textContent =
  `${listing.axis} Axis · ${listing.roomType} · ${listing.walkMinutes} min walk to gate`;

// ---------- Media showcase ----------
const mediaShowcase = document.getElementById("mediaShowcase");
if (listing.video) {
  mediaShowcase.innerHTML = `<video id="mainVideo" controls poster="${listing.cover}"><source src="${listing.video}" type="video/mp4"></video>`;
} else {
  mediaShowcase.innerHTML = `
    <div class="no-video" style="aspect-ratio:16/9;">
      <span style="font-size:28px;">📷</span>
      <span>No video tour yet — photos only</span>
    </div>`;
}

// Thumbnails
const thumbRow = document.getElementById("thumbRow");
listing.photos.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = listing.name;
  thumbRow.appendChild(img);
});

// ---------- Verification banner ----------
const verifyBanner = document.getElementById("verifyBanner");
if (listing.videoVerified) {
  verifyBanner.innerHTML = `
    <div class="verify-banner">
      <div class="icon-circle">✓</div>
      <div>
        <strong>Inspected & filmed by CampusNest Student Rep, ${listing.inspector}</strong>
        <span>Verified ${listing.inspectedDate}</span>
      </div>
    </div>`;
} else {
  verifyBanner.innerHTML = `
    <div class="verify-banner unverified">
      <div class="icon-circle">!</div>
      <div>
        <strong>Not yet video verified</strong>
        <span>This listing hasn't had an in-person inspection. Proceed with extra caution.</span>
      </div>
    </div>`;
}

// ---------- Specs grid ----------
const specsGrid = document.getElementById("specsGrid");
specsGrid.innerHTML = `
  <div class="spec-card">
    <div class="label">Water Source</div>
    <div class="value"><span class="status-dot ${listing.water.available ? "good" : "bad"}"></span>${listing.water.available ? "Available" : "Limited"}</div>
    <div class="note">${listing.water.note}</div>
  </div>
  <div class="spec-card">
    <div class="label">Electricity</div>
    <div class="value"><span class="status-dot ${listing.power.available ? "good" : "bad"}"></span>${listing.power.available ? "Stable" : "Unstable"}</div>
    <div class="note">${listing.power.note}</div>
  </div>
  <div class="spec-card">
    <div class="label">Caution Fee</div>
    <div class="value">${formatNaira(listing.caution)}</div>
    <div class="note">Refundable at end of tenancy, subject to inspection.</div>
  </div>
  <div class="spec-card">
    <div class="label">Room Type</div>
    <div class="value">${listing.roomType}</div>
    <div class="note">${listing.walkMinutes} min walk to nearest campus gate.</div>
  </div>
`;

// ---------- Reviews ----------
const reviewsList = document.getElementById("reviewsList");
if (listing.reviews.length === 0) {
  reviewsList.innerHTML = `<p style="color:var(--ink-soft);font-size:14px;margin-top:12px;">No reviews yet — be the first resident to share your experience.</p>`;
} else {
  listing.reviews.forEach(r => {
    const div = document.createElement("div");
    div.className = "review-card";
    div.innerHTML = `
      <div class="avatar">${r.name.charAt(0)}</div>
      <div class="review-body">
        <div class="review-top">
          <span class="name">${r.name}</span>
          <span class="stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
        </div>
        <span class="review-tag">${r.tag}</span>
        <p class="review-comment">${r.comment}</p>
      </div>
    `;
    reviewsList.appendChild(div);
  });
}

// ---------- Sticky sidebar ----------
const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = `
  <div class="price-row">
    <div>
      <div class="amount">${formatNaira(listing.price)}</div>
      <div class="per">per academic session</div>
    </div>
  </div>
  <div class="caution-row">
    <span>Caution fee</span>
    <span>${formatNaira(listing.caution)}</span>
  </div>
  <div class="safety-warning">
    ⚠️ Never pay in full before an in-person or video-confirmed inspection. CampusNest does not process payments.
  </div>
  ${listing.video ? `<button class="btn btn-emerald-outline btn-block" id="watchTourBtn">Watch Full Video Tour</button>` : ""}
  <button class="btn btn-amber btn-block btn-lg" id="messageLandlordBtn">Directly Message Verified Landlord (WhatsApp/Call)</button>
`;

// ---------- Full video modal ----------
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeVideoModal = document.getElementById("closeVideoModal");
wireModalClose(videoModal, closeVideoModal, () => {
  modalVideo.pause();
  modalVideo.removeAttribute("src");
});

const watchTourBtn = document.getElementById("watchTourBtn");
if (watchTourBtn) {
  watchTourBtn.addEventListener("click", () => {
    modalVideo.src = listing.video;
    openModal(videoModal);
    modalVideo.play().catch(() => {});
  });
}

// ---------- WhatsApp mock modal ----------
const waModal = document.getElementById("waModal");
const cancelWa = document.getElementById("cancelWa");
const confirmWa = document.getElementById("confirmWa");
const waAvatar = document.getElementById("waAvatar");
const waName = document.getElementById("waName");

wireModalClose(waModal, cancelWa, null);

document.getElementById("messageLandlordBtn").addEventListener("click", () => {
  waAvatar.textContent = landlord.name.charAt(0);
  waName.textContent = landlord.name;
  confirmWa.href = `https://wa.me/${landlord.phone}?text=${encodeURIComponent(
    `Hi ${landlord.name}, I found "${listing.name}" on CampusNest and I'd like to ask about availability.`
  )}`;
  openModal(waModal);
});
