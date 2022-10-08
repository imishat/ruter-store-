
import React from 'react';
import'./review.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart ,faTrash} from'@fortawesome/free-solid-svg-icons';
const Review = ({product,deleteImem}) => {
    console.log(product)
    const {name,price,quantity,img,shipping,id}=product;
    return (
        <div className='review-item'>
          <div className="">
          <img src={img} alt="" />
          </div>
          <div className="review-detailes">
              <div className="detalis">
                  <p><small>Name:{name}</small></p>
                  <p><small> Price:${price}</small></p>
                  <p><small> shipping:${shipping}</small></p>
                  <p><small> Quantity:{quantity}</small></p>

              </div>
              <div className="delete">
                  <button  onClick={()=>deleteImem(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon></button>
              </div>
          </div>
        </div>
    );
};

export default Review;