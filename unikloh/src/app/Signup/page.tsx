"use client"
import React,{useState,useEffect} from 'react';
import {useRouter} from 'next/navigation';


const Page = () => {
    const router = useRouter();
    const initialValue = {
        username: 'Arthur',
        email: 'arthur@gmail.com',
        password: 'arthur123',
        gender:'Male',
        birthday:'1 March 1970'
    }
    const [formData, setFormData] = useState(initialValue);

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("Form submitted");
        router.push('/');
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='border border-black m-5 p-4 rounded shadow-md flex flex-col items-center gap-4 mt-20 mb-20'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' value={formData.username} onChange={handleChange} placeholder='username' required className='border border-black rounded-md text-center'/>

        <br></br>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder='email' required className='border border-black rounded-md text-center'/>

        <br></br>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} placeholder='password' required className='border border-black rounded-md text-center'/>
        <br></br>
        <label htmlFor='gender'>Gender</label>
        <input type='text' id='gender' name='gender' value={formData.gender} onChange={handleChange} placeholder='gender' required className='border border-black rounded-md text-center'/>
        <br></br>
        <label htmlFor='birthday'>Birthday</label>
        <input type='text' id='birthday' name='birthday' value={formData.birthday} onChange={handleChange} placeholder='birthday' required className='border border-black rounded-md text-center'/>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  
    )
}


export default Page
