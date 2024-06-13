import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  const [api, setApi] = useState([]);
  const [a,setA]=useState(0)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
      .then((response) => response.json())
      .then((data) => {
        setApi(data.meals);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function handleOnClick(id) {
    api.map((item) => {
      if (item.idMeal == id) {
        setCart([...cart, { item, total: a }]);
        alert('Product add')
        setA(Number(a)+300)
      }
      
    });
    console.log(a)
  }

  const filteredMeals = api.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className='flex justify-around gap-[1rem] bg-[#C82125] ml-[10rem] mr-[10rem] p-10 items-center'>
        <div>
          <h1 className='text-7xl text-white font-semibold pb-10'>Are You Starving?</h1>
          <p className='text-xl text-white font-semibold pb-10'>Within a few clicks, find meals that are accessible near you</p>
          <button className='text-xl font-semibold p-2 bg-white rounded-xl'>View Menu</button>
        </div>
        <div>
          <video loop autoPlay className='h-[350px] w-[350px] rounded-xl'>
            <source src='https://cdn.dribbble.com/users/319371/screenshots/11984807/media/05cad6c3ffff65f9142bf2958b941171.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='flex justify-center  items-center text-center mt-10 gap-2'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search for meals...'
          className='p-2 border rounded-lg   w-72 border-2 border-black'
        />
        <button className='p-2 rounded-xl bg-[#fa4a0c] text-white'>Search</button>
      </div>
      <div className='grid gap-4 grid-cols-3 grid-rows-3 ml-52 mt-10'>
        {filteredMeals.map((itame) => (
          <div key={itame.idMeal} id={itame.idMeal}>
            <div className='w-64 m-4 flex flex-col gap-2 hover:border-[rgba(58, 55, 55, 0.756)] hover:border-4 p-2'>
              <img src={itame.strMealThumb} className='h-64 rounded-xl' alt={itame.strMeal} />
              <h3>{itame.strMeal}</h3>
              <h3>Price: ₹300/serving</h3>
              <p>Free Delivery</p>
              <div className='flex justify-between mt-2 mb-2'>
                <button className='bg-[#ff7c18] p-2 rounded-xl' onClick={() => handleOnClick(itame.idMeal)}>Add To Cart</button>
                <button className='bg-[#ff7c18] p-2 rounded-xl'><Link to='/Cart'>Go To Cart</Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
