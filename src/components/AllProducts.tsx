// AllProducts.tsx
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link, useLocation } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  image: string;
  // Add other properties you expect here
}

const AllProducts = ({ productData }: { productData: ProductProps[] }) => { 
    return (
        <div className='grid grid-cols-4 p-3'>
            {productData.map((item: ProductProps, index) => ( // Map over fetched data
                <div key={index}> {/* Add a key for each item */}
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.id}  </h5>
                        <h5 className="card-title">{item.title}  </h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProducts;