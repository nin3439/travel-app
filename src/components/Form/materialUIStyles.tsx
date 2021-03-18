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
    backgroundColor: '#fff',
  },
  close: {
    width: '100%',
    height: '43px',
    backgroundColor: '#edeeef',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: '4px',
    marginBottom: '-5px',
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
  },
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
}));
