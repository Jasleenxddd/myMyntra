import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Details from './components/Details';
import Wishlist from './components/Wishlist';
import ProductData from '../sampleOutput.json'; // Adjust the import statement for productData

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products' element={<Products {...ProductData} />} />
                <Route path='/details' element={<Details />} />
                <Route path='/wishlist' element={<Wishlist />} />
            </Routes>
        </>
    );
}

export default App;
