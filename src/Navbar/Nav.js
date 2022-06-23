import React from 'react';
// import ReactDOM from 'react-dom/client';
import useStyles from './styles'

import logo from '../imgs/SNF.png';
import products from '../imgs/icons/products.png';
import about from '../imgs/icons/about.png';
import contact from '../imgs/icons/contact.png';
import blog from '../imgs/icons/blog.png';
import search from '../imgs/icons/search.png';
import profile from '../imgs/icons/profile.png';
import menu from '../imgs/icons/menu-rounded.png';


const Navbar = () => {

  const styles = useStyles();

  const [showCategories, setShowCategories] = React.useState(false)
  const [showMenu, setShowMenu] = React.useState(false)
  const onClick = () => setShowCategories(true)  
  const onClick2 = () => setShowMenu(true)
  return (

    <div className={styles.nav}>
      <div className={styles.basic_menu}>
        <a className={styles.menu_container}>
          <img src={menu} className={styles.menu_icon} alt=""/>
        </a>

        <a className={styles.logo_container}>
          <img src={logo} className={styles.nav_logo}  alt="snf logo"/>
        </a>
      </div>

      <div className={styles.nav_menu_container}> 

        <div className={styles.titles}>
          <a onClick={onClick} className={styles.title_categories}>Categories</a>
          <a onClick={onClick2} className={styles.title_directory}>Menu</a>
        </div>
        {
          showCategories?
        
          <div className={styles.nav_categories}>

            <div className={styles.menu_categories}>
              <ul>
                <li><a>Roi Pop</a></li>
                <hr/>
                <li><a>Krazi Twist LG</a></li>
                <hr/>
                <li><a>Sweet Whirls Premium</a></li>
                <hr/>
                <li><a>Gourmet Jelly LG</a></li>
                <hr/>
                <li><a>Gourmet Jelly RG</a></li>
                <hr/>
                <li><a>Jawbreakers(Jar)</a></li>
                <hr/>
                <li><a>Jawbreakers(Bulk)</a></li>
                <hr/>
                <li><a>Mini Candy (Jar)</a></li>
                <hr/>
                <li><a>Mini Candy (Long Sticks)</a></li>
                <hr/>
                <li><a>Fancy sticks</a></li>
                <hr/>
                <li><a>Love Candies</a></li>
                <hr/>
                <li><a>Surprise bags</a></li>
                <hr/>
                <li><a>POP Displays</a></li>
              </ul>
              
            </div>
          </div>  
          :null
        }
        {
        showMenu?
        <div className={styles.nav_directory}>

          <div className={styles.menu_directory}>
            <a>
              <img src={products} style={{"height" : "30px"}} className={[styles.navi,styles.products]}/>
              <p>All Products</p>
            </a>
            <a>
              <img src={about} className={[styles.navi,styles.about]}/>
              <p>About us</p>
            </a>
            <a>
              <img src={contact} className={[styles.navi,styles.contact_us]}/>
              <p>Contact us</p>
            </a>
            <a>
              <img src={blog} className={[styles.navi,styles.blog]}/>
              <p>Blog</p>
            </a>
            <a>
              <img src={search} className={[styles.navi,styles.search]}/>
              <p>Search</p>
            </a>
            <a>
              <img src={profile} className={[styles.navi,styles.profile]}/>
              <p>Profile</p>
            </a>
          </div>
        </div>

        :null
        }
      </div>
    </div>
  );
}


export default Navbar;
