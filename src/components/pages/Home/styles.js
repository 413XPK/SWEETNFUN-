import { makeStyles } from '@material-ui/core/styles';
const mobileBreak = '@media (max-width: 720px)';
const tabletBreak = '@media (min-width: 721px) and (max-width: 1200px)';
const desktopBreak = '@media (min-width: 1201px) ';

export default makeStyles(() => ({
  // carousel start //
  first_blur: {
    backgroundColor: 'black',
    opacity: '0.35',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  first_words: {
    position: 'absolute',
    color: 'white',
    opacity: '1',
    fontSize: '15pt',
    width: '38vw',
    maxWidth: '150px',
    textAlign: 'start',
    marginLeft: '8vw',
    marginTop: '20vw',

    [mobileBreak]: {
      fontSize: '20pt',
      maxWidth: '200px',
    },
    [tabletBreak]: {
      fontSize: '34pt',
      maxWidth: '400px',
    },
    [desktopBreak]: {
      fontSize: '35pt',
      maxWidth: '400px',
    },
  },

  fix_top: {
    marginTop: '100px',
  },

  first_container: {
    display: 'flex',
  },

  first_logo: {
    position: 'absolute',
    display: 'inline-flex',
    maxWidth: '45vw',
    margin: '5vw 0 0 50vw',
  },

  left: {
    display: 'flex',
    flexDirection: 'column',
  },
  button_container: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '160px',
    margin: '32vw 0 0 8vw',
    textShadow: '0px 0px 2px red',

    [mobileBreak]: {
      marginTop: '35vw',
    },
    [tabletBreak]: {
      marginTop: '35vw',
    },
    [desktopBreak]: {
      marginTop: '30vw',
    },
  },
  button_inside: {
    display: 'flex',
    position: 'absolute',
  },
  //carousel end //

  //popular products start //

  body_header: {
    color: 'pink',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  pop: {
    color: 'red',
  },

  //popular products end //
}));
