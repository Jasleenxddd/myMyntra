import React from 'react'
import banner5 from '../images/banner5.png'
import banner3 from '../images/banner3.png'

const Banner = () => {
  return (
    <div>
      <img src={banner3} className='p-4'/>
      <img src={banner5} className='p-7 '/>
    </div>
  )
}

export default Banner
