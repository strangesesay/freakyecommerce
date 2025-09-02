// products.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;          // USD
  category: string;
  brand?: string;
  imageUrl: string;       // real image URL
  rating?: number;
  stock: number;          // units available
}

