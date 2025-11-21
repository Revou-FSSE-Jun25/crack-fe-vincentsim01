const BASE_URL = 'https://api.escuelajs.co/api/v1/';

export interface Product{
    id:number;
    title:string;
    slug:string;
    price:number;
    description:string;
    categoryId:number ;
    images:string[];
    totalItems?:number;
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

export const api = {
  getProducts: async (limit: number = 10) => {
    const response = await fetch(`${BASE_URL}products?limit=${limit}`);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data;
  },

  getProduct: async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}products/9`);

    // console.log(await response.json());

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    return response.json();
  }
}