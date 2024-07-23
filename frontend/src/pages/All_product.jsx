import React from 'react'
import Upload_product from '../components/Upload_product'
import { useState,useEffect,useReducer,useRef } from 'react';

import fetch_api from '../fetch/fetch';
import Prductcard from "../components/Prductcard"

const All_product = () => {
  const [show, setshow] = useState(false);
  const [data, setdata] = useState(null)
  const handle_show=()=>{
    setshow(false);
  }
  const get_data=async()=>{
    const res=await fetch(fetch_api.getproducts.url,{
      method:fetch_api.getproducts.method,
      credentials:"include"
    })
    const response=await res.json();
    if(response.products!=null)  setdata(response.products);
  }
  useEffect(() => {
      get_data();
  }, [show])
  
  return (
    <div className='min-h-screen relative  w-full'>
       
  <div className=" px-2 ">
    <header className='bg-slate-700 flex justify-between p-2 rounded-lg hover:ring-1 shadow-md hover:shadow-indigo-700'>
      <h2 className="text-xl font-bold sm:text-3xl">Product Collection</h2>
       <button className='bg-purple-600 rounded-lg px-2 hover:bg-purple-700' onClick={()=>setshow(true)}>Upload Products</button>
    </header>

    <div className="mt-8">
      <p className="text-sm">Showing <span> 10 </span> of 40</p>
    </div>
   
   
    <div className='relative p-2 grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[650px]:grid-cols-2 max-[500px]:grid-cols-1 gap-3 flex-wrap'>
    {
     data?(
      data.map((item)=>{

        return(
          <Prductcard item={item}/>
        )
      })
     ): <p className='text-white text-center text-2xl'>You havent Uploaded Any Products yet</p>
     
    }

</div>


    

    <div className='absolute bottom-0 w-full items-center'>
    <ol className="mt-8 items-center bottom-0 flex justify-center gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a href="#" className="block size-8 rounded border border-gray-100 hover:bg-purple-700 text-center leading-8">
          1
        </a>
      </li>

      <li className="block size-8 rounded border-gray-500 bg-purple-800 text-center leading-8 text-white">2</li>

      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
    </div>
   
  </div>
    {
      show&&(
        <Upload_product onclose={handle_show}/>
      )
    }
   
    </div>
  )
}

export default All_product
