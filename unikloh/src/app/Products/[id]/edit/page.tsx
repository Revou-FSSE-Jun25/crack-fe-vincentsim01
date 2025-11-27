



import { api } from "@/lib/api/api";
import { Product } from "@/types/product";
import ProductClient from "./ProductClient"; // Client-side component for cart/admin logic

// Enable ISR by defining `revalidate`
export const revalidate = 60; // ✅ Regenerate every 60 seconds (ISR)

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;   // <- unwrap the Promise
  const id = Number(resolvedParams.id);

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