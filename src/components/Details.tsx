import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { doc, setDoc } from 'firebase/firestore'
import { auth, database } from '../firebase/setup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const location = useLocation()
  console.log(location)

  const addProducts=()=>{
    try {
      const userDoc=doc(database,"users",`${auth.currentUser?.uid}`)
      const productDoc = doc(userDoc,"product",`${location.state.item.title}`)
      setDoc(productDoc,{
        item:location.state.item
      })
      toast.success("Product added to wishlist")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <ToastContainer autoClose={3000}/>
    <Navbar/>

    <div className='grid grid-cols-2 p-4 fixed'>
        <div className='grid grid-rows-2 '>
          <img src={location.state.item.image} className='p-1' />
          
        </div>
        <div className='p-5'>
          <h1 className='text-2xl font-bold'>{location.state.item.title}</h1>
          <h1 className='text-gray-500 text-xl mt-3'>{location.state.item.description}</h1>
          <hr className='mt-4' />
          <div className='flex items-center mt-4'>
            <h1 className='text-2xl font-bold'>Rs. {location.state.item.price}</h1>
            <h1 className='text-xl text-gray-500 ml-2'>MRP</h1>
            <h1 className='line-through text-xl text-gray-500 ml-1'>{location.state.item.price + 500}</h1>
            <h1 className='text-orange-500 ml-2 font-bold text-lg'>(Rs. 500 OFF)</h1>
          </div>
          <h1 className='text-green-800 font-semibold mt-3'>inclusive of all taxes</h1>
          <button onClick={addProducts} className="mt-4 h-14 bg-rose-500  text-white w-80 font-bold py-2 px-4  text-lg rounded-sm">
            WISHLIST
          </button>
        </div>
      </div>

    </>
  )
}

export default Details
