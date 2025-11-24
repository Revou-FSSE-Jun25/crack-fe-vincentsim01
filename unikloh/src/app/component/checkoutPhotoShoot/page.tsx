import React from 'react'
import { useState } from 'react';
import { useLoading } from '@/app/context/loadingContext';
import { useCart } from '@/app/context/cartContext';

const CheckoutPhotoShoot = () => {

      const { isLoading, setIsLoading } = useLoading();
      const { addToCart } = useCart();
    
      const initialValue = {
        photoshootDate: '1 January 2024',
        name: 'arthur',
        email: 'arthur@gmail.com',
        package: 'premium',
        phone: '12345678'
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
    
      function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        if (formData.package === 'basic') {
          addToCart({id: 101, title: 'Basic Photoshoot Package', price: 100, quantity: 1});
        } else if (formData.package === 'premium') {
          addToCart({id: 102, title: 'Premium Photoshoot Package', price: 200, quantity: 1});
        } else if (formData.package === 'deluxe') {
          addToCart({id: 103, title: 'Deluxe Photoshoot Package', price: 300, quantity: 1});
        }
        setIsLoading(false);
      }
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
  return (
    <div>
      Let's Schedule Your Photoshoot!

          <div>
        <h1>Photoshoot Page</h1>
        <form className='m-10 p-10 border-2 border-gray-300 rounded-lg flex flex-col gap-4 flex flex-col justify-center' onSubmit={handleSubmit}>
            <label htmlFor="photoshootDate">Select Photoshoot Date:</label>
            <input type="date" id="photoshootDate" name="photoshootDate" onChange={handleChange} value={formData.photoshootDate} className='border p-2 rounded'/>
            <br></br>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} className='border p-2 rounded' placeholder='Arthur'/>
            <br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}   className='border p-2 rounded' placeholder='arthur@example.com'/>
            <br></br>
            <label htmlFor="package">Select Package:</label>
            <select id="package" name="package" onChange={handleChange} value={formData.package} className='border p-2 rounded'>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="deluxe">Deluxe</option>
            </select>
            <br></br>
            <label htmlFor='phone'>Phone Number:</label>
            <input type="tel" id="phone" name="phone" onChange={handleChange} value={formData.phone} className='border p-2 rounded' placeholder='+1234567890'/>
            <br></br>
            <button type="submit" className='bg-red-600 text-white px-4 py-2 rounded'>Submit</button>
        </form>
      
    </div>

    </div>
  )
}

export default CheckoutPhotoShoot;
