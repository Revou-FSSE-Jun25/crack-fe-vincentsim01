"use client"

import React from 'react'
import { useState } from 'react';
import { useLoading } from '@/app/context/loadingContext';
import { useCart } from '@/app/context/cartContext';
import { useAuth } from '@/app/context/authContext'

  // const getCookie = (name: string): string | null => {
  //   return document.cookie
  //     .split('; ')
  //     .find(row => row.startsWith(`${name}=`))
  //     ?.split('=')[1] || null;
  // };

  // const email = getCookie('email');
const CheckoutPhotoShoot = () => {

      const { isLoading, setIsLoading } = useLoading();
      const { addToCart } = useCart();
      const { user, logout } = useAuth();
      
    
      const initialValue = {
        photoshootDate: '1 January 2024',
        name: user?.name,
        email: user?.email,
        package: 'premium',
        // phone: '12345678'
      };

      type Product = {
        id: number;
        title: string;
        price: number;
        quantity?: number;
        // totalItems: number;
        };
            
      const [formData, setFormData] = useState(initialValue);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

      }
    
      async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        localStorage.setItem("photoshootDate", formData.photoshootDate);
        try{
            if (formData.package === 'BASIC' || formData.package === 'basic') {
              addToCart({id: 10001, title: 'Basic Photoshoot Package', price: 100, quantity: 1});
            } else if (formData.package === 'PREMIUM' || formData.package === 'premium') {
              addToCart({id: 10002, title: 'Premium Photoshoot Package', price: 200, quantity: 1});
            } else if (formData.package === 'PLATINUM' || formData.package === 'platinum') {
              addToCart({id: 10003, title: 'Platinum Photoshoot Package', price: 300, quantity: 1});
            }
            setIsLoading(false);

            const response = await fetch('https://api', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                photoshootDate: formData.photoshootDate,
                name:user?.name,

                email:user?.email,
                package:formData.package,
                expiresInMins: 30,
              }),
            });

            if (!response.ok) {
              throw new Error('Invalid credentials');
            }

        }
        catch (error) {
            console.error('❌ Login failed:', error);

        } finally {
            setIsLoading(false);
            alert('Photoshoot Session Booked '+formData.package+ ' | ' + ' | '+formData.photoshootDate);
        }


      }
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
  return (
    <div>


          <div>

        <form className="max-w-xl mx-auto m-8 p-10 rounded-xl flex flex-col gap-6 shadow-md transition-colors duration-300"
            style={{
              border: "2px solid var(--foreground)",
              background: "var(--background)",
              color: "var(--foreground)",
            }} onSubmit={handleSubmit}>
            <label htmlFor="photoshootDate">Select Photoshoot Date:</label>
            <input type="date" id="photoshootDate" name="photoshootDate" onChange={handleChange} value={formData.photoshootDate} className='border p-2 rounded'/>
            <br></br>
            {/* <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} className='border p-2 rounded' placeholder='Arthur'/>
            <br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}   className='border p-2 rounded' placeholder='arthur@example.com'/>
            <br></br> */}
            <label htmlFor="package">Select Package:</label>
            <select id="package" name="package" onChange={handleChange} value={formData.package} className='border p-2 rounded'     style={{
      background: "var(--background)",
      color: "var(--foreground)",
    }}>
                <option value="BASIC">Basic</option>
                <option value="PREMIUM">Premium</option>
                <option value="PLATINUM">Platinum</option>
            </select>
            <br></br>
            {/* <label htmlFor='phone'>Phone Number:</label>
            <input type="tel" id="phone" name="phone" onChange={handleChange} value={formData.phone} className='border p-2 rounded' placeholder='+1234567890'/>
            <br></br> */}
            <button type="submit" className='bg-red-600 text-white px-4 py-2 rounded'

              style={{
                background: "var(--foreground)",
                color: "var(--background)",
                borderColor: "var(--foreground)",
              }}
            
            >Submit</button>
        </form>
      
    </div>

    </div>
  )
}

export default CheckoutPhotoShoot;
