// "use client";

import React from 'react'
import { api, Product } from '@/lib/api/api';
import AddToCartButton from '../component/addtocartbutton/AddToCartButton';
import Link from "next/link";
// import {useAuth} from '@/app/context/authContext';
import FormDeleteProduct from '@/app/component/formDeleteProduct/page';
  // import { revalidatePath } from "next/cache";

export async function deleteProductAction(id: number) {
  await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
  });

  // Refresh the server-side products page
  // revalidatePath("/products");
}
const page = async () => {
  // const { userRole } = useAuth();
  const fetchedData = await api.getProducts(10);




    // const [products, setProducts] = useState<Product[]>([]);
  // console.log('this is fetchedData' + fetchedData)

//   const fetchProducts = () => {

//   fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
//     .then(res => res.json())
//     .then(data => setProducts(data));
// };

//   function handleDeleteProduct(productId: number) {
//   fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
//     method: "DELETE",
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error("Failed to delete");

//       // Remove product from state → triggers re-render
//       setProducts((prev) => prev.filter((p) => p.id !== productId));

//       console.log(`Product ${productId} deleted`);
//       fetchProducts();
//     })
//     .catch((err) => console.error(err));
// }
  
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
              <AddToCartButton product={item} />


              <FormDeleteProduct productId={item.id} />
              {/* <button className='mt-2 p-2 bg-blue-500 text-white rounded'>Add to Cart</button> */}
            </div>
          )



        })}

        </div>
      
    </div>
  )
}

export default page
