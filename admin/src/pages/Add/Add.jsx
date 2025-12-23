
import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Add({url}) {

  const [image,setImage] = useState(false);

  const [data,setData] = useState({
    name: '',
    description:'',
    price: '',
    category: 'Salad'
  });

  const onChangeHandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData((prevData)=>({...prevData,[name]:value}))
  }


  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    const formData = new FormData(); 
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price',Number(data.price));
    formData.append('category',data.category);
    formData.append('image',image);

    const response = await axios.post(`${url}/api/food/add`,formData);

    if(response.data.success){
      setData({
          name: '',
          description:'',
          price: '',
          category: 'Salad'
        }
      )
      setImage(false);
    toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
  }



  return (
    <div className="add">
        <form className="flex-col" onSubmit={onSubmitHandler} >
          <div className="add-image-upload flex-col">
            <p>Upload Image *</p>
            <label htmlFor="image" id="chooseImg">
              <img
                src={image?URL.createObjectURL(image): assets.upload_area}
                alt="upload image"
              />   
            </label>
            <input
              onChange={(e)=>setImage(e.target.files[0])}
              type="file"
              id="image" 
              required  
                hidden
            />
          </div>
          <div className="add-product-name flex-col">
            <p>Product Name *</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              required
              name="name"
              placeholder="Type here"
            />
          </div>
          <div className="add-product-desc flex-col">
            <p>Product Description *</p>
            <textarea
            onChange={onChangeHandler}
            value={data.description}
              required
              name="description"
              rows="6"
              placeholder="Write content here..."
            />
          </div>
          <div className="add-category-price ">
            <div className="add-category flex-col">
              <p>Product Category *</p>
              <select
                name="category"
                onChange={onChangeHandler}
              >
                <option value="">- Select a category -</option>
                <option value="Starter">Starter</option>
                <option value="Momos">Momos</option>
                <option value="Soup">Soup</option>
                <option value="Rice & Noodles">Rice & Noodles</option>
                <option value="Special Combo">Special Combo</option>
                <option value="Deserts">Deserts</option>
                <option value="Special Drinks">Special Drinks</option>
                <option value="Hot Drinks">Hot Drinks</option>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product Price *</p>
              <input
              onChange={onChangeHandler}
              value={data.price}
                type="number"
                name="price"
                placeholder="₹100"
              />
            </div>
          </div>
          <div className="add-availibilty">
            <p>Product Available *</p>
            <input
              type="checkbox"
            />
          </div>
          <div className="add-veg">
            <div className="veg-option">
              <input
                type="radio"
                id="veg"
                name="veg"
                value="true"
              />
              <label htmlFor="veg">Veg</label>
            </div>
            <div className="veg-option">
              <input
                type="radio"
                id="nonveg"
                name="veg"
                value="false"
              />
              <label htmlFor="nonveg">Non veg</label>
            </div>
          </div>
          <button type="submit" className="add-btn" style={{marginBottom:"10px"}}>Add
          </button>
        </form>
      </div>
  )
}
