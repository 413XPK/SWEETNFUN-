import {makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

ul:{
    listStyle: 'none'
},

/* essential nav bar elements */
nav_logo: {
    height: '80px',
    margin:' 0 85% 0 0'
},

nav: {
    display: 'flex',
    flexDirection: 'column',
    gridRow: '1'
   
},

basic_menu:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'aliceblue'
},

menu_container:{
    display: 'flex',
    alignItems: 'center'
},

logo_container:{
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto'
},

menu_icon:{
    margin: '0 0 0 15px'
},

/* navigation bar directory */
nav_directory:{

    flexDirection: 'row',
    alignItems: 'center'
    
},

navi:{
    margin: '0 10px 0 10px',
    height: '30px',

    contact_us:{
        width: '29px'
    },
    blog:{
        padding: '0 2.5px'
    }
},



/* popout navigation menu */
nav_menu_container:{
    backgroundColor:'bisque',
    width: '240px',
    height: '88vh'
},

titles:{
    display: 'flex',
    flexDirection: 'row'
},

title_categories:{
    width:'120px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aquamarine'
},

nav_categories:{
    display: 'flex',
    alignItems: 'center'
},



menu_categories:{ 
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'antiquewhite',
    width: '240px',
    
    a:{
        display: 'flex',
        padding: '5px'
    },
    hr:{
        /* width: 50vw; */
        marginLeft: '-40px'
    }
},


title_directory:{
    width: '120px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},

menu_directory:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    a:{
        display: 'flex',
        padding: '5px',  
        alignItems: 'center'
    } 
},



}));