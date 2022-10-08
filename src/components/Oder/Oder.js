import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import'./oder.css'

const Oder = () => {
    const{products,initial}=useLoaderData();
    const[cart,setcart]=useState(initial)
    const deleteImem=(id)=>{
       //console.log(id)
       const remaining=cart.filter(product=>product.id!==id)
       setcart(remaining)
       removeFromDb(id)
    }
    

    
   // con
   
   
   console.log(products)
    return (
        <div className='shop-container'>
           <div>
               {cart.map(product=><Review key={product.id} product={product} deleteImem={deleteImem}></Review>)}

           </div>
           <div className='cart-container'>
               <Cart cart={cart}></Cart>

           </div>
            
        </div>
    );
};

export default Oder;