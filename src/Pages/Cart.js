import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';

function Cart() {
    
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

const [number,setNumber]=useState(0);

 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    
  }, [cart,setCart]);

  function handleRemove(id) {
    const updatedCart = cart.filter(item => item.item.idMeal !== id);
    setCart(updatedCart);
    
  }
  function resetHendel(){
    localStorage.clear();
    setCart([]);
      
  }
  

  return (
    <div>
        <Navbar/>
      
      
        <div className='flex flex-col m-10 items-center  '>
            <h1 className='text-4xl font-semibold'>Your Cart</h1>
            <div className='flex flex-col m-10  w-6/12 bg-[#ff7c18] items-center'>
          {cart.map((item) => (
            
            <div key={item.item.idMeal} id={item.item.idMeal}  className='bg-white w-8/12 m-10 rounded-xl '>
              <div className='w-68 m-4  flex  gap-12  p-2 justify-center items-center'>
                <img src={item.item.strMealThumb} className='h-40 rounded-xl ' alt={item.strMeal} />
                <div>
                <h3 className='text-xl font-bold'>{item.item.strMeal}</h3>
                <h3>₹300</h3>
                
                <p>Free Delivery</p>
                
                </div>
                <div className='flex justify-between mt-2 mb-2'>
                  <button className='bg-[#ff7c18] p-2 rounded-xl' onClick={() =>{
                    
                     handleRemove(item.item.idMeal)}}>Remove</button>
                </div>
              </div>
            </div>
            
          ))}

          <h4 className='bg-white w-8/12 m-4 p-4 text-xl text-center'>Total:{cart.length>0?(cart[cart.length-1].total)+300:0}</h4>
          </div>
          <button className='p-2 rounded-xl bg-[#fa4a0c] text-white' onClick={()=>{
            resetHendel()
          }}>Reste Cart</button>
          
        </div>
      

    </div>
  );
}

export default Cart;