import { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import "./all_custom.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetch_api from './fetch/fetch'
import Context from './context/context'
import { setUser } from './redux/userslice'
import { useDispatch } from 'react-redux'
function App() {
  const [count, setCount] = useState(0);
  const dispatch =useDispatch();
  const fetch_user_detail=async()=>{
    const data=await fetch(fetch_api.user_detail.url,{
      method:fetch_api.user_detail.method,
      credentials:'include'
    });
    const user=await data.json()
    if(user.Success){
     dispatch(setUser(user.user));
    }

  }
   useEffect(() => {
      fetch_user_detail();
   }, [])
   
  return (
    <>
    <Context.Provider value={
      fetch_user_detail
    //  to fetch the user detail
    }>
    <ToastContainer />
    <div className='custom-blue-bg font-serif w-full'>
    <Header/>
   <main className=' pt-20'>
   <Outlet/>
   </main>
    <Footer/>
    </div>
    </Context.Provider>
    </>
  )
}

export default App
