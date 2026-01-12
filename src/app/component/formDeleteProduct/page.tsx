"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {Product, ProductFormData, updateProduct} from '@/types/product';
import {useAuth} from '@/app/context/authContext';
import { useRouter } from "next/navigation";
import { deleteProductAction } from "./../../Products/page";


const FormDeleteProduct = (props: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const { userRole, isLoading } = useAuth();

  const router = useRouter();

  const productId = Number(props.productId);

  async function handleDeleteProduct(productId: number) {
          await deleteProductAction(productId);
          router.refresh(); 
  }


  return (
    <div>
        {userRole === 'ADMIN' && <button className='p-2 bg-red-500 text-white rounded cursor-pointer hover:scale-105 active:90' onClick={() => handleDeleteProduct(productId)}>Delete</button>}
    </div>

  )
}

export default FormDeleteProduct
