import React from 'react'
import cross from "../assets/letter-x.gif"
import { useState,useEffect } from 'react'
import logo from "../assets/profile.gif"
import bin from "../assets/bin.png"
import upld from "../assets/upload.png"
import Productimage from './productimage'
import { productcategory } from '../helper/productcategory'
import uploadimage from '../helper/uploadimage'
import fetch_api from '../fetch/fetch'
import { toast } from 'react-toastify'

  
const Editproduct = ({details,onClose,}) => {
    const [imagearray, setimagearray] = useState([])
   const [data, setdata] = useState({
    _id:details._id,
    productname:details?.productname,
    brandename:details?.brandename,
    category:details?.category,
    productimage:details?.productimage,
    description:details?.description,
    price:details?.price,
    selling:details?.selling
   })
   const [image_view, setimage_view] = useState('')
   const [show, setshow] = useState(false)
   const handle_upload_image=async(item)=>{
      const file=item.target.files[0];
       setimagearray(file.name)
     
           const uploadimgage_=await uploadimage(file)
           setdata((prev)=>{
            return{
               ...prev,
               productimage:[...prev.productimage,uploadimgage_.url]
            }
           }); 
   }
   const handle_uplload=async()=>{
      
         const respon =await fetch(`${fetch_api.updateproduct.url}`,{
            method:fetch_api.updateproduct.method,
            credentials:"include",
            headers:{
               'Content-Type':'application/json',
             },
             body:JSON.stringify(data)
         }) 
         const resp=await respon.json()
         console.log(resp)
         if(resp.Success){
            toast.success(resp.message);
            onClose();
         }else{
            toast.error(resp.message);
         }
   }
   const handle_delete_image=async(index)=>{
          const curr_url=data.productimage[index]
         //  await cloudinary.uploader.destroy(curr_url);
          const new_image=data.productimage.filter((item,ide)=>{
            return ide!=index
          })
          setdata((prevData) => ({
            ...prevData,
            productimage: new_image
          }));
   }
   const handle_price=(e)=>{
      setdata((prev)=>({
          
            ...prev,
            price:e.target.value
          
      }))

   }
 
   const handle_sell_price = (event) => {
      const newValue = Number(event.target.value);
      setdata(prevDetails => ({
        ...prevDetails,
        selling: newValue
      }));
    };
    
      const handle_product=(e)=>{
         setdata((prev)=>{
             return {
               ...prev,
               productname:e.target.value
             }
         })
   }
   const handle_detail=(e)=>{
      setdata((prev)=>{
          return {
            ...prev,
            description:e.target.value
          }
      })
}
const handle_brand=(e)=>{
   setdata((prev)=>{
       return {
         ...prev,
         brandename:e.target.value
       }
   })
}
const handle_category=(e)=>{
   setdata((prev)=>{
       return {
         ...prev,
         category:e.target.value
       }
   })
}
const handle_close=()=>{
    onClose();
}

  return (
  
    <div onClick={handle_close} className='fixed top-0 z-10 backdrop-blur-sm left-0 py-5 right-0 items-center bottom-0 '>
    <div onClick={(e) => e.stopPropagation()} className='w-7/12 max-[800px]:w-11/12 px-5 mx-auto bg-slate-700 h-full overflow-y-scroll rounded-lg p-3'>
       <div className='flex justify-between'>
       <span className='text-xl'>Edit Products here...</span>   
       <img src={cross} className='w-9 mx-2 rounded-lg  cursor-pointer hover:invert'  onClick={handle_close} />
       </div>
       <div className='grid gap-2 '>
           <label htmlFor="pname" className='text-lg'>Product Name : </label>
           <input required type="text" onChange={handle_product} value={data.productname} id='pname' className='w-full text-white placeholder:text-white border focus:ring-2 ring-slate-600 rounded-lg bg-slate-800' placeholder='Enter product name' />
           <label htmlFor="bname" className='text-lg'>Brand Name : </label>
           <input required type="text" onChange={handle_brand} value={data.brandename}  id='bname' className='w-full text-white placeholder:text-white border focus:ring-2 ring-slate-600 rounded-lg bg-slate-800' placeholder='Enter Brand name' />
        
           <label htmlFor="category" className='text-lg'>Category Name : </label>
           <select name=""id='category'onChange={handle_category} value={data.category}  className='w-full  text-white  border bg-slate-800' placeholder='Enter Category name' >
                
                <option value="option">Select Category</option>
              {
               productcategory.map((item,index)=>{
                  return <option id={item.id} value={item.value}>{item.label}</option>
               })
              }
           </select>
         
           <label htmlFor="productimage" className='text-lg'>Product Name : </label>
           
               <label htmlFor="uploadimgage" className=''>
           <div  type="text" id='productimage' className='w-full hover:cursor-pointer h-36 hover:bg-blue-700 text-white flex  flex-col justify-center  items-center   placeholder:text-white border focus:ring-2 ring-slate-600 rounded-lg bg-slate-800'>
               
               <img src={upld}  className='w-12 invert p-1  rounded-lg' alt="" />
               <p className='text-center'>Upload Image</p>
               <input type="file" onChange={handle_upload_image} className='hidden' name="uploadimgage" id="uploadimgage" />
               
               </div>   </label> 
          <div className='h-16 flex gap-1 px-1 items-center bg-slate-800 rounded-lg w-auto'>
          {
           data.productimage?(
             data.productimage.map((item,index)=>{
                return <>
                 <div className='relative'>
                 <img src={item} alt="" className='w-14 bg-gray-500 cursor-pointer h-14 rounded-lg' onClick={()=>{
                   setshow(true)             
                   setimage_view(item)
                }} />
                <img src={bin} className='absolute hover:cursor-pointer hover:invert  top-0 right-0 w-4' onClick={()=>handle_delete_image(index)} alt="" />
                 </div>
                </>
             })
           ):(
             <span>Upload images</span>
           )
          }
           </div>           



           <label htmlFor="detail" className='text-lg'>Details : </label>
           <textarea type="text" id='detail' onChange={handle_detail} value={data.description} className='w-full text-white placeholder:text-white border focus:ring-2 text-wrap ring-slate-600 rounded-lg bg-slate-800' placeholder='Product details ' />
         
           <div className='flex justify-evenly gap-3'>
           <input type="number"  onChange={handle_price}  value={data.price} id='price'  className=' text-white placeholder:text-white border focus:ring-2 ring-slate-600 rounded-lg bg-slate-800' placeholder='Enter Price' />
         
         
       
         <input type="number"  onChange={handle_sell_price} value={data.selling} id='pseling' className=' text-white placeholder:text-white border focus:ring-2 ring-slate-600 rounded-lg bg-slate-800' placeholder='Enter Selling Price' />
           </div>
         <div className='flex items-center justify-center'> <button onClick={handle_uplload} className='p-1 w-5/6 my-3 bg-red-600 px-3 text-white rounded-lg hover:cursor-pointer'>  Update Now </button></div>
       </div>
    </div>
  
       {
          show &&(
             <Productimage onclose={()=>setshow(false)} url={image_view} />
          )
       }
      
</div>
  )
}

export default Editproduct
