import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  /* essential nav bar elements */
  nav_logo: {
    height: '80px',
    margin: ' 0 85% 0 0',
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',
    gridRow: '1',
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: '10',
    width: '100%',
    marginBottom: '100px',
  },

  basic_menu: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
  },

  menu_container: {
    display: 'flex',
    alignItems: 'center',
  },

  logo_container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto',
  },

  menu_icon: {
    margin: '0 0 0 15px',
  },

  /* navigation bar directory */
  nav_directory: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  directory_modal: {
    display: 'inline-flex',
    margin: '10px',
    marginLeft: '7vw',
    alignItems: 'center',
  },

  navi: {
    height: '30px !important',
    margin: '0 10px 0 10px',
  },
  products: {
    height: '30px',
    marginRight: '10px !important',
  },
  about: {
    height: '30px',
    marginRight: '10px !important',
  },
  contact_us: {
    height: '30px',
    width: '29px',
    marginRight: '10px !important',
  },
  blog: {
    height: '30px',
    padding: '0 2.5px',
    marginRight: '10px !important',
  },
  search: {
    height: '30px',
    marginRight: '10px !important',
  },
  profile: {
    height: '30px',
    marginRight: '10px !important',
  },

  // popout navigation menu
  nav_menu_container: {
    backgroundColor: 'bisque',
    width: '240px',
    height: '88vh',
  },

  titles: {
    display: 'flex',
    flexDirection: 'row',
  },

  title_categories: {
    width: '120px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aquamarine',
  },

  nav_categories: {
    display: 'flex',
    alignItems: 'center',
  },

  menu_categories: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'antiquewhite',
    width: '200px',
    listStyle: 'none',
  },

  line: {
    width: '240px',
    marginLeft: '-40px',
  },

  product_container: {
    padding: '10px',
  },
  title_directory: {
    width: '120px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menu_directory: {
    display: 'flex',
    flexDirection: 'column',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
}));
