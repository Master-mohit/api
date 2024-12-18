import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [products, setproducts] = useState([])

  useEffect(() => {
   const fetch = async() => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setproducts(response.data)
   }
   fetch();
  }, [])
  
  return (
    <div className=' w-screen h-fit p-10 text-black font-semibold'>
     {products.map((pro) => (
          <div className='flex flex-col justify-evenly gap-10 w-full h-full'>
          <div className='bg-zinc-300 w-[17vw] h-[27vh] object-contain overflow-hidden' >
            <img src={pro.image} alt=''/>
          </div>
          <div className='text-[20px] mb-4'>
            <h1>Title:- {pro.title}</h1>
            <h1>Price:- {pro.price}</h1>
            <h1>Description:- {pro.description}</h1>
          </div>
          </div>
     ))}
    </div>
  )
}

export default App
