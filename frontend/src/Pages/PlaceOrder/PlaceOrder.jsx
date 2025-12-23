import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder() {

  const {getTotalCartAmnt,token,food_list,cartItems,url} = useContext(StoreContext)
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country : "",
    phone : ""
  });

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
                                                                        
  }
const placeOrder = async (event) => {
  event.preventDefault();

  const orderItems = food_list
    .filter(item => cartItems[item._id] > 0)
    .map(item => ({
      ...item,
      quantity: cartItems[item._id]
    }));

  if (orderItems.length === 0) {
    alert("Cart is empty");
    return;
  }

  const orderData = {
    address: data,
    items: orderItems,
    amount: getTotalCartAmnt() + 2,
  };

  try {
    const response = await axios.post(
      url + "/api/order/place",
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log("Order Response:", response.data);

    if (response.data.success) {
      window.location.replace(response.data.session_url);
    } else {
      alert(response.data.message || "Order failed");
    }

  } catch (error) {
    console.error("Order Error:", error.response?.data || error.message);
    alert("Server error while placing order");
  }
};


  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmnt() ===0){
      navigate('/cart');
    }
  },[token])

   
  return (
    <>
    <form onSubmit={placeOrder}>
    <div className="container orderArea">
      <div className="row">
        <div className="col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12">

          <h2>Delivery Information</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" className="form-control" id="inputFname4" placeholder='First name' required/>
            </div>
            <div className="col-md-6">
              <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" className="form-control" id="inputLname4" placeholder='Last name' required/>
            </div>
            <div className="col-12">
              <input name='email' onChange={onChangeHandler} value={data.email} type="email" className="form-control" id="inputEmail" placeholder="Email address" required/>
            </div>
            <div className="col-12">
              <input name='street' onChange={onChangeHandler} value={data.street} type="text" className="form-control" id="inputAddress" placeholder="Address" required/>
            </div>
            
            <div className="col-md-6">
              <input name='city' onChange={onChangeHandler} value={data.city} type="text" className="form-control" id="inputCity" placeholder='City' required/>
            </div>
            <div className="col-md-6">
              <select name='state' onChange={onChangeHandler} value={data.state} id="inputState" className="form-select" placeholder="State" required>
                <option selected>Choose state...</option>
                <option value="Maharastra" >Maharastra</option>
                <option value="UP">UP</option>
              </select>
            </div>
            <div className="col-md-6">
              <input name='zipcode' onChange={onChangeHandler} value={data.zipcode}  type="text" className="form-control" id="inputZip" placeholder='Zip code' required/>
            </div>
            <div className="col-md-6">
              <input name='country' onChange={onChangeHandler} value={data.country} type="text" className="form-control" id="inputCountry" placeholder='Country' required/>
            </div>
            <div className="col-md-12">
              <input name='phone' onChange={onChangeHandler} value={data.phone} type="tel" className="form-control" id="inputPhone" placeholder='Phone' required/>
            </div>
        
         </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className='cart-total order-total'>
            <h2>Cart Total</h2>
            <span>${getTotalCartAmnt()}</span>
            <p>Subtotal</p>
            <hr/>
            <span>${getTotalCartAmnt()===0 ? 0 : 2}</span>
            <p>Delivery Fee</p>
            <hr/>
            <span>${getTotalCartAmnt()===0?0:getTotalCartAmnt()+2}</span>
            <p><b>Total</b></p>
            <button onClick={()=>navigate('/order')} type="submit"> PROCEED TO PAYMENT </button>
          </div>

        </div>
      </div>
    </div>
    </form>
 </>
  )
}
