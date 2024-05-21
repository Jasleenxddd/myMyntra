import React,{useEffect,useState,} from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link, useLocation } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';

interface ProductProps {
  title: string;
  description: string;
  image: string;
  author: string;
  price: number;
  date: string; // Assuming date is a string, you can change the type as needed
  source: string;
}

// // const Products = () => {
// //   let api="https://fakestoreapi.com/products"
// //   const fetchApiData=async (url)=>{
// //     try {
// //       const res=fetch(url)
// //     } catch (error) {
// //       console.log(error)
// //     }
// //   }
// //   useEffect(()=>{
// //     fetchApiData(api);
// //   },[]);


// //     // const getProducts = async() =>{
// //     //     try{
// //     //         await fetch('https://fakestoreapi.com/products')

// //     //         .then(res => res.json())
// //     //         .then(json =>setProduct(json))
// //     //     }catch(err){
// //     //         console.error(err)
// //     //     }
// //     // }

// //     // useEffect(()=>{
// //     //   getProducts()
// //     // },[])

// //     // let {id,title,price,image,description}=props;

// //   return (
    
// //     // <div>
// //     //   {products.map((product) => (
// //     //     <div key={product.id}> {/* Ensure each product has a unique ID */}
// //     //       <h2>{product.name}</h2>
// //     //       <p>{product.description}</p>
// //     //     </div>
// //     //   ))}
// //     // </div>
// //     // <div className="my-3">
// //     //             <div className="card">
// //     //                 <div style={{
// //     //                     display: 'flex',
// //     //                     justifyContent: 'flex-end',
// //     //                     position: 'absolute',
// //     //                     right: '0'
// //     //                 }
// //     //                 }> 
// //     //                 </div>
// //     //                 <img src={!image ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
// //     //                 <div className="card-body">
// //     //                     <h5 className="card-title">{title}  </h5>
// //     //                     <p className="card-text">{description}</p>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     <>
// //     </>
    
// //   )
// // }
const Products: React.FC<ProductProps> = (props) => {
  const { title, description, image, author, date, source } = props;


  const [product,setProduct] = useState([])
  const location = useLocation()


  let api = "https://fakestoreapi.com/products";

  const fetchApiData = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call the fetchApiData function with the API URL
  fetchApiData(api);

  return (
    <div className='grid grid-cols-4 p-3'>
//       {/* {product.filter((data:any)=>data.category.name.includes(location.state.category)).map((data:any)=>{
//         return <>
//         {
//             console.log("Data",data.images)}
//         <img src={data.images} alt='iuo' className='p-2'/>
//         </>
//       })} */}
      <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                    </div>
    </div>


  );
};



export default Products
