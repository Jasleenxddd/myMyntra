import React,{useState} from 'react'
import Navbar from './Navbar'
import Banner  from './Banner'
import Home from './Home'
import OfferTime from './OfferTime'
import AllProducts from './AllProducts'
import Footer from './Footer'
import productData from '../sampleOutput.json'; // Adjust the import statement for productData

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

const Main = () => {
  const [product,setProduct] = useState([])
  const [search,setSearch] = useState("")
  const [menu,setMenu] = useState("")

  return (
    <div>
          <Navbar setSearch={setSearch}/>

      <OfferTime/>
      <Banner/>
      <Home/>
      <div>
              <div className='flex flex-col items-center mt-5 '>
                <p className='flex text-[30px] font-bold text-gray-600 p-4'>MEDAL WORTHY BRANDS TO BUY</p>
              </div>
            </div>
      <AllProducts productData={parsedProductData} />
      <Footer/>
    </div>
  )
}

export default Main
