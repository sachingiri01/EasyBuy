import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect ,useState,useRef } from 'react'
import fetch_api from '../fetch/fetch'
import Productcard from "../components/SimpleProductcard"
const CategoryProduct = () => {
    const [products, setproducts] = useState([])
    const cat=useParams()
    const fetche_data=async()=>{
        const res=await fetch(fetch_api.getallcatproduct.url,{
            method:fetch_api.getallcatproduct.method,
            credentials:'include',
            headers:{
             'Content-Type':'application/json',
           },
           body:JSON.stringify({category:cat})
        })
        const response=await res.json();
        setproducts(response.product);
        
    }
    const nothing=()=>{
        
    }
    useEffect(() => {
        fetche_data();
    }, [])
    
    
  return (
         <div className='min-h-screen'>
        <div className='flex flex-wrap gap-5 p-4 '>
     {
        !products?(
            <p className='text-xl text-center text-white'>No item of this category available</p>
        ):(
           
            products.map((item)=>{
              
                return (
                    <Productcard item={item} get_data={nothing} />
                )
            })
        )
     }
   
   </div>
   </div>
  )
}

export default CategoryProduct
