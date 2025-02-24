export interface Product {
    id: number;
    title: string;
    image: string;
    originalPrice: number;
    discount: number;
    rating: number;
    colors: string[]; 
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }