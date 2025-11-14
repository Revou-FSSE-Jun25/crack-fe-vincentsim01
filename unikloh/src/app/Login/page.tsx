"use client"

import React,{useState, useEffect} from 'react';
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const initialValue = {
        username: 'Arthur',
        password: 'arthur123'
    }

    const [formData, setFormData] = useState(initialValue);


    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    function handleLogin(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("Form submitted:", formData);
        router.push("/");
    }
  return (
    <div >

        <form onSubmit={handleLogin} className='flex flex-col items-center gap-4 border border-red-600 p-4 rounded shadow-md mt-20 mb-20'>
            <label htmlFor='username'>Username</label>
            <input className='border border-black rounded-md text-center' type='text' id='username' name='username' value={formData.username} onChange={handleChange} placeholder='username' required />
            <br/>
            <label htmlFor='password'>Password</label>
            <input className='border border-black rounded-md text-center' type='password' id='password' name='password' value={formData.password} onChange={handleChange} placeholder='password' required />
            <br/>
            <button type='submit' className='border border-black rounded-md px-4 py-2 cursor-pointer shadow-md hover:scale-110 active:scale-95'>Login</button>
        </form>
      
    </div>
  )
}

export default Page
