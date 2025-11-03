export interface Vehicle {
  id: string;
  name: string;
  category: string;
  model: string;
  image: string;
  capacity: string;
  features: string[];
  description: string;
  specifications: {
    engine: string;
    payload: string;
    dimensions: string;
    fuelType: string;
  };
}

export const fleetData: Vehicle[] = [
  {
    id: '1',
    name: 'Heavy Duty Truck',
    category: 'Heavy Trucks',
    model: 'Volvo FH16',
    image: 'https://images.pexels.com/photos/1335976/pexels-photo-1335976.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '40 tons',
    features: ['GPS Tracking', 'Climate Control', 'Advanced Safety Systems', 'Fuel Efficient'],
    description: 'Our flagship heavy-duty truck designed for long-haul transportation. Equipped with the latest technology and safety features.',
    specifications: {
      engine: '16-liter Turbo Diesel',
      payload: '40,000 kg',
      dimensions: '16m x 2.5m x 4m',
      fuelType: 'Diesel'
    }
  },
  {
    id: '2',
    name: 'Refrigerated Truck',
    category: 'Specialized',
    model: 'Mercedes-Benz Actros',
    image: 'https://images.pexels.com/photos/1335976/pexels-photo-1335976.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '28 tons',
    features: ['Temperature Control', 'Multi-Zone Cooling', 'Real-Time Monitoring', 'Insulated Body'],
    description: 'Temperature-controlled transportation for perishable goods. Maintains optimal conditions throughout the journey.',
    specifications: {
      engine: '13-liter Turbo Diesel',
      payload: '28,000 kg',
      dimensions: '12m x 2.5m x 3.5m',
      fuelType: 'Diesel'
    }
  },
  {
    id: '3',
    name: 'Container Truck',
    category: 'Heavy Trucks',
    model: 'Scania R580',
    image: 'https://images.pexels.com/photos/1335976/pexels-photo-1335976.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '35 tons',
    features: ['Container Lock System', 'Heavy Duty Chassis', 'Long Range', 'Ergonomic Cabin'],
    description: 'Designed for container transportation with secure locking systems and robust chassis.',
    specifications: {
      engine: '16-liter V8 Diesel',
      payload: '35,000 kg',
      dimensions: '15m x 2.5m x 4m',
      fuelType: 'Diesel'
    }
  },
  {
    id: '4',
    name: 'Delivery Van',
    category: 'Light Commercial',
    model: 'Mercedes Sprinter',
    image: 'https://images.pexels.com/photos/1236955/pexels-photo-1236955.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '3.5 tons',
    features: ['Urban Navigation', 'Easy Loading', 'Fuel Efficient', 'Compact Design'],
    description: 'Perfect for urban deliveries and last-mile logistics. Maneuverable and efficient.',
    specifications: {
      engine: '2.1-liter Turbo Diesel',
      payload: '3,500 kg',
      dimensions: '6m x 2m x 2.7m',
      fuelType: 'Diesel'
    }
  },
  {
    id: '5',
    name: 'Flatbed Truck',
    category: 'Specialized',
    model: 'MAN TGX',
    image: 'https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '32 tons',
    features: ['Open Platform', 'Side Guards', 'Tie-Down Points', 'Heavy Load Capacity'],
    description: 'Versatile flatbed truck for oversized and irregular cargo. Secure tie-down system.',
    specifications: {
      engine: '15-liter Turbo Diesel',
      payload: '32,000 kg',
      dimensions: '14m x 2.5m x 1.5m',
      fuelType: 'Diesel'
    }
  },
  {
    id: '6',
    name: 'Tanker Truck',
    category: 'Specialized',
    model: 'DAF XF',
    image: 'https://images.pexels.com/photos/1335976/pexels-photo-1335976.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '30,000 liters',
    features: ['Stainless Steel Tank', 'Safety Valves', 'Anti-Spill System', 'Pressure Control'],
    description: 'Specialized tanker for liquid cargo transportation. Equipped with advanced safety systems.',
    specifications: {
      engine: '13-liter Turbo Diesel',
      payload: '30,000 liters',
      dimensions: '12m x 2.5m x 3.8m',
      fuelType: 'Diesel'
    }
  },
  {
    id: '7',
    name: 'Box Truck',
    category: 'Medium Trucks',
    model: 'Isuzu NPR',
    image: 'https://images.pexels.com/photos/1236955/pexels-photo-1236955.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '7 tons',
    features: ['Roll-Up Door', 'Lift Gate', 'Cargo Securing', 'Weather Protected'],
    description: 'Enclosed box truck ideal for protecting cargo from weather elements.',
    specifications: {
      engine: '5.2-liter Turbo Diesel',
      payload: '7,000 kg',
      dimensions: '7m x 2.3m x 3m',
      fuelType: 'Diesel'
    }
  },
  {
    id: '8',
    name: 'Mini Truck',
    category: 'Light Commercial',
    model: 'Mitsubishi Fuso',
    image: 'https://images.pexels.com/photos/1236955/pexels-photo-1236955.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '2 tons',
    features: ['Compact Size', 'Easy Parking', 'Low Fuel Consumption', 'City Friendly'],
    description: 'Compact truck perfect for city deliveries and tight spaces.',
    specifications: {
      engine: '3.0-liter Diesel',
      payload: '2,000 kg',
      dimensions: '5m x 1.8m x 2.5m',
      fuelType: 'Diesel'
    }
  },
  {
    id: '9',
    name: 'Car Carrier',
    category: 'Specialized',
    model: 'Scania P320',
    image: 'https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '8 vehicles',
    features: ['Hydraulic Lift', 'Multi-Level', 'Secure Straps', 'Protected Loading'],
    description: 'Specialized vehicle carrier for transporting multiple cars safely.',
    specifications: {
      engine: '9-liter Turbo Diesel',
      payload: '8 vehicles',
      dimensions: '18m x 2.5m x 4.2m',
      fuelType: 'Diesel'
    }
  }
];
