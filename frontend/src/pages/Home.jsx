import React from 'react'
import "../all_custom.css"
import fetch_api from '../fetch/fetch'
import { useState,useEffect } from 'react'
import forward from "../assets/fast-forward.png"
import backward from "../assets/rewind.png"
import HomeProductcard from "../components/HomeProductcard"
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.webp"
import img1_mob from "../assets/img1_mobile.jpg"
import img2_mob from "../assets/img2_mobile.webp"
import img3_mob from "../assets/img3_mobile.jpg"
import img4_mob from "../assets/img4_mobile.jpg"
import img5_mob from "../assets/img5_mobile.png"
import Verticalproduct from '../components/Verticalproduct'
import { productcategory } from '../helper/productcategory'


import { Link } from 'react-router-dom'
const Home = () => {
  const [navproduct, setnavproduct] = useState([])
  const [loading, setloading] = useState(true)
  const pc_array=[img1,img2,img3,img4,img5];
  const mob_array=[img1_mob,img2_mob,img3_mob,img4_mob,img5_mob];
  const [Index, setIndex] = useState(0);
  const fetch_product=async()=>{
    const response =await fetch(fetch_api.getproductbycategory.url,{
      method:fetch_api.getproductbycategory.method,
      credentials:'include',
      headers:{
       'Content-Type':'application/json',
     }
    })
    
    const res=await response.json();
    setnavproduct(res.products)
    setloading(false)
  }
  useEffect(() => {
      fetch_product()
     
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 5);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [])
  
  const nullarray=new Array(13).fill(null)
  
  return (
    <div className='min-h-screen'>
      <div className='flex items-center bg-gray-700  md:justify-between scroll-none gap-5 px-2 overflow-scroll py-2 pb-1'>
         { loading?(
           nullarray.map((item,index)=>{
            return(
             <Link className=''>
               <img  key={index+1000} className='bg-gray-500 animate-pulse object-scale-down p-1 peer w-20 md:w-20 hover:scale-110 transition duration-200  hover:cursor-pointer shadow-lg  hover:shadow-indigo-400 md:h-16 h-14 rounded-full'  />
             
             </Link>
  
            )
          })
         ):(
          navproduct.map((item,index)=>{
          return(
           <Link to={"category-product/"+item.category} className=''>
             <img src={item.productimage[0]} key={index} className='bg-gray-500 object-scale-down p-1 peer w-20 md:w-20 hover:scale-110 transition duration-200  hover:cursor-pointer shadow-lg  hover:shadow-indigo-400 md:h-16 h-14 rounded-full'  />
             <p className='text-center capitalize text-sm md:text-base pt-1 peer-hover:underline text-white'>{item.category}</p>
           </Link>

          )
        } )
          )
         }
          
       
       
      </div>


      <div className='animate-pulse h-72 max-[650px]:hidden mx-auto rounded-b-lg'>
            <img src={pc_array[Index]} className='object-fit w-full h-72' alt="" />  
      </div>
      <div className='animate-pulse h-72 min-[650px]:hidden mx-auto rounded-b-lg'>
            <img src={mob_array[Index]} className='object-fit w-full max-[600px]:h-60 h-72' alt="" />  
      </div>

      <div className='py-3'>
     
           
           {/* {
            productcategory.map((item)=>{
           
            return  <HomeProductcard category={item}  />
            })
           } */}
           <HomeProductcard category={productcategory[0]}  />
           <HomeProductcard category={productcategory[1]}  />
           <HomeProductcard category={productcategory[2]}  />
           <Verticalproduct category={productcategory[3]}  />
           <HomeProductcard category={productcategory[4]}  />
           <HomeProductcard category={productcategory[5]}  />
           <HomeProductcard category={productcategory[11]}  />
           <Verticalproduct category={productcategory[7]}  />
           <HomeProductcard category={productcategory[8]}  />
           <Verticalproduct category={productcategory[9]}  />
           <HomeProductcard category={productcategory[10]}  />
           <HomeProductcard category={productcategory[6]}  />

          
      </div>

   </div>
  )
}

export default Home
