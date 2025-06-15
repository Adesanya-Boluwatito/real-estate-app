import azureHeightsImage from '../assets/Azure Towers.jpg';
import theWaterfrontBeaconImage from '../assets/Waterfront.jpg';
import pinnaclePointImage from '../assets/Pinnacle.jpg';


export interface Amenity {
  icon: string;
  text: string;
}

export interface Apartment {
  id: string;
  unitType: string;
  area: number;
  roomCount: number;
  price: number;
  description: string;
  thumbnailUrl: string;
  imageUrl: string;
  amenities: Amenity[];
  specs: {
    bedrooms: number;
    bathrooms: number;
    exposure: string;
    floor: number;
  };
}

export interface Floor {
  id: string;
  floorNumber: number;
  apartments: Apartment[];
  keyFeatures: Amenity[];
}

export interface Tower {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
  floors: Floor[];
}

const generateApartments = (towerId: string, floorNumber: number): Apartment[] => [
  {
    id: `${towerId}-floor-${floorNumber}-apt-1`,
    unitType: 'Studio Plus',
    area: 650,
    roomCount: 2,
    price: 895000,
    description: 'An elegant studio with a modern touch, perfect for professionals.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop',
    amenities: [{ icon: 'balcony', text: 'Balcony' }, { icon: 'wifi', text: 'High-Speed Internet' }],
    specs: { bedrooms: 1, bathrooms: 1, exposure: 'North-East', floor: floorNumber },
  },
  {
    id: `${towerId}-floor-${floorNumber}-apt-2`,
    unitType: 'Urban Loft',
    area: 920,
    roomCount: 3,
    price: 1120000,
    description: 'A spacious loft with panoramic city views and industrial-chic design.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop',
    amenities: [{ icon: 'pool', text: 'En-suite Bathroom' }, { icon: 'thermostat', text: 'Smart Thermostat' }],
    specs: { bedrooms: 1, bathrooms: 1.5, exposure: 'South-West', floor: floorNumber },
  },
    {
    id: `${towerId}-floor-${floorNumber}-apt-3`,
    unitType: 'Family Retreat',
    area: 1200,
    roomCount: 4,
    price: 1200000,
    description: 'A spacious loft with panoramic city views and industrial-chic design.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
    amenities: [{ icon: 'pool', text: 'En-suite Bathroom' }, { icon: 'thermostat', text: 'Smart Thermostat' }],
    specs: { bedrooms: 2, bathrooms: 2, exposure: 'South-West', floor: floorNumber },
  },
];

const generateFloors = (towerId: string, count: number): Floor[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${towerId}-floor-${i + 1}`,
    floorNumber: i + 1,
    apartments: generateApartments(towerId, i + 1),
    keyFeatures: [
      { icon: 'height', text: 'High Ceilings' },
      { icon: 'view', text: 'Panoramic City Views' },
      { icon: 'smart', text: 'Smart Home Integration' },
    ],
  }));

export const mockData: Tower[] = [
  {
    id: 'tower-a',
    name: 'Azure Heights',
    description: 'Experience luxury living with state-of-the-art amenities, where every detail is designed to redefine urban luxury.',
    imageUrl: azureHeightsImage,
    features: ['Prime Location', 'Luxury Amenities', 'Smart Home Ready'],
    floors: generateFloors('tower-a', 15),
  },
  {
    id: 'tower-b',
    name: 'The Waterfront Beacon',
    description: 'Enjoy the perfect blend of downtown convenience, with stunning access to waterfront parks and a vibrant arts scene.',
    imageUrl: theWaterfrontBeaconImage,
    features: ['Waterside Access', 'Community Gardens', 'Pet Friendly'],
    floors: generateFloors('tower-b', 12),
  },
  {
    id: 'tower-c',
    name: 'Pinnacle Point',
    description: 'Offering an exclusive vantage point, offering unparalleled panoramic and breathtaking vistas. A truly iconic address.',
    imageUrl: pinnaclePointImage,
    features: ['Rooftop Pool', 'Exclusive Penthouses', '24/7 Concierge'],
    floors: generateFloors('tower-c', 10),
  },
]; 