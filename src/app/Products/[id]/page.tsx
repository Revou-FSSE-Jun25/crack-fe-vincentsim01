// "use client"

import { api } from "@/lib/api/api";
import { Product, ProductMock } from "@/types/product";
import ProductClient from "./ProductClient"; // Client-side component for cart/admin logic
import { cookies } from "next/headers";

// export default async function ProductPage({ params }: { params: { id: string } }) {
  // Fetch data on the server for ISR

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;   // <- unwrap the Promise
  const id = Number(resolvedParams.id);


    const setCookie = (name: string, value: string, minutes: number = 30) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (minutes * 60 * 1000));
    document.cookie = `${name}=${value}; path=/; expires=${expires.toUTCString()}`;
    console.log(`🍪 Cookie set: ${name}`);
  };

  const getCookie = (name: string): string | null => {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(`${name}=`))
      ?.split('=')[1] || null;
  };

  // Get auth token from cookies
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth-token')?.value;

  //   const cookieStore = await cookies();
  // const authToken = getCookie('auth-token')?.value;

  const product: Product = await api.getProduct(id, authToken);


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