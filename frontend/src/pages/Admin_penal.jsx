import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Profile from "../assets/profile.gif"
import { setUser } from '../redux/userslice'
import { useDispatch,useSelector } from 'react-redux';
const Admin_penal = () => {
   
  const Dispatch =useDispatch();
  const user=useSelector(state=>state.user.user);






  const Sidebar = () => (
    <div className="text-white w-full">
      <div className="p-3 text-xl flex flex-col items-center w-full gap-1">
        <img src={user?user.user_profile:Profile} className='w-16 rounded-xl' alt="" />
        <p >{user?user.name:"User"}</p>
        <p className=' text-gray-100 bg-purple-600 rounded-lg px-1 hover:font-semibold'>{user?user.isadmin?"Admin":"Genral":"Not logined"}</p>
      </div>
      <nav className="mt-2 max-[1000px]:text-xl text-lg font-normal">
        <ul>
          <li className="p-2 hover:bg-gray-600">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="p-2 hover:bg-gray-600">
            <Link to="all-products">Products</Link>
          </li>
          <li className="p-2 hover:bg-gray-600">
            <Link to="orders">Orders</Link>
          </li>
          <li className="p-2 hover:bg-gray-600">
            <Link to="all-users">All Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  
  return (
    <>
    <div className='min-h-screen flex text-white pb-3 p-1'>
         <div className='w-2/12 min-h-screen text-center  rounded-r-xl shadow-lg hover:shadow-indigo-600  bg-gray-800'>
             <Sidebar/>
         </div>
         <div className='p-3 w-10/12'>
          <Outlet/>
         </div>
    </div>
    </>
 
);

}

export default Admin_penal
