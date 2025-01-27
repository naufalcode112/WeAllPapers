import React, { useState } from 'react'

interface AddCartProps {
  image: string;
  title: string;
}

const AddToCart: React.FC<AddCartProps> = ({image, title}) => {
  const [cart, setCart] = useState([])
  const handleCart = () => {
   setCart([...cart, {image, title}]) 
  }
  return (
  <div>
    <button className="bg-indigo-500 rounded-sm" onClick={handleCart}>Add To Cart</button>
    <ul>
        {cart.map((wal, index) => (
         <li key={index}>
           <img src={wal.image} />
            <h2>{wal.title}</h2>
         </li>
        ))}
    </ul>
  </div>
  )
}
export default AddToCart
