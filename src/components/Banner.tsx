import React from 'react'
import banner5 from '../images/banner5.png'
import banner3 from '../images/banner3.png'
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import banner6 from '../images/banner6.png'
import banner4 from '../images/banner4.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className='p-3'>
       <Carousel autoPlay={true}
                showThumbs={false}
                showArrows={false}>
                <div>
                    <img src={banner2} className='p-4' />
                </div>
                <div>
                    <img src={banner5} className='p-4'/>
                </div>
                <div>
                    <img src={banner1} className='p-4' />
                </div>
                <div>
                    <img src={banner3} className='p-4'/>
                </div>
                <div>
                    <img src={banner4} className='p-4' />
                </div>
                <div>
                    <img src={banner6} className='p-4'/>
                </div>
            </Carousel>
            <div>
              <div className='flex flex-col items-center mt-5 '>
                <div className='text-[60px] text-pink-600'>OMG! DEALS</div>
                <p className='flex text-[30px] font-bold text-gray-600 items-center '>SHOP GLOBAL BRANDS BY CATEGORY</p>
              </div>
            </div>
    </div>
    
  )
}

export default Banner
