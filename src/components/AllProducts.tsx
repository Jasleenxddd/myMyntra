// AllProducts.tsx
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link, useLocation } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';
import OfferTime from './OfferTime';

interface ProductProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category:string
  // Add other properties you expect here
}

const AllProducts = ({ productData }: { productData: ProductProps[] }) => { 
    const location = useLocation()

    return (
        <>
            {location.state?.category && <Navbar/>}
<OfferTime/>
<div className='flex items-center text-sm ml-5 mt-2'>
<Link to="/"><h1 className=' text-gray-600'>Home / </h1>

</Link>
<h1 className='ml-1 font-semibold'>{location.state?.category}</h1>
</div>
<h1 className='text-lg font-bold ml-5 mt-3'>{location.state?.category ?? "No Products"}</h1>
        <div className='grid grid-cols-6 p-3 ml-11 '>

            {productData.map((item: ProductProps, index) => ( // Map over fetched data
                <div key={index}> {/* Add a key for each item */}
                    {/* <img src={item.image} className="card-img-top p-2" alt="..." /> */}
                    <Carousel className="card-img-top p-2" autoPlay={true} showThumbs={false} showArrows={false}>
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    <img src={item.image} />
                </div>
            </Carousel>
                    <div className="card-body ">
                        <h5 className="card-title ml-4 font-bold mt-6">{item.title}  </h5>
                        {/* <p className="card-text ml-4 text-sm text-gray-500">{item.description}</p> */}
                        <h1 className='ml-4 text-sm text-gray-500'>{item.category}</h1>

                            <h1 className='ml-4 font-bold text-sm'>Rs. {item.price}</h1>
                            <h1 className='text-xs text-gray-400 line-through ml-4'>Rs. {item.price + 500}</h1>
                            <h1 className='text-xs text-orange-400 ml-4'>(Rs.500 OFF)</h1>
                    </div>
                    
                </div>
                
            ))}

            
        </div>
        </>
        
    );
};

export default AllProducts;