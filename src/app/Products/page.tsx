"use client";
import { api } from '@/lib/api/api';
import AddToCartButton from '../component/addtocartbutton/AddToCartButton';
import { useState, useEffect } from 'react';
import Link from "next/link";
import {Product} from '@/types/product'
import FormDeleteProduct from '@/app/component/formDeleteProduct/page';
import { updateProduct } from '@/types/product';
import {FormUpdateProduct} from '@/app/component/formUpdateProduct/FormUpdateProduct';
import {MockProducts} from '@/app/data/Product';
import BannerCosplayNight from '../component/banner/BannerCosplayNight';

export async function deleteProductAction(id: number) {
  await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
  });
}

const page = () => {
  const [limit, setLimit] = useState(10);
  const [fetchedData, setFetchedData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getProducts(limit);
        setFetchedData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [limit]);
  return (
    <>
    <BannerCosplayNight></BannerCosplayNight>

    <div className='m-4'   
    style={{
      background: "var(--background)",
      color: "var(--foreground)",
    }}
    >
    <div className='m-4 flex gap-4 justify-center'>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50" 
        onClick={() => setLimit(Math.max(10, limit - 10))}
        disabled={limit <= 10}
      >
        Previous (Show {Math.max(10, limit - 10)})
      </button>
      <span className='flex items-center font-bold text-lg'>Showing: {limit}</span>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={() => setLimit(limit + 10)}
      >
        Next (Show {limit + 10})
      </button>
    </div>

    {loading && <div className='text-center py-8 text-lg'>Loading products...</div>}
    {error && <div className='text-center py-8 text-lg text-red-600'>Error: {error}</div>}

        <div className='flex flex-wrap '>
            {/* {MockProducts.map((item:any)=>{
                    return (
                      <div className='m-5 p-5 border-2 border-black w-[30%] relative flex flex-col items-center' key={item.id}>
                        <Link href={`/products/${item.id}`}>              
                          <h2 className='text-4xl font-bold flex justify-center'>{item.title.toUpperCase()}</h2>              
                          <img className='mx-auto' src={item.images} alt={item.title} width={200} height={200}/>
                          <div className='flex justify-center'>{item.description}</div>
                          <div className='flex justify-center text-2xl'>${item.price}</div>
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
            })} */}

        {fetchedData.map((item:any)=>{
          return (
            <div className='m-5 p-6 w-[30%] flex flex-col items-center rounded-xl shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300' key={item.id}>
              <Link href={`/Products/${item.id}`} className="w-full text-center mb-5">              

                <img className='w-full h-full object-cover rounded-lg' src={item.image} alt={item.title} width={200} height={200}/> 
                <br></br>  
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-red-600 transition-colors duration-200">{item.title}</h2>  

                <br></br>         
                <div className="text-xl font-bold text-gray-900 mb-8">${item.price}</div>
              </Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
                <div className="mt-4 mb-4 w-full text-center">
                    <AddToCartButton product={item} />
                </div>
              <FormDeleteProduct productId={item.id} />
              {/* <FormUpdateProduct
                  productId={item?.id} 
                  productTitle={item?.title} 
                  productPrice={item?.price} 
                  productDescription={item?.description} 
              /> */}
            </div>
          )
        })}

        </div>
      
    </div>
        </>
  )
}

export default page
