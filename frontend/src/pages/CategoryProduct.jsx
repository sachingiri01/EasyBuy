import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect ,useState,useRef } from 'react'
import fetch_api from '../fetch/fetch'
import Productcard from "../components/SimpleProductcard"
import { productcategory } from '../helper/productcategory'
import { toast } from 'react-toastify'
const CategoryProduct = () => {
    const cat=useParams()
    const [products, setproducts] = useState([])
    const [catproduct, setcatproduct] = useState([])
    const nevigate=useNavigate()
    const [priceorder, setpriceorder] = useState('')
    const [checkcategory, setcheckcategory] = useState([cat.category])
    const fetche_data=async()=>{
        const res=await fetch(fetch_api.getfilterproduct.url,{
            method:fetch_api.getfilterproduct.method,
            credentials:'include',
            headers:{
             'Content-Type':'application/json',
           },
           body:JSON.stringify(checkcategory)
        })
        const response=await res.json();
       if(response.Success){
         setproducts(response.products);
        }else{
           toast.error("Cannot Fetch Data")
           nevigate('/')
        setproducts('')
       }
        
    }
    const nothing=()=>{
        
    }
    const handlepriceorder=(e)=>{
          setpriceorder(e.target.value)
    }
   
    
    const handlecheckedcategory=(e)=>{
        const {name,value,checked}=e.target
        
        if(checked){
            console.log(name,value,checked);
            setcheckcategory([...checkcategory,value])
        }else{
            setcheckcategory(checkcategory.filter(item=>item!=value))
        }     

    }
   
        if(priceorder=='high'){
            products.sort((a,b)=>b.selling-a.selling)
        }
       else if(priceorder=='low'){
            products.sort((a,b)=>a.selling-b.selling)
        }
   
    
    useEffect(() => {
        fetche_data();
    }, [checkcategory,priceorder])

    
  return (
         <div className='h-screen text-white  bg-gray-900 flex pl-2'>
         <div className='w-1/6 py-3 pl-2 min-h-screen sticky shadow-lg hover:shadow-indigo-300 bg-slate-800 flex flex-col gap-3'>
           <div className='flex flex-col gap-1'>
           <p className='text-xl '>Sort By</p>
           <hr className='pb-1' />
            <p className='flex gap-2  text-center items-center'> <input type="radio" name="check" onChange={handlepriceorder} id='high'  value={"high"} /> <label className='hover:cursor-pointer' htmlFor="high">Price - High To Low</label> </p>
           <p className='flex gap-2 text-center items-center'> <input type="radio" name="check" onChange={handlepriceorder} id='low' value={"low"} /><label htmlFor="low">Price - Low To High</label></p>
          <p  className='flex gap-2 text-center items-center'>  <input type="radio" name="check"  onChange={handlepriceorder} id='defalut' value={"defalut"} /><label htmlFor="defalut">Price - Deafult</label></p>
           </div>
           <div>
            <p className='text-xl pb-1'>Category</p>
            <hr className='pb-1' />
            <ul className='flex flex-col gap-1'>
                {
                    productcategory.map((item,index)=>{
                       return  <li className='flex gap-2 text-center items-center'> <input type="checkbox" name={item.label} onChange={handlecheckedcategory} checked={item.value==cat.category?true:checkcategory?.[item.value]} value={item.value} id={index} key={index}/><label className='cursor-pointer' htmlFor={index}>{item.label}</label> </li>
                    })
                }
            </ul>
           </div>
         </div>


        <div className='h-screen scroll-none overflow-y-scroll w-5/6'>
           <p className='py-2 w-5/6 px-4 text-lg absolute z-10 bg-gray-900'>Showing Result : {products?.length||0} </p>
    <div className='flex justify-evenly flex-wrap gap-5 py-4 pt-10 '>
    {
        !products?(
            <p className='text-xl text-center text-white py-4'>No item of this category available</p>
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
   </div>
  )
}

export default CategoryProduct
