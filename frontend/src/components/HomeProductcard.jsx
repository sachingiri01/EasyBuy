import React from 'react'
import demo from "../assets/boAt Airdopes 111 2.webp"
import fetch_api from '../fetch/fetch';
import { useState,useEffect,useRef } from 'react';
import fastfowrad from "../assets/next.png"
import backward from "../assets/back.png"
import { Link } from 'react-router-dom'
const HomeProductcard = ({category}) => {
    const [scrool, setscrool] = useState(0);
    const scrollElement = useRef(null)
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true)
    const fetch_products=async(category)=>{
        const res=await fetch(fetch_api.getallcatproduct.url,{
            method:fetch_api.getallcatproduct.method,
            headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({category :{category:category.value}})
        })
        const response=await res.json();
        setdata(response.product)
    }
    useEffect(() => {
  
        fetch_products(category)
        setloading(false)
      
    }, [])
    
    const rightScroll = () => {
        if (scrollElement.current) {
          scrollElement.current.scrollLeft += 300;
        }
      };
    
      const leftScroll = () => {
        if (scrollElement.current) {
          scrollElement.current.scrollLeft -= 300;
        }
      };
  return (
   <>
            <div  className='text-white p-4 '>
                 <p className='text-2xl py-2 capitalize'>Top's {category.value}</p>
            <div ref={scrollElement} className='flex gap-3 px-2 shadow rounded-lg hover:translate-x-3 transition duration-300   hover:shadow-lg shadow-gray-400  relative overflow-x-scroll scroll-none bg-gray-900 py-2'>
                 {/* <img src={backward} onClick={leftScroll} className='w-8 max-[600px]:hidden hover:invert  absolute left-0 rounded-lg bottom-16' alt="" /> */}
            
            {
              loading?(
                <div className='animate-pulse   items-center '>
                 
                <div className='text-white w-80 flex justify-center items-center  hover:scale-105 transition duration-200  gap-1 group hover:cursor-pointer hover:bg-gray-600  bg-gray-700 rounded-lg'>
                 <img  className='w-36  object-scale-down h-36 rounded-md bg-gray-500' alt="" />
                 <div className='w-40 items-center  gap-1 py-4  flex flex-col'>
                   <p className='text-xl group-hover:underline font-semibold pl-2 text-left h-7  bg-gray-500 rounded-lg w-full line-clamp-1'></p>
                   <p className='font-light text-left pl-2 h-7  bg-gray-500 rounded-lg w-full'></p>
                   <div className='flex w-full justify-evenly'>
                      <span className='text-red-500 font-semibold h-7 w-2/5  bg-gray-500 rounded-lg'></span>
                      <span className='line-through h-7  w-2/5 bg-gray-500 rounded-lg'>  </span>
                   </div>
                
                  <button className='px-2    cursor-pointer hover:ring-2 h-6  bg-gray-500  rounded-lg'> N G</button>
                  
                 </div>
                 </div>
                </div>
             ):( data.map((index)=>{
                 console.log(index)
                    return(
                       <div>
                 
                <Link to={`/Product-details/${index._id}`} className='text-white w-80 flex  hover:scale-105 transition duration-200  gap-1 group hover:cursor-pointer hover:bg-gray-600  bg-gray-700 rounded-lg'>
                 <img src={index.productimage[0]} className='w-40 h-40  object-scale-down  rounded-md bg-gray-500' alt="" />
                 <div className='w-40 items-center  gap-1 py-4  flex flex-col'>
                   <p className='text-xl group-hover:underline font-semibold pl-2 text-left w-full line-clamp-1'>{index.productname}</p>
                   <p className='font-light text-left pl-2 w-full'>{index.brandename}</p>
                   <div className='flex w-full justify-evenly'>
                      <span className='text-red-500 font-semibold'>₹{index.selling}</span>
                      <span className='line-through'>₹{index.price}</span>
                   </div>
                
                  <button className='px-2 mt-2 w-28 hover:bg-red-600 cursor-pointer hover:ring-2 bg-red-500 rounded-lg'>Add to Cart</button>
                  
                 </div>
                 </Link>
                </div>
                    )
                 }  ) )
             }
     
             {/* <img src={fastfowrad} onClick={rightScroll} className='w-8 max-[600px]:hidden hover:invert cursor-pointer sticky h-8 right-0 rounded-xl bottom-0' alt="" /> */}
            </div>
           
          </div>
   </>
  )
}

export default HomeProductcard
