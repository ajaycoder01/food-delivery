import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/Assets'
export default function ExploreMenu({category,setCategory}) {
  return (
   <>
    <div className='explore-menu container' id='explore-menu'>
      <h1>Explore your menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum dolores ipsam magnam quam exercitationem iste officiis. Ea quidem velit voluptate dolorum doloremque, quaerat, nostrum eveniet aliquid id, dolore eos!</p>
      <div className="explore-menu-list">
          {
            menu_list.map((item,index) => {
              return (
                <div onClick={()=>setCategory(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                  <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                  <p>{item.menu_name}</p>
                </div>
              )
            }
          )
        }
      </div>
      <hr/>
    </div>
   </>
  )
}
