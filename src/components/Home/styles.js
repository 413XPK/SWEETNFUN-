import { makeStyles } from '@material-ui/core/styles';
const mobileBreak = '@media (max-width: 720px)';
const tabletBreak = '@media (min-width: 721px) and (max-width: 1200px)';
const desktopBreak = '@media (min-width: 1201px) ';

export default makeStyles(() => ({
  first_blur: {
    backgroundColor: 'black',
    opacity: '0.35',
    // marginLeft: '50px',
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
    // margin: '20vh 0 0 8vw',
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

  fixTop: {
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
  button_container: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15vw',
    margin: '32vw 0 0 8vw',
  },
  button_inside: {
    display: 'flex',
    position: 'absolute',
  },
}));
