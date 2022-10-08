import React from 'react';
import'./review.css'
const Review = ({product}) => {
    console.log(product)
    const {name,price,quantity,img}=product;
    return (
        <div className='review-item'>
          <div className="">
          <img src={img} alt="" />
          </div>
          <div className="review-detailes">
              <div className="detalis">
                  <p><small> Name:{name}</small></p>
                  <p><small> Price:{price}</small></p>
                  <p><small> Quantity:{quantity}</small></p>

              </div>
              <div className="delete">
                  <button>removed</button>
              </div>
          </div>
        </div>
    );
};

export default Review;