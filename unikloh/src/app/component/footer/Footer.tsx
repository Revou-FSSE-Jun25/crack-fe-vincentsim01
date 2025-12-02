import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 z-50 shadow h-[10vh] flex items-center justify-center font-bold'
            style={{
                background: "var(--foreground)",
                color: "var(--background)",
            }}
      >
      <span className='mr-4'>About Us</span>
      <span className='mr-4'>Privacy Policy</span>
      <span className='mr-4'>Terms of Service</span>
      <span className='mr-4'>Contact Us</span>
      <span className='mr-4'>FAQ</span>
    </div>
  )
}

export default Footer
