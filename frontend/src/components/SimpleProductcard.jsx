import React from 'react'
import Editproduct from './Editproduct'
import edit from "../assets/edit.png"
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Simpleproductcard = ({item}) => {
  const nevigate=useNavigate();
    const show=()=>{
      console.log(item);
    }
    return (
      
        <div  onClick={()=> nevigate(`/Product-details/${item.category}/${item._id}`)}   className='  cursor-pointer relative rounded-lg group block w-64 max-[550px]:w-full max-[650px]:w-48  hover:shadow-purple-400 shadow-md'>
          {/* {
               edit_show &&(
                <Editproduct details={item} onClose={()=>setedit_show(false)}/>
               )
          }
          */}
       <div className='flex overflow-hidden rounded-xl rounded-b-none bg-gray-400 items-center justify-center'>
       <img
          src={item.productimage[0]}
          alt="Image"
          className="h-[200px] object-scale-down bg-white group w-full  transition rounded-lg duration-500 group-hover:scale-105 "
        />
       </div>

        <div className="relative   text-center text-white rounded-lg rounded-t-none bg-slate-600">
          <h3 className="text-lg group-hover:underline line-clamp-1">
          {item.brandename} -{item.productname}
          </h3>
          <p className='text-ellipsis line-clamp-1'> {item.description}</p>
         
         
          <p className="text-sm flex justify-evenly">
            <span className="">Price : ₹{item.price}</span>

            <span className="text-red-300">Selling : {item.selling}  </span>
          </p>
        </div>
    
        <div className='absolute bottom-20 right-2 hover:cursor-pointer hover:invert hidden group-hover:block'>
          <img src={edit} className='invert w-8' alt="" />
        </div>
        <div>
       
        </div>
        
  </div>
  
      
       
  
      )
}

export default Simpleproductcard
