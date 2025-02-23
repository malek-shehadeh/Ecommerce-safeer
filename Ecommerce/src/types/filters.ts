// src/types/filters.ts
export type FilterTypes = 'categories' | 'discounts' | 'priceRanges' | 'colors' | 'ratings';

export interface FilterState {
    categories: string[];
    discounts: number[];
    priceRanges: string[];
    colors: string[];
    ratings: number[];
  }
  
  export type FilterType = keyof FilterState;
  
  export interface FilterData {
    products: Product[];
    categories: string[];
    discounts: number[];
    priceRanges: string[];
    colors: string[];
    ratings: number[];
  }
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
    isNew?: boolean; 

  }