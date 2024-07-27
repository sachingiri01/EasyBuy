import React from 'react'
import { useState,useEffect } from 'react'
import fetch_api from "../fetch/fetch"
const CartProductView = () => {
  const [data, setdata] = useState([])
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
    setdata(response.product)
    setloading(false);
    console.log(data);
  }
  useEffect(() => {
   fetchcartproduct();
   
  }, [])
  
  return (
    <div className='text-white'>
      <div>
        Cartproduct
      </div>
    </div>
  )
}

export default CartProductView