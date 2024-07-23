import React from 'react'
import Editproduct from './Editproduct'
import edit from "../assets/edit.png"
import { useState } from 'react'
const Prductcard = ({item}) => {
    const [edit_show, setedit_show] = useState(false)
    const edit_show_set=()=>{
        setedit_show(false)
    }
    return (
      
        <div onClick={()=>setedit_show(true)}  className='  cursor-pointer relative rounded-lg group block overflow-hidden hover:shadow-purple-400 shadow-md'>
          {
               edit_show &&(
                <Editproduct details={item} onClose={()=>setedit_show(false)}/>
               )
          }
         
       <div className='flex bg-gray-400 items-center justify-center'>
       <img
          src={item.productimage[0]}
          alt=""
          className="h-[240px] group w-full object-cover transition rounded-lg duration-500 group-hover:scale-105 "
        />
       </div>

        <div className="relative  text-center text-white bg-slate-600">
          <h3 className="text-lg group-hover:underline">
           {item.productname} - {item.brandename}
          </h3>

          <p className="text-sm flex justify-evenly">
            <span className="">Price : ${item.price}</span>

            <span className="text-red-300">Selling : ${item.selling}  </span>
          </p>
        </div>
    
        <div className='absolute bottom-14 right-2 hover:cursor-pointer hover:invert hidden group-hover:block'>
          <img src={edit} className='invert w-8' alt="" />
        </div>
        <div>
       
        </div>
        
  </div>
  
      
       
  
      )
}

export default Prductcard
