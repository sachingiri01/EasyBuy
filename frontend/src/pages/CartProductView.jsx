import React from 'react'
import { useState,useEffect } from 'react'
import fetch_api from "../fetch/fetch"
import minus from "../assets/minus.png"
import { useNavigate } from 'react-router-dom';
import plus from "../assets/plus.png"
import { toast } from 'react-toastify';
import trash from "../assets/trash.png"
const CartProductView = () => {
  const nevigate=useNavigate()
  const [carts, setcarts] = useState([])
  const [change, setchange] = useState(true)
  const [totalprice, settotalprice] = useState(0)
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
    setcarts(response.product)
    if(!response.Success){
      
      nevigate('/')
    }
    setloading(false);
  }
  const handledeletecart=async(_id)=>{
    const res=await fetch(fetch_api.deletecartitem.url,{
      method:fetch_api.deletecartitem.method,
      credentials:"include",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({_id:_id})

    })
    const response=await res.json();
    if(response.Success){
      toast.success(response.message);
      setchange(!change);
    }else{
      toast.error("Unable to Delete Now");
    }
  }
  useEffect(() => {
   fetchcartproduct();
  }, [change])
  const updatequantitycart=async(toincrement,_id,quantity)=>{
    if(quantity==0&&!toincrement){
      toast.error("Cannot Reduce more")
      }else{
        const res=await fetch(fetch_api.updatequantitycart.url,{
          method:fetch_api.updatequantitycart.method,
          credentials:"include",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({toincrement:toincrement,_id:_id})
         })
         const response=await res.json();
         setchange(!change)
       
      }
       
  }
  useEffect(() => {
   
    let newTotalPrice = 0;
    carts.forEach(item => {
      newTotalPrice += item.quantity * item.productid.selling;
    });
    settotalprice(newTotalPrice);
  }, [carts]); 
  
  return (
    <div className='text-white m-3 min-h-screen rounded-lg bg-slate-700'>
      <div className='flex max-[850px]:flex-col justify-around gap-4 py-3'>
      <div className='w-7/12 max-[850px]:w-full max-[850px]:px-2  flex flex-col gap-3 max-h-screen overflow-y-scroll overflow-x-hidden scroll-none'>
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
          
          carts.map((item) => {
            return (
              <div key={item._id} className='one w-full hover:shadow-md hover:shadow-indigo-400 transition duration-150 hover:translate-x-4 rounded-md bg-gray-600'>
                <div className='flex gap-2 relative'>
                  <div className='bg-white h-44 w-44 flex justify-center items-center rounded-md'>
                    <img src={item.productid.productimage[0]} className='h-44 max-w-44 object-scale-down rounded-md' alt="" />
                  </div>
                  <div className='py-2 flex flex-col justify-evenly flex-grow'>
                    <p className='text-2xl line-clamp-1'>{item.productid.productname}</p>
                    <p className='text-purple-400'>{item.productid.category}</p>
                    <div className='flex gap-4 justify-between px-3 pr-6'>
                      <p className='text-xl text-red-400 font-semibold'>₹{item.productid.selling}</p>
                      <p className='text-xl font-semibold'>₹{(item.productid.selling * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className='flex gap-3'>
                      <img src={minus} onClick={() => updatequantitycart(false, item._id, item.quantity)} className='w-8 cursor-pointer invert bg-yellow-500 p-1 rounded-md border-red-300' alt="" />
                      <span>{item.quantity}</span>
                      <img src={plus} onClick={() => updatequantitycart(true, item._id, item.quantity)} className='w-8 p-1 cursor-pointer invert bg-yellow-500 rounded-md border-red-300' alt="" />
                    </div>
                  </div>
                  <div className='absolute top-3 right-5'>
                    <img src={trash} onClick={() => handledeletecart(item._id)} className='invert z-10 bg-cyan-400 w-8 hover:bg-cyan-500 p-1 rounded-md hover:cursor-pointer' alt="" />
                  </div>
                </div>
              </div>
            )
          })
          
        )
       }

       </div>
        {
          loading||carts.length==0?(
            <div className=' animate-pulse rounded-lg clear-start max-[850px]:w-full w-3/12 h-80 bg-gray-400'>
            
        </div>
          ):(
            <div className=' w-3/12 max-[850px]:w-full bg-cyan-800 rounded-lg h-40 '>
            <div className=''>
              <p className='bg-red-400 text-2xl py-1 px-2 rounded-t-lg'>Cart's Summary</p>
              <div className='space-y-3 py-3'>
                <div className='text-gray-100 text-xl flex justify-between px-4 font-semibold'>
                  <p >Quantity</p>
                  <p>{carts.length}</p>
                </div>
                <div className='text-gray-100 text-xl flex justify-between px-4 font-semibold'>
                  <p >Total Price</p>
                  <p className='text-black'>₹{totalprice.toFixed(2)}</p>
                </div>
                <button className='w-full py-1 text-xl rounded-b-lg hover:bg-red-500 bg-blue-600'>Payment</button>
              </div>
            </div>
        </div>
          )
        }
         
      </div>
    </div>
  )
}

export default CartProductView