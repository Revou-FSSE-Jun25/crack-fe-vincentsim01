import { api } from "@/lib/api/api";
import { Product, ProductMock } from "@/types/product";
import ProductClient from "./ProductClient"; // Client-side component for cart/admin logic

// export default async function ProductPage({ params }: { params: { id: string } }) {
  // Fetch data on the server for ISR

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;   // <- unwrap the Promise
  const id = Number(resolvedParams.id);

  const product: Product = await api.getProduct(id);


  // const product2: ProductMock = await api.getProductMock(id);
  // const product = await getProduct(id);


  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }



  // if (!product2) {
  //   return (
  //     <div className="text-center py-12">
  //       <p className="text-gray-500 text-lg">Product not found.</p>
  //     </div>
  //   );
  // }

  // Pass product data to the client-side component
    return <ProductClient product={product} id={id} />;
  // return <ProductClient product={product2} id={id} />;
}