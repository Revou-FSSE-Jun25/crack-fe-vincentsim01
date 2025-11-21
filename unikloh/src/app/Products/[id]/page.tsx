import { api } from "@/lib/api/api";
// import { Product } from "../../types/product";
import ProductClient from "./ProductClient"; // Client-side component for cart/admin logic

// Enable ISR by defining `revalidate`
export const revalidate = 60; // ✅ Regenerate every 60 seconds (ISR)

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



export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  // Fetch data on the server for ISR
  const product: Product = await api.getProduct(id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  // Pass product data to the client-side component
  return <ProductClient product={product} id={id} />;
}