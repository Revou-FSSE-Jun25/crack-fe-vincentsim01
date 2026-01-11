import React from 'react'

const Footer = () => {
  return (
    <div  className=' border border-white flex items-center justify-center'
    
                  style={{
                      background: "var(--foreground)",
                      color: "var(--background)",
                  }}
    
    
    >
        <div className='w-[65%] inline-block'>
          <div className='bottom-0 z-50 shadow h-[50vh] flex items-center justify-center font-bold'
                  // style={{
                  //     background: "var(--foreground)",
                  //     color: "var(--background)",
                  // }}
            >
              <div className='flex flex-col justify-start mr-8 gap-2'>
                  <h2 className='font-bold text-2xl hover:scale-105 hover:underline'>About Us</h2>
                  <span>Our Story</span>
                  <span>Stores Location</span>
                  <span>CSR</span>
                  <span>Business Opportunities</span>
                  <span>Careers</span>
              </div>

              <div className='flex flex-col justify-start mr-8 gap-2'>
                  <h2 className='font-bold text-2xl hover:scale-105 hover:underline'>Need Help?</h2>
                  <span>FAQ</span>
                  <span>Contact Us</span>
                  <span>Privacy Policy</span>
                  <span>Terms and Conditions</span>
                  <span>Delivery and Pickup</span>
              </div>

              <div className='flex flex-col justify-start mr-8 gap-2'>
                  <h2 className='font-bold text-2xl hover:scale-105 hover:underline'>Account</h2>
                  <span>Login</span>
                  <span>My Account</span>
              </div>
          </div>
        </div>
        <div className='w-[30%] inline-block'>
          <div className='bottom flex flex-col justify-center items-center z-50 h-[50vh]'
          >
                <h2 className='font-bold text-2xl hover:scale-105 hover:underline'>Sign Up For Our Newsletter!</h2>
                <form>
                  <input type='text' className='border mr-5 rounded-md focus:ring-4'></input>
                  <button 
                      className='p-3 cursor-pointer hover:scale-105 rounded-md'
                      style={{
                          background: "var(--background)",
                          color: "var(--foreground)",
                      }}
                  
                  >
                    Newsletter</button>
                </form>
                <br></br><br></br>
                <div className='flex justify-center items-center w-70'>
                  <img src='/payment option.png'></img>
                </div>
            
            
          </div>
        </div>
    </div>
  )
}

export default Footer
