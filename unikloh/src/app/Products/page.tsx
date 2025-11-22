import React from 'react'
import { api } from '@/lib/api/api';
import AddToCartButton from '../component/addtocartbutton/AddToCartButton';
import Link from "next/link";


const page = async () => {
  const fetchedData = await api.getProducts(10);
  // console.log('this is fetchedData' + fetchedData)
  
  return (
    <div>

        This is the Products page.
        <div className='flex flex-wrap '>
        {fetchedData.map((item:any)=>{
              function handleAddToCart(itemId: number) {
                console.log(`Add to cart clicked for item with ID: ${itemId}`);
                sessionStorage.setItem("title", "item.title");

                // Here you would typically also update the cart state/context
              }

              const param = item.id;
              // console.log(param+typeof(param))
          return (
            <div className='m-5 p-5 border-2 border-black w-[30%]' key={item.id}>
              <Link href={`/products/${item.id}`}>              
                <h2 >{item.title}</h2>              
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>${item.price}</div>
                <img src={item.images[0]} alt={item.title} width={200} height={200}/>
              </Link>

              <br></br>
              <AddToCartButton product={item.title} />
              {/* <button className='mt-2 p-2 bg-blue-500 text-white rounded'>Add to Cart</button> */}
            </div>
          )



        })}

        </div>
      
    </div>
  )
}

export default page
