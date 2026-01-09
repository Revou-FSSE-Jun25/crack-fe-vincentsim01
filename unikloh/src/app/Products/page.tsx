// "use client";
import { api } from '@/lib/api/api';
import AddToCartButton from '../component/addtocartbutton/AddToCartButton';
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

// const [updateProducts, setUpdateProducts] = useState<updateProduct | null>(null);
// export function handleEditProduct(productId: number, data: any) {
//   fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ ...data }),
//   })
//     .then(res => res.json())
//     .then(res => console.log("Product updated:", res))
//     .catch(err => console.error(err));
// }

const page = async () => {
  const fetchedData = await api.getProducts(10);
  return (
    <>
    <BannerCosplayNight></BannerCosplayNight>

    <div className='m-4'   
    style={{
      background: "var(--background)",
      color: "var(--foreground)",
    }}
    >
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
              <Link href={`/products/${item.id}`} className="w-full text-center mb-5">              

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
