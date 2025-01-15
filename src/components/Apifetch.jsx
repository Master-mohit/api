import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Apifetch = () => { 
  const [product, setproduct] = useState([]) // Initializing state variable 'product' as an empty array to store API data

  useEffect(() => { // useEffect runs after the component renders
    const fetch = async() => { // Defining an async function to fetch data
     const response = await axios.get('https://fakestoreapi.com/products'); // Fetching data from the API using axios
     setproduct(response.data); // Storing the fetched data in the 'product' state
    }
    fetch() // Calling the fetch function
  }, []) // Empty dependency array means this effect runs only once when the component mounts
  
return ( 
   <div> 
      {product.map((pro) =>( // Iterating over the 'product' array and rendering each item's details
<div className='p-12 flex items-center gap-[13%] w-100 h-[40%] text-white'> 
      {/* Adding styles and creating a container for each product */}
<div className='bg-red-700 w-[10%] h-[10%]'> 
 <img src={pro.image} alt=''/> {/* Displaying the product image */}
</div>
<div className=' text-2xl line-clamp-3'> 
<h1>Title:- {pro.title}</h1> {/* Displaying the product title */}
<h1>Description:- {pro.description}</h1> {/* Displaying the product description */}
<h1>Price:- {pro.price}</h1> {/* Displaying the product price */}
</div>
</div>
      ))}
  </div>
)
}


export default Apifetch
