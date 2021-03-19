import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  input: {
    width: '50%',
  },
  inputFile: {
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
    alignItems: 'center',
    color: '#fff',
  },
  button: {
    color: '#fff',
  },
}));
