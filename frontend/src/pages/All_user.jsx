import React from 'react'
import fetch_api from '../fetch/fetch';
import { useState,useEffect,useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import edit from "../assets/edit.gif"
import moment from "moment"
import "../all_custom.css"
import { setUpdate_user } from '../redux/update_user'
import { toast } from 'react-toastify';
import Change_user_detail from '../components/Change_user_detail';
import { useDispatch } from 'react-redux'
const All_user = () => {
    const [data, setdata] = useState([]);
    const [show, setshow] = useState(false)
    const [detail, setdetail] = useState([])
    const dispatch =useDispatch();
    const nevigate=useNavigate();
    const fetch_users=async()=>{
        const details=await fetch(fetch_api.all_user.url,{
            method:fetch_api.all_user.method,
            credentials:'include'
        })
        const detail=await details.json()
        if(detail.Success){
           toast.success("Users Fetched Successfully")
            setdata(detail.all_user);
        }else{
            toast.error("Error Occured")
            nevigate('/login');
        }
    }
   const set_show=()=>{
    setshow(false);
   }
    useEffect(() => {
        fetch_users();
    }, [])
    const Set_user = () => {
      const updateUser = (item) => () => {
        setshow(true);
        dispatch(setUpdate_user(item));
      };
    
      return data.map((item) => (
        <tr key={item._id}>
          <td className='text-sm'>{item._id}</td>
          <td>{item.name}</td>
          <td className="text-sm">{item.email}</td>
          <td>{item.isadmin ? "Admin" : "Not Admin"}</td>
          <td className='max-[1050px]:hidden'>{moment(item.updatedAt).format('lll')}</td>
          <td className=" flex justify-center items-center bg-purple-900">
            <img
              src={edit}
              onClick={updateUser(item)}
              className="w-10 rounded-lg cursor-pointer"
              alt="Edit"
            />
          </td>
        </tr>
      ));
    };
    
  return (
    <div className='min-h-screen w-full  overflow-y-visible text-wrap  bg-slate-800 rounded-lg hover:shadow-purple-600 shadow-lg text-white'>
           <table className='text-center w-full table_css  text-wrap  font-normal rounded-lg'>
            <thead className=''>
                <th> _ID </th>
                <th>Name</th>
                <th>Email</th>
                <th>isAdmin</th>
                <th className='max-[1050px]:hidden'>LastUpdate</th>
                <th>Edit</th>
            </thead>
            <tbody className=''>
                {
             
                 <Set_user />
                }
            </tbody>
           </table>
          {
            show &&(
                <Change_user_detail  closePopup={set_show}/>
            )
          }
    </div>
  )
}
export default All_user
