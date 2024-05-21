import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Products from './components/AllProducts';
import Details from './components/Details';
import Wishlist from './components/Wishlist';
import productData from './sampleOutput.json'; // Adjust the import statement for productData
import AllProducts from './components/AllProducts';

// Define the ProductProps interface
interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number; };
}

// Transform your data into ProductProps array
const parsedProductData: ProductProps[] = productData.map((item: any) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  image: item.image,
  price: item.price,
  category: item.category,
  rating: {
    rate: item.rating.rate,
    count: item.rating.count,
  },
}));

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products' element={<AllProducts productData={parsedProductData} />} /> 
                <Route path='/details' element={<Details />} />
                <Route path='/wishlist' element={<Wishlist />} />
            </Routes>
        </>
    );
}

export default App;