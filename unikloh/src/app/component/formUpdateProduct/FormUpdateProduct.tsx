"use client"

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {Product, ProductFormData, updateProduct} from '@/types/product';
import {useAuth} from '@/app/context/authContext';
import { useRouter } from "next/navigation";
import { handleEditProduct } from "@/app/products/[id]/edit/ProductClient";


interface Props {
  productId: number;
  productTitle: string;
  productPrice: number;
  productDescription: string;
  productCategoryId: number;
//   getFromChild: (data: updateProduct) => void; // callback from parent
}


export const FormUpdateProduct = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const { userRole, isLoading } = useAuth();

const router = useRouter();

const productId = Number(props.productId);
const productTitle = String(props.productTitle);
const productPrice = Number(props.productPrice);
const productDescription = String(props.productDescription);
const productCategoryId = Number(props.productCategoryId);


const [updateProducts, setUpdateProducts] = useState({
        title: productTitle,
      price: productPrice,
      description: productDescription,
      categoryId: productCategoryId,
      images: ["https://placehold.co/600x400"],
})

    // const [updateProducts, setUpdateProducts] = useState<updateProduct | null>(null);

    // setUpdateProducts({
    //     title: productTitle,
    //     price: productPrice,
    //     description: productDescription,
    //     categoryId: productCategoryId,
    //     // getFromChild: (data: updateProduct) => void; 
    // });

function openUpdateProductModal() {
  const modal = document.getElementById('updateProductModal');
  modal?.classList.toggle('hidden');
}


  const handleUpdateClick = () => {
    // Build the updated product object
    const updated = {
      title: updateProducts.title,
      price: updateProducts.price,
      description: updateProducts.description,
      categoryId: updateProducts.categoryId,
      images: ["https://placehold.co/600x400"],
    };
        handleEditProduct(productId, updated);
}

// async function getFromChild() {
//     return beforeUpdateProducts;
//   } 
    return (
    <div>
        {userRole === 'admin' && <button className='p-2 bg-blue-500 text-white rounded cursor-pointer hover:scale-105 active:90' onClick={() => openUpdateProductModal()}>Update</button>}
  <div className='hidden absolute top-30 left-35 w-80 h-80 bg-gray-300 bg-opacity-40 flex flex-col items-center justify-center' id='updateProductModal'>
          <h2>Update Product</h2>
          <br></br>
          <button className='border p-2 rounded bg-red-500 text-white absolute top-2 right-2' onClick={() => openUpdateProductModal()}>Close</button>
            <form onSubmit={(e) => { e.preventDefault(); handleUpdateClick; }}>
              <label htmlFor='title'>Title:</label>
              <input
                className='border p-1 m-1'
                type='text'
                id='title'
                value={updateProducts?.title}
                onChange={(e) => setUpdateProducts({ ...updateProducts, title: e.target.value })}
              />
              <br />
              <label htmlFor='price'>Price:</label>
              <input
                className='border p-1 m-1'
                type='number'
                id='price'
                value={updateProducts?.price}
                onChange={(e) => setUpdateProducts({ ...updateProducts, price: Number(e.target.value) })}
              />

              <br />
              <label htmlFor='description'>Description:</label>
              <textarea
                className='border p-1 m-1'
                id='description'
                value={updateProducts?.description}
                onChange={(e) => setUpdateProducts({ ...updateProducts, description: e.target.value })}
              />
              <br />
              <label htmlFor='categoryId'>Category ID:</label>
              <input
                className='border p-1 m-1'
                type='number'
                id='categoryId'
                value={updateProducts?.categoryId}
                onChange={(e) => setUpdateProducts({ ...updateProducts, categoryId: Number(e.target.value) })}
              />
              <br />

              <button className='border p-2 rounded bg-green-500 text-white' type="submit">Submit</button>
            </form>
        </div>
    </div>
    )
}