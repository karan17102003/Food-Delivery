import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col bg-[#212121] text-[#ffffff] '>
    <div className=' flex justify-between p-10 '>
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-bold'>Company</h2>
            <p>About us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Blog</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-bold'>Legal</h2>
            <p>Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-bold'>Follow us</h2>
            <div className='flex gap-4'>
                <p>I</p>
                <p>F</p>
                <p>T</p>
            </div>
            <p>Recieve exclusive offers in your mailbox</p>
            
        </div>
        
      
    </div>
    <hr className='text-[#ffffff] p-2'/>
    <h2 className='text-[#ffffff] p-2  text-center' >All rights reserved  FoodCart</h2>
    </div>
  )
}

export default Footer
