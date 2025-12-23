import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { MdAdd, MdOutlineRemove} from "react-icons/md";
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/Assets';

export default function FoodItem({id,name,price,description,image}) {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12'>
        <div className='food-item'>
          <div className="food-item-img-container">
            <img className='food-item-image' src={url+`/images/${image}`} alt="" />
            
      
              {!cartItems || !cartItems[id]
              
                ? <MdAdd onClick={()=>addToCart(id)} className='add'/>
                : <div className='food-item-counter'>
                  <MdOutlineRemove onClick={()=>removeFromCart(id)} className='rem'/>
                  <p>{cartItems[id]}</p>
                  <MdAdd onClick={()=>addToCart(id)}  className='plus'/>
                  
                </div>
              }
          </div>
          <div className="food-item-info">
            <div className='food-item-name-rating'>
              <p>{name}</p>
              <img src={assets.rating_starts}/>
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
          </div>
        </div>
      </div>
  )
}
