import React from 'react';

import useStyles from './styles';
import logo from '../../../imgs/SNF.png';
import products from '../../../imgs/icons/products.png';
import about from '../../../imgs/icons/about.png';
import contact from '../../../imgs/icons/contact.png';
import blog from '../../../imgs/icons/blog.png';
import search from '../../../imgs/icons/search.png';
import profile from '../../../imgs/icons/profile.png';
import menu from '../../../imgs/icons/menu-rounded.png';

const Navbar = () => {
  const styles = useStyles();

  const [showNavMenu, setShowNavMenu] = React.useState(false);
  const [showCategories, setShowCategories] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  const onClick0 = () => setShowNavMenu(true);
  const onClick = () => setShowCategories(true);
  const onClick2 = () => setShowMenu(true);

  return (
    <div className={styles.nav}>
      <div className={styles.basic_menu}>
        <a onClick={onClick0} className={styles.menu_container}>
          <img src={menu} className={styles.menu_icon} alt="" />
        </a>

        <a className={styles.logo_container}>
          <img src={logo} className={styles.nav_logo} alt="snf logo" />
        </a>
      </div>

      {showNavMenu ? (
        <div className={styles.nav_menu_container}>
          <div className={styles.titles}>
            <a onClick={onClick} className={styles.title_categories}>
              Categories
            </a>
            <a onClick={onClick2} className={styles.title_directory}>
              Menu
            </a>
          </div>
          {showCategories ? (
            <div className={styles.nav_categories}>
              <div>
                <ul className={styles.menu_categories}>
                  <li className={styles.product_container}>
                    <a className={styles.product}>Roi Pop</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Krazi Twist LG</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Sweet Whirls Premium</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Gourmet Jelly LG</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Gourmet Jelly RG</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Jawbreakers(Jar)</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Jawbreakers(Bulk)</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Mini Candy (Jar)</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Mini Candy (Long Sticks)</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Fancy sticks</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Love Candies</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>Surprise bags</a>
                  </li>
                  <hr className={styles.line} />
                  <li className={styles.product_container}>
                    <a className={styles.product}>POP Displays</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
          {showMenu ? (
            <div className={styles.nav_directory}>
              <div className={styles.menu_directory}>
                <a className={styles.directory_modal}>
                  <img
                    src={products}
                    alt={'Link to all products'}
                    className={(styles.navi, styles.products)}
                  />
                  <p>All Products</p>
                </a>
                <a className={styles.directory_modal}>
                  <img
                    src={about}
                    className={(styles.navi, styles.about)}
                    alt=""
                  />
                  <p>About us</p>
                </a>
                <a className={styles.directory_modal}>
                  <img
                    src={contact}
                    className={(styles.navi, styles.contact_us)}
                    alt=""
                  />
                  <p>Contact us</p>
                </a>
                <a className={styles.directory_modal}>
                  <img
                    src={blog}
                    className={(styles.navi, styles.blog)}
                    alt=""
                  />
                  <p>Blog</p>
                </a>
                <a className={styles.directory_modal}>
                  <img
                    src={search}
                    className={(styles.navi, styles.search)}
                    alt=""
                  />
                  <p>Search</p>
                </a>
                <a className={styles.directory_modal}>
                  <img
                    src={profile}
                    className={(styles.navi, styles.profile)}
                    alt=""
                  />
                  <p>Profile</p>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
