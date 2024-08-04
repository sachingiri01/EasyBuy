import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetch_api from '../fetch/fetch';
import Simpleproductcard from '../components/SimpleProductcard';
import { toast } from 'react-toastify';
const SearchPage = () => {
    const query=useLocation();
    const nevigate=useNavigate();
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const search=query.search;
    const fetchprodcts=async()=>{
      const res=await fetch(fetch_api.searchproducts.url+search,{
        method:"post"
      })
      const response=await res.json();
      if(response.Success){
        setdata(response.products)
        setloading(false);  
      }else{
        toast.error("Something not good");
        nevigate('/');
      }
    }
    useEffect(() => {
       fetchprodcts();
    }, [search])
    useEffect(() => {
      window.scrollTo({top:0,behavior:'smooth'})
    }, [])
    
  return (
    <div className='min-h-screen text-white' >
       <p className='text-xl py-3 px-3'> Showing Results : {data.length||0}</p> 
      {
        loading?(
          <p className='text-center animate-pulse text-3xl'>Data Loading</p>
        ):(
          
          <div className='flex flex-wrap justify-evenly gap-5 py-5 px-5 '>
            
            {
             data.length===0?(
              <p className='text-center text-3xl'>No products found</p>
             ):(
               
               data.map((item)=>{
                return <Simpleproductcard item={item}/>
              })
            
             )
            }
          </div>
        )
      }
    </div>
  )
}

export default SearchPage