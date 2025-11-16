import React from 'react'
import { api } from '@/lib/api/api';
import AddToCartButton from '../component/addtocartbutton/AddToCartButton';


const page = async () => {

  const fetchedData = await api.getProducts(10);




  
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
          return (
            <div className='m-5 p-5 border-2 border-black w-[30%]' key={item.id}>

              <h2 key={item.id}>{item.title}</h2>              
              <div key={item.id}>{item.title}</div>
              <div key={item.id}>{item.description}</div>
              <div key={item.id}>${item.price}</div>
              <img key={item.id} src={item.thumbnail} alt={item.title} width={200} height={200}/>
              <br></br>
              <AddToCartButton title={item.title} />
              {/* <button className='mt-2 p-2 bg-blue-500 text-white rounded'>Add to Cart</button> */}
            </div>
          )



        })}

        </div>
      
    </div>
  )
}

export default page
