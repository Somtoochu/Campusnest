/* CampusNest — Shared App Logic */

// ---------- Budget slider live display (index page) ----------
const budgetInput = document.getElementById("budget");
const budgetDisplay = document.getElementById("budgetDisplay");
if (budgetInput && budgetDisplay) {
  const updateBudget = () => {
    budgetDisplay.textContent = formatNaira(parseInt(budgetInput.value, 10));
  };
  budgetInput.addEventListener("input", updateBudget);
  updateBudget();
}

// ---------- Chip checked-state styling ----------
document.querySelectorAll(".chip input[type='checkbox']").forEach(box => {
  box.addEventListener("change", () => {
    box.closest(".chip").classList.toggle("checked", box.checked);
  });
});

// ---------- Search form submit -> go to results.html with query params ----------
const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = document.getElementById("location").value;
    const budget = document.getElementById("budget").value;
    const amenities = Array.from(
      document.querySelectorAll(".chip input[type='checkbox']:checked")
    ).map(el => el.value);

    const params = new URLSearchParams();
    if (location) params.set("axis", location);
    params.set("budget", budget);
    if (amenities.length) params.set("amenities", amenities.join(","));

    window.location.href = "results.html?" + params.toString();
  });
}

// ---------- Generic modal helpers (used by results.js / detail.js) ----------
function openModal(el) { el.classList.add("open"); }
function closeModal(el) { el.classList.remove("open"); }

function wireModalClose(backdropEl, closeBtnEl, onClose) {
  const close = () => {
    closeModal(backdropEl);
    if (onClose) onClose();
  };
  if (closeBtnEl) closeBtnEl.addEventListener("click", close);
  backdropEl.addEventListener("click", (e) => {
    if (e.target === backdropEl) close();
  });
  document.addEventListener("keydown", (e) => {
    
    if (e.key === "Escape" && backdropEl.classList.contains("open")) close();
  });
}

// ---------- Mobile hamburger menu toggle ----------
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navCollapse = document.getElementById("navCollapse");

if (hamburgerBtn && navCollapse) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("open");
    navCollapse.classList.toggle("open");
  });
}
