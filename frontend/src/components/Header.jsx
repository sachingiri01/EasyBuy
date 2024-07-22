import React, { useEffect,useState } from 'react'
import logo from "../assets/logo.png"
import login from "../assets/system-solid-8-account.gif"
import search from "../assets/system-solid-42-search (1).gif"
import cart from "../assets/system-solid-6-shopping.gif"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import fetch_api from '../fetch/fetch'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../redux/userslice'
const Header = () => {
  const user=useSelector(state=>state.user.user);
  const [display, setdisplay] = useState(false)
  const dispatch=useDispatch();
  const nevigate=useNavigate();
  const handle_logout=async()=>{
            const data=await fetch(fetch_api.logut.url,{
              method:fetch_api.logut.method,
              credentials:'include'
            })
            const fetched=await data.json();
            if(fetched.Success){
                 toast.success("Logout Sucessfully...")
                 dispatch(setUser(null))
            }else{
              toast.error('User Not found ');
            }
  }
  useEffect(() => {
    
  }, [])
  
 const handle_login=()=>{

      nevigate('/login');
 }
  return (
    <div className='text-white  px-4 h-20 flex justify-between rounded-b-lg border-b-2 items-center bg-gray-800 hover:bg-gray-900'>
  
      <div className='w-1/6'>
       <Link to="/">  <img src={logo} className='w-24 hover:cursor-pointer rounded-lg shadow-lg shadow-blue-800/40' alt="" /></Link>
      </div>

      <div className='flex w-3/12 max-[700px]:w-4/12 shadow-lg shadow-purple-700 rounded-xl'>
        <input type="text" className='rounded-l-xl w-full border-none text-gray-950 placeholder:font-mono placeholder:text-gray-900' placeholder='Search products here..' id="" />
        <img src={search} className='w-9  border-none rounded-r-xl bg-white' alt="" />
      </div>

      <div className='w-1/6 flex justify-evenly max-[990px]:w-2/6 items-center'>
      <div className='relative group'>
      {
        user&&(
          <div className='' onClick={()=>setdisplay(!display)}>
        <img src={user?user.user_profile:login} className='w-10 bg-gray-700 m-2 rounded-md hover:invert cursor-pointer hover:bg-white' alt="" />
       </div>
        )
      }
       {
        display && (
          <div className='absolute bg-gray-600 p-2 rounded-xl left-[-10px] shadow-lg shadow-indigo-700 '>
          <ul className='border-1 font-serif text-sm text-nowrap space-y-1'>
          <li>
          <Link to={"/admin-penal/all-products"} className='hover:underline hover:bg-gray-500   rounded-lg p-1 cursor-pointer'>
            Admin penal
           </Link>
          </li>
          <li>
          <Link className='hover:underline hover:bg-gray-500 p-1 rounded-lg cursor-pointer'>
            DashBoard
           </Link>
          </li>
          </ul>
        </div>
        )
       }

      </div>
       <div className='flex max-[600px]:hidden'>
        <img src={cart} className='w-10  bg-gray-700 m-2 rounded-md hover:invert hover:bg-white' alt="" />
        <a className='absolute text-blue-400 text-lg font-semibold rounded-lg  top-1'><a className='bg-red-900 rounded-lg px-2'>50</a></a>
       </div>
       <div>
        <button onClick={user?handle_logout:handle_login} className='bg-gray-500 p-2 px-3 text-xl rounded-lg hover:bg-black hover:text-white'>{user?"Logout":"Login"}</button>
       </div>
      </div>

    </div>
  )
}

export default Header
