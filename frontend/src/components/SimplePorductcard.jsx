import React from 'react'
import Editproduct from './Editproduct'
import edit from "../assets/edit.png"
import { useState,useEffect } from 'react'
const Simpleproductcard = ({item}) => {
    return (
      
        <div   className='  cursor-pointer relative rounded-lg group block w-64 max-[550px]:w-full max-[650px]:w-48  hover:shadow-purple-400 shadow-md'>
          {/* {
               edit_show &&(
                <Editproduct details={item} onClose={()=>setedit_show(false)}/>
               )
          }
          */}
       <div className='flex overflow-hidden rounded-xl rounded-b-none bg-gray-400 items-center justify-center'>
       <img
          src={item.productimage[0]}
          alt=""
          className="h-[240px] object-fill group w-full  transition rounded-lg duration-500 group-hover:scale-105 "
        />
       </div>

        <div className="relative   text-center text-white rounded-lg rounded-t-none bg-slate-600">
          <h3 className="text-lg group-hover:underline">
          {item.brandename} -{item.productname}
        
          <p className='text-ellipsis line-clamp-1'> {item.description}</p>
         
          </h3>
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
