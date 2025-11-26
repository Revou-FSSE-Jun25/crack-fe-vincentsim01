"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {Product, ProductFormData, updateProduct} from '@/types/product';
import {useAuth} from '@/app/context/authContext';
import { useRouter } from "next/navigation";
import { deleteProductAction } from "@/app/products/page";


const FormDeleteProduct = (props: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const { userRole, isLoading } = useAuth();


// const fetchProducts = () => {
//   fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
//     .then(res => res.json())
//     .then(data => setProducts(data));
// };
  const router = useRouter();

const productId = Number(props.productId);

async function handleDeleteProduct(productId: number) {

        await deleteProductAction(productId);
        router.refresh(); 
  // fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
  //   method: "DELETE",
  // })
  //   .then((res) => {
  //     if (!res.ok) throw new Error("Failed to delete");



  //     alert(`Product ${productId} deleted`);
  //     // fetchProducts();
      
  //   })
  //   .catch((err) => console.error(err));
}


  return (
    <div>
        {userRole === 'admin' && <button className='p-2 bg-red-500 text-white rounded cursor-pointer hover:scale-105 active:90' onClick={() => handleDeleteProduct(productId)}>Delete</button>}

    </div>

  )
}

export default FormDeleteProduct
