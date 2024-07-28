import React from 'react'
import { useState,useEffect } from 'react'
import fetch_api from "../fetch/fetch"
import minus from "../assets/minus.png"
import plus from "../assets/plus.png"
const CartProductView = () => {
  const [carts, setcarts] = useState([])
  const [loading, setloading] = useState(true)
  const fetchcartproduct=async()=>{
    const res=await fetch(fetch_api.getcartproduct.url,{
      method:fetch_api.getcartproduct.method,
      credentials:"include",
      headers:{
        "Content-Type": "application/json",
      }

    })
    const response=await res.json();
    console.log(response);
    setcarts(response.product)
    setloading(false);
  }
  useEffect(() => {
   fetchcartproduct();
  }, [])

  
  return (
    <div className='text-white min-h-screen m-3 rounded-lg bg-slate-700'>
      <div className='flex justify-around py-3'>
      <div className='w-7/12  flex flex-col gap-2 max-h-screen overflow-y-scroll overflow-x-hidden scroll-none'>
       {
        loading||carts.length==0?(
          <div className='one w-full  transition duration-150 hover:translate-x-4  rounded-md bg-gray-600'>
          <div className='flex gap-2 '>
           <div className='w-40  h-40 bg-gray-400 animate-pulse rounded-md'>
             
           </div>
           <div className='py-2 flex flex-col justify-evenly'>
             <p className='text-2xl line-clamp-1 w-80 rounded-lg animate-pulse h-8 bg-gray-400'></p>
             <p className='text-purple-400'>{}</p>
             <p className='text-xl text-red-400'>₹{}</p>
             <div className='flex gap-3'>
               <img src={minus} className='w-8 cursor-pointer invert bg-yellow-500 p-1 rounded-md border-red-300 ' alt="" />
               <span className='animate-pulse rounded-md w-10 h-8 bg-gray-400'></span>
               <img src={plus} className='w-8 p-1 cursor-pointer invert bg-yellow-500 rounded-md border-red-300 ' alt="" />
             </div>
           </div>
          </div>
          <p>No Carts Products</p>
     </div>
        ):(
          
            carts.map((item)=>{
                 return(
                  <div className='one w-full  transition duration-150 hover:translate-x-4  rounded-md bg-gray-600'>
          <div className='flex gap-2 '>
           <div className=' bg-white h-44 w-44 flex justify-center items-center rounded-md'>
             <img src={item.productid.productimage[0]} className='h-44 max-w-44 object-scale-down rounded-md ' alt="" />
           </div>
           <div className='py-2 flex flex-col justify-evenly'>
             <p className='text-2xl line-clamp-1'>{item.productid.productname}</p>
             <p className='text-purple-400'>{item.productid.category}</p>
             <p className='text-xl text-red-400'>₹{item.productid.selling}</p>
             <div className='flex gap-3'>
               <img src={minus} className='w-8 cursor-pointer invert bg-yellow-500 p-1 rounded-md border-red-300 ' alt="" />
               <span >{item.quantity}</span>
               <img src={plus} className='w-8 p-1 cursor-pointer invert bg-yellow-500 rounded-md border-red-300 ' alt="" />
             </div>
           </div>
          </div>
     </div>
                 )
            })
          
        )
       }

       </div>
        {
          !loading||carts.length==0?(
            <div className='two animate-pulse rounded-lg clear-start w-3/12 max-h-80 bg-gray-400'>
     
        </div>
          ):(
            <div className='two clear-start w-3/12 max-h-80 bg-green-400'>
     
        </div>
          )
        }
         
      </div>
    </div>
  )
}

export default CartProductView