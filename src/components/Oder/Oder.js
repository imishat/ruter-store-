import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import'./oder.css'

const Oder = () => {
    const{products,initial}=useLoaderData()
    const[cart,setcart]=useState(initial)
   // con
   
   
   console.log(products)
    return (
        <div className='shpo-container'>
           <div>
               {cart.map(product=><Review key={product.id} product={product}></Review>)}

           </div>
           <div className='cart-container'>
               <Cart cart={cart}></Cart>

           </div>
            
        </div>
    );
};

export default Oder;