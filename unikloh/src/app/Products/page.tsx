// "use client";

import React from 'react'
// import {useState} from 'react';
import { api } from '@/lib/api/api';
import AddToCartButton from '../component/addtocartbutton/AddToCartButton';
import Link from "next/link";
import {Product} from '@/types/product'
import FormDeleteProduct from '@/app/component/formDeleteProduct/page';
import { updateProduct } from '@/types/product';
import {FormUpdateProduct} from '@/app/component/formUpdateProduct/FormUpdateProduct';
import {MockProducts} from '@/app/data/Product';
  // import { revalidatePath } from "next/cache";



export async function deleteProductAction(id: number) {
  await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
  });
}



// const [updateProducts, setUpdateProducts] = useState<updateProduct | null>(null);
export function handleEditProduct(productId: number, data: any) {
  fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data }),
  })
    .then(res => res.json())
    .then(res => console.log("Product updated:", res))
    .catch(err => console.error(err));
}


const page = async () => {
  // const fetchedData = await api.getProducts(10);

  return (
    <div>
        <div className='flex flex-wrap '>
              {MockProducts.map((item:any)=>{
                    return (
                      <div className='m-5 p-5 border-2 border-black w-[30%] relative' key={item.id}>
                        <Link href={`/products/${item.id}`}>              
                          <h2 >{item.title}</h2>              
                          <div>{item.title}</div>
                          <div>{item.description}</div>
                          <div>${item.price}</div>
                          <img src={item.images} alt={item.title} width={200} height={200}/>
                        </Link>
                        <br></br>
                        <AddToCartButton product={item} />
                        <FormDeleteProduct productId={item.id} />
                        <FormUpdateProduct
                            productId={item?.id} 
                            productTitle={item?.title} 
                            productPrice={item?.price} 
                            productDescription={item?.description} 
                        />
                      </div>
                    )
                  })}



        {/* {fetchedData.map((item:any)=>{

          return (
            <div className='m-5 p-5 border-2 border-black w-[30%] relative' key={item.id}>
              <Link href={`/products/${item.id}`}>              
                <h2 >{item.title}</h2>              
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>${item.price}</div>
                <img src={item.images[0]} alt={item.title} width={200} height={200}/>
              </Link>

              <br></br>
              <AddToCartButton product={item} />
              <FormDeleteProduct productId={item.id} />
              <FormUpdateProduct
                  productId={item?.id} 
                  productTitle={item?.title} 
                  productPrice={item?.price} 
                  productDescription={item?.description} 
              />
              {/* {
         
                  <Link href={`/products/${item.id}/edit`} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer hover:scale-110 active:scale-90 px-3 py-2 rounded-md text-sm font-medium text-center">
                      Edit
                  </Link>
             
              } */}

            {/* </div>
          )



        })} */}

        </div>
      
    </div>
  )
}

export default page
