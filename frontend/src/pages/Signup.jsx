import React from 'react'
import { useState,useRef,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Profile from "../assets/profile.gif"
import imagetobase64 from '../helper/imagetobase64';
import { toast } from 'react-toastify';
import "../all_custom.css"
import login from './login';
import { useNavigate } from 'react-router-dom';
import fetch_api from '../fetch/fetch';
const Signup = () => {

    const [show_password, setshow_password] = useState(false);
    const [conf_passsword, setconf_passsword] = useState('')
    const [show_conf_pass, setshow_conf_pass] = useState(false)
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [profile, setprofile] = useState(Profile)
    const [data, setdata] = useState([])
    const nevigate=useNavigate();

    const handle_sh0w_password=()=>{
      setshow_password(!show_password);
    }
    const show_handle_conf_pass=()=>{
        setshow_conf_pass(!show_conf_pass)
    }
    const handle_password=(e)=>{
       
      setpassword(e.target.value)
  
    }
    const handle_c_password=(e)=>{
        
        setconf_passsword(e.target.value)
    
      }
    const handle_email=(e)=>{
       
      setemail(e.target.value);
    }
    const handle_name=(e)=>{
        
        setname(e.target.value);
      }
     const handle_upload_pic= async(e)=>{
      const file=e.target.files[0]
      const imagepic=await imagetobase64(file);
      setprofile(imagepic);
     }  
    const handlesubmit =async(e)=>{
      e.preventDefault();
        if(conf_passsword===password){
          setdata({
            name:name,
            email:email,
            password:password,
            user_profile:profile
          })


         const data_transfer=await fetch(fetch_api.signup.url,{
          method:fetch_api.signup.method,
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(data)
         })
         const message=await data_transfer.json();
       if(message.Success){
        toast.success(message.message);
        nevigate('/login');
       }
       if(!message.Success){
        toast.error(message.message);
        nevigate('/sign-up')
       }
          
        }
        else{
            alert("password does not matched...")
        }
         
        
  
    }
  return (
     <div>
         <section className=" py-10">
  <div className="flex flex-col  items-center justify-center px-6 py-10 md:h lg:py-0">
      <div className='bg-gray-800 p-6 px-7 max-[800px]:px-2  max-[850px]:w-5/6 rounded-xl space-y-3 max-[1200px]:w-3/6 max-[600px]:w-full shadow-xl shadow-indigo-600 hover:shadow-indigo-500 w-2/6'>
      <h1 className="text-xl  font-bold text-gray-900 md:text-2xl dark:text-white">
                  Fill the details below ... 
              </h1>
              <div className="space-y-4 ">
                   <div className=' flex  justify-center '>
                      <div className='relative w-14 group'>
                      <div className=''>
                      <img src={profile} className=' rounded-lg' alt="" />
                    </div>
                    <label htmlFor="pic">
                    <input type="file" name='pic' id='pic' onChange={handle_upload_pic} className=' absolute top-8 hidden' />
                    <div  className='text-sm w-14  hover:bg-gray-500 rounded-t-none hidden  group-hover:block  hover:cursor-pointer opacity-85 bg-gray-400 rounded-lg absolute bottom-0 text-center text-white'>upload</div>
                    </label>
                   
                      </div>
                   </div>
              <div className=''>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Name</label>
                      <input type="text" onChange={handle_name} id='text' name="name" className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:ring-primary-600 block w-full p-2.5 placeholder:bg-gray-700" placeholder="Vincenzo Casano" required/>
                  </div>
                
                
                
                  <div className=''>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={handle_email} id='email' name="email" className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required/>
                  </div>
                  <div className=''>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                     <div className='flex items-center gap-1 pr-1 bg-gray-700 focus:ring-2 rounded-lg'>
                     <input type= {show_password?"text":"password"} onChange={handle_password} name="password"  placeholder="Enter Your password..." className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg block w-full p-2.5 " required/>
                    <div className='hover:cursor-pointer' onClick={handle_sh0w_password}>
                    {
                        show_password?<FaEye className='invert' />:<FaEyeSlash className="invert" />
                     }
                    </div>
                     </div>
                  </div>


                  <div className=''>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                     <div className='flex items-center gap-1 pr-1 bg-gray-700 focus:ring-2 rounded-lg'>
                     <input type= {show_conf_pass?"text":"password"} onChange={handle_c_password} name="password" id="password" placeholder="Confirm Your password..." className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg block w-full p-2.5 " required/>
                    <div className='hover:cursor-pointer' onClick={show_handle_conf_pass}>
                    {
                        show_conf_pass?<FaEye className='invert' />:<FaEyeSlash className="invert" />
                     }
                    </div>
                     </div>
                  </div>


                  <div className="flex items-center justify-between">
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
                  
                  <button  className="w-full text-white  focus:ring-2  font-medium rounded-lg text-lg  text-center py-2 bg-blue-800 " onClick={handlesubmit}>Sign up</button>
                  <p className="text-sm font-light text-gray-500 ">
                      Already have an account ? <Link to="/login" className="text-primary-600 font-semibold hover:underline ">Login </Link>
                  </p>
              </div>
      </div>
  </div>
</section>
     </div>
  )
}

export default Signup
