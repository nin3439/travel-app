import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  overlay: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0,0.4)',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'scale(0)',
    zIndex: 1000,
  },
  active: {
    transform: 'scale(1)',
  },
  modal: {
    width: '552px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: '#123274',
    [theme.breakpoints.down('md')]: {
      width: '450px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '230px',
    },
  },
  close: {
    width: '100%',
    height: '43px',
    backgroundColor: '#edeeef',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: '4px',
    marginBottom: '30px',
  },
  iconClose: {
    padding: '5px',
    margin: '3px 5px',
    '&:hover': {
      background: '#dddddd80',
      borderRadius: '50%',
    },
  },
  input: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  changeEvent: {
    width: '50%',
    marginTop: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  buttonActive: {
    color: '#fff',
    maxWidth: '180px',
    height: '20px',
  },
  buttonDisabled: {
    maxWidth: '180px',
    height: '20px',
  },
}));
