/* CampusNest — Mock Listings Data
   In a real build this would come from an API / database.
   Video URLs use free sample videos so playback works out of the box. */

const LISTINGS = [
  {
    id: "ax-001",
    name: "Treasure Lodge",
    axis: "Osasogie",
    price: 250000,
    caution: 20000,
    roomType: "Self-contain, 1 occupant",
    walkMinutes: 6,
    water: { available: true, note: "Borehole — pumped mornings 6–8am" },
    power: { available: true, note: "PHCN + shared generator backup" },
    videoVerified: true,
    inspector: "Chiamaka O.",
    inspectedDate: "May 14, 2026",
    video: "videos/Treasure_lodge.mp4",
    photos: [
      "images/Screenshot (40).png",
      "images/Screenshot (41).png",
      "images/Screenshot (42).png",
      "images/Screenshot (43).png"
    ],
    cover: "images/Screenshot (68).png",
    lat: 28, lng: 36,
    reviews: [
      { name: "Verified Resident", rating: 5, tag: "💧 Water", comment: "Reliable mornings only, fill your tank early." },
      { name: "Verified Resident", rating: 4, tag: "⚡ Power", comment: "Generator kicks in fast when PHCN goes." }
    ]
  },
  {
    id: "ax-002",
    name: "Comfort Villa",
    axis: "BDPA",
    price: 180000,
    caution: 15000,
    roomType: "Shared room, 2 occupants",
    walkMinutes: 10,
    water: { available: true, note: "Borehole — all day" },
    power: { available: false, note: "PHCN unstable, no generator backup" },
    videoVerified: true,
    inspector: "Tunde A.",
    inspectedDate: "Jun 2, 2026",
    video: "videos/Comfort_villa.mp4",
    photos: [
      "images/Screenshot (44).png",
      "images/Screenshot (45).png",
      "images/Screenshot (46).png",
      "images/Screenshot (47).png"
    ],
    cover: "images/Screenshot (64).png",
    lat: 55, lng: 62,
    reviews: [
      { name: "Verified Resident", rating: 4, tag: "💧 Water", comment: "Never runs dry, good pressure." },
      { name: "Verified Resident", rating: 3, tag: "⚡ Power", comment: "Lights out often after 9pm, no gen." }
    ]
  },
  {
    id: "ax-003",
    name: "Grace Court",
    axis: "Ekosodin",
    price: 320000,
    caution: 25000,
    roomType: "Self-contain, 1 occupant",
    walkMinutes: 4,
    water: { available: true, note: "Borehole + overhead tank — 24/7" },
    power: { available: true, note: "PHCN stable on this axis" },
    videoVerified: false,
    inspector: null,
    inspectedDate: null,
    video: "videos/Grace_court.mp4",
    photos: [
      "images/Screenshot (48).png",
      "images/Screenshot (49).png",
      "images/Screenshot (50).png",
      "images/Screenshot (51).png"
    ],
    cover: "images/Screenshot (58).png",
    lat: 70, lng: 25,
    reviews: [
      { name: "Verified Resident", rating: 5, tag: "💧 Water", comment: "Best water supply in the axis, zero complaints." }
    ]
  },
  {
    id: "ax-004",
    name: "Unity Hostel",
    axis: "Osasogie",
    price: 145000,
    caution: 10000,
    roomType: "Shared room, 3 occupants",
    walkMinutes: 12,
    water: { available: false, note: "Fetch from compound well" },
    power: { available: true, note: "PHCN — fairly stable" },
    videoVerified: true,
    inspector: "Chiamaka O.",
    inspectedDate: "May 28, 2026",
    video: "videos/Unity_hostel.mp4",
    photos: [
      "images/Screenshot (52).png",
      "images/Screenshot (53).png",
      "images/Screenshot (54).png",
      "images/Screenshot (55).png"
    ],
    cover: "images/Screenshot (49).png",
    lat: 33, lng: 48,
    reviews: [
      { name: "Verified Resident", rating: 3, tag: "💧 Water", comment: "Be ready to fetch — no running water in rooms." }
    ]
  },
  {
    id: "ax-005",
    name: "Royal Heights",
    axis: "BDPA",
    price: 400000,
    caution: 30000,
    roomType: "Self-contain, 1 occupant (en-suite)",
    walkMinutes: 8,
    water: { available: true, note: "24/7 running water, en-suite" },
    power: { available: true, note: "PHCN + dedicated inverter" },
    videoVerified: true,
    inspector: "Tunde A.",
    inspectedDate: "Jun 10, 2026",
    video: "videos/Royal_heights.mp4",
    photos: [
      "images\Screenshot (60).png",
      "images\Screenshot (62).png",
      "images\Screenshot (63).png",
      "images\Screenshot (64).png"
    ],
    cover: "images/Screenshot (50).png",
    lat: 50, lng: 75,
    reviews: [
      { name: "Verified Resident", rating: 5, tag: "⚡ Power", comment: "Inverter never lets you down, worth the price." },
      { name: "Verified Resident", rating: 5, tag: "💧 Water", comment: "En-suite water is constant, zero issues." }
    ]
  },
  {
    id: "ax-006",
    name: "Mariere Lodge",
    axis: "Ekosodin",
    price: 200000,
    caution: 18000,
    roomType: "Self-contain, 1 occupant",
    walkMinutes: 7,
    water: { available: true, note: "Pumped twice daily — morning & evening" },
    power: { available: false, note: "PHCN poor, no backup" },
    videoVerified: false,
    inspector: null,
    inspectedDate: null,
    video: null,
    photos: [
      "images/Screenshot (67).png",
      "images/Screenshot (66).png",
      "images/Screenshot (65).png",
      "images/Screenshot (63).png"
    ],
    cover: "images/Screenshot (45).png",
    lat: 78, lng: 40,
    reviews: [
      { name: "Verified Resident", rating: 3, tag: "⚡ Power", comment: "Bring a backup lamp, light is unreliable." }
   ]
  }
];

const LANDLORDS = {
  "ax-001": { name: "Mr. Eze", phone: "2348012345001" },
  "ax-002": { name: "Mrs. Bello", phone: "2348012345002" },
  "ax-003": { name: "Mr. Okafor", phone: "2348012345003" },
  "ax-004": { name: "Mrs. Igbinedion", phone: "2348012345004" },
  "ax-005": { name: "Mr. Aigbe", phone: "2348012345005" },
  "ax-006": { name: "Mrs. Edebiri", phone: "2348012345006" }
};

function formatNaira(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

function getListingById(id) {
  return LISTINGS.find(l => l.id === id);
}
