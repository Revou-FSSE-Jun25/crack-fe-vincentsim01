"use client"

import React from 'react';
import { useState } from 'react';
import { useLoading } from '../context/loadingContext';
import PhotoshootBanner from '../component/photoshootBanner/PhotoshootBanner';
import CheckoutPhotoShoot from "@/app/component/checkoutPhotoShoot/page";  
import { useCart } from '@/app/context/cartContext';

interface Product {
  id?: number;
  title?: string;
  price?: number;
  images?: string[];
  // totalItems: number;
}

interface Props {
  product: Product;
}
const page = () => {

  const { isLoading, setIsLoading } = useLoading();
  const { addToCart } = useCart();

  const initialValue = {
    photoshootDate: '1 January 2024',
    name: 'arthur',
    email: 'arthur@gmail.com',
    package: 'premium',
    phone: '12345678'
  };

  const PhotoshootPackage = [
    {
      id:101,
      name: "BASIC",
      price: 100,
      service: [
        "5 photos","1 dedicated photographer", "1 hour"
      ]
    },
    {
      id:102,
      name: "PREMIUM",
      price: 200,
      service: [
        "10 photos","2 dedicated photographer", "2 hours"
      ]
    },
    {
      id:103,
      name: "DELUXE",
      price: 300,
      service: [
        "20 photos","5 dedicated photographer", "3 hours"
      ]
    }
  ]

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
  <div
    id="photoshootContainer"
    className="mt-5 transition-colors duration-300"
    style={{
      background: "var(--background)",
      color: "var(--foreground)",
    }}
  >
    <PhotoshootBanner />

    {/* INFO GRID */}
    <div className="grid grid-cols-3 gap-6 mt-10 mb-10 px-8">
      {/* Card 1 */}
      <div
        className="border rounded-xl p-6 shadow-sm text-center flex flex-col items-center"
        style={{ borderColor: "var(--foreground)" }}
      >
        <h2 className="text-2xl font-semibold mb-3">Photoshoot With A Heart</h2>
        <p className="opacity-80">
          Our photographer will ensure you get the best and most memorable photo.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="border rounded-xl p-6 shadow-sm text-center flex flex-col items-center"
        style={{ borderColor: "var(--foreground)" }}
      >
        <h2 className="text-2xl font-semibold mb-3">
          Don't Put A Hole In Your Pocket
        </h2>
        <p className="opacity-80">More photos, lower cost.</p>
      </div>

      {/* Card 3 */}
      <div
        className="border rounded-xl p-6 shadow-sm text-center flex flex-col items-center"
        style={{ borderColor: "var(--foreground)" }}
      >
        <h2 className="text-2xl font-semibold mb-3">We Follow What You Want</h2>
        <p className="opacity-80">
          We listen closely to your requests to give you the perfect shoot.
        </p>
      </div>
    </div>

    {/* SPECIAL OFFER */}
    <div className="max-w-3xl mx-auto mb-10 text-center text-lg opacity-90 px-8">
      Unik Loh menyediakan jasa foto untuk kamu yang telah menjadi pelanggan
      setia kami.  
      <br />
      Dapatkan <b>1x sesi foto dengan potongan harga 40%</b> apabila kamu telah
      belanja satu set baju.
    </div>

    {/* FORM TITLE */}
    <h1 className="text-center text-4xl font-bold mt-5 mb-8">
      BOOK A PHOTO SESSION HERE
    </h1>

    {/* <div className='grid grid-cols-3 mt-5 mb-5 ml-3 mr-3 border rounded-md p-5 gap-5'>
      <div className='border rounded-md flex flex-col items-center'>
        BASIC
      </div>
      <div className='border rounded-md'>PREMIUM</div>
      <div className='border rounded-md'>DELUXE</div>
    </div> */}
    <div className='grid grid-cols-3 mt-5 mb-5 ml-3 mr-3 border rounded-md p-5 gap-5'>
          {PhotoshootPackage.map((pack) =>{
              const id = pack.id;
              const name = pack.name;
              const price = pack.price;
              function handlePackageButtonClick(){
                    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

                      const isExisting = existingCart.some((item: Product) => item.id === id);

                      if (isExisting) {
                        alert("Item is already in your cart!");
                        return;
                      }
                        addToCart({id: id, title: name, price: price, quantity: 1});

                          const updatedCart = [...existingCart, {id: id, title: name, price: price, quantity: 1}];


                        localStorage.setItem("cart", JSON.stringify(updatedCart));

                        alert(`${name} Package added to cart!`);
              }
              return(
                <div className='border rounded-md flex flex-col items-center p-5'>
                  <h2 className='text-xl font-bold'>{name}</h2>
                  <div>${price}</div>
                  <div className='flex flex-col flex-start'>
                      {pack.service.map((item) => {
                        return(
                          <ol className='list-disc list-inside'><li>{item}</li></ol>
                        )
                      })}
                  </div>
                  <br></br><br></br>
                    <button 
                      onClick={handlePackageButtonClick}
                      className='p-3 border-radius rounded-md cursor-pointer hover:scale-105 active:scale-95 transition-all duration-1000'              
                      style={{
                        background: "var(--foreground)",
                        color: "var(--background)",
                        borderColor: "var(--foreground)",
                      }}
                    >
                      Add To Cart</button> 
                </div>
              )
            })
          }
    </div>


    {/* <CheckoutPhotoShoot/> */}

    {/* FORM */}
    {/* <form
      className="max-w-xl mx-auto m-8 p-10 rounded-xl flex flex-col gap-6 shadow-md transition-colors duration-300"
      style={{
        border: "2px solid var(--foreground)",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="photoshootDate" className="font-medium">
          Select Photoshoot Date:
        </label>
        <input
          type="date"
          id="photoshootDate"
          name="photoshootDate"
          onChange={handleChange}
          value={formData.photoshootDate}
          className="p-2 rounded border"
          style={{
            borderColor: "var(--foreground)",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          className="p-2 rounded border"
          placeholder="Arthur"
          style={{
            borderColor: "var(--foreground)",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="p-2 rounded border"
          placeholder="arthur@example.com"
          style={{
            borderColor: "var(--foreground)",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="package" className="font-medium">
          Select Package:
        </label>
        <select
          id="package"
          name="package"
          onChange={handleChange}
          value={formData.package}
          className="p-2 rounded border"
          style={{
            borderColor: "var(--foreground)",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="deluxe">Deluxe</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="font-medium">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          className="p-2 rounded border"
          placeholder="+1234567890"
          style={{
            borderColor: "var(--foreground)",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        />
      </div>


      <button
        type="submit"
        className="px-4 py-3 rounded-lg border font-medium mt-4 active:scale-95 transition-all duration-200"
        style={{
          background: "var(--foreground)",
          color: "var(--background)",
          borderColor: "var(--foreground)",
        }}
      >
        Submit
      </button>
    </form> */}
  </div>
);
}

export default page
