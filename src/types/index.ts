export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string; // API provides thumbnail, not single image
  images: string[];  // API provides array of images
  rating: number;    // API provides rating as number, not object
  stock: number;     // API provides stock information
  brand?: string;    // Optional brand from API
}
