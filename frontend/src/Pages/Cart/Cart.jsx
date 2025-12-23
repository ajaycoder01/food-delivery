import React, { useContext } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router';
import { StoreContext } from '../../Context/StoreContext';
export default function Cart() {

  const {cartItems,food_list,removeFromCart,getTotalCartAmnt,url} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>

    <div className="cart container">
      <div className="cart-items">
        <div className="cart-items-title ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
          {
            food_list.map((item,index)=>{
              if(cartItems[item._id]>0){

                return (
                    <div>
                        <div className='cart-items-title cart-items-item'>
                          <img src={url+"/images/"+item.image} alt="" />
                          <p>{item.name}</p>
                          <p>${item.price}</p>
                          <p>{cartItems[item._id]}</p>
                          <p>${item.price*cartItems[item._id]}</p>
                          <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                        </div>
                        <hr/>
                      </div>

                      )
              }
            })
          }
        
      </div>
    </div>
    
    <div className='container mb-4'>
      <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 promocode1">
          <div className='promo'>
              <p>If  you have a promo code. Enter it here </p>
              <form>
                <input type="text" name="promo" placeholder="Enter promo code"/>
                <button type="submit">Submit</button>
              </form>             
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className='cart-total'>
            <h2>Cart Total</h2>
            <span>${getTotalCartAmnt()}</span>
            <p>Subtotal</p>
            <hr/>
            <span>${getTotalCartAmnt()===0 ? 0 : 2}</span>
            <p>Delivery Fee</p>
            <hr/>
            <span>${getTotalCartAmnt()===0?0:getTotalCartAmnt()+2}</span>
            <p><b>Total</b></p>
            <button onClick={()=>navigate('/order')}> PROCEED TO CHECKOUT </button>
          </div>
        </div>


        
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 promocode2">
          <div className='promo'>
              <p>If  you have a promo code. Enter it here </p>
              <form>
                <input type="text" name="promo" placeholder="Enter promo code"/>
                <button type="submit">Submit</button>
              </form>             
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
