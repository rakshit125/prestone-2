import { 
  Wrench, 
  Hammer, 
  Drill,
  PaintBucket,
  Truck, 
  Clock,
  ShieldCheck,
  Armchair,
  Zap,
  Droplets,
  Settings,
  Home,
  Coffee,
  Shirt
} from 'lucide-react';
import { Category, Feature, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Power Tools',
    itemCount: 850,
    icon: Drill,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: '2',
    name: 'Hand Tools & Accessories',
    itemCount: 1200,
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: '3',
    name: 'Paint & Décor',
    itemCount: 600,
    icon: PaintBucket,
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: '4',
    name: 'Cabinet & Drawer Hardware',
    itemCount: 450,
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: '5',
    name: 'Faucets & Shower Heads',
    itemCount: 350,
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: '6',
    name: 'Windows & Doors',
    itemCount: 280,
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Ottawa\'s Largest Inventory',
    description: 'Over 100,000 products in stock across 90,000 sq ft of retail space.',
    icon: ShieldCheck
  },
  {
    id: 'f2',
    title: 'Same-Day City Delivery',
    description: 'Order by noon for delivery anywhere in the Greater Ottawa Area.',
    icon: Truck
  },
  {
    id: 'f3',
    title: 'Expert Project Advice',
    description: 'Speak with our specialized department staff for your renovation needs.',
    icon: Clock
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Milwaukee M18 Fuel 18V Combo Kit',
    category: 'Power Tools',
    price: 728.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Benjamin Moore Aura Interior Paint',
    category: 'Paint & Décor',
    price: 89.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1562259920-47afc305f369?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 'p3',
    name: 'DeWalt 20V MAX Powerstack Battery Kit',
    category: 'Power Tools',
    price: 179.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    isNew: true
  },
  {
    id: 'p4',
    name: 'Weiser Prague Door Handle Set',
    category: 'Windows & Doors',
    price: 134.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 'p5',
    name: 'Milwaukee SHOCKWAVE Bit Set 45 Pack',
    category: 'Hand Tools & Accessories',
    price: 14.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 'p6',
    name: 'Cabinet Pulls & Knobs Set',
    category: 'Cabinet & Drawer Hardware',
    price: 89.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    isNew: true
  },
  {
    id: 'p7',
    name: 'Moen Single Handle Faucet',
    category: 'Faucets & Shower Heads',
    price: 249.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 'p8',
    name: 'Makita 18V LXT Chainsaw Kit',
    category: 'Power Tools',
    price: 539.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  }
];

export const BRANDS = [
  'MILWAUKEE', 'DEWALT', 'MAKITA', 'BOSCH', 'BENJAMIN MOORE', 'MOEN', 'WEISER', 'SCHLAGE'
];
