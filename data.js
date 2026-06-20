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
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400"
    ],
    cover: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
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
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=400",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400"
    ],
    cover: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
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
    video: null,
    photos: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400"
    ],
    cover: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
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
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    photos: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400"
    ],
    cover: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
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
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    photos: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=400",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400"
    ],
    cover: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800",
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
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400"
    ],
    cover: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800",
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
