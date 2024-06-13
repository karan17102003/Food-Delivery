import React, { useState } from 'react'
import Navbar from '../component/Navbar'

export default function Reviews() {
    const data=[
        {
            id:1,
            name:"Diana",
            Rate:'2.5',
            Data:'2024-04-07',
            text:"The food quality was not up to the mark. Disappointed with the taste. I ordered sushi, and it tasted a bit off. The rice was too dry, and the fish didn't seem very fresh.",
            img:"https://img.freepik.com/free-photo/interested-woman-with-wavy-hair-taking-selfie_197531-16717.jpg?w=900"

        },
        {
            id:2,
            name:"Bob",
            Rate:'3.0',
            Data:'2024-04-03',
            text:"The food was okay, but the delivery took longer than expected. I ordered a burger and fries, and while the burger was decent, the fries were a bit soggy.",
            img:"https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=900"

        },
        {
            id:3,
            name:"Alia",
            Rate:'3.0',
            Data:'2024-04-20',
            text:"Decent service. However, the delivery was a bit late this time.",
            img:"https://img.freepik.com/free-photo/fashion-girl-walking-summer-city_1157-20297.jpg?t=st=1712917043~exp=1712920643~hmac=234da79983b02937042b797c89fbdcbda37ca34c4657bb4ba7eac276f1ee785f&w=900"

        },
        {
            id:4,
            name:"Ivy",
            Rate:'3.5',
            Data:'2024-04-16',
            text:"The food was average. I ordered a pizza and it was a bit greasy. The delivery was on time though. Not sure if I'll order again.",
            img:"https://img.freepik.com/free-photo/outdoor-portrait-pretty-blond-woman-wearing-orange-glasses-with-backpack_291650-490.jpg?w=900"

        },
        {
            id:5,
            name:"Diana",
            Rate:'2.5',
            Data:'2024-04-07',
            text:"The food quality was not up to the mark. Disappointed with the taste. I ordered sushi, and it tasted a bit off. The rice was too dry, and the fish didn't seem very fresh.",
            img:"https://img.freepik.com/free-photo/interested-woman-with-wavy-hair-taking-selfie_197531-16717.jpg?w=900"

        },
        {
            id:6,
            name:"Bob",
            Rate:'3.0',
            Data:'2024-04-03',
            text:"The food was okay, but the delivery took longer than expected. I ordered a burger and fries, and while the burger was decent, the fries were a bit soggy.",
            img:"https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=900"

        },
        {
            id:7,
            name:"Alia",
            Rate:'3.0',
            Data:'2024-04-20',
            text:"Decent service. However, the delivery was a bit late this time.",
            img:"https://img.freepik.com/free-photo/fashion-girl-walking-summer-city_1157-20297.jpg?t=st=1712917043~exp=1712920643~hmac=234da79983b02937042b797c89fbdcbda37ca34c4657bb4ba7eac276f1ee785f&w=900"

        },
        {
            id:8,
            name:"Ivy",
            Rate:'3.5',
            Data:'2024-04-16',
            text:"The food was average. I ordered a pizza and it was a bit greasy. The delivery was on time though. Not sure if I'll order again.",
            img:"https://img.freepik.com/free-photo/outdoor-portrait-pretty-blond-woman-wearing-orange-glasses-with-backpack_291650-490.jpg?w=900"

        },
    ]
   
    

    // // function hendelOnclick(id){
    // //     abc.map((item)=>{
    // //         if(id===item.id){
    // //             console.log(item.visabal);
    // //         }

    // //     })



    // }
    const [star,setStar]=useState(0)
    function hendelStar(id){
        setStar(id)


    }
  return (
    <div><Navbar/>
    <div className='flex flex-col justify-center items-center gap-4'>
        
        <h2 className='text-2xl font-bold  '>Reviews</h2>
        <div className='flex'>
        <button className='hover:bg-sky-700  p-2' id='1' onClick={(id)=>hendelStar(id)}>⭐</button> 
        <button className='hover:bg-sky-700  p-2' id='2' onClick={(id)=>hendelStar(id)}>⭐</button>
        <button className='hover:bg-sky-700  p-2' id='3' onClick={(id)=>hendelStar(id)}>⭐</button>
        <button className='hover:bg-sky-700  p-2' id='4' onClick={(id)=>hendelStar(id)}>⭐</button>
        <button className='hover:bg-sky-700  p-2' id='5' onClick={(id)=>hendelStar(id)}>⭐</button>
        </div>
    <div className='flex items-center gap-2'>
        
    <textarea placeholder='Write Review' cols={40} rows={3} className='border-2 border-black'></textarea>
    <button className='p-2 rounded-xl bg-[#fa4a0c] text-white'>Add</button>
    </div>
    <div>
        <h3 className='text-center text-lg font-bold'>Images From Our Customers</h3>
        <div className='flex gap-2'>
            <img className='h-[200px]' src='https://img.freepik.com/free-photo/side-view-chicken-kebab-with-red-onion-greens-dried-barberry-pita_141793-4838.jpg?t=st=1712933511~exp=1712937111~hmac=80dffb3cfa7658c4edcf9e45d91b84fcbb699aee6aebfb8d49942ffb9b77b5a8&w=826'/>
            <img className='h-[200px]' src='https://img.freepik.com/free-photo/side-view-chicken-skewers-grilled-chicken-fillet-with-red-yellow-peppers-seasoning-sauce-sesame-seeds-plate_141793-4853.jpg?t=st=1712933605~exp=1712937205~hmac=98c4b63aa3115f4c73896dd6280868e644927305a6ab8208d86f17d17a7ff985&w=826'/>
            <img className='h-[200px]' src='https://img.freepik.com/free-photo/close-up-person-holding-plate-with-tacos_23-2148329171.jpg?t=st=1712933744~exp=1712937344~hmac=5f0fb621202c3ac42198b92ee94830ed6e2279b536340d77c7578416368d2b6e&w=740'/>
        </div>
    </div>
    <div className='w-6/12'>
        {
            data.map((item) => <div id={item.id} className='flex flex-col  m-4 p-6 border-4 border-[rgba(58, 55, 55, 0.756)]'>
                <div className=' flex flex-col  '>
                    <div className='flex  items-center gap-2 '>
                <div className='flex'>
                <img src={item.img} className='h-[100px] w-[100px] rounded-full'/>
                <p className=' rounded-full bg-[#fa4a0c] text-white h-[20px] absolute ml-[78px]'>{item.Rate}</p>
                </div>
                <div>
                    <h2 className='text-lx font-bold mb-2'>{item.name}</h2>
                    <p className='text-lx font-bold mb-4'>{item.Data}</p>
                    </div>
                    </div>
                    <div>
                        <div><p>{item.text}</p></div>
            </div>
        
    </div>
    <br/>
    <hr/>
    <div>
        
    </div>

    </div>
  )
}
</div>

</div>
</div>

)}