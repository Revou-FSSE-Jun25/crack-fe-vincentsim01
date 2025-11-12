import React from 'react'

const Header = () => {
  return (
    <div  className='sticky top-0 z-50 shadow h-[10vh] bg-red-600 flex items-center justify-center text-white font-bold'>
        <span className='mr-4'>Home</span>
        <span className='mr-4'>Product</span>
        <span className='mr-4'>Logo</span> 
        <span className='mr-4'>Contact Us</span> 
        <span className='mr-4'>Profile</span>
        <span className='mr-4'>Login</span>
    </div>
  )
}

export default Header
