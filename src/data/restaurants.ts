export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  lat: number;
  lng: number;
  address: string;
}

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Warung Nasi Padang",
    cuisine: "Padang",
    priceRange: "$",
    rating: 4.5,
    lat: -6.2088,
    lng: 106.8456,
    address: "Jl. Sudirman No. 1, Jakarta",
  },
  {
    id: 2,
    name: "Soto Betawi Pak Darmo",
    cuisine: "Indonesian",
    priceRange: "$",
    rating: 4.3,
    lat: -6.215,
    lng: 106.85,
    address: "Jl. Thamrin No. 5, Jakarta",
  },
  {
    id: 3,
    name: "Mie Ayam Bang Joe",
    cuisine: "Indonesian",
    priceRange: "$",
    rating: 4.1,
    lat: -6.22,
    lng: 106.84,
    address: "Jl. Gatot Subroto No. 12, Jakarta",
  },
];
