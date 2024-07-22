import React from 'react'
import Upload_product from '../components/Upload_product'
import { useState,useEffect,useReducer,useRef } from 'react';
const All_product = () => {
  const [show, setshow] = useState(false);
  const handle_show=()=>{
    setshow(false);
  }
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
   
    <div className='p-2'>
  
    <div className='w-3/12 bg-red-500 rounded-lg group block overflow-hidden hover:shadow-purple-400 shadow-md'>
  
        
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="w-full object-cover transition rounded-lg duration-500 group-hover:scale-105 "
          />

          <div className="relative text-center text-white bg-slate-600">
            <h3 className="text-lg group-hover:underline">
              Basic Tee
            </h3>

            <p className="text-sm">
              <span className=""> Regular Price :</span>

              <span className=""> £24.00 GBP </span>
            </p>
          </div>
     
    </div>
      




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
