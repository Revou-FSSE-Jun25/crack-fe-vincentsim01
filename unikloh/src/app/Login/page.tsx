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
    <div>

        <form onSubmit={handleLogin}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' name='username' value={formData.username} onChange={handleChange} placeholder='username' required />
            <br/>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} placeholder='password' required />
            <br/>
            <button type='submit'>Login</button>
        </form>
      
    </div>
  )
}

export default Page
