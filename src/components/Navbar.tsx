import React,{useState} from 'react'
import logo from "../images/logo.png"
import lens from "../images/lens.png"
import logout from "../images/logout.png"
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'
import Wishlist from './Wishlist'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useNavigate } from 'react-router-dom'
interface searchProp{
  setSearch?:any
  setMenu?:any
}



const Navbar = (props:searchProp) => {
  const [search, setSearch] = useState<string>("");

  const logOut = async() =>{
    try{
      await signOut(auth)
      toast.success("Logged Out successfully")
    }catch(err){
      console.error(err)
      let error:any = err
      toast.error(error)
    }
  }

  return (
    <>
    <ToastContainer/>
    <div className='flex text-sm font-bold text-gray-700 items-center p-4 shadow-lg' >
        <Link to="/">
        <img src={logo} alt='lkj' className='w-20 h-12 ml-5'/></Link>
      <h1 className='ml-4'>MEN</h1>
      <h1 className='ml-8'>WOMEN</h1>
      <h1 className='ml-8'>KIDS</h1>
      <h1 className='ml-8'>HOME & LIVING</h1>
      <h1 className='ml-8'>BEAUTY</h1>
      <h1 className='ml-8'>STUDIO</h1>

      <div className=' border border-gray-100 flex items-center bg-gray-100 w-96 h-10 ml-14'>
        <img src={lens} alt='hjk' className='h-3 w-3 ml-4 '/>
        <input onChange={(e)=> props.setSearch(e.target.value)} className="bg-gray-100 text-gray-900 font-normal  outline-none
        text-sm rounded-sm  block w-full p-2.5 ml-3 " placeholder="Search for products, brands and many more" required/>
      </div>

      
      {auth.currentUser?.phoneNumber ? <div className='ml-6 text-xs'>
      <img src={logout} onClick={logOut} className='w-4 h-4 ml-3'/>
      <h1 className='cursor-pointer'>Logout</h1>
      </div>
      : <Link to="/login">
     <div className='ml-6 text-xs'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        </div>
      <h1 className='cursor-pointer ml-0.5'>Profile</h1>
      </div>
      </Link>}
      
      <Link to="/wishlist">
      <div className='ml-6 text-xs'>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

      </div>
      <h1 className='cursor-pointer '>Wishlist</h1>
      </div>
      </Link>
      <div className='ml-6 text-xs'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

        </div>
      <h1 className='cursor-pointer ml-0.5'>Bag</h1>
      </div>
      


    </div>
    </>
    
  )
}

export default Navbar
