import React, { useContext } from 'react'
import { useState,useRef,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import fetch_api from '../fetch/fetch';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "../all_custom.css"
import Context from '../context/context';
const login = () => {
  const [show_password, setshow_password] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const [data, setdata] = useState([])
  const nevigate=useNavigate();
  const user_data=useContext(Context);
  const handle_sh0w_password=()=>{
    setshow_password(!show_password);
  }
  const handle_password=(e)=>{
    setpassword(e.target.value)

  }
  const handle_email=(e)=>{
    setemail(e.target.value);
  }
 
  const handlesubmit =async(e)=>{
        setdata({
          email:email,
          password:password
        })
        e.preventDefault();
        const check=await fetch(fetch_api.login.url,{
               method:fetch_api.login.method,
               credentials:'include',
               headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify(data)
        })
       const check_data=await check.json();
       if(check_data.Success){
           toast.success(check_data.message);
           nevigate('/');
         await  user_data.fetch_user_detail;
       }else{
     toast.error(check_data.message);
     nevigate('/login');
       }

  }
  return (
   <>
    <section className="w-full">
  <div className="flex  flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <div className="w-full shadow-lg hover:shadow-purple-500  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 flex flex-col gap-3 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div className="space-y-6 md:space-y-8" >
                  <div className='space-y-4'>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={handle_email} id='email' name="email" className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required/>
                  </div>
                  <div className='space-y-4'>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                     <div className='flex items-center gap-1 pr-1 bg-gray-700 focus:ring-2 rounded-lg'>
                     <input type= {show_password?"text":"password"} onChange={handle_password} name="password" id="password" placeholder="Enter Your pass..." className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg block w-full p-2.5 " required/>
                    <div className='hover:cursor-pointer' onClick={handle_sh0w_password}>
                    {
                        show_password?<FaEye className='invert' />:<FaEyeSlash className="invert" />
                     }
                    </div>
                     </div>
                  </div>
                  <div className="flex space-y-4 items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember"  type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-3 focus:ring-primary-300" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500">Remember me</label>
                          </div>
                      </div>
                      <Link to='/forgot-password' className="text-sm text-white font-medium hover:text-blue-400 hover:underline ">Forgot password?</Link>
                  </div>
                  <button  className="w-full text-white  focus:ring-2  font-medium rounded-lg text-lg  text-center py-2 bg-blue-800 " onClick={handlesubmit}>Sign in</button>
                  <p className=" font-light text-gray-300 ">
                      Dont have an account yet? <Link to="/sign-up" className="text-primary-600 font-semibold hover:underline ">Sign up</Link>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
   </>
  )
}

export default login
