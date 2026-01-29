import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  itemCount: number;
  icon: LucideIcon;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
