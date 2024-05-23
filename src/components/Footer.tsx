import React from 'react'
import footer from "../images/footer.png"
import googleplay from "../images/googleplay.png"
import appleplay from "../images/appleplay.png"
import orignal from "../images/original.png"
import returnn from "../images/returnn.png"

const Footer = () => {
  return (
    <div className=''>
        <div className='flex bg-[#FAFBFC] mt-12 ml-20 font1'>
            <div className='basis-1/6 pl-[10px]'>  
            {/* it takes 1/4th part */}
                <div>
                    <div>
                        <h1 className=' text-sm font-semibold mb-[20px]'>ONLINE&nbsp;SHOPPING</h1>
                        <ul className=' text-sm mb-[40px] text-slate-500 pt-6'>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>Myntra Insider</li>
                        </ul>
                    </div>
                </div>
                <div>
                <h1 className='text-sm mb-[20px] font-semibold col-span-2'>USEFUL LINKS</h1>
       <ul className='text-sm mb-[20px] text-slate-500 pt-6'>
         <li className="">Blog</li>
         <li className="">Careers</li>
         <li className="">Site Map</li>
         <li className="">Corporate Information</li>
         <li className="">Whitehat</li>
         <li className="">Cleartrip</li>
         
         </ul>
                </div>
            </div >
            <div className='basis-1/6'>
                <div>
                <h1 className='text-sm mb-[20px] font-semibold col-span-2'>CUSTOMER POLICIES</h1>
       <ul className='text-sm mb-[42px] text-slate-500 pt-6'>
         <li className="">Contact Us</li>
         <li className="">FAQ</li>
         <li className="">T&C</li>
         <li className="">Terms Of Use</li>
         <li className="">Track Orders</li>
         <li className="">Shipping</li>
         <li className="">Cancellation</li>
         <li className="">Returns</li>
         <li className="">Privacy Policy</li>
         <li className="">Grievance Officer</li>

         </ul>
                </div>
            </div>
            <div className='basis-1/3'>
                <div>
                <h1 className='text-sm mb-[20px] font-semibold col-span-2'>EXPERIENCE MYNTRA APP ON MOBILE</h1>
                <div className='grid grid-cols-2 gap-4 pt-6 w-[70%]'>
                    <img className='h-14' src={googleplay}></img>
                    <img className='h-13' src={appleplay}></img>
                </div>
                </div>

                <div>
                <h1 className='text-sm font-semibold col-span-2 mt-[40px]'>KEEP IN TOUCH</h1>
                <div className='grid grid-cols-4 gap-4 pt-6 w-40 h-40  text-slate-500'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                </div>
                </div>
            </div>
            <div className='basis-1/3'>
                <div >
                <div className='grid grid-cols-6 '>
                  <div className="col-span-1"><img src={orignal} alt="" className='w-14' /></div>
                  <div className="col-span-5">
                    
                  <span className='font-semibold'>100% ORIGINAL</span>  guarantee <br />
                  for all products at myntra.com
                    </div>
            </div>
            <br />
            <div className='grid grid-cols-6 '>
                  <div className="col-span-1"><img src={returnn} alt="" className='w-12' /></div>
                  <div className="col-span-5">
                    
                 <span className='font-semibold'>Return within 30days</span> of<br />
                  receiving your order
                    </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
