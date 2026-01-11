// const BASE_URL = 'https://api.escuelajs.co/api/v1/';
const BASE_URL = 'http://localhost:3001/';
import { MockProducts } from '@/app/data/Product';
import axios from 'axios';

export interface Product{
    id:number;
    title:string;
    // slug:string;
    price:number;
    description:string;
    // categoryId:number ;
    // images:string[];
    image:string;
    // totalItems?:number;
    stock:number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}


export interface ProductFormData {
    title:string;
    price:number;
    description:string;
    categoryId:number;
    // images:string[];
}

// export async function getProduct(id:number):Promise<Product>{
//     try{
//         const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
//         console.log("from getproductid"+response)
//         return response.data;
//     }catch(error){
//         console.error("Error Fetching Product", error);
//         throw new Error('Failed to fetch product');  

//     }
//   }

export const api = {
  getProducts: async (limit: number = 10) => {
    const response = await fetch(`${BASE_URL}products`);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data.slice(0, limit);
  },

    getProductsMock: async (limit: number = 10) => {
    const response = MockProducts;

    if (!response) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.slice(0,limit);
    return data;
  },

  getProductMock: async (id: number = 1) => {
    const response = MockProducts.find((p) => p.id === id);

    if (!response) {
      throw new Error('Failed to fetch products');
    }

    const data = await response;
    return data;
  },

  getProduct: async (id: number, authToken?: string): Promise<Product> => {

  console.log("Fetching product with ID:", id);
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }
  
  const response = await fetch(`${BASE_URL}products/${id}`, {
    headers,
  });

  console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error('Failed to fetch product');
    }
    const data = await response.json();

    console.log(data)
    return data;
    // return response.json();
  }
}