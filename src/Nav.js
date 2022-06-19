import React from 'react';
import './Nav.css';
import logo from './imgs/SNF.png';
import products from './imgs/icons/products.png';
import about from './imgs/icons/about.png';
import contact from './imgs/icons/contact.png';
import blog from './imgs/icons/blog.png';
import search from './imgs/icons/search.png';
import profile from './imgs/icons/profile.png';
import menu from './imgs/icons/menu-rounded.png';
function Nav() {
  return (
    <div className="nav">
      <div className="menu_container">
        <img src={menu} className="menu_icon" alt=""/>
      </div>

      <div className="logo_container">
        <img src={logo} className="nav_logo"  alt="snf logo"/>
      </div>
      

      <div className="nav_directory">
        <div>
          <img src={products} className="navi products"/>
        </div>
        <div>
          <img src={about} className="navi about"/>
        </div>
        <div>
          <img src={contact} className="navi contact-us"/>
        </div>
        <div >
          <img src={blog} className="navi blog"/>
        </div>
        <div >
          <img src={search} className="navi search"/>
        </div>
        <div >
          <img src={profile} className="navi profile"/>
        </div>
      </div>
    </div>
  );
}
export default Nav;
