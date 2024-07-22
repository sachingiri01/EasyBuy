import React, { useState,useEffect } from 'react'
import upd from "../assets/verified.gif"
import cross from "../assets/letter-x.gif"
import moment from "moment"
import fetch_api from '../fetch/fetch'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setUpdate_user } from '../redux/update_user'
const Change_user_detail = ({ closePopup }) => {
  const [isadmin, setisadmin] = useState("");
  const [name, setname] = useState("")
  const [_id, set_id] = useState('')
  const [updatedAt, setupdatedAt] = useState('')
  const [email, setemail] = useState('')
  const dispatch =useDispatch();
  const user = useSelector((state) => state.update_user.user);
  useEffect(() => {
     
    if (user) {
      setname(user.name || "");
      setemail(user.email || "");
      setisadmin(user.isadmin ? "true" : "false");
      set_id(user._id || "");
      setupdatedAt(user.updatedAt || "");
    }
   
  }, []);
  const hanlde_update_user=async()=>{
           console.log("is this working")
            const update=await fetch(fetch_api.update_user.url,{
              method:fetch_api.update_user.method,
              credentials:"include",
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({
                name:name,
                email:email,
                _id:user._id,
                isadmin:isadmin
              })
            })
            const res=await update.json();
            if(res.Success){
              toast.success(res.message);
              closePopup();
              dispatch(setUpdate_user(null));

            }else{
              toast.error(res.message);
              closePopup();
              dispatch(setUpdate_user(null));
            }
  }
  return (
    <div className='fixed top-0 bottom-0 w-full right-0 left-0 flex items-center justify-center backdrop-blur-sm '>
      <div className='bg-gray-700 p-5 rounded-lg'>
        <div className='flex justify-end'> <img src={cross}className='w-8 rounded-lg hover:cursor-pointer hover:invert' alt="" onClick={closePopup}/></div>
        <p className='text-xl hover:underline shadow-lg my-2 mb-4 text-center shadow-purple-600 rounded-lg px-1'>Changing details....</p>
            <div className=' grid grid-cols-2 gap-3'>
             
                _ID :  <input type="text" className='bg-gray-800 rounded-lg focus:ring-2' readOnly value={_id} />
              
              
                Name :<input type="text" onChange={(e)=>setname(e.target.value)} className='bg-gray-800 rounded-lg focus:ring-2'  value={name} />
              
              
                  Email :<input type="text" onChange={(e)=>setemail(e.target.value)} className='bg-gray-800 rounded-lg focus:ring-2'  value={email} />
              
              
                Make Admin : <select onChange={(e)=>setisadmin(e.target.value)} className='bg-gray-800 rounded-lg focus:ring-2'>
                  <option value={true}>Make as Admin</option>
                  <option value={false}>Remove as Admin</option>
                </select>
              
               
                Last Update : <input type="text" className='bg-gray-800 rounded-lg focus:ring-2' readOnly value={moment(updatedAt).format('lll')}/>
               
              
            </div>
                <div className='flex justify-center py-2 pt-4'>
                <button className='bg-green-500 rounded-lg  p-1 px-2 hover:bg-green-600 shadow-md shadow-green-500' onClick={hanlde_update_user}>Update</button>
                </div>
      </div>
    </div>
  )
}

export default Change_user_detail
