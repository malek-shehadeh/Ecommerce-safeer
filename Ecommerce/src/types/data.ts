// src/types/data.ts
export interface Product {
    id: number;
    title: string;
    category: string;
    originalPrice: number;
    discount: number;
    image: string;
    rating: number;
    colors: string[];
    icons: {
      wishlist: boolean;
      compare: boolean;
      quickView: boolean;
      addToCart: boolean;
    };
  }
  
  export interface FilterData {
    products: Product[];
    categories: string[];
    discounts: number[];
    priceRanges: string[];
    colors: string[];
    ratings: number[];
  }