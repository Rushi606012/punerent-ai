export const AREAS = [
  "Wakad",
  "Bhumkar Chowk",
  "Dange Chowk",
  "Hinjewadi Phase 1",
  "Hinjewadi Phase 2",
  "Hinjewadi Phase 3",
  "Marunji"
];

export const TYPES = ["PG", "Private Room", "Shared Room", "1RK", "1BHK", "2BHK"];

export const demoProperties = [
  {
    id: "demo-1", title: "Demo Listing - Private Room near Hinjewadi Phase 1",
    property_type: "Private Room", area: "Hinjewadi Phase 1", rent: 6000, deposit: 12000,
    furnishing: "Furnished", sharing_type: "Private", availability_date: "2026-09-15",
    amenities: ["Wi-Fi", "Food", "Parking", "Attached Bathroom"],
    description: "Demo property for testing PuneRent AI. Close to offices and daily essentials.",
    verification_status: "Unverified", last_verified_at: "2026-09-10"
  },
  {
    id: "demo-2", title: "Demo Listing - 1RK in Wakad",
    property_type: "1RK", area: "Wakad", rent: 9000, deposit: 18000,
    furnishing: "Semi Furnished", sharing_type: "Private", availability_date: "2026-09-20",
    amenities: ["Parking", "Attached Bathroom", "Lift"],
    description: "Demo 1RK listing for MVP testing.",
    verification_status: "Unverified", last_verified_at: "2026-09-09"
  },
  {
    id: "demo-3", title: "Demo Listing - Shared Room Bhumkar Chowk",
    property_type: "Shared Room", area: "Bhumkar Chowk", rent: 4500, deposit: 9000,
    furnishing: "Furnished", sharing_type: "Shared", availability_date: "2026-09-12",
    amenities: ["Wi-Fi", "Food", "Laundry"],
    description: "Demo shared room listing for testing filters and matching.",
    verification_status: "Unverified", last_verified_at: "2026-09-08"
  },
  {
    id: "demo-4", title: "Demo Listing - PG Marunji",
    property_type: "PG", area: "Marunji", rent: 5500, deposit: 10000,
    furnishing: "Furnished", sharing_type: "Shared", availability_date: "2026-09-14",
    amenities: ["Wi-Fi", "Food", "Laundry", "Parking"],
    description: "Demo PG listing for MVP testing.",
    verification_status: "Unverified", last_verified_at: "2026-09-10"
  }
];