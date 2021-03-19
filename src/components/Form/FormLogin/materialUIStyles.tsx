import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  input: {
    width: '50%',
  },
  form: {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#000',
  },
  title: {
    color: '#fff',
  },
  button: {
    color: '#fff',
  },
}));
