// src/types/product.ts
export interface Product {
    id: number;
    title: string;
    image: string;
    originalPrice: number;
    discount: number;
    rating: number;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }